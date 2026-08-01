#!/bin/bash
#
# Generate a changelog for config.toml showing diffs between semver git tags.
#

set -o errexit
set -o nounset
set -o pipefail

readonly SCRIPT_NAME="$(basename "${0}")"
readonly OUTPUT_FILE="CHANGELOG_ZOLA_CONFIG.md"
readonly CONFIG_FILE_PATH="themes/zola-monoplain/config.toml"
readonly START_TAG="v1.1.0"

#
# Generate the markdown changelog file.
#
generate_changelog() {
  local tags
  local current_tag
  local next_tag=""
  local diff_output
  local start_processing=false
  local latest_tag=""

  tags=$(
    git tag --sort=-creatordate | grep -E '^v[0-9]+\.[0-9]+\.[0-9]+$'
  )

  # Initialize the Markdown file
  cat > "${OUTPUT_FILE}" <<'EOL'
# Configuration Change Log

This document lists all changes between Git tags for the `config.toml` file.

## Table of Contents

EOL

  # Find the latest tag (first in reverse-sorted list)
  # and check if we have any tags >= START_TAG
  local has_start_tag=false
  for current_tag in ${tags}; do
    if [[ "${current_tag}" == "${START_TAG}" ]]; then
      has_start_tag=true
    fi
    if [[ -z "${latest_tag}" ]]; then
      latest_tag="${current_tag}"
    fi
  done

  # If START_TAG not found, use it as the starting point
  if [[ "${has_start_tag}" == false ]]; then
    echo "Warning: START_TAG ${START_TAG} not found in tags" >&2
    return 1
  fi

  # First, add HEAD comparison to TOC
  if [[ -n "${latest_tag}" ]]; then
    local anchor
    anchor=$(printf 'changes-between-%s-and-head-main' "${latest_tag}" | tr -d '.' | tr '[:upper:]' '[:lower:]')
    printf -- '- Changes between [%s and HEAD (main)](#%s)\n' \
      "${latest_tag}" "${anchor}" >> "${OUTPUT_FILE}"
  fi

  # Then add tag-to-tag comparisons in reverse order (newest first)
  next_tag=""
  for current_tag in ${tags}; do
    # Stop when we reach START_TAG (oldest tag we want)
    if [[ "${current_tag}" == "${START_TAG}" ]]; then
      # Still process this tag for the comparison
      if [[ -n "${next_tag}" ]]; then
        local anchor
        anchor=$(printf 'changes-between-%s-and-%s' "${current_tag}" "${next_tag}" | tr -d '.' | tr '[:upper:]' '[:lower:]')
        printf -- '- Changes between [%s and %s](#%s)\n' \
          "${current_tag}" "${next_tag}" "${anchor}" >> "${OUTPUT_FILE}"
      fi
      next_tag="${current_tag}"
      break
    fi

    if [[ -n "${next_tag}" ]]; then
      local anchor
      anchor=$(printf 'changes-between-%s-and-%s' "${current_tag}" "${next_tag}" | tr -d '.' | tr '[:upper:]' '[:lower:]')
      printf -- '- Changes between [%s and %s](#%s)\n' \
        "${current_tag}" "${next_tag}" "${anchor}" >> "${OUTPUT_FILE}"
    fi
    next_tag="${current_tag}"
  done

  printf -- '\n---\n' >> "${OUTPUT_FILE}"

  # Now generate the content - HEAD first, then tags newest to oldest
  # HEAD comparison first
  if [[ -n "${latest_tag}" ]]; then
    diff_output=$(
      git diff "${latest_tag}"..HEAD -- "${CONFIG_FILE_PATH}"
    )

    # Append to the Markdown file
    printf '\n## Changes between %s and HEAD (main)\n\n' \
      "${latest_tag}" >> "${OUTPUT_FILE}"
    printf '(`config.toml` diff)\n\n' >> "${OUTPUT_FILE}"

    # Format the diff for markdown
    if [[ -n "${diff_output}" ]]; then
      printf '```diff\n' >> "${OUTPUT_FILE}"
      printf '%s\n' "${diff_output}" >> "${OUTPUT_FILE}"
      printf '```\n' >> "${OUTPUT_FILE}"
    else
      printf '*No changes* were made\n' >> "${OUTPUT_FILE}"
    fi
  fi

  # Reset for content pass
  next_tag=""

  # Tag-to-tag comparisons (newest to oldest)
  for current_tag in ${tags}; do
    # Stop when we reach START_TAG (oldest tag we want)
    if [[ "${current_tag}" == "${START_TAG}" ]]; then
      # Still process this tag for the comparison
      if [[ -n "${next_tag}" ]]; then
        # Generate diff between current and next tag
        diff_output=$(
          git diff "${current_tag}".."${next_tag}" -- "${CONFIG_FILE_PATH}"
        )

        # Append to the Markdown file
        printf '\n## Changes between %s and %s\n\n' \
          "${current_tag}" "${next_tag}" >> "${OUTPUT_FILE}"
        printf '(`config.toml` diff)\n\n' >> "${OUTPUT_FILE}"

        # Format the diff for markdown
        if [[ -n "${diff_output}" ]]; then
          # escape shortcodes {{ and }} to avoid Zola parsing issues
          diff_output=$(echo "${diff_output}" | sed 's/{{/{{\/\*/g; s/}}/\*\/}}/g')
          printf '```diff\n' >> "${OUTPUT_FILE}"
          printf '%s\n' "${diff_output}" >> "${OUTPUT_FILE}"
          printf '```\n' >> "${OUTPUT_FILE}"
        else
          printf '*No changes* were made\n' >> "${OUTPUT_FILE}"
        fi
      fi
      next_tag="${current_tag}"
      break
    fi

    if [[ -n "${next_tag}" ]]; then
      # Generate diff between current and next tag
      diff_output=$(
        git diff "${current_tag}".."${next_tag}" -- "${CONFIG_FILE_PATH}"
      )

      # Append to the Markdown file
      printf '\n## Changes between %s and %s\n\n' \
        "${current_tag}" "${next_tag}" >> "${OUTPUT_FILE}"
      printf '(`config.toml` diff)\n\n' >> "${OUTPUT_FILE}"

      # Format the diff for markdown
      if [[ -n "${diff_output}" ]]; then
        # escape shortcodes {{ and }} to avoid Zola parsing issues
        diff_output=$(echo "${diff_output}" | sed 's/{{/{{\/\*/g; s/}}/\*\/}}/g')
        printf '```diff\n' >> "${OUTPUT_FILE}"
        printf '%s\n' "${diff_output}" >> "${OUTPUT_FILE}"
        printf '```\n' >> "${OUTPUT_FILE}"
      else
        printf '*No changes* were made\n' >> "${OUTPUT_FILE}"
      fi
    fi
    next_tag="${current_tag}"
  done
}

#
# Main entry point.
#
main() {
  generate_changelog
  printf "Configuration changelog generated in %s\n" "${OUTPUT_FILE}"
}

main "${@}"
