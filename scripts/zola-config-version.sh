#!/bin/bash
#
# Add theme version banner to config.toml using version from package.json
# This script is meant to be used as a postbump hook for standard-version
#

set -o errexit
set -o nounset
set -o pipefail

readonly SCRIPT_NAME="$(basename "${0}")"
readonly CONFIG_FILE_PATH="themes/zola-monoplain/config.toml"

#
# Extract version from package.json
#
get_version() {
  local version
  version=$(grep '"version"' package.json | head -1 | cut -d':' -f2 | tr -d ' "\n,')
  echo "${version}"
}

#
# Get current date in YYYY-MM-DD format
#
get_date() {
  date +"%Y-%m-%d"
}

#
# Add or update version banner in config.toml
#
update_config() {
  local version
  version=$(get_version)
  local current_date
  current_date=$(get_date)

  local temp_file
  temp_file=$(mktemp)

  # Patterns to match existing banner lines
  local version_pattern="^# Version:"
  local date_pattern="^# Date:"
  local banner_start_pattern="^##########$"
  local banner_end_pattern="^###$"

  # Read the file and replace version and date in banner
  local in_banner=false
  local found_banner=false
  local line_num=0
  local banner_lines=()

  while IFS= read -r line; do
    line_num=$((line_num + 1))

    # Check if we're entering the banner (first line must be ##########)
    if [[ ${line_num} -eq 1 ]] && [[ "${line}" =~ ${banner_start_pattern} ]]; then
      in_banner=true
      found_banner=true
      banner_lines+=("${line}")
      continue
    fi

    # If we're in the banner, collect banner lines
    if [[ "${in_banner}" == true ]]; then
      # Check if this is the end of the banner
      if [[ "${line}" =~ ${banner_end_pattern} ]]; then
        # Update version and date in collected banner lines
        # Ensure Date comes before Version
        local other_banner_lines=()
        for banner_line in "${banner_lines[@]}"; do
          if [[ "${banner_line}" =~ ${version_pattern} ]] || [[ "${banner_line}" =~ ${date_pattern} ]]; then
            # Skip version and date lines, we'll add them in the right order
            continue
          else
            other_banner_lines+=("${banner_line}")
          fi
        done
        # Write updated banner with Date before Version
        for b_line in "${other_banner_lines[@]}"; do
          echo "${b_line}" >> "${temp_file}"
        done
        echo "# Date: ${current_date}" >> "${temp_file}"
        echo "# Version: ${version}" >> "${temp_file}"
        echo "${line}" >> "${temp_file}"
        in_banner=false
        continue
      fi
      banner_lines+=("${line}")
      continue
    fi

    # If we were in banner but exited, or never found banner, write the line
    echo "${line}" >> "${temp_file}"
  done < "${CONFIG_FILE_PATH}"

  # If banner not found, add it at the top
  if [[ "${found_banner}" == false ]]; then
    # Create new file with banner at the top
    echo "##########" > "${temp_file}"
    echo "# zola-monoplain Theme Config" >> "${temp_file}"
    echo "# Date: ${current_date}" >> "${temp_file}"
    echo "# Version: ${version}" >> "${temp_file}"
    echo "###" >> "${temp_file}"
    echo "" >> "${temp_file}"
    cat "${CONFIG_FILE_PATH}" >> "${temp_file}"
  fi

  # Replace the original file with the updated one
  mv "${temp_file}" "${CONFIG_FILE_PATH}"

  echo "Updated ${CONFIG_FILE_PATH} with version ${version} and date ${current_date}"
}

#
# Main entry point.
#
main() {
  update_config
}

main "${@}"
