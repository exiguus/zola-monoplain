# Configuration Change Log

This document lists all changes between Git tags for the `config.toml` file.

## Table of Contents

- Changes between [v1.8.1 and HEAD (main)](#changes-between-v181-and-head-main)
- Changes between [v1.8.0 and v1.8.1](#changes-between-v180-and-v181)
- Changes between [v1.7.0 and v1.8.0](#changes-between-v170-and-v180)
- Changes between [v1.6.0 and v1.7.0](#changes-between-v160-and-v170)
- Changes between [v1.5.0 and v1.6.0](#changes-between-v150-and-v160)
- Changes between [v1.4.0 and v1.5.0](#changes-between-v140-and-v150)
- Changes between [v1.3.2 and v1.4.0](#changes-between-v132-and-v140)
- Changes between [v1.3.1 and v1.3.2](#changes-between-v131-and-v132)
- Changes between [v1.3.0 and v1.3.1](#changes-between-v130-and-v131)
- Changes between [v1.2.1 and v1.3.0](#changes-between-v121-and-v130)
- Changes between [v1.2.0 and v1.2.1](#changes-between-v120-and-v121)
- Changes between [v1.1.0 and v1.2.0](#changes-between-v110-and-v120)

---

## Changes between v1.8.1 and HEAD (main)

(`config.toml` diff)

_No changes_ were made

## Changes between v1.8.0 and v1.8.1

(`config.toml` diff)

```diff
diff --git a/themes/zola-monoplain/config.toml b/themes/zola-monoplain/config.toml
index f6f8dac2..177231dc 100644
--- a/themes/zola-monoplain/config.toml
+++ b/themes/zola-monoplain/config.toml
@@ -1,31 +1,31 @@
 ##########
 # zola-monoplain Theme Config
-# Date: 2026-07-27
-# Version: 1.7.0
+# Date: 2026-08-01
+# Version: 1.8.0
 ###

 title = "mono/plain; a11y=true"
 description = "An accessible, monospace plain Zola Theme"

 # The URL the site will be built for
-base_url = "https://exiguus.github.io/zola-monoplain"
+base_url = "<https://exiguus.github.io/zola-monoplain>"

-# Whether to automatically compile all Sass files in the sass directory
+# Whether to automatically compile all Sass files in the Sass directory
 compile_sass = true

-# When set to "true", the generated HTML files are minified.
+# When set to "true", the generated HTML files are minified
 minify_html = false

 # Whether to build a search index to be used later on by a JavaScript library
 build_search_index = true
 default_language = "en"

-# atom feed
+# Atom feed
 generate_feeds = true
 feed_filenames = ["atom.xml", "rss.xml"]
 feed_limit = 50

-# When set to "false", Sitemap.xml is not generated
+# When set to "false", sitemap.xml is not generated
 generate_sitemap = true

 # When set to "false", robots.txt is not generated
@@ -33,17 +33,17 @@ generate_robots_txt = true

 # The taxonomies to be rendered for the site and their configuration of the default languages
 # Example:
-#     taxonomies = [
-#       {name = "tags", feed = true}, # each tag will have its own feed
-#       {name = "tags"}, # you can have taxonomies with the same name in multiple languages
-#       {name = "categories", paginate_by = 5},  # 5 items per page for a term
-#       {name = "authors"}, # Basic definition: no feed or pagination
-#     ]
-#
+# taxonomies = [
+#   { name = "tags", feed = true }, # each tag will have its own feed
+#   { name = "tags" }, # you can have taxonomies with the same name in multiple languages
+#   { name = "categories", paginate_by = 5 }, # 5 items per page for a term
+#   { name = "authors" }, # basic definition: no feed or pagination
+# ]
+
 taxonomies = [
   { name = "tags", lang = "en", rss = true },
   { name = "categories", paginate_by = 5 }, # 5 items per page for a term
-  { name = "authors" }, # Basic definition: no feed or pagination
+  { name = "authors" }, # basic definition: no feed or pagination
 ]

 [markdown]
@@ -107,7 +107,7 @@ post_permalink_label = "Post Permalink"
 post_hero_copy = "Picture by"
 search_form_clear = "Clear"
 search_form_input_label = "Text to search"
-search_form_input_placeholder = "Search ↵"
+search_form_input_placeholder = "Search \u21B5"
 search_form_legend = "Search"
 search_form_submit = "Search"
 search_results_empty = "No results"
@@ -118,33 +118,40 @@ skip_nav_link_toc = "Skip to table of contents"
 toc_summary = "Table of contents"

 [extra]
-# show a debug section (containing the page data) at the top of the page
+# Show a debug section (containing the page data) at the top of the page
 debug = false
-# meta
+
+# Meta
 tags = ["zola", "theme", "a11y", "accessible"]
 authors = ["Simon Gattner"]
 timezone = "Europe/Berlin"
-# search
+
+# Search
 search_enabled = true
-# images
+
+# Images
 image_resizing_disabled = false
 image_format = "webp" # "auto", "jpg", "png", "webp"
-# responsive image shortcode
-# example: {{ image(src="foo.jpeg", alt="some image") }}
+
+# Responsive image shortcode
+# Example: {{ Image(src="foo.jpeg", Alt="some Image") }}
 image_quality = 80
 images_default_size = 256
 images_sizes = [256, 384, 512, 576, 640, 768, 1024, 1152]
-# thumbs
+
+# Thumbs
 thumbnail_quality = 70
 thumbnail_default_size = 128
 thumbnail_sizes = [128, 256]
-# links
-# github and the mastodon url can be used as web sign in because they contain rel="me"
-#   to validate you might use https://indiewebify.me/validate-rel-me/
+
+# Links
+# Github and the Mastodon url can be used as web sign in because they contain rel="me"
+# To validate you might use <https://indiewebify.me/validate-rel-me/>
 link_github_username = "exiguus"
-link_mastodon_url = "https://toot.community/@exiguus"
+link_mastodon_url = "<https://toot.community/@exiguus>"
 link_email = { local_part = "monoplain", domain_name = "0x38", tld = "de" }
-# main navigation
+
+# Main navigation
 main_nav_items = [
   { url = "$BASE_URL/", name = "Home" },
   { url = "$BASE_URL/posts/", name = "Posts" },
@@ -152,7 +159,8 @@ main_nav_items = [
   { url = "$BASE_URL/search/", name = "Search" },
   { url = "$BASE_URL/atom.xml", name = "Feed", rel = "alternate" },
 ]
-# footer navigation
+
+# Footer navigation
 footer_nav_items = [
   { url = "$BASE_URL/", name = "Home" },
   { url = "$BASE_URL/posts/", name = "Posts" },
@@ -162,56 +170,65 @@ footer_nav_items = [
   { url = "$BASE_URL/search/", name = "Search" },
   { url = "$BASE_URL/atom.xml", name = "Feed", rel = "alternate" },
 ]
-# gallery
-# show also images from posts in gallery
+
+# Gallery
+# Show also images from posts in gallery
 gallery_show_posts = true
-# feedback
-# show feedback email in posts
+
+# Feedback
+# Show feedback email in posts
 feedback_email_enabled = true
 feedback_email_address = { local_part = "monoplain", domain_name = "0x38", tld = "de" }
 feedback_email_address_wildcard = true
 feedback_email_address_wildcard_postfix = ".monoplain"
-# hcard for replay contexts, cross-site comments and event RSVPs.
-#  The h-card is visible only for screen reader and is attachted to all page footer if enabled
-#  Not in used keys are commented out
-#  Validate the h-card with <https://indiewebify.me/validate-h-card/>
+
+# Hcard for replay contexts, cross-site comments and event RSVPs
+# The h-card is visible only for screen reader and is attached to all page footer if enabled
+# Not in used keys are commented out
+# Validate the h-card with <https://indiewebify.me/validate-h-card/>
 hcard_enabled = true
 hcard_name = "Simon Gattner"
-# hcard_honorific_prefix="Dr."
-# hcard_given_name="Sally"
-# hcard_additional_name="K."
-# hcard_family_name="Ride"
-# hcard_honorific_suffix="Ph.D."
+
+# hcard_honorific_prefix = "Dr."
+# hcard_given_name = "Sally"
+# hcard_additional_name = "K."
+# hcard_family_name = "Ride"
+# hcard_honorific_suffix = "Ph.D."
+
 hcard_nickname = "exiguus"
-# hcard_org="Sally Ride Science"
-# hcard_photo="Sally_Ride_(1984).jpg"
+
+# hcard_org = "Sally Ride Science"
+# hcard_photo = "Sally_Ride_(1984).jpg"
+
 hcard_urls = [
   ["https://www.gattner.name", "Homepage"],
   ["https://github.com/exiguus", "Github Profile"],
 ]
-# hcard_emails=[
-#    ["sally", "example", "com"]
+
+# hcard_emails = [
+#   ["Sally", "Example", "Com"]
 # ]
-# hcard_tels=[
-#    ["+1-800-555-0100", "Work phone"],
-#    ["+1-800-555-0101", "Mobile phone"]
+
+# hcard_tels = [
+#   ["+1-800-555-0100", "Work Phone"]
+#   ["+1-800-555-0101", "Mobile Phone"]
 # ]
-# hcard_street_address="123 Main st."
-# hcard_locality="Los Angeles"
-# hcard_region="CA"
-# hcard_region_title="California"
-# hcard_postal_code="91316"
-# hcard_country_name="U.S.A"
-# hcard_bday="1951-05-26"
-# hcard_category="physicist"
-# hcard_note="First American woman in space.
-#
-# post
+
+# hcard_street_address = "123 Main St."
+# hcard_locality = "Los Angeles"
+# hcard_region = "CA"
+# hcard_region_title = "California"
+# hcard_postal_code = "91316"
+# hcard_country_name = "U.S.A"
+# hcard_bday = "1951-05-26"
+# hcard_category = "physicist"
+# hcard_note = "First American Woman in Space"
+
+# Post
 post_author_visible = true
 post_update_visible = true
-#
-# robots.txt
-#
+
+# Robots.txt
 # Disallow: /pr-*
 # Disallow: */pr-*
 robots_disallows = [" ", "/pr-*", "*/pr-*", "*/report/", "*/report/*"]
```

## Changes between v1.7.0 and v1.8.0

(`config.toml` diff)

```diff
diff --git a/themes/zola-monoplain/config.toml b/themes/zola-monoplain/config.toml
index e085579e..f6f8dac2 100644
--- a/themes/zola-monoplain/config.toml
+++ b/themes/zola-monoplain/config.toml
@@ -1,7 +1,7 @@
 ##########
 # zola-monoplain Theme Config
 # Date: 2026-07-27
-# Version: 1.6.0
+# Version: 1.7.0
 ###

 title = "mono/plain; a11y=true"
@@ -68,6 +68,9 @@ hcard_born_label = "Born: "
 hcard_category_label = "Category: "
 hcard_nickname_label = "Nick: "
 hcard_org_label = "Org: "
+hentry_permalink_label = "Permalink"
+hentry_published_label = "Published: "
+hentry_updated_label = "Updated: "
 feed_atom_title = "Atom Feed"
 feed_rss_title = "RSS Feed"
 footer_info = "Information"
@@ -100,6 +103,7 @@ post_feedback_email_text = "Have thoughts or experiences you'd like to share? I'
 post_feedback_email_title = "Feedback"
 post_tags_title = "Tags"
 post_updated_label = "Updated:"
+post_permalink_label = "Post Permalink"
 post_hero_copy = "Picture by"
 search_form_clear = "Clear"
 search_form_input_label = "Text to search"
@@ -205,3 +209,10 @@ hcard_urls = [
 # post
 post_author_visible = true
 post_update_visible = true
+#
+# robots.txt
+#
+# Disallow: /pr-*
+# Disallow: */pr-*
+robots_disallows = [" ", "/pr-*", "*/pr-*", "*/report/", "*/report/*"]
+robots_allows = ["/"]
```

## Changes between v1.6.0 and v1.7.0

(`config.toml` diff)

```diff
diff --git a/themes/zola-monoplain/config.toml b/themes/zola-monoplain/config.toml
index 92eeac0c..e085579e 100644
--- a/themes/zola-monoplain/config.toml
+++ b/themes/zola-monoplain/config.toml
@@ -1,3 +1,9 @@
+##########
+# zola-monoplain Theme Config
+# Date: 2026-07-27
+# Version: 1.6.0
+###
+
 title = "mono/plain; a11y=true"
 description = "An accessible, monospace plain Zola Theme"

@@ -57,6 +63,11 @@ a11y_taxonomy_list_label = "Tag list"
 debug_label = "debug"
 debug_summary = "Debug"
 draft_label = "(Draft)"
+hcard_alt_photo = "Photo of "
+hcard_born_label = "Born: "
+hcard_category_label = "Category: "
+hcard_nickname_label = "Nick: "
+hcard_org_label = "Org: "
 feed_atom_title = "Atom Feed"
 feed_rss_title = "RSS Feed"
 footer_info = "Information"
@@ -67,6 +78,8 @@ footer_links_github_text = "Github"
 footer_links_github_title = "Github page"
 footer_links_mastodon_text = "Mastodon"
 footer_links_mastodon_title = "Mastodon Page"
+footer_links_email_text = "E-Mail"
+footer_links_email_title = "Write me a message"
 footer_links_theme_text = "@exiguus mono/plain Zola"
 footer_links_theme_title = "Github Zola 'mono/plain; a11y=true' Theme"
 footer_links_zola_text = "Zola"
@@ -79,16 +92,14 @@ footer_theme = "Theme by"
 latest_images_title = "Latest Images"
 latest_posts_title = "Latest Posts"
 main_nav_label = "Main Navigation"
-page_summary_desc = "Page summary"
-post_author_aria_label = "Author"
-post_author_prefix = "By"
+post_author_aria_label = "Post Authors"
+post_author_prefix = "Author:"
 post_created_label = "Created:"
 post_feedback_email_link_title = "This email address has been obscured for security. Please click the link to reveal the actual address."
 post_feedback_email_text = "Have thoughts or experiences you'd like to share? I'd love to hear from you! Whether you agree, disagree, or have a different perspective, your feedback is always welcome. Drop me an email and let's start a conversation."
 post_feedback_email_title = "Feedback"
 post_tags_title = "Tags"
 post_updated_label = "Updated:"
-post_summary_desc = "Post summary"
 post_hero_copy = "Picture by"
 search_form_clear = "Clear"
 search_form_input_label = "Text to search"
@@ -124,8 +135,11 @@ thumbnail_quality = 70
 thumbnail_default_size = 128
 thumbnail_sizes = [128, 256]
 # links
-link_github_username = "exiguus/zola-monoplain"
+# github and the mastodon url can be used as web sign in because they contain rel="me"
+#   to validate you might use https://indiewebify.me/validate-rel-me/
+link_github_username = "exiguus"
 link_mastodon_url = "https://toot.community/@exiguus"
+link_email = { local_part = "monoplain", domain_name = "0x38", tld = "de" }
 # main navigation
 main_nav_items = [
   { url = "$BASE_URL/", name = "Home" },
@@ -153,3 +167,41 @@ feedback_email_enabled = true
 feedback_email_address = { local_part = "monoplain", domain_name = "0x38", tld = "de" }
 feedback_email_address_wildcard = true
 feedback_email_address_wildcard_postfix = ".monoplain"
+# hcard for replay contexts, cross-site comments and event RSVPs.
+#  The h-card is visible only for screen reader and is attachted to all page footer if enabled
+#  Not in used keys are commented out
+#  Validate the h-card with <https://indiewebify.me/validate-h-card/>
+hcard_enabled = true
+hcard_name = "Simon Gattner"
+# hcard_honorific_prefix="Dr."
+# hcard_given_name="Sally"
+# hcard_additional_name="K."
+# hcard_family_name="Ride"
+# hcard_honorific_suffix="Ph.D."
+hcard_nickname = "exiguus"
+# hcard_org="Sally Ride Science"
+# hcard_photo="Sally_Ride_(1984).jpg"
+hcard_urls = [
+  ["https://www.gattner.name", "Homepage"],
+  ["https://github.com/exiguus", "Github Profile"],
+]
+# hcard_emails=[
+#    ["sally", "example", "com"]
+# ]
+# hcard_tels=[
+#    ["+1-800-555-0100", "Work phone"],
+#    ["+1-800-555-0101", "Mobile phone"]
+# ]
+# hcard_street_address="123 Main st."
+# hcard_locality="Los Angeles"
+# hcard_region="CA"
+# hcard_region_title="California"
+# hcard_postal_code="91316"
+# hcard_country_name="U.S.A"
+# hcard_bday="1951-05-26"
+# hcard_category="physicist"
+# hcard_note="First American woman in space.
+#
+# post
+post_author_visible = true
+post_update_visible = true
```

## Changes between v1.5.0 and v1.6.0

(`config.toml` diff)

```diff
diff --git a/themes/zola-monoplain/config.toml b/themes/zola-monoplain/config.toml
index 828d8a89..92eeac0c 100644
--- a/themes/zola-monoplain/config.toml
+++ b/themes/zola-monoplain/config.toml
@@ -71,16 +71,25 @@ footer_links_theme_text = "@exiguus mono/plain Zola"
 footer_links_theme_title = "Github Zola 'mono/plain; a11y=true' Theme"
 footer_links_zola_text = "Zola"
 footer_links_zola_title = "Your one-stop static site engine"
+footer_last_update = "Last update:"
 footer_made = "Made with love"
 footer_nav_label = "Footer Navigation"
 footer_powered_by = "Powered by"
 footer_theme = "Theme by"
+latest_images_title = "Latest Images"
+latest_posts_title = "Latest Posts"
 main_nav_label = "Main Navigation"
 page_summary_desc = "Page summary"
+post_author_aria_label = "Author"
+post_author_prefix = "By"
+post_created_label = "Created:"
 post_feedback_email_link_title = "This email address has been obscured for security. Please click the link to reveal the actual address."
 post_feedback_email_text = "Have thoughts or experiences you'd like to share? I'd love to hear from you! Whether you agree, disagree, or have a different perspective, your feedback is always welcome. Drop me an email and let's start a conversation."
 post_feedback_email_title = "Feedback"
+post_tags_title = "Tags"
+post_updated_label = "Updated:"
 post_summary_desc = "Post summary"
+post_hero_copy = "Picture by"
 search_form_clear = "Clear"
 search_form_input_label = "Text to search"
 search_form_input_placeholder = "Search ↵"
```

## Changes between v1.4.0 and v1.5.0

(`config.toml` diff)

_No changes_ were made

## Changes between v1.3.2 and v1.4.0

(`config.toml` diff)

_No changes_ were made

## Changes between v1.3.1 and v1.3.2

(`config.toml` diff)

_No changes_ were made

## Changes between v1.3.0 and v1.3.1

(`config.toml` diff)

```diff
diff --git a/themes/zola-monoplain/config.toml b/themes/zola-monoplain/config.toml
index b0f3bdb5..828d8a89 100644
--- a/themes/zola-monoplain/config.toml
+++ b/themes/zola-monoplain/config.toml
@@ -41,55 +41,57 @@ taxonomies = [
 ]

 [markdown]
-# Whether to do syntax highlighting
-# Theme can be customised by setting the `highlight_theme` variable to a theme supported by Zola
-highlight_code = true
-highlight_theme = "dracula"
 render_emoji = true

+[markdown.highlighting]
+theme = "dracula"
+
 [slugify]
 paths = "on"
 taxonomies = "on"
 anchors = "on"

 [translations]
+a11y_search_results_label = "Search results"
+a11y_taxonomy_list_label = "Tag list"
+debug_label = "debug"
+debug_summary = "Debug"
 draft_label = "(Draft)"
 feed_atom_title = "Atom Feed"
 feed_rss_title = "RSS Feed"
-search_form_legend = "Search"
+footer_info = "Information"
+footer_links = "Links"
+footer_links_atom_text = "Atom"
+footer_links_atom_title = "Atom Feed"
+footer_links_github_text = "Github"
+footer_links_github_title = "Github page"
+footer_links_mastodon_text = "Mastodon"
+footer_links_mastodon_title = "Mastodon Page"
+footer_links_theme_text = "@exiguus mono/plain Zola"
+footer_links_theme_title = "Github Zola 'mono/plain; a11y=true' Theme"
+footer_links_zola_text = "Zola"
+footer_links_zola_title = "Your one-stop static site engine"
+footer_made = "Made with love"
+footer_nav_label = "Footer Navigation"
+footer_powered_by = "Powered by"
+footer_theme = "Theme by"
+main_nav_label = "Main Navigation"
+page_summary_desc = "Page summary"
+post_feedback_email_link_title = "This email address has been obscured for security. Please click the link to reveal the actual address."
+post_feedback_email_text = "Have thoughts or experiences you'd like to share? I'd love to hear from you! Whether you agree, disagree, or have a different perspective, your feedback is always welcome. Drop me an email and let's start a conversation."
+post_feedback_email_title = "Feedback"
+post_summary_desc = "Post summary"
+search_form_clear = "Clear"
 search_form_input_label = "Text to search"
 search_form_input_placeholder = "Search ↵"
+search_form_legend = "Search"
 search_form_submit = "Search"
-search_form_clear = "Clear"
 search_results_empty = "No results"
-toc_summary = "Table of contents"
 skip_nav_label = "Skip Navigation"
 skip_nav_link_content = "Skip to content"
-skip_nav_link_toc = "Skip to table of contents"
 skip_nav_link_nav = "Skip to navigation"
-main_nav_label = "Main Navigation"
-footer_nav_label = "Footer Navigation"
-footer_links = "Links"
-footer_info = "Information"
-footer_links_github_title = "Github page"
-footer_links_github_text = "Github"
-footer_links_mastodon_title = "Mastodon Page"
-footer_links_mastodon_text = "Mastodon"
-footer_links_atom_title = "Atom Feed"
-footer_links_atom_text = "Atom"
-footer_links_zola_title = "Your one-stop static site engine"
-footer_links_zola_text = "Zola"
-footer_links_theme_title = "Github Zola 'mono/plain; a11y=true' Theme"
-footer_links_theme_text = "@exiguus mono/plain Zola"
-footer_theme = "Theme by"
-footer_powered_by = "Powered by"
-footer_made = "Made with love"
-debug_label = "debug"
-debug_summary = "Debug"
-post_summary_desc = "Post summary"
-page_summary_desc = "Page summary"
-a11y_taxonomy_list_label = "Tag list"
-a11y_search_results_label = "Search results"
+skip_nav_link_toc = "Skip to table of contents"
+toc_summary = "Table of contents"

 [extra]
 # show a debug section (containing the page data) at the top of the page
@@ -136,3 +138,9 @@ footer_nav_items = [
 # gallery
 # show also images from posts in gallery
 gallery_show_posts = true
+# feedback
+# show feedback email in posts
+feedback_email_enabled = true
+feedback_email_address = { local_part = "monoplain", domain_name = "0x38", tld = "de" }
+feedback_email_address_wildcard = true
+feedback_email_address_wildcard_postfix = ".monoplain"
```

## Changes between v1.2.1 and v1.3.0

(`config.toml` diff)

```diff
diff --git a/themes/zola-monoplain/config.toml b/themes/zola-monoplain/config.toml
index 89e836d8..b0f3bdb5 100644
--- a/themes/zola-monoplain/config.toml
+++ b/themes/zola-monoplain/config.toml
@@ -15,7 +15,8 @@ build_search_index = true
 default_language = "en"

 # atom feed
-feed_filenames = ["atom.xml"]
+generate_feeds = true
+feed_filenames = ["atom.xml", "rss.xml"]
 feed_limit = 50

 # When set to "false", Sitemap.xml is not generated
@@ -54,6 +55,7 @@ anchors = "on"
 [translations]
 draft_label = "(Draft)"
 feed_atom_title = "Atom Feed"
+feed_rss_title = "RSS Feed"
 search_form_legend = "Search"
 search_form_input_label = "Text to search"
 search_form_input_placeholder = "Search ↵"
@@ -111,7 +113,7 @@ thumbnail_quality = 70
 thumbnail_default_size = 128
 thumbnail_sizes = [128, 256]
 # links
-link_github_username = "exiguus/zola-monospace"
+link_github_username = "exiguus/zola-monoplain"
 link_mastodon_url = "https://toot.community/@exiguus"
 # main navigation
 main_nav_items = [
```

## Changes between v1.2.0 and v1.2.1

(`config.toml` diff)

_No changes_ were made

## Changes between v1.1.0 and v1.2.0

(`config.toml` diff)

```diff
diff --git a/themes/zola-monoplain/config.toml b/themes/zola-monoplain/config.toml
index 68ab9eec..89e836d8 100644
--- a/themes/zola-monoplain/config.toml
+++ b/themes/zola-monoplain/config.toml
@@ -7,12 +7,22 @@ base_url = "https://exiguus.github.io/zola-monoplain"
 # Whether to automatically compile all Sass files in the sass directory
 compile_sass = true

+# When set to "true", the generated HTML files are minified.
+minify_html = false
+
 # Whether to build a search index to be used later on by a JavaScript library
 build_search_index = true
 default_language = "en"

 # atom feed
-generate_feed = true
+feed_filenames = ["atom.xml"]
+feed_limit = 50
+
+# When set to "false", Sitemap.xml is not generated
+generate_sitemap = true
+
+# When set to "false", robots.txt is not generated
+generate_robots_txt = true

 # The taxonomies to be rendered for the site and their configuration of the default languages
 # Example:
@@ -43,6 +53,7 @@ anchors = "on"

 [translations]
 draft_label = "(Draft)"
+feed_atom_title = "Atom Feed"
 search_form_legend = "Search"
 search_form_input_label = "Text to search"
 search_form_input_placeholder = "Search ↵"
@@ -50,11 +61,12 @@ search_form_submit = "Search"
 search_form_clear = "Clear"
 search_results_empty = "No results"
 toc_summary = "Table of contents"
-skipNav_label = "Skip Navigation"
-skipNav_link_content = "Skip to content"
-skipNav_link_toc = "Skip to table of contents"
-skipNav_link_nav = "Skip to navigation"
-mainNav_label = "Main Navigation"
+skip_nav_label = "Skip Navigation"
+skip_nav_link_content = "Skip to content"
+skip_nav_link_toc = "Skip to table of contents"
+skip_nav_link_nav = "Skip to navigation"
+main_nav_label = "Main Navigation"
+footer_nav_label = "Footer Navigation"
 footer_links = "Links"
 footer_info = "Information"
 footer_links_github_title = "Github page"
@@ -83,6 +95,7 @@ debug = false
 # meta
 tags = ["zola", "theme", "a11y", "accessible"]
 authors = ["Simon Gattner"]
+timezone = "Europe/Berlin"
 # search
 search_enabled = true
 # images
@@ -99,13 +112,21 @@ thumbnail_default_size = 128
 thumbnail_sizes = [128, 256]
 # links
 link_github_username = "exiguus/zola-monospace"
-# link_twitter_username = ""
 link_mastodon_url = "https://toot.community/@exiguus"
-# menu
-menu_links = [
+# main navigation
+main_nav_items = [
+  { url = "$BASE_URL/", name = "Home" },
+  { url = "$BASE_URL/posts/", name = "Posts" },
+  { url = "$BASE_URL/about/", name = "About" },
+  { url = "$BASE_URL/search/", name = "Search" },
+  { url = "$BASE_URL/atom.xml", name = "Feed", rel = "alternate" },
+]
+# footer navigation
+footer_nav_items = [
   { url = "$BASE_URL/", name = "Home" },
   { url = "$BASE_URL/posts/", name = "Posts" },
   { url = "$BASE_URL/gallery/", name = "Gallery" },
+  { url = "$BASE_URL/about/", name = "About" },
   { url = "$BASE_URL/tags/", name = "Tags" },
   { url = "$BASE_URL/search/", name = "Search" },
   { url = "$BASE_URL/atom.xml", name = "Feed", rel = "alternate" },
```
