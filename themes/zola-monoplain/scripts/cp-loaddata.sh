#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
THEME_DIR="$(cd -- "${SCRIPT_DIR}/.." && pwd)"

cd "${THEME_DIR}"

cp ../../README.md ./content/about/README.markdown
cp ../../CHANGELOG.md ./content/about/CHANGELOG.markdown
cp ../../CHANGELOG_ZOLA_CONFIG.md ./content/about/CHANGELOG_ZOLA_CONFIG.markdown

# replace first level headings with emphasized text
# lowercase markdown link targets and remove the .md suffix
# replace underscores with hyphens in parenthesized links
find ./content/about -type f -name '*.markdown' -exec sed -Ei \
  -e 's/^# (.+)$/<em>\n      \1\n    <\/em>/' \
  -e 's/\(([^)]+)\.md([^)]*)\)/(\L\1\E\2)/g' \
  -e ':a;s/\(([^)]*)_([^)]*)\)/(\1-\2)/g;ta' {} +
