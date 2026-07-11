+++
title = "Emojis"
description = "Emoji by example"
date = 2024-06-07
updated = 2026-07-11
authors = ["Simon Gattner"]
[taxonomies]
tags= ["Zola", "Theme", "Markdown", "Emojis"]
+++

## Introduction

Zola supports emojis out of the box. You can use emojis in your Markdown files just like in any other text file.

You can also use GitHub-style emoji syntax like `:smile:` to render 😄.

## Configuration

```toml
[markdown]
render_emoji = true
```

Set this option in your `config.toml` file.

## Implementation

Zola uses the [`gh-emoji` crate](https://github.com/github/gemoji) to render emojis. You can find the [gemoji emoji dataset](https://github.com/github/gemoji/blob/master/db/emoji.json) for the full supported list.

## Emojis

{{ markdown(title="😀 grinning face" type="markdown", code='

<!--
# 😀 grinning face
#
# {
#     "emoji": "\ud83d\ude00",
#     "description": "grinning face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "grinning"
#     ],
#     "tags": [
#         "smile",
#         "happy"
#     ],
#     "unicode_version": "6.1",
#     "ios_version": "6.0"
# }
-->

:grinning: `:grinning:`
') }}
{{ markdown(title="😃 grinning face with big eyes" type="markdown", code='

<!--
# 😃 grinning face with big eyes
#
# {
#     "emoji": "\ud83d\ude03",
#     "description": "grinning face with big eyes",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "smiley"
#     ],
#     "tags": [
#         "happy",
#         "joy",
#         "haha"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:smiley: `:smiley:`
') }}
{{ markdown(title="😄 grinning face with smiling eyes" type="markdown", code='

<!--
# 😄 grinning face with smiling eyes
#
# {
#     "emoji": "\ud83d\ude04",
#     "description": "grinning face with smiling eyes",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "smile"
#     ],
#     "tags": [
#         "happy",
#         "joy",
#         "laugh",
#         "pleased"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:smile: `:smile:`
') }}
{{ markdown(title="😁 beaming face with smiling eyes" type="markdown", code='

<!--
# 😁 beaming face with smiling eyes
#
# {
#     "emoji": "\ud83d\ude01",
#     "description": "beaming face with smiling eyes",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "grin"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:grin: `:grin:`
') }}
{{ markdown(title="😆 grinning squinting face" type="markdown", code='

<!--
# 😆 grinning squinting face
#
# {
#     "emoji": "\ud83d\ude06",
#     "description": "grinning squinting face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "laughing",
#         "satisfied"
#     ],
#     "tags": [
#         "happy",
#         "haha"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:laughing: `:laughing:`

:satisfied: `:satisfied:`
') }}
{{ markdown(title="😅 grinning face with sweat" type="markdown", code='

<!--
# 😅 grinning face with sweat
#
# {
#     "emoji": "\ud83d\ude05",
#     "description": "grinning face with sweat",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "sweat_smile"
#     ],
#     "tags": [
#         "hot"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:sweat_smile: `:sweat_smile:`
') }}
{{ markdown(title="🤣 rolling on the floor laughing" type="markdown", code='

<!--
# 🤣 rolling on the floor laughing
#
# {
#     "emoji": "\ud83e\udd23",
#     "description": "rolling on the floor laughing",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "rofl"
#     ],
#     "tags": [
#         "lol",
#         "laughing"
#     ],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:rofl: `:rofl:`
') }}
{{ markdown(title="😂 face with tears of joy" type="markdown", code='

<!--
# 😂 face with tears of joy
#
# {
#     "emoji": "\ud83d\ude02",
#     "description": "face with tears of joy",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "joy"
#     ],
#     "tags": [
#         "tears"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:joy: `:joy:`
') }}
{{ markdown(title="🙂 slightly smiling face" type="markdown", code='

<!--
# 🙂 slightly smiling face
#
# {
#     "emoji": "\ud83d\ude42",
#     "description": "slightly smiling face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "slightly_smiling_face"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:slightly_smiling_face: `:slightly_smiling_face:`
') }}
{{ markdown(title="🙃 upside-down face" type="markdown", code='

<!--
# 🙃 upside-down face
#
# {
#     "emoji": "\ud83d\ude43",
#     "description": "upside-down face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "upside_down_face"
#     ],
#     "tags": [],
#     "unicode_version": "8.0",
#     "ios_version": "9.1"
# }
-->

:upside_down_face: `:upside_down_face:`
') }}
{{ markdown(title="🫠 melting face" type="markdown", code='

<!--
# 🫠 melting face
#
# {
#     "emoji": "\ud83e\udee0",
#     "description": "melting face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "melting_face"
#     ],
#     "tags": [
#         "sarcasm",
#         "dread"
#     ],
#     "unicode_version": "14.0",
#     "ios_version": "15.4"
# }
-->

:melting_face: `:melting_face:`
') }}
{{ markdown(title="😉 winking face" type="markdown", code='

<!--
# 😉 winking face
#
# {
#     "emoji": "\ud83d\ude09",
#     "description": "winking face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "wink"
#     ],
#     "tags": [
#         "flirt"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:wink: `:wink:`
') }}
{{ markdown(title="😊 smiling face with smiling eyes" type="markdown", code='

<!--
# 😊 smiling face with smiling eyes
#
# {
#     "emoji": "\ud83d\ude0a",
#     "description": "smiling face with smiling eyes",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "blush"
#     ],
#     "tags": [
#         "proud"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:blush: `:blush:`
') }}
{{ markdown(title="😇 smiling face with halo" type="markdown", code='

<!--
# 😇 smiling face with halo
#
# {
#     "emoji": "\ud83d\ude07",
#     "description": "smiling face with halo",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "innocent"
#     ],
#     "tags": [
#         "angel"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:innocent: `:innocent:`
') }}
{{ markdown(title="🥰 smiling face with hearts" type="markdown", code='

<!--
# 🥰 smiling face with hearts
#
# {
#     "emoji": "\ud83e\udd70",
#     "description": "smiling face with hearts",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "smiling_face_with_three_hearts"
#     ],
#     "tags": [
#         "love"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:smiling_face_with_three_hearts: `:smiling_face_with_three_hearts:`
') }}
{{ markdown(title="😍 smiling face with heart-eyes" type="markdown", code='

<!--
# 😍 smiling face with heart-eyes
#
# {
#     "emoji": "\ud83d\ude0d",
#     "description": "smiling face with heart-eyes",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "heart_eyes"
#     ],
#     "tags": [
#         "love",
#         "crush"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:heart_eyes: `:heart_eyes:`
') }}
{{ markdown(title="🤩 star-struck" type="markdown", code='

<!--
# 🤩 star-struck
#
# {
#     "emoji": "\ud83e\udd29",
#     "description": "star-struck",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "star_struck"
#     ],
#     "tags": [
#         "eyes"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:star_struck: `:star_struck:`
') }}
{{ markdown(title="😘 face blowing a kiss" type="markdown", code='

<!--
# 😘 face blowing a kiss
#
# {
#     "emoji": "\ud83d\ude18",
#     "description": "face blowing a kiss",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "kissing_heart"
#     ],
#     "tags": [
#         "flirt"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:kissing_heart: `:kissing_heart:`
') }}
{{ markdown(title="😗 kissing face" type="markdown", code='

<!--
# 😗 kissing face
#
# {
#     "emoji": "\ud83d\ude17",
#     "description": "kissing face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "kissing"
#     ],
#     "tags": [],
#     "unicode_version": "6.1",
#     "ios_version": "6.0"
# }
-->

:kissing: `:kissing:`
') }}
{{ markdown(title="☺️ smiling face" type="markdown", code='

<!--
# ☺️ smiling face
#
# {
#     "emoji": "\u263a\ufe0f",
#     "description": "smiling face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "relaxed"
#     ],
#     "tags": [
#         "blush",
#         "pleased"
#     ],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:relaxed: `:relaxed:`
') }}
{{ markdown(title="😚 kissing face with closed eyes" type="markdown", code='

<!--
# 😚 kissing face with closed eyes
#
# {
#     "emoji": "\ud83d\ude1a",
#     "description": "kissing face with closed eyes",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "kissing_closed_eyes"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:kissing_closed_eyes: `:kissing_closed_eyes:`
') }}
{{ markdown(title="😙 kissing face with smiling eyes" type="markdown", code='

<!--
# 😙 kissing face with smiling eyes
#
# {
#     "emoji": "\ud83d\ude19",
#     "description": "kissing face with smiling eyes",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "kissing_smiling_eyes"
#     ],
#     "tags": [],
#     "unicode_version": "6.1",
#     "ios_version": "6.0"
# }
-->

:kissing_smiling_eyes: `:kissing_smiling_eyes:`
') }}
{{ markdown(title="🥲 smiling face with tear" type="markdown", code='

<!--
# 🥲 smiling face with tear
#
# {
#     "emoji": "\ud83e\udd72",
#     "description": "smiling face with tear",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "smiling_face_with_tear"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:smiling_face_with_tear: `:smiling_face_with_tear:`
') }}
{{ markdown(title="😋 face savoring food" type="markdown", code='

<!--
# 😋 face savoring food
#
# {
#     "emoji": "\ud83d\ude0b",
#     "description": "face savoring food",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "yum"
#     ],
#     "tags": [
#         "tongue",
#         "lick"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:yum: `:yum:`
') }}
{{ markdown(title="😛 face with tongue" type="markdown", code='

<!--
# 😛 face with tongue
#
# {
#     "emoji": "\ud83d\ude1b",
#     "description": "face with tongue",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "stuck_out_tongue"
#     ],
#     "tags": [],
#     "unicode_version": "6.1",
#     "ios_version": "6.0"
# }
-->

:stuck_out_tongue: `:stuck_out_tongue:`
') }}
{{ markdown(title="😜 winking face with tongue" type="markdown", code='

<!--
# 😜 winking face with tongue
#
# {
#     "emoji": "\ud83d\ude1c",
#     "description": "winking face with tongue",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "stuck_out_tongue_winking_eye"
#     ],
#     "tags": [
#         "prank",
#         "silly"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:stuck_out_tongue_winking_eye: `:stuck_out_tongue_winking_eye:`
') }}
{{ markdown(title="🤪 zany face" type="markdown", code='

<!--
# 🤪 zany face
#
# {
#     "emoji": "\ud83e\udd2a",
#     "description": "zany face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "zany_face"
#     ],
#     "tags": [
#         "goofy",
#         "wacky"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:zany_face: `:zany_face:`
') }}
{{ markdown(title="😝 squinting face with tongue" type="markdown", code='

<!--
# 😝 squinting face with tongue
#
# {
#     "emoji": "\ud83d\ude1d",
#     "description": "squinting face with tongue",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "stuck_out_tongue_closed_eyes"
#     ],
#     "tags": [
#         "prank"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:stuck_out_tongue_closed_eyes: `:stuck_out_tongue_closed_eyes:`
') }}
{{ markdown(title="🤑 money-mouth face" type="markdown", code='

<!--
# 🤑 money-mouth face
#
# {
#     "emoji": "\ud83e\udd11",
#     "description": "money-mouth face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "money_mouth_face"
#     ],
#     "tags": [
#         "rich"
#     ],
#     "unicode_version": "8.0",
#     "ios_version": "9.1"
# }
-->

:money_mouth_face: `:money_mouth_face:`
') }}
{{ markdown(title="🤗 smiling face with open hands" type="markdown", code='

<!--
# 🤗 smiling face with open hands
#
# {
#     "emoji": "\ud83e\udd17",
#     "description": "smiling face with open hands",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "hugs"
#     ],
#     "tags": [],
#     "unicode_version": "8.0",
#     "ios_version": "9.1"
# }
-->

:hugs: `:hugs:`
') }}
{{ markdown(title="🤭 face with hand over mouth" type="markdown", code='

<!--
# 🤭 face with hand over mouth
#
# {
#     "emoji": "\ud83e\udd2d",
#     "description": "face with hand over mouth",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "hand_over_mouth"
#     ],
#     "tags": [
#         "quiet",
#         "whoops"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:hand_over_mouth: `:hand_over_mouth:`
') }}
{{ markdown(title="🫢 face with open eyes and hand over mouth" type="markdown", code='

<!--
# 🫢 face with open eyes and hand over mouth
#
# {
#     "emoji": "\ud83e\udee2",
#     "description": "face with open eyes and hand over mouth",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "face_with_open_eyes_and_hand_over_mouth"
#     ],
#     "tags": [
#         "gasp",
#         "shock"
#     ],
#     "unicode_version": "14.0",
#     "ios_version": "15.4"
# }
-->

:face_with_open_eyes_and_hand_over_mouth: `:face_with_open_eyes_and_hand_over_mouth:`
') }}
{{ markdown(title="🫣 face with peeking eye" type="markdown", code='

<!--
# 🫣 face with peeking eye
#
# {
#     "emoji": "\ud83e\udee3",
#     "description": "face with peeking eye",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "face_with_peeking_eye"
#     ],
#     "tags": [],
#     "unicode_version": "14.0",
#     "ios_version": "15.4"
# }
-->

:face_with_peeking_eye: `:face_with_peeking_eye:`
') }}
{{ markdown(title="🤫 shushing face" type="markdown", code='

<!--
# 🤫 shushing face
#
# {
#     "emoji": "\ud83e\udd2b",
#     "description": "shushing face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "shushing_face"
#     ],
#     "tags": [
#         "silence",
#         "quiet"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:shushing_face: `:shushing_face:`
') }}
{{ markdown(title="🤔 thinking face" type="markdown", code='

<!--
# 🤔 thinking face
#
# {
#     "emoji": "\ud83e\udd14",
#     "description": "thinking face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "thinking"
#     ],
#     "tags": [],
#     "unicode_version": "8.0",
#     "ios_version": "9.1"
# }
-->

:thinking: `:thinking:`
') }}
{{ markdown(title="🫡 saluting face" type="markdown", code='

<!--
# 🫡 saluting face
#
# {
#     "emoji": "\ud83e\udee1",
#     "description": "saluting face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "saluting_face"
#     ],
#     "tags": [
#         "respect"
#     ],
#     "unicode_version": "14.0",
#     "ios_version": "15.4"
# }
-->

:saluting_face: `:saluting_face:`
') }}
{{ markdown(title="🤐 zipper-mouth face" type="markdown", code='

<!--
# 🤐 zipper-mouth face
#
# {
#     "emoji": "\ud83e\udd10",
#     "description": "zipper-mouth face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "zipper_mouth_face"
#     ],
#     "tags": [
#         "silence",
#         "hush"
#     ],
#     "unicode_version": "8.0",
#     "ios_version": "9.1"
# }
-->

:zipper_mouth_face: `:zipper_mouth_face:`
') }}
{{ markdown(title="🤨 face with raised eyebrow" type="markdown", code='

<!--
# 🤨 face with raised eyebrow
#
# {
#     "emoji": "\ud83e\udd28",
#     "description": "face with raised eyebrow",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "raised_eyebrow"
#     ],
#     "tags": [
#         "suspicious"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:raised_eyebrow: `:raised_eyebrow:`
') }}
{{ markdown(title="😐 neutral face" type="markdown", code='

<!--
# 😐 neutral face
#
# {
#     "emoji": "\ud83d\ude10",
#     "description": "neutral face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "neutral_face"
#     ],
#     "tags": [
#         "meh"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:neutral_face: `:neutral_face:`
') }}
{{ markdown(title="😑 expressionless face" type="markdown", code='

<!--
# 😑 expressionless face
#
# {
#     "emoji": "\ud83d\ude11",
#     "description": "expressionless face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "expressionless"
#     ],
#     "tags": [],
#     "unicode_version": "6.1",
#     "ios_version": "6.0"
# }
-->

:expressionless: `:expressionless:`
') }}
{{ markdown(title="😶 face without mouth" type="markdown", code='

<!--
# 😶 face without mouth
#
# {
#     "emoji": "\ud83d\ude36",
#     "description": "face without mouth",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "no_mouth"
#     ],
#     "tags": [
#         "mute",
#         "silence"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:no_mouth: `:no_mouth:`
') }}
{{ markdown(title="🫥 dotted line face" type="markdown", code='

<!--
# 🫥 dotted line face
#
# {
#     "emoji": "\ud83e\udee5",
#     "description": "dotted line face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "dotted_line_face"
#     ],
#     "tags": [
#         "invisible"
#     ],
#     "unicode_version": "14.0",
#     "ios_version": "15.4"
# }
-->

:dotted_line_face: `:dotted_line_face:`
') }}
{{ markdown(title="😶‍🌫️ face in clouds" type="markdown", code='

<!--
# 😶‍🌫️ face in clouds
#
# {
#     "emoji": "\ud83d\ude36\u200d\ud83c\udf2b\ufe0f",
#     "description": "face in clouds",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "face_in_clouds"
#     ],
#     "tags": [],
#     "unicode_version": "13.1",
#     "ios_version": "14.0"
# }
-->

:face_in_clouds: `:face_in_clouds:`
') }}
{{ markdown(title="😏 smirking face" type="markdown", code='

<!--
# 😏 smirking face
#
# {
#     "emoji": "\ud83d\ude0f",
#     "description": "smirking face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "smirk"
#     ],
#     "tags": [
#         "smug"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:smirk: `:smirk:`
') }}
{{ markdown(title="😒 unamused face" type="markdown", code='

<!--
# 😒 unamused face
#
# {
#     "emoji": "\ud83d\ude12",
#     "description": "unamused face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "unamused"
#     ],
#     "tags": [
#         "meh"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:unamused: `:unamused:`
') }}
{{ markdown(title="🙄 face with rolling eyes" type="markdown", code='

<!--
# 🙄 face with rolling eyes
#
# {
#     "emoji": "\ud83d\ude44",
#     "description": "face with rolling eyes",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "roll_eyes"
#     ],
#     "tags": [],
#     "unicode_version": "8.0",
#     "ios_version": "9.1"
# }
-->

:roll_eyes: `:roll_eyes:`
') }}
{{ markdown(title="😬 grimacing face" type="markdown", code='

<!--
# 😬 grimacing face
#
# {
#     "emoji": "\ud83d\ude2c",
#     "description": "grimacing face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "grimacing"
#     ],
#     "tags": [],
#     "unicode_version": "6.1",
#     "ios_version": "6.0"
# }
-->

:grimacing: `:grimacing:`
') }}
{{ markdown(title="😮‍💨 face exhaling" type="markdown", code='

<!--
# 😮‍💨 face exhaling
#
# {
#     "emoji": "\ud83d\ude2e\u200d\ud83d\udca8",
#     "description": "face exhaling",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "face_exhaling"
#     ],
#     "tags": [],
#     "unicode_version": "13.1",
#     "ios_version": "14.0"
# }
-->

:face_exhaling: `:face_exhaling:`
') }}
{{ markdown(title="🤥 lying face" type="markdown", code='

<!--
# 🤥 lying face
#
# {
#     "emoji": "\ud83e\udd25",
#     "description": "lying face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "lying_face"
#     ],
#     "tags": [
#         "liar"
#     ],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:lying_face: `:lying_face:`
') }}
{{ markdown(title="🫨 shaking face" type="markdown", code='

<!--
# 🫨 shaking face
#
# {
#     "emoji": "\ud83e\udee8",
#     "description": "shaking face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "shaking_face"
#     ],
#     "tags": [
#         "shock"
#     ],
#     "unicode_version": "15.0",
#     "ios_version": "16.4"
# }
-->

:shaking_face: `:shaking_face:`
') }}
{{ markdown(title="😌 relieved face" type="markdown", code='

<!--
# 😌 relieved face
#
# {
#     "emoji": "\ud83d\ude0c",
#     "description": "relieved face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "relieved"
#     ],
#     "tags": [
#         "whew"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:relieved: `:relieved:`
') }}
{{ markdown(title="😔 pensive face" type="markdown", code='

<!--
# 😔 pensive face
#
# {
#     "emoji": "\ud83d\ude14",
#     "description": "pensive face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "pensive"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:pensive: `:pensive:`
') }}
{{ markdown(title="😪 sleepy face" type="markdown", code='

<!--
# 😪 sleepy face
#
# {
#     "emoji": "\ud83d\ude2a",
#     "description": "sleepy face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "sleepy"
#     ],
#     "tags": [
#         "tired"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:sleepy: `:sleepy:`
') }}
{{ markdown(title="🤤 drooling face" type="markdown", code='

<!--
# 🤤 drooling face
#
# {
#     "emoji": "\ud83e\udd24",
#     "description": "drooling face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "drooling_face"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:drooling_face: `:drooling_face:`
') }}
{{ markdown(title="😴 sleeping face" type="markdown", code='

<!--
# 😴 sleeping face
#
# {
#     "emoji": "\ud83d\ude34",
#     "description": "sleeping face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "sleeping"
#     ],
#     "tags": [
#         "zzz"
#     ],
#     "unicode_version": "6.1",
#     "ios_version": "6.0"
# }
-->

:sleeping: `:sleeping:`
') }}
{{ markdown(title="😷 face with medical mask" type="markdown", code='

<!--
# 😷 face with medical mask
#
# {
#     "emoji": "\ud83d\ude37",
#     "description": "face with medical mask",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "mask"
#     ],
#     "tags": [
#         "sick",
#         "ill"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:mask: `:mask:`
') }}
{{ markdown(title="🤒 face with thermometer" type="markdown", code='

<!--
# 🤒 face with thermometer
#
# {
#     "emoji": "\ud83e\udd12",
#     "description": "face with thermometer",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "face_with_thermometer"
#     ],
#     "tags": [
#         "sick"
#     ],
#     "unicode_version": "8.0",
#     "ios_version": "9.1"
# }
-->

:face_with_thermometer: `:face_with_thermometer:`
') }}
{{ markdown(title="🤕 face with head-bandage" type="markdown", code='

<!--
# 🤕 face with head-bandage
#
# {
#     "emoji": "\ud83e\udd15",
#     "description": "face with head-bandage",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "face_with_head_bandage"
#     ],
#     "tags": [
#         "hurt"
#     ],
#     "unicode_version": "8.0",
#     "ios_version": "9.1"
# }
-->

:face_with_head_bandage: `:face_with_head_bandage:`
') }}
{{ markdown(title="🤢 nauseated face" type="markdown", code='

<!--
# 🤢 nauseated face
#
# {
#     "emoji": "\ud83e\udd22",
#     "description": "nauseated face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "nauseated_face"
#     ],
#     "tags": [
#         "sick",
#         "barf",
#         "disgusted"
#     ],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:nauseated_face: `:nauseated_face:`
') }}
{{ markdown(title="🤮 face vomiting" type="markdown", code='

<!--
# 🤮 face vomiting
#
# {
#     "emoji": "\ud83e\udd2e",
#     "description": "face vomiting",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "vomiting_face"
#     ],
#     "tags": [
#         "barf",
#         "sick"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:vomiting_face: `:vomiting_face:`
') }}
{{ markdown(title="🤧 sneezing face" type="markdown", code='

<!--
# 🤧 sneezing face
#
# {
#     "emoji": "\ud83e\udd27",
#     "description": "sneezing face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "sneezing_face"
#     ],
#     "tags": [
#         "achoo",
#         "sick"
#     ],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:sneezing_face: `:sneezing_face:`
') }}
{{ markdown(title="🥵 hot face" type="markdown", code='

<!--
# 🥵 hot face
#
# {
#     "emoji": "\ud83e\udd75",
#     "description": "hot face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "hot_face"
#     ],
#     "tags": [
#         "heat",
#         "sweating"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:hot_face: `:hot_face:`
') }}
{{ markdown(title="🥶 cold face" type="markdown", code='

<!--
# 🥶 cold face
#
# {
#     "emoji": "\ud83e\udd76",
#     "description": "cold face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "cold_face"
#     ],
#     "tags": [
#         "freezing",
#         "ice"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:cold_face: `:cold_face:`
') }}
{{ markdown(title="🥴 woozy face" type="markdown", code='

<!--
# 🥴 woozy face
#
# {
#     "emoji": "\ud83e\udd74",
#     "description": "woozy face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "woozy_face"
#     ],
#     "tags": [
#         "groggy"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:woozy_face: `:woozy_face:`
') }}
{{ markdown(title="😵 face with crossed-out eyes" type="markdown", code='

<!--
# 😵 face with crossed-out eyes
#
# {
#     "emoji": "\ud83d\ude35",
#     "description": "face with crossed-out eyes",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "dizzy_face"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:dizzy_face: `:dizzy_face:`
') }}
{{ markdown(title="😵‍💫 face with spiral eyes" type="markdown", code='

<!--
# 😵‍💫 face with spiral eyes
#
# {
#     "emoji": "\ud83d\ude35\u200d\ud83d\udcab",
#     "description": "face with spiral eyes",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "face_with_spiral_eyes"
#     ],
#     "tags": [],
#     "unicode_version": "13.1",
#     "ios_version": "14.0"
# }
-->

:face_with_spiral_eyes: `:face_with_spiral_eyes:`
') }}
{{ markdown(title="🤯 exploding head" type="markdown", code='

<!--
# 🤯 exploding head
#
# {
#     "emoji": "\ud83e\udd2f",
#     "description": "exploding head",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "exploding_head"
#     ],
#     "tags": [
#         "mind",
#         "blown"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:exploding_head: `:exploding_head:`
') }}
{{ markdown(title="🤠 cowboy hat face" type="markdown", code='

<!--
# 🤠 cowboy hat face
#
# {
#     "emoji": "\ud83e\udd20",
#     "description": "cowboy hat face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "cowboy_hat_face"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:cowboy_hat_face: `:cowboy_hat_face:`
') }}
{{ markdown(title="🥳 partying face" type="markdown", code='

<!--
# 🥳 partying face
#
# {
#     "emoji": "\ud83e\udd73",
#     "description": "partying face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "partying_face"
#     ],
#     "tags": [
#         "celebration",
#         "birthday"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:partying_face: `:partying_face:`
') }}
{{ markdown(title="🥸 disguised face" type="markdown", code='

<!--
# 🥸 disguised face
#
# {
#     "emoji": "\ud83e\udd78",
#     "description": "disguised face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "disguised_face"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:disguised_face: `:disguised_face:`
') }}
{{ markdown(title="😎 smiling face with sunglasses" type="markdown", code='

<!--
# 😎 smiling face with sunglasses
#
# {
#     "emoji": "\ud83d\ude0e",
#     "description": "smiling face with sunglasses",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "sunglasses"
#     ],
#     "tags": [
#         "cool"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:sunglasses: `:sunglasses:`
') }}
{{ markdown(title="🤓 nerd face" type="markdown", code='

<!--
# 🤓 nerd face
#
# {
#     "emoji": "\ud83e\udd13",
#     "description": "nerd face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "nerd_face"
#     ],
#     "tags": [
#         "geek",
#         "glasses"
#     ],
#     "unicode_version": "8.0",
#     "ios_version": "9.1"
# }
-->

:nerd_face: `:nerd_face:`
') }}
{{ markdown(title="🧐 face with monocle" type="markdown", code='

<!--
# 🧐 face with monocle
#
# {
#     "emoji": "\ud83e\uddd0",
#     "description": "face with monocle",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "monocle_face"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:monocle_face: `:monocle_face:`
') }}
{{ markdown(title="😕 confused face" type="markdown", code='

<!--
# 😕 confused face
#
# {
#     "emoji": "\ud83d\ude15",
#     "description": "confused face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "confused"
#     ],
#     "tags": [],
#     "unicode_version": "6.1",
#     "ios_version": "6.0"
# }
-->

:confused: `:confused:`
') }}
{{ markdown(title="🫤 face with diagonal mouth" type="markdown", code='

<!--
# 🫤 face with diagonal mouth
#
# {
#     "emoji": "\ud83e\udee4",
#     "description": "face with diagonal mouth",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "face_with_diagonal_mouth"
#     ],
#     "tags": [
#         "confused"
#     ],
#     "unicode_version": "14.0",
#     "ios_version": "15.4"
# }
-->

:face_with_diagonal_mouth: `:face_with_diagonal_mouth:`
') }}
{{ markdown(title="😟 worried face" type="markdown", code='

<!--
# 😟 worried face
#
# {
#     "emoji": "\ud83d\ude1f",
#     "description": "worried face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "worried"
#     ],
#     "tags": [
#         "nervous"
#     ],
#     "unicode_version": "6.1",
#     "ios_version": "6.0"
# }
-->

:worried: `:worried:`
') }}
{{ markdown(title="🙁 slightly frowning face" type="markdown", code='

<!--
# 🙁 slightly frowning face
#
# {
#     "emoji": "\ud83d\ude41",
#     "description": "slightly frowning face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "slightly_frowning_face"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:slightly_frowning_face: `:slightly_frowning_face:`
') }}
{{ markdown(title="☹️ frowning face" type="markdown", code='

<!--
# ☹️ frowning face
#
# {
#     "emoji": "\u2639\ufe0f",
#     "description": "frowning face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "frowning_face"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "9.1"
# }
-->

:frowning_face: `:frowning_face:`
') }}
{{ markdown(title="😮 face with open mouth" type="markdown", code='

<!--
# 😮 face with open mouth
#
# {
#     "emoji": "\ud83d\ude2e",
#     "description": "face with open mouth",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "open_mouth"
#     ],
#     "tags": [
#         "surprise",
#         "impressed",
#         "wow"
#     ],
#     "unicode_version": "6.1",
#     "ios_version": "6.0"
# }
-->

:open_mouth: `:open_mouth:`
') }}
{{ markdown(title="😯 hushed face" type="markdown", code='

<!--
# 😯 hushed face
#
# {
#     "emoji": "\ud83d\ude2f",
#     "description": "hushed face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "hushed"
#     ],
#     "tags": [
#         "silence",
#         "speechless"
#     ],
#     "unicode_version": "6.1",
#     "ios_version": "6.0"
# }
-->

:hushed: `:hushed:`
') }}
{{ markdown(title="😲 astonished face" type="markdown", code='

<!--
# 😲 astonished face
#
# {
#     "emoji": "\ud83d\ude32",
#     "description": "astonished face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "astonished"
#     ],
#     "tags": [
#         "amazed",
#         "gasp"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:astonished: `:astonished:`
') }}
{{ markdown(title="😳 flushed face" type="markdown", code='

<!--
# 😳 flushed face
#
# {
#     "emoji": "\ud83d\ude33",
#     "description": "flushed face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "flushed"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:flushed: `:flushed:`
') }}
{{ markdown(title="🥺 pleading face" type="markdown", code='

<!--
# 🥺 pleading face
#
# {
#     "emoji": "\ud83e\udd7a",
#     "description": "pleading face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "pleading_face"
#     ],
#     "tags": [
#         "puppy",
#         "eyes"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:pleading_face: `:pleading_face:`
') }}
{{ markdown(title="🥹 face holding back tears" type="markdown", code='

<!--
# 🥹 face holding back tears
#
# {
#     "emoji": "\ud83e\udd79",
#     "description": "face holding back tears",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "face_holding_back_tears"
#     ],
#     "tags": [
#         "tears",
#         "gratitude"
#     ],
#     "unicode_version": "14.0",
#     "ios_version": "15.4"
# }
-->

:face_holding_back_tears: `:face_holding_back_tears:`
') }}
{{ markdown(title="😦 frowning face with open mouth" type="markdown", code='

<!--
# 😦 frowning face with open mouth
#
# {
#     "emoji": "\ud83d\ude26",
#     "description": "frowning face with open mouth",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "frowning"
#     ],
#     "tags": [],
#     "unicode_version": "6.1",
#     "ios_version": "6.0"
# }
-->

:frowning: `:frowning:`
') }}
{{ markdown(title="😧 anguished face" type="markdown", code='

<!--
# 😧 anguished face
#
# {
#     "emoji": "\ud83d\ude27",
#     "description": "anguished face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "anguished"
#     ],
#     "tags": [
#         "stunned"
#     ],
#     "unicode_version": "6.1",
#     "ios_version": "6.0"
# }
-->

:anguished: `:anguished:`
') }}
{{ markdown(title="😨 fearful face" type="markdown", code='

<!--
# 😨 fearful face
#
# {
#     "emoji": "\ud83d\ude28",
#     "description": "fearful face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "fearful"
#     ],
#     "tags": [
#         "scared",
#         "shocked",
#         "oops"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:fearful: `:fearful:`
') }}
{{ markdown(title="😰 anxious face with sweat" type="markdown", code='

<!--
# 😰 anxious face with sweat
#
# {
#     "emoji": "\ud83d\ude30",
#     "description": "anxious face with sweat",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "cold_sweat"
#     ],
#     "tags": [
#         "nervous"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:cold_sweat: `:cold_sweat:`
') }}
{{ markdown(title="😥 sad but relieved face" type="markdown", code='

<!--
# 😥 sad but relieved face
#
# {
#     "emoji": "\ud83d\ude25",
#     "description": "sad but relieved face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "disappointed_relieved"
#     ],
#     "tags": [
#         "phew",
#         "sweat",
#         "nervous"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:disappointed_relieved: `:disappointed_relieved:`
') }}
{{ markdown(title="😢 crying face" type="markdown", code='

<!--
# 😢 crying face
#
# {
#     "emoji": "\ud83d\ude22",
#     "description": "crying face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "cry"
#     ],
#     "tags": [
#         "sad",
#         "tear"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:cry: `:cry:`
') }}
{{ markdown(title="😭 loudly crying face" type="markdown", code='

<!--
# 😭 loudly crying face
#
# {
#     "emoji": "\ud83d\ude2d",
#     "description": "loudly crying face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "sob"
#     ],
#     "tags": [
#         "sad",
#         "cry",
#         "bawling"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:sob: `:sob:`
') }}
{{ markdown(title="😱 face screaming in fear" type="markdown", code='

<!--
# 😱 face screaming in fear
#
# {
#     "emoji": "\ud83d\ude31",
#     "description": "face screaming in fear",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "scream"
#     ],
#     "tags": [
#         "horror",
#         "shocked"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:scream: `:scream:`
') }}
{{ markdown(title="😖 confounded face" type="markdown", code='

<!--
# 😖 confounded face
#
# {
#     "emoji": "\ud83d\ude16",
#     "description": "confounded face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "confounded"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:confounded: `:confounded:`
') }}
{{ markdown(title="😣 persevering face" type="markdown", code='

<!--
# 😣 persevering face
#
# {
#     "emoji": "\ud83d\ude23",
#     "description": "persevering face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "persevere"
#     ],
#     "tags": [
#         "struggling"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:persevere: `:persevere:`
') }}
{{ markdown(title="😞 disappointed face" type="markdown", code='

<!--
# 😞 disappointed face
#
# {
#     "emoji": "\ud83d\ude1e",
#     "description": "disappointed face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "disappointed"
#     ],
#     "tags": [
#         "sad"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:disappointed: `:disappointed:`
') }}
{{ markdown(title="😓 downcast face with sweat" type="markdown", code='

<!--
# 😓 downcast face with sweat
#
# {
#     "emoji": "\ud83d\ude13",
#     "description": "downcast face with sweat",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "sweat"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:sweat: `:sweat:`
') }}
{{ markdown(title="😩 weary face" type="markdown", code='

<!--
# 😩 weary face
#
# {
#     "emoji": "\ud83d\ude29",
#     "description": "weary face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "weary"
#     ],
#     "tags": [
#         "tired"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:weary: `:weary:`
') }}
{{ markdown(title="😫 tired face" type="markdown", code='

<!--
# 😫 tired face
#
# {
#     "emoji": "\ud83d\ude2b",
#     "description": "tired face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "tired_face"
#     ],
#     "tags": [
#         "upset",
#         "whine"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:tired_face: `:tired_face:`
') }}
{{ markdown(title="🥱 yawning face" type="markdown", code='

<!--
# 🥱 yawning face
#
# {
#     "emoji": "\ud83e\udd71",
#     "description": "yawning face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "yawning_face"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:yawning_face: `:yawning_face:`
') }}
{{ markdown(title="😤 face with steam from nose" type="markdown", code='

<!--
# 😤 face with steam from nose
#
# {
#     "emoji": "\ud83d\ude24",
#     "description": "face with steam from nose",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "triumph"
#     ],
#     "tags": [
#         "smug"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:triumph: `:triumph:`
') }}
{{ markdown(title="😡 enraged face" type="markdown", code='

<!--
# 😡 enraged face
#
# {
#     "emoji": "\ud83d\ude21",
#     "description": "enraged face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "rage",
#         "pout"
#     ],
#     "tags": [
#         "angry"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:rage: `:rage:`

:pout: `:pout:`
') }}
{{ markdown(title="😠 angry face" type="markdown", code='

<!--
# 😠 angry face
#
# {
#     "emoji": "\ud83d\ude20",
#     "description": "angry face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "angry"
#     ],
#     "tags": [
#         "mad",
#         "annoyed"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:angry: `:angry:`
') }}
{{ markdown(title="🤬 face with symbols on mouth" type="markdown", code='

<!--
# 🤬 face with symbols on mouth
#
# {
#     "emoji": "\ud83e\udd2c",
#     "description": "face with symbols on mouth",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "cursing_face"
#     ],
#     "tags": [
#         "foul"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:cursing_face: `:cursing_face:`
') }}
{{ markdown(title="😈 smiling face with horns" type="markdown", code='

<!--
# 😈 smiling face with horns
#
# {
#     "emoji": "\ud83d\ude08",
#     "description": "smiling face with horns",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "smiling_imp"
#     ],
#     "tags": [
#         "devil",
#         "evil",
#         "horns"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:smiling_imp: `:smiling_imp:`
') }}
{{ markdown(title="👿 angry face with horns" type="markdown", code='

<!--
# 👿 angry face with horns
#
# {
#     "emoji": "\ud83d\udc7f",
#     "description": "angry face with horns",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "imp"
#     ],
#     "tags": [
#         "angry",
#         "devil",
#         "evil",
#         "horns"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:imp: `:imp:`
') }}
{{ markdown(title="💀 skull" type="markdown", code='

<!--
# 💀 skull
#
# {
#     "emoji": "\ud83d\udc80",
#     "description": "skull",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "skull"
#     ],
#     "tags": [
#         "dead",
#         "danger",
#         "poison"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:skull: `:skull:`
') }}
{{ markdown(title="☠️ skull and crossbones" type="markdown", code='

<!--
# ☠️ skull and crossbones
#
# {
#     "emoji": "\u2620\ufe0f",
#     "description": "skull and crossbones",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "skull_and_crossbones"
#     ],
#     "tags": [
#         "danger",
#         "pirate"
#     ],
#     "unicode_version": "",
#     "ios_version": "9.1"
# }
-->

:skull_and_crossbones: `:skull_and_crossbones:`
') }}
{{ markdown(title="💩 pile of poo" type="markdown", code='

<!--
# 💩 pile of poo
#
# {
#     "emoji": "\ud83d\udca9",
#     "description": "pile of poo",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "hankey",
#         "poop",
#         "shit"
#     ],
#     "tags": [
#         "crap"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:hankey: `:hankey:`

:poop: `:poop:`

:shit: `:shit:`
') }}
{{ markdown(title="🤡 clown face" type="markdown", code='

<!--
# 🤡 clown face
#
# {
#     "emoji": "\ud83e\udd21",
#     "description": "clown face",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "clown_face"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:clown_face: `:clown_face:`
') }}
{{ markdown(title="👹 ogre" type="markdown", code='

<!--
# 👹 ogre
#
# {
#     "emoji": "\ud83d\udc79",
#     "description": "ogre",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "japanese_ogre"
#     ],
#     "tags": [
#         "monster"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:japanese_ogre: `:japanese_ogre:`
') }}
{{ markdown(title="👺 goblin" type="markdown", code='

<!--
# 👺 goblin
#
# {
#     "emoji": "\ud83d\udc7a",
#     "description": "goblin",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "japanese_goblin"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:japanese_goblin: `:japanese_goblin:`
') }}
{{ markdown(title="👻 ghost" type="markdown", code='

<!--
# 👻 ghost
#
# {
#     "emoji": "\ud83d\udc7b",
#     "description": "ghost",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "ghost"
#     ],
#     "tags": [
#         "halloween"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:ghost: `:ghost:`
') }}
{{ markdown(title="👽 alien" type="markdown", code='

<!--
# 👽 alien
#
# {
#     "emoji": "\ud83d\udc7d",
#     "description": "alien",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "alien"
#     ],
#     "tags": [
#         "ufo"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:alien: `:alien:`
') }}
{{ markdown(title="👾 alien monster" type="markdown", code='

<!--
# 👾 alien monster
#
# {
#     "emoji": "\ud83d\udc7e",
#     "description": "alien monster",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "space_invader"
#     ],
#     "tags": [
#         "game",
#         "retro"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:space_invader: `:space_invader:`
') }}
{{ markdown(title="🤖 robot" type="markdown", code='

<!--
# 🤖 robot
#
# {
#     "emoji": "\ud83e\udd16",
#     "description": "robot",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "robot"
#     ],
#     "tags": [],
#     "unicode_version": "8.0",
#     "ios_version": "9.1"
# }
-->

:robot: `:robot:`
') }}
{{ markdown(title="😺 grinning cat" type="markdown", code='

<!--
# 😺 grinning cat
#
# {
#     "emoji": "\ud83d\ude3a",
#     "description": "grinning cat",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "smiley_cat"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:smiley_cat: `:smiley_cat:`
') }}
{{ markdown(title="😸 grinning cat with smiling eyes" type="markdown", code='

<!--
# 😸 grinning cat with smiling eyes
#
# {
#     "emoji": "\ud83d\ude38",
#     "description": "grinning cat with smiling eyes",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "smile_cat"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:smile_cat: `:smile_cat:`
') }}
{{ markdown(title="😹 cat with tears of joy" type="markdown", code='

<!--
# 😹 cat with tears of joy
#
# {
#     "emoji": "\ud83d\ude39",
#     "description": "cat with tears of joy",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "joy_cat"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:joy_cat: `:joy_cat:`
') }}
{{ markdown(title="😻 smiling cat with heart-eyes" type="markdown", code='

<!--
# 😻 smiling cat with heart-eyes
#
# {
#     "emoji": "\ud83d\ude3b",
#     "description": "smiling cat with heart-eyes",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "heart_eyes_cat"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:heart_eyes_cat: `:heart_eyes_cat:`
') }}
{{ markdown(title="😼 cat with wry smile" type="markdown", code='

<!--
# 😼 cat with wry smile
#
# {
#     "emoji": "\ud83d\ude3c",
#     "description": "cat with wry smile",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "smirk_cat"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:smirk_cat: `:smirk_cat:`
') }}
{{ markdown(title="😽 kissing cat" type="markdown", code='

<!--
# 😽 kissing cat
#
# {
#     "emoji": "\ud83d\ude3d",
#     "description": "kissing cat",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "kissing_cat"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:kissing_cat: `:kissing_cat:`
') }}
{{ markdown(title="🙀 weary cat" type="markdown", code='

<!--
# 🙀 weary cat
#
# {
#     "emoji": "\ud83d\ude40",
#     "description": "weary cat",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "scream_cat"
#     ],
#     "tags": [
#         "horror"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:scream_cat: `:scream_cat:`
') }}
{{ markdown(title="😿 crying cat" type="markdown", code='

<!--
# 😿 crying cat
#
# {
#     "emoji": "\ud83d\ude3f",
#     "description": "crying cat",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "crying_cat_face"
#     ],
#     "tags": [
#         "sad",
#         "tear"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:crying_cat_face: `:crying_cat_face:`
') }}
{{ markdown(title="😾 pouting cat" type="markdown", code='

<!--
# 😾 pouting cat
#
# {
#     "emoji": "\ud83d\ude3e",
#     "description": "pouting cat",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "pouting_cat"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:pouting_cat: `:pouting_cat:`
') }}
{{ markdown(title="🙈 see-no-evil monkey" type="markdown", code='

<!--
# 🙈 see-no-evil monkey
#
# {
#     "emoji": "\ud83d\ude48",
#     "description": "see-no-evil monkey",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "see_no_evil"
#     ],
#     "tags": [
#         "monkey",
#         "blind",
#         "ignore"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:see_no_evil: `:see_no_evil:`
') }}
{{ markdown(title="🙉 hear-no-evil monkey" type="markdown", code='

<!--
# 🙉 hear-no-evil monkey
#
# {
#     "emoji": "\ud83d\ude49",
#     "description": "hear-no-evil monkey",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "hear_no_evil"
#     ],
#     "tags": [
#         "monkey",
#         "deaf"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:hear_no_evil: `:hear_no_evil:`
') }}
{{ markdown(title="🙊 speak-no-evil monkey" type="markdown", code='

<!--
# 🙊 speak-no-evil monkey
#
# {
#     "emoji": "\ud83d\ude4a",
#     "description": "speak-no-evil monkey",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "speak_no_evil"
#     ],
#     "tags": [
#         "monkey",
#         "mute",
#         "hush"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:speak_no_evil: `:speak_no_evil:`
') }}
{{ markdown(title="💌 love letter" type="markdown", code='

<!--
# 💌 love letter
#
# {
#     "emoji": "\ud83d\udc8c",
#     "description": "love letter",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "love_letter"
#     ],
#     "tags": [
#         "email",
#         "envelope"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:love_letter: `:love_letter:`
') }}
{{ markdown(title="💘 heart with arrow" type="markdown", code='

<!--
# 💘 heart with arrow
#
# {
#     "emoji": "\ud83d\udc98",
#     "description": "heart with arrow",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "cupid"
#     ],
#     "tags": [
#         "love",
#         "heart"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:cupid: `:cupid:`
') }}
{{ markdown(title="💝 heart with ribbon" type="markdown", code='

<!--
# 💝 heart with ribbon
#
# {
#     "emoji": "\ud83d\udc9d",
#     "description": "heart with ribbon",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "gift_heart"
#     ],
#     "tags": [
#         "chocolates"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:gift_heart: `:gift_heart:`
') }}
{{ markdown(title="💖 sparkling heart" type="markdown", code='

<!--
# 💖 sparkling heart
#
# {
#     "emoji": "\ud83d\udc96",
#     "description": "sparkling heart",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "sparkling_heart"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:sparkling_heart: `:sparkling_heart:`
') }}
{{ markdown(title="💗 growing heart" type="markdown", code='

<!--
# 💗 growing heart
#
# {
#     "emoji": "\ud83d\udc97",
#     "description": "growing heart",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "heartpulse"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:heartpulse: `:heartpulse:`
') }}
{{ markdown(title="💓 beating heart" type="markdown", code='

<!--
# 💓 beating heart
#
# {
#     "emoji": "\ud83d\udc93",
#     "description": "beating heart",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "heartbeat"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:heartbeat: `:heartbeat:`
') }}
{{ markdown(title="💞 revolving hearts" type="markdown", code='

<!--
# 💞 revolving hearts
#
# {
#     "emoji": "\ud83d\udc9e",
#     "description": "revolving hearts",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "revolving_hearts"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:revolving_hearts: `:revolving_hearts:`
') }}
{{ markdown(title="💕 two hearts" type="markdown", code='

<!--
# 💕 two hearts
#
# {
#     "emoji": "\ud83d\udc95",
#     "description": "two hearts",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "two_hearts"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:two_hearts: `:two_hearts:`
') }}
{{ markdown(title="💟 heart decoration" type="markdown", code='

<!--
# 💟 heart decoration
#
# {
#     "emoji": "\ud83d\udc9f",
#     "description": "heart decoration",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "heart_decoration"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:heart_decoration: `:heart_decoration:`
') }}
{{ markdown(title="❣️ heart exclamation" type="markdown", code='

<!--
# ❣️ heart exclamation
#
# {
#     "emoji": "\u2763\ufe0f",
#     "description": "heart exclamation",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "heavy_heart_exclamation"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "9.1"
# }
-->

:heavy_heart_exclamation: `:heavy_heart_exclamation:`
') }}
{{ markdown(title="💔 broken heart" type="markdown", code='

<!--
# 💔 broken heart
#
# {
#     "emoji": "\ud83d\udc94",
#     "description": "broken heart",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "broken_heart"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:broken_heart: `:broken_heart:`
') }}
{{ markdown(title="❤️‍🔥 heart on fire" type="markdown", code='

<!--
# ❤️‍🔥 heart on fire
#
# {
#     "emoji": "\u2764\ufe0f\u200d\ud83d\udd25",
#     "description": "heart on fire",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "heart_on_fire"
#     ],
#     "tags": [],
#     "unicode_version": "13.1",
#     "ios_version": "14.0"
# }
-->

:heart_on_fire: `:heart_on_fire:`
') }}
{{ markdown(title="❤️‍🩹 mending heart" type="markdown", code='

<!--
# ❤️‍🩹 mending heart
#
# {
#     "emoji": "\u2764\ufe0f\u200d\ud83e\ude79",
#     "description": "mending heart",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "mending_heart"
#     ],
#     "tags": [],
#     "unicode_version": "13.1",
#     "ios_version": "14.0"
# }
-->

:mending_heart: `:mending_heart:`
') }}
{{ markdown(title="❤️ red heart" type="markdown", code='

<!--
# ❤️ red heart
#
# {
#     "emoji": "\u2764\ufe0f",
#     "description": "red heart",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "heart"
#     ],
#     "tags": [
#         "love"
#     ],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:heart: `:heart:`
') }}
{{ markdown(title="🩷 pink heart" type="markdown", code='

<!--
# 🩷 pink heart
#
# {
#     "emoji": "\ud83e\ude77",
#     "description": "pink heart",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "pink_heart"
#     ],
#     "tags": [],
#     "unicode_version": "15.0",
#     "ios_version": "16.4"
# }
-->

:pink_heart: `:pink_heart:`
') }}
{{ markdown(title="🧡 orange heart" type="markdown", code='

<!--
# 🧡 orange heart
#
# {
#     "emoji": "\ud83e\udde1",
#     "description": "orange heart",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "orange_heart"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:orange_heart: `:orange_heart:`
') }}
{{ markdown(title="💛 yellow heart" type="markdown", code='

<!--
# 💛 yellow heart
#
# {
#     "emoji": "\ud83d\udc9b",
#     "description": "yellow heart",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "yellow_heart"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:yellow_heart: `:yellow_heart:`
') }}
{{ markdown(title="💚 green heart" type="markdown", code='

<!--
# 💚 green heart
#
# {
#     "emoji": "\ud83d\udc9a",
#     "description": "green heart",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "green_heart"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:green_heart: `:green_heart:`
') }}
{{ markdown(title="💙 blue heart" type="markdown", code='

<!--
# 💙 blue heart
#
# {
#     "emoji": "\ud83d\udc99",
#     "description": "blue heart",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "blue_heart"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:blue_heart: `:blue_heart:`
') }}
{{ markdown(title="🩵 light blue heart" type="markdown", code='

<!--
# 🩵 light blue heart
#
# {
#     "emoji": "\ud83e\ude75",
#     "description": "light blue heart",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "light_blue_heart"
#     ],
#     "tags": [],
#     "unicode_version": "15.0",
#     "ios_version": "16.4"
# }
-->

:light_blue_heart: `:light_blue_heart:`
') }}
{{ markdown(title="💜 purple heart" type="markdown", code='

<!--
# 💜 purple heart
#
# {
#     "emoji": "\ud83d\udc9c",
#     "description": "purple heart",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "purple_heart"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:purple_heart: `:purple_heart:`
') }}
{{ markdown(title="🤎 brown heart" type="markdown", code='

<!--
# 🤎 brown heart
#
# {
#     "emoji": "\ud83e\udd0e",
#     "description": "brown heart",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "brown_heart"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:brown_heart: `:brown_heart:`
') }}
{{ markdown(title="🖤 black heart" type="markdown", code='

<!--
# 🖤 black heart
#
# {
#     "emoji": "\ud83d\udda4",
#     "description": "black heart",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "black_heart"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:black_heart: `:black_heart:`
') }}
{{ markdown(title="🩶 grey heart" type="markdown", code='

<!--
# 🩶 grey heart
#
# {
#     "emoji": "\ud83e\ude76",
#     "description": "grey heart",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "grey_heart"
#     ],
#     "tags": [],
#     "unicode_version": "15.0",
#     "ios_version": "16.4"
# }
-->

:grey_heart: `:grey_heart:`
') }}
{{ markdown(title="🤍 white heart" type="markdown", code='

<!--
# 🤍 white heart
#
# {
#     "emoji": "\ud83e\udd0d",
#     "description": "white heart",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "white_heart"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:white_heart: `:white_heart:`
') }}
{{ markdown(title="💋 kiss mark" type="markdown", code='

<!--
# 💋 kiss mark
#
# {
#     "emoji": "\ud83d\udc8b",
#     "description": "kiss mark",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "kiss"
#     ],
#     "tags": [
#         "lipstick"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:kiss: `:kiss:`
') }}
{{ markdown(title="💯 hundred points" type="markdown", code='

<!--
# 💯 hundred points
#
# {
#     "emoji": "\ud83d\udcaf",
#     "description": "hundred points",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "100"
#     ],
#     "tags": [
#         "score",
#         "perfect"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:100: `:100:`
') }}
{{ markdown(title="💢 anger symbol" type="markdown", code='

<!--
# 💢 anger symbol
#
# {
#     "emoji": "\ud83d\udca2",
#     "description": "anger symbol",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "anger"
#     ],
#     "tags": [
#         "angry"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:anger: `:anger:`
') }}
{{ markdown(title="💥 collision" type="markdown", code='

<!--
# 💥 collision
#
# {
#     "emoji": "\ud83d\udca5",
#     "description": "collision",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "boom",
#         "collision"
#     ],
#     "tags": [
#         "explode"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:boom: `:boom:`

:collision: `:collision:`
') }}
{{ markdown(title="💫 dizzy" type="markdown", code='

<!--
# 💫 dizzy
#
# {
#     "emoji": "\ud83d\udcab",
#     "description": "dizzy",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "dizzy"
#     ],
#     "tags": [
#         "star"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:dizzy: `:dizzy:`
') }}
{{ markdown(title="💦 sweat droplets" type="markdown", code='

<!--
# 💦 sweat droplets
#
# {
#     "emoji": "\ud83d\udca6",
#     "description": "sweat droplets",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "sweat_drops"
#     ],
#     "tags": [
#         "water",
#         "workout"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:sweat_drops: `:sweat_drops:`
') }}
{{ markdown(title="💨 dashing away" type="markdown", code='

<!--
# 💨 dashing away
#
# {
#     "emoji": "\ud83d\udca8",
#     "description": "dashing away",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "dash"
#     ],
#     "tags": [
#         "wind",
#         "blow",
#         "fast"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:dash: `:dash:`
') }}
{{ markdown(title="🕳️ hole" type="markdown", code='

<!--
# 🕳️ hole
#
# {
#     "emoji": "\ud83d\udd73\ufe0f",
#     "description": "hole",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "hole"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:hole: `:hole:`
') }}
{{ markdown(title="💬 speech balloon" type="markdown", code='

<!--
# 💬 speech balloon
#
# {
#     "emoji": "\ud83d\udcac",
#     "description": "speech balloon",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "speech_balloon"
#     ],
#     "tags": [
#         "comment"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:speech_balloon: `:speech_balloon:`
') }}
{{ markdown(title="👁️‍🗨️ eye in speech bubble" type="markdown", code='

<!--
# 👁️‍🗨️ eye in speech bubble
#
# {
#     "emoji": "\ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f",
#     "description": "eye in speech bubble",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "eye_speech_bubble"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:eye_speech_bubble: `:eye_speech_bubble:`
') }}
{{ markdown(title="🗨️ left speech bubble" type="markdown", code='

<!--
# 🗨️ left speech bubble
#
# {
#     "emoji": "\ud83d\udde8\ufe0f",
#     "description": "left speech bubble",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "left_speech_bubble"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:left_speech_bubble: `:left_speech_bubble:`
') }}
{{ markdown(title="🗯️ right anger bubble" type="markdown", code='

<!--
# 🗯️ right anger bubble
#
# {
#     "emoji": "\ud83d\uddef\ufe0f",
#     "description": "right anger bubble",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "right_anger_bubble"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:right_anger_bubble: `:right_anger_bubble:`
') }}
{{ markdown(title="💭 thought balloon" type="markdown", code='

<!--
# 💭 thought balloon
#
# {
#     "emoji": "\ud83d\udcad",
#     "description": "thought balloon",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "thought_balloon"
#     ],
#     "tags": [
#         "thinking"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:thought_balloon: `:thought_balloon:`
') }}
{{ markdown(title="💤 ZZZ" type="markdown", code='

<!--
# 💤 ZZZ
#
# {
#     "emoji": "\ud83d\udca4",
#     "description": "ZZZ",
#     "category": "Smileys & Emotion",
#     "aliases": [
#         "zzz"
#     ],
#     "tags": [
#         "sleeping"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:zzz: `:zzz:`
') }}
{{ markdown(title="👋 waving hand" type="markdown", code='

<!--
# 👋 waving hand
#
# {
#     "emoji": "\ud83d\udc4b",
#     "description": "waving hand",
#     "category": "People & Body",
#     "aliases": [
#         "wave"
#     ],
#     "tags": [
#         "goodbye"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:wave: `:wave:`
') }}
{{ markdown(title="🤚 raised back of hand" type="markdown", code='

<!--
# 🤚 raised back of hand
#
# {
#     "emoji": "\ud83e\udd1a",
#     "description": "raised back of hand",
#     "category": "People & Body",
#     "aliases": [
#         "raised_back_of_hand"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:raised_back_of_hand: `:raised_back_of_hand:`
') }}
{{ markdown(title="🖐️ hand with fingers splayed" type="markdown", code='

<!--
# 🖐️ hand with fingers splayed
#
# {
#     "emoji": "\ud83d\udd90\ufe0f",
#     "description": "hand with fingers splayed",
#     "category": "People & Body",
#     "aliases": [
#         "raised_hand_with_fingers_splayed"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1",
#     "skin_tones": true
# }
-->

:raised_hand_with_fingers_splayed: `:raised_hand_with_fingers_splayed:`
') }}
{{ markdown(title="✋ raised hand" type="markdown", code='

<!--
# ✋ raised hand
#
# {
#     "emoji": "\u270b",
#     "description": "raised hand",
#     "category": "People & Body",
#     "aliases": [
#         "hand",
#         "raised_hand"
#     ],
#     "tags": [
#         "highfive",
#         "stop"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:hand: `:hand:`

:raised_hand: `:raised_hand:`
') }}
{{ markdown(title="🖖 vulcan salute" type="markdown", code='

<!--
# 🖖 vulcan salute
#
# {
#     "emoji": "\ud83d\udd96",
#     "description": "vulcan salute",
#     "category": "People & Body",
#     "aliases": [
#         "vulcan_salute"
#     ],
#     "tags": [
#         "prosper",
#         "spock"
#     ],
#     "unicode_version": "7.0",
#     "ios_version": "8.3",
#     "skin_tones": true
# }
-->

:vulcan_salute: `:vulcan_salute:`
') }}
{{ markdown(title="🫱 rightwards hand" type="markdown", code='

<!--
# 🫱 rightwards hand
#
# {
#     "emoji": "\ud83e\udef1",
#     "description": "rightwards hand",
#     "category": "People & Body",
#     "aliases": [
#         "rightwards_hand"
#     ],
#     "tags": [],
#     "unicode_version": "14.0",
#     "ios_version": "15.4",
#     "skin_tones": true
# }
-->

:rightwards_hand: `:rightwards_hand:`
') }}
{{ markdown(title="🫲 leftwards hand" type="markdown", code='

<!--
# 🫲 leftwards hand
#
# {
#     "emoji": "\ud83e\udef2",
#     "description": "leftwards hand",
#     "category": "People & Body",
#     "aliases": [
#         "leftwards_hand"
#     ],
#     "tags": [],
#     "unicode_version": "14.0",
#     "ios_version": "15.4",
#     "skin_tones": true
# }
-->

:leftwards_hand: `:leftwards_hand:`
') }}
{{ markdown(title="🫳 palm down hand" type="markdown", code='

<!--
# 🫳 palm down hand
#
# {
#     "emoji": "\ud83e\udef3",
#     "description": "palm down hand",
#     "category": "People & Body",
#     "aliases": [
#         "palm_down_hand"
#     ],
#     "tags": [],
#     "unicode_version": "14.0",
#     "ios_version": "15.4",
#     "skin_tones": true
# }
-->

:palm_down_hand: `:palm_down_hand:`
') }}
{{ markdown(title="🫴 palm up hand" type="markdown", code='

<!--
# 🫴 palm up hand
#
# {
#     "emoji": "\ud83e\udef4",
#     "description": "palm up hand",
#     "category": "People & Body",
#     "aliases": [
#         "palm_up_hand"
#     ],
#     "tags": [],
#     "unicode_version": "14.0",
#     "ios_version": "15.4",
#     "skin_tones": true
# }
-->

:palm_up_hand: `:palm_up_hand:`
') }}
{{ markdown(title="🫷 leftwards pushing hand" type="markdown", code='

<!--
# 🫷 leftwards pushing hand
#
# {
#     "emoji": "\ud83e\udef7",
#     "description": "leftwards pushing hand",
#     "category": "People & Body",
#     "aliases": [
#         "leftwards_pushing_hand"
#     ],
#     "tags": [],
#     "unicode_version": "15.0",
#     "ios_version": "16.4",
#     "skin_tones": true
# }
-->

:leftwards_pushing_hand: `:leftwards_pushing_hand:`
') }}
{{ markdown(title="🫸 rightwards pushing hand" type="markdown", code='

<!--
# 🫸 rightwards pushing hand
#
# {
#     "emoji": "\ud83e\udef8",
#     "description": "rightwards pushing hand",
#     "category": "People & Body",
#     "aliases": [
#         "rightwards_pushing_hand"
#     ],
#     "tags": [],
#     "unicode_version": "15.0",
#     "ios_version": "16.4",
#     "skin_tones": true
# }
-->

:rightwards_pushing_hand: `:rightwards_pushing_hand:`
') }}
{{ markdown(title="👌 OK hand" type="markdown", code='

<!--
# 👌 OK hand
#
# {
#     "emoji": "\ud83d\udc4c",
#     "description": "OK hand",
#     "category": "People & Body",
#     "aliases": [
#         "ok_hand"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:ok_hand: `:ok_hand:`
') }}
{{ markdown(title="🤌 pinched fingers" type="markdown", code='

<!--
# 🤌 pinched fingers
#
# {
#     "emoji": "\ud83e\udd0c",
#     "description": "pinched fingers",
#     "category": "People & Body",
#     "aliases": [
#         "pinched_fingers"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0",
#     "skin_tones": true
# }
-->

:pinched_fingers: `:pinched_fingers:`
') }}
{{ markdown(title="🤏 pinching hand" type="markdown", code='

<!--
# 🤏 pinching hand
#
# {
#     "emoji": "\ud83e\udd0f",
#     "description": "pinching hand",
#     "category": "People & Body",
#     "aliases": [
#         "pinching_hand"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0",
#     "skin_tones": true
# }
-->

:pinching_hand: `:pinching_hand:`
') }}
{{ markdown(title="✌️ victory hand" type="markdown", code='

<!--
# ✌️ victory hand
#
# {
#     "emoji": "\u270c\ufe0f",
#     "description": "victory hand",
#     "category": "People & Body",
#     "aliases": [
#         "v"
#     ],
#     "tags": [
#         "victory",
#         "peace"
#     ],
#     "unicode_version": "",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:v: `:v:`
') }}
{{ markdown(title="🤞 crossed fingers" type="markdown", code='

<!--
# 🤞 crossed fingers
#
# {
#     "emoji": "\ud83e\udd1e",
#     "description": "crossed fingers",
#     "category": "People & Body",
#     "aliases": [
#         "crossed_fingers"
#     ],
#     "tags": [
#         "luck",
#         "hopeful"
#     ],
#     "unicode_version": "9.0",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:crossed_fingers: `:crossed_fingers:`
') }}
{{ markdown(title="🫰 hand with index finger and thumb crossed" type="markdown", code='

<!--
# 🫰 hand with index finger and thumb crossed
#
# {
#     "emoji": "\ud83e\udef0",
#     "description": "hand with index finger and thumb crossed",
#     "category": "People & Body",
#     "aliases": [
#         "hand_with_index_finger_and_thumb_crossed"
#     ],
#     "tags": [],
#     "unicode_version": "14.0",
#     "ios_version": "15.4",
#     "skin_tones": true
# }
-->

:hand_with_index_finger_and_thumb_crossed: `:hand_with_index_finger_and_thumb_crossed:`
') }}
{{ markdown(title="🤟 love-you gesture" type="markdown", code='

<!--
# 🤟 love-you gesture
#
# {
#     "emoji": "\ud83e\udd1f",
#     "description": "love-you gesture",
#     "category": "People & Body",
#     "aliases": [
#         "love_you_gesture"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:love_you_gesture: `:love_you_gesture:`
') }}
{{ markdown(title="🤘 sign of the horns" type="markdown", code='

<!--
# 🤘 sign of the horns
#
# {
#     "emoji": "\ud83e\udd18",
#     "description": "sign of the horns",
#     "category": "People & Body",
#     "aliases": [
#         "metal"
#     ],
#     "tags": [],
#     "unicode_version": "8.0",
#     "ios_version": "9.1",
#     "skin_tones": true
# }
-->

:metal: `:metal:`
') }}
{{ markdown(title="🤙 call me hand" type="markdown", code='

<!--
# 🤙 call me hand
#
# {
#     "emoji": "\ud83e\udd19",
#     "description": "call me hand",
#     "category": "People & Body",
#     "aliases": [
#         "call_me_hand"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:call_me_hand: `:call_me_hand:`
') }}
{{ markdown(title="👈 backhand index pointing left" type="markdown", code='

<!--
# 👈 backhand index pointing left
#
# {
#     "emoji": "\ud83d\udc48",
#     "description": "backhand index pointing left",
#     "category": "People & Body",
#     "aliases": [
#         "point_left"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:point_left: `:point_left:`
') }}
{{ markdown(title="👉 backhand index pointing right" type="markdown", code='

<!--
# 👉 backhand index pointing right
#
# {
#     "emoji": "\ud83d\udc49",
#     "description": "backhand index pointing right",
#     "category": "People & Body",
#     "aliases": [
#         "point_right"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:point_right: `:point_right:`
') }}
{{ markdown(title="👆 backhand index pointing up" type="markdown", code='

<!--
# 👆 backhand index pointing up
#
# {
#     "emoji": "\ud83d\udc46",
#     "description": "backhand index pointing up",
#     "category": "People & Body",
#     "aliases": [
#         "point_up_2"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:point_up_2: `:point_up_2:`
') }}
{{ markdown(title="🖕 middle finger" type="markdown", code='

<!--
# 🖕 middle finger
#
# {
#     "emoji": "\ud83d\udd95",
#     "description": "middle finger",
#     "category": "People & Body",
#     "aliases": [
#         "middle_finger",
#         "fu"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1",
#     "skin_tones": true
# }
-->

:middle_finger: `:middle_finger:`

:fu: `:fu:`
') }}
{{ markdown(title="👇 backhand index pointing down" type="markdown", code='

<!--
# 👇 backhand index pointing down
#
# {
#     "emoji": "\ud83d\udc47",
#     "description": "backhand index pointing down",
#     "category": "People & Body",
#     "aliases": [
#         "point_down"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:point_down: `:point_down:`
') }}
{{ markdown(title="☝️ index pointing up" type="markdown", code='

<!--
# ☝️ index pointing up
#
# {
#     "emoji": "\u261d\ufe0f",
#     "description": "index pointing up",
#     "category": "People & Body",
#     "aliases": [
#         "point_up"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:point_up: `:point_up:`
') }}
{{ markdown(title="🫵 index pointing at the viewer" type="markdown", code='

<!--
# 🫵 index pointing at the viewer
#
# {
#     "emoji": "\ud83e\udef5",
#     "description": "index pointing at the viewer",
#     "category": "People & Body",
#     "aliases": [
#         "index_pointing_at_the_viewer"
#     ],
#     "tags": [],
#     "unicode_version": "14.0",
#     "ios_version": "15.4",
#     "skin_tones": true
# }
-->

:index_pointing_at_the_viewer: `:index_pointing_at_the_viewer:`
') }}
{{ markdown(title="👍 thumbs up" type="markdown", code='

<!--
# 👍 thumbs up
#
# {
#     "emoji": "\ud83d\udc4d",
#     "description": "thumbs up",
#     "category": "People & Body",
#     "aliases": [
#         "+1",
#         "thumbsup"
#     ],
#     "tags": [
#         "approve",
#         "ok"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:+1: `:+1:`

:thumbsup: `:thumbsup:`
') }}
{{ markdown(title="👎 thumbs down" type="markdown", code='

<!--
# 👎 thumbs down
#
# {
#     "emoji": "\ud83d\udc4e",
#     "description": "thumbs down",
#     "category": "People & Body",
#     "aliases": [
#         "-1",
#         "thumbsdown"
#     ],
#     "tags": [
#         "disapprove",
#         "bury"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:-1: `:-1:`

:thumbsdown: `:thumbsdown:`
') }}
{{ markdown(title="✊ raised fist" type="markdown", code='

<!--
# ✊ raised fist
#
# {
#     "emoji": "\u270a",
#     "description": "raised fist",
#     "category": "People & Body",
#     "aliases": [
#         "fist_raised",
#         "fist"
#     ],
#     "tags": [
#         "power"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:fist_raised: `:fist_raised:`

:fist: `:fist:`
') }}
{{ markdown(title="👊 oncoming fist" type="markdown", code='

<!--
# 👊 oncoming fist
#
# {
#     "emoji": "\ud83d\udc4a",
#     "description": "oncoming fist",
#     "category": "People & Body",
#     "aliases": [
#         "fist_oncoming",
#         "facepunch",
#         "punch"
#     ],
#     "tags": [
#         "attack"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:fist_oncoming: `:fist_oncoming:`

:facepunch: `:facepunch:`

:punch: `:punch:`
') }}
{{ markdown(title="🤛 left-facing fist" type="markdown", code='

<!--
# 🤛 left-facing fist
#
# {
#     "emoji": "\ud83e\udd1b",
#     "description": "left-facing fist",
#     "category": "People & Body",
#     "aliases": [
#         "fist_left"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:fist_left: `:fist_left:`
') }}
{{ markdown(title="🤜 right-facing fist" type="markdown", code='

<!--
# 🤜 right-facing fist
#
# {
#     "emoji": "\ud83e\udd1c",
#     "description": "right-facing fist",
#     "category": "People & Body",
#     "aliases": [
#         "fist_right"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:fist_right: `:fist_right:`
') }}
{{ markdown(title="👏 clapping hands" type="markdown", code='

<!--
# 👏 clapping hands
#
# {
#     "emoji": "\ud83d\udc4f",
#     "description": "clapping hands",
#     "category": "People & Body",
#     "aliases": [
#         "clap"
#     ],
#     "tags": [
#         "praise",
#         "applause"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:clap: `:clap:`
') }}
{{ markdown(title="🙌 raising hands" type="markdown", code='

<!--
# 🙌 raising hands
#
# {
#     "emoji": "\ud83d\ude4c",
#     "description": "raising hands",
#     "category": "People & Body",
#     "aliases": [
#         "raised_hands"
#     ],
#     "tags": [
#         "hooray"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:raised_hands: `:raised_hands:`
') }}
{{ markdown(title="🫶 heart hands" type="markdown", code='

<!--
# 🫶 heart hands
#
# {
#     "emoji": "\ud83e\udef6",
#     "description": "heart hands",
#     "category": "People & Body",
#     "aliases": [
#         "heart_hands"
#     ],
#     "tags": [
#         "love"
#     ],
#     "unicode_version": "14.0",
#     "ios_version": "15.4",
#     "skin_tones": true
# }
-->

:heart_hands: `:heart_hands:`
') }}
{{ markdown(title="👐 open hands" type="markdown", code='

<!--
# 👐 open hands
#
# {
#     "emoji": "\ud83d\udc50",
#     "description": "open hands",
#     "category": "People & Body",
#     "aliases": [
#         "open_hands"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:open_hands: `:open_hands:`
') }}
{{ markdown(title="🤲 palms up together" type="markdown", code='

<!--
# 🤲 palms up together
#
# {
#     "emoji": "\ud83e\udd32",
#     "description": "palms up together",
#     "category": "People & Body",
#     "aliases": [
#         "palms_up_together"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:palms_up_together: `:palms_up_together:`
') }}
{{ markdown(title="🤝 handshake" type="markdown", code='

<!--
# 🤝 handshake
#
# {
#     "emoji": "\ud83e\udd1d",
#     "description": "handshake",
#     "category": "People & Body",
#     "aliases": [
#         "handshake"
#     ],
#     "tags": [
#         "deal"
#     ],
#     "unicode_version": "9.0",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:handshake: `:handshake:`
') }}
{{ markdown(title="🙏 folded hands" type="markdown", code='

<!--
# 🙏 folded hands
#
# {
#     "emoji": "\ud83d\ude4f",
#     "description": "folded hands",
#     "category": "People & Body",
#     "aliases": [
#         "pray"
#     ],
#     "tags": [
#         "please",
#         "hope",
#         "wish"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:pray: `:pray:`
') }}
{{ markdown(title="✍️ writing hand" type="markdown", code='

<!--
# ✍️ writing hand
#
# {
#     "emoji": "\u270d\ufe0f",
#     "description": "writing hand",
#     "category": "People & Body",
#     "aliases": [
#         "writing_hand"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "9.1",
#     "skin_tones": true
# }
-->

:writing_hand: `:writing_hand:`
') }}
{{ markdown(title="💅 nail polish" type="markdown", code='

<!--
# 💅 nail polish
#
# {
#     "emoji": "\ud83d\udc85",
#     "description": "nail polish",
#     "category": "People & Body",
#     "aliases": [
#         "nail_care"
#     ],
#     "tags": [
#         "beauty",
#         "manicure"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:nail_care: `:nail_care:`
') }}
{{ markdown(title="🤳 selfie" type="markdown", code='

<!--
# 🤳 selfie
#
# {
#     "emoji": "\ud83e\udd33",
#     "description": "selfie",
#     "category": "People & Body",
#     "aliases": [
#         "selfie"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:selfie: `:selfie:`
') }}
{{ markdown(title="💪 flexed biceps" type="markdown", code='

<!--
# 💪 flexed biceps
#
# {
#     "emoji": "\ud83d\udcaa",
#     "description": "flexed biceps",
#     "category": "People & Body",
#     "aliases": [
#         "muscle"
#     ],
#     "tags": [
#         "flex",
#         "bicep",
#         "strong",
#         "workout"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:muscle: `:muscle:`
') }}
{{ markdown(title="🦾 mechanical arm" type="markdown", code='

<!--
# 🦾 mechanical arm
#
# {
#     "emoji": "\ud83e\uddbe",
#     "description": "mechanical arm",
#     "category": "People & Body",
#     "aliases": [
#         "mechanical_arm"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:mechanical_arm: `:mechanical_arm:`
') }}
{{ markdown(title="🦿 mechanical leg" type="markdown", code='

<!--
# 🦿 mechanical leg
#
# {
#     "emoji": "\ud83e\uddbf",
#     "description": "mechanical leg",
#     "category": "People & Body",
#     "aliases": [
#         "mechanical_leg"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:mechanical_leg: `:mechanical_leg:`
') }}
{{ markdown(title="🦵 leg" type="markdown", code='

<!--
# 🦵 leg
#
# {
#     "emoji": "\ud83e\uddb5",
#     "description": "leg",
#     "category": "People & Body",
#     "aliases": [
#         "leg"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:leg: `:leg:`
') }}
{{ markdown(title="🦶 foot" type="markdown", code='

<!--
# 🦶 foot
#
# {
#     "emoji": "\ud83e\uddb6",
#     "description": "foot",
#     "category": "People & Body",
#     "aliases": [
#         "foot"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:foot: `:foot:`
') }}
{{ markdown(title="👂 ear" type="markdown", code='

<!--
# 👂 ear
#
# {
#     "emoji": "\ud83d\udc42",
#     "description": "ear",
#     "category": "People & Body",
#     "aliases": [
#         "ear"
#     ],
#     "tags": [
#         "hear",
#         "sound",
#         "listen"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:ear: `:ear:`
') }}
{{ markdown(title="🦻 ear with hearing aid" type="markdown", code='

<!--
# 🦻 ear with hearing aid
#
# {
#     "emoji": "\ud83e\uddbb",
#     "description": "ear with hearing aid",
#     "category": "People & Body",
#     "aliases": [
#         "ear_with_hearing_aid"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0",
#     "skin_tones": true
# }
-->

:ear_with_hearing_aid: `:ear_with_hearing_aid:`
') }}
{{ markdown(title="👃 nose" type="markdown", code='

<!--
# 👃 nose
#
# {
#     "emoji": "\ud83d\udc43",
#     "description": "nose",
#     "category": "People & Body",
#     "aliases": [
#         "nose"
#     ],
#     "tags": [
#         "smell"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:nose: `:nose:`
') }}
{{ markdown(title="🧠 brain" type="markdown", code='

<!--
# 🧠 brain
#
# {
#     "emoji": "\ud83e\udde0",
#     "description": "brain",
#     "category": "People & Body",
#     "aliases": [
#         "brain"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:brain: `:brain:`
') }}
{{ markdown(title="🫀 anatomical heart" type="markdown", code='

<!--
# 🫀 anatomical heart
#
# {
#     "emoji": "\ud83e\udec0",
#     "description": "anatomical heart",
#     "category": "People & Body",
#     "aliases": [
#         "anatomical_heart"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:anatomical_heart: `:anatomical_heart:`
') }}
{{ markdown(title="🫁 lungs" type="markdown", code='

<!--
# 🫁 lungs
#
# {
#     "emoji": "\ud83e\udec1",
#     "description": "lungs",
#     "category": "People & Body",
#     "aliases": [
#         "lungs"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:lungs: `:lungs:`
') }}
{{ markdown(title="🦷 tooth" type="markdown", code='

<!--
# 🦷 tooth
#
# {
#     "emoji": "\ud83e\uddb7",
#     "description": "tooth",
#     "category": "People & Body",
#     "aliases": [
#         "tooth"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:tooth: `:tooth:`
') }}
{{ markdown(title="🦴 bone" type="markdown", code='

<!--
# 🦴 bone
#
# {
#     "emoji": "\ud83e\uddb4",
#     "description": "bone",
#     "category": "People & Body",
#     "aliases": [
#         "bone"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:bone: `:bone:`
') }}
{{ markdown(title="👀 eyes" type="markdown", code='

<!--
# 👀 eyes
#
# {
#     "emoji": "\ud83d\udc40",
#     "description": "eyes",
#     "category": "People & Body",
#     "aliases": [
#         "eyes"
#     ],
#     "tags": [
#         "look",
#         "see",
#         "watch"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:eyes: `:eyes:`
') }}
{{ markdown(title="👁️ eye" type="markdown", code='

<!--
# 👁️ eye
#
# {
#     "emoji": "\ud83d\udc41\ufe0f",
#     "description": "eye",
#     "category": "People & Body",
#     "aliases": [
#         "eye"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:eye: `:eye:`
') }}
{{ markdown(title="👅 tongue" type="markdown", code='

<!--
# 👅 tongue
#
# {
#     "emoji": "\ud83d\udc45",
#     "description": "tongue",
#     "category": "People & Body",
#     "aliases": [
#         "tongue"
#     ],
#     "tags": [
#         "taste"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:tongue: `:tongue:`
') }}
{{ markdown(title="👄 mouth" type="markdown", code='

<!--
# 👄 mouth
#
# {
#     "emoji": "\ud83d\udc44",
#     "description": "mouth",
#     "category": "People & Body",
#     "aliases": [
#         "lips"
#     ],
#     "tags": [
#         "kiss"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:lips: `:lips:`
') }}
{{ markdown(title="🫦 biting lip" type="markdown", code='

<!--
# 🫦 biting lip
#
# {
#     "emoji": "\ud83e\udee6",
#     "description": "biting lip",
#     "category": "People & Body",
#     "aliases": [
#         "biting_lip"
#     ],
#     "tags": [],
#     "unicode_version": "14.0",
#     "ios_version": "15.4"
# }
-->

:biting_lip: `:biting_lip:`
') }}
{{ markdown(title="👶 baby" type="markdown", code='

<!--
# 👶 baby
#
# {
#     "emoji": "\ud83d\udc76",
#     "description": "baby",
#     "category": "People & Body",
#     "aliases": [
#         "baby"
#     ],
#     "tags": [
#         "child",
#         "newborn"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:baby: `:baby:`
') }}
{{ markdown(title="🧒 child" type="markdown", code='

<!--
# 🧒 child
#
# {
#     "emoji": "\ud83e\uddd2",
#     "description": "child",
#     "category": "People & Body",
#     "aliases": [
#         "child"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:child: `:child:`
') }}
{{ markdown(title="👦 boy" type="markdown", code='

<!--
# 👦 boy
#
# {
#     "emoji": "\ud83d\udc66",
#     "description": "boy",
#     "category": "People & Body",
#     "aliases": [
#         "boy"
#     ],
#     "tags": [
#         "child"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:boy: `:boy:`
') }}
{{ markdown(title="👧 girl" type="markdown", code='

<!--
# 👧 girl
#
# {
#     "emoji": "\ud83d\udc67",
#     "description": "girl",
#     "category": "People & Body",
#     "aliases": [
#         "girl"
#     ],
#     "tags": [
#         "child"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:girl: `:girl:`
') }}
{{ markdown(title="🧑 person" type="markdown", code='

<!--
# 🧑 person
#
# {
#     "emoji": "\ud83e\uddd1",
#     "description": "person",
#     "category": "People & Body",
#     "aliases": [
#         "adult"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:adult: `:adult:`
') }}
{{ markdown(title="👱 person: blond hair" type="markdown", code='

<!--
# 👱 person: blond hair
#
# {
#     "emoji": "\ud83d\udc71",
#     "description": "person: blond hair",
#     "category": "People & Body",
#     "aliases": [
#         "blond_haired_person"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:blond_haired_person: `:blond_haired_person:`
') }}
{{ markdown(title="👨 man" type="markdown", code='

<!--
# 👨 man
#
# {
#     "emoji": "\ud83d\udc68",
#     "description": "man",
#     "category": "People & Body",
#     "aliases": [
#         "man"
#     ],
#     "tags": [
#         "mustache",
#         "father",
#         "dad"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:man: `:man:`
') }}
{{ markdown(title="🧔 person: beard" type="markdown", code='

<!--
# 🧔 person: beard
#
# {
#     "emoji": "\ud83e\uddd4",
#     "description": "person: beard",
#     "category": "People & Body",
#     "aliases": [
#         "bearded_person"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:bearded_person: `:bearded_person:`
') }}
{{ markdown(title="🧔‍♂️ man: beard" type="markdown", code='

<!--
# 🧔‍♂️ man: beard
#
# {
#     "emoji": "\ud83e\uddd4\u200d\u2642\ufe0f",
#     "description": "man: beard",
#     "category": "People & Body",
#     "aliases": [
#         "man_beard"
#     ],
#     "tags": [],
#     "unicode_version": "13.1",
#     "ios_version": "14.0",
#     "skin_tones": true
# }
-->

:man_beard: `:man_beard:`
') }}
{{ markdown(title="🧔‍♀️ woman: beard" type="markdown", code='

<!--
# 🧔‍♀️ woman: beard
#
# {
#     "emoji": "\ud83e\uddd4\u200d\u2640\ufe0f",
#     "description": "woman: beard",
#     "category": "People & Body",
#     "aliases": [
#         "woman_beard"
#     ],
#     "tags": [],
#     "unicode_version": "13.1",
#     "ios_version": "14.0",
#     "skin_tones": true
# }
-->

:woman_beard: `:woman_beard:`
') }}
{{ markdown(title="👨‍🦰 man: red hair" type="markdown", code='

<!--
# 👨‍🦰 man: red hair
#
# {
#     "emoji": "\ud83d\udc68\u200d\ud83e\uddb0",
#     "description": "man: red hair",
#     "category": "People & Body",
#     "aliases": [
#         "red_haired_man"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:red_haired_man: `:red_haired_man:`
') }}
{{ markdown(title="👨‍🦱 man: curly hair" type="markdown", code='

<!--
# 👨‍🦱 man: curly hair
#
# {
#     "emoji": "\ud83d\udc68\u200d\ud83e\uddb1",
#     "description": "man: curly hair",
#     "category": "People & Body",
#     "aliases": [
#         "curly_haired_man"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:curly_haired_man: `:curly_haired_man:`
') }}
{{ markdown(title="👨‍🦳 man: white hair" type="markdown", code='

<!--
# 👨‍🦳 man: white hair
#
# {
#     "emoji": "\ud83d\udc68\u200d\ud83e\uddb3",
#     "description": "man: white hair",
#     "category": "People & Body",
#     "aliases": [
#         "white_haired_man"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:white_haired_man: `:white_haired_man:`
') }}
{{ markdown(title="👨‍🦲 man: bald" type="markdown", code='

<!--
# 👨‍🦲 man: bald
#
# {
#     "emoji": "\ud83d\udc68\u200d\ud83e\uddb2",
#     "description": "man: bald",
#     "category": "People & Body",
#     "aliases": [
#         "bald_man"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:bald_man: `:bald_man:`
') }}
{{ markdown(title="👩 woman" type="markdown", code='

<!--
# 👩 woman
#
# {
#     "emoji": "\ud83d\udc69",
#     "description": "woman",
#     "category": "People & Body",
#     "aliases": [
#         "woman"
#     ],
#     "tags": [
#         "girls"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:woman: `:woman:`
') }}
{{ markdown(title="👩‍🦰 woman: red hair" type="markdown", code='

<!--
# 👩‍🦰 woman: red hair
#
# {
#     "emoji": "\ud83d\udc69\u200d\ud83e\uddb0",
#     "description": "woman: red hair",
#     "category": "People & Body",
#     "aliases": [
#         "red_haired_woman"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:red_haired_woman: `:red_haired_woman:`
') }}
{{ markdown(title="🧑‍🦰 person: red hair" type="markdown", code='

<!--
# 🧑‍🦰 person: red hair
#
# {
#     "emoji": "\ud83e\uddd1\u200d\ud83e\uddb0",
#     "description": "person: red hair",
#     "category": "People & Body",
#     "aliases": [
#         "person_red_hair"
#     ],
#     "tags": [],
#     "unicode_version": "12.1",
#     "ios_version": "13.2",
#     "skin_tones": true
# }
-->

:person_red_hair: `:person_red_hair:`
') }}
{{ markdown(title="👩‍🦱 woman: curly hair" type="markdown", code='

<!--
# 👩‍🦱 woman: curly hair
#
# {
#     "emoji": "\ud83d\udc69\u200d\ud83e\uddb1",
#     "description": "woman: curly hair",
#     "category": "People & Body",
#     "aliases": [
#         "curly_haired_woman"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:curly_haired_woman: `:curly_haired_woman:`
') }}
{{ markdown(title="🧑‍🦱 person: curly hair" type="markdown", code='

<!--
# 🧑‍🦱 person: curly hair
#
# {
#     "emoji": "\ud83e\uddd1\u200d\ud83e\uddb1",
#     "description": "person: curly hair",
#     "category": "People & Body",
#     "aliases": [
#         "person_curly_hair"
#     ],
#     "tags": [],
#     "unicode_version": "12.1",
#     "ios_version": "13.2",
#     "skin_tones": true
# }
-->

:person_curly_hair: `:person_curly_hair:`
') }}
{{ markdown(title="👩‍🦳 woman: white hair" type="markdown", code='

<!--
# 👩‍🦳 woman: white hair
#
# {
#     "emoji": "\ud83d\udc69\u200d\ud83e\uddb3",
#     "description": "woman: white hair",
#     "category": "People & Body",
#     "aliases": [
#         "white_haired_woman"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:white_haired_woman: `:white_haired_woman:`
') }}
{{ markdown(title="🧑‍🦳 person: white hair" type="markdown", code='

<!--
# 🧑‍🦳 person: white hair
#
# {
#     "emoji": "\ud83e\uddd1\u200d\ud83e\uddb3",
#     "description": "person: white hair",
#     "category": "People & Body",
#     "aliases": [
#         "person_white_hair"
#     ],
#     "tags": [],
#     "unicode_version": "12.1",
#     "ios_version": "13.2",
#     "skin_tones": true
# }
-->

:person_white_hair: `:person_white_hair:`
') }}
{{ markdown(title="👩‍🦲 woman: bald" type="markdown", code='

<!--
# 👩‍🦲 woman: bald
#
# {
#     "emoji": "\ud83d\udc69\u200d\ud83e\uddb2",
#     "description": "woman: bald",
#     "category": "People & Body",
#     "aliases": [
#         "bald_woman"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:bald_woman: `:bald_woman:`
') }}
{{ markdown(title="🧑‍🦲 person: bald" type="markdown", code='

<!--
# 🧑‍🦲 person: bald
#
# {
#     "emoji": "\ud83e\uddd1\u200d\ud83e\uddb2",
#     "description": "person: bald",
#     "category": "People & Body",
#     "aliases": [
#         "person_bald"
#     ],
#     "tags": [],
#     "unicode_version": "12.1",
#     "ios_version": "13.2",
#     "skin_tones": true
# }
-->

:person_bald: `:person_bald:`
') }}
{{ markdown(title="👱‍♀️ woman: blond hair" type="markdown", code='

<!--
# 👱‍♀️ woman: blond hair
#
# {
#     "emoji": "\ud83d\udc71\u200d\u2640\ufe0f",
#     "description": "woman: blond hair",
#     "category": "People & Body",
#     "aliases": [
#         "blond_haired_woman",
#         "blonde_woman"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "10.0",
#     "skin_tones": true
# }
-->

:blond_haired_woman: `:blond_haired_woman:`

:blonde_woman: `:blonde_woman:`
') }}
{{ markdown(title="👱‍♂️ man: blond hair" type="markdown", code='

<!--
# 👱‍♂️ man: blond hair
#
# {
#     "emoji": "\ud83d\udc71\u200d\u2642\ufe0f",
#     "description": "man: blond hair",
#     "category": "People & Body",
#     "aliases": [
#         "blond_haired_man"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:blond_haired_man: `:blond_haired_man:`
') }}
{{ markdown(title="🧓 older person" type="markdown", code='

<!--
# 🧓 older person
#
# {
#     "emoji": "\ud83e\uddd3",
#     "description": "older person",
#     "category": "People & Body",
#     "aliases": [
#         "older_adult"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:older_adult: `:older_adult:`
') }}
{{ markdown(title="👴 old man" type="markdown", code='

<!--
# 👴 old man
#
# {
#     "emoji": "\ud83d\udc74",
#     "description": "old man",
#     "category": "People & Body",
#     "aliases": [
#         "older_man"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:older_man: `:older_man:`
') }}
{{ markdown(title="👵 old woman" type="markdown", code='

<!--
# 👵 old woman
#
# {
#     "emoji": "\ud83d\udc75",
#     "description": "old woman",
#     "category": "People & Body",
#     "aliases": [
#         "older_woman"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:older_woman: `:older_woman:`
') }}
{{ markdown(title="🙍 person frowning" type="markdown", code='

<!--
# 🙍 person frowning
#
# {
#     "emoji": "\ud83d\ude4d",
#     "description": "person frowning",
#     "category": "People & Body",
#     "aliases": [
#         "frowning_person"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:frowning_person: `:frowning_person:`
') }}
{{ markdown(title="🙍‍♂️ man frowning" type="markdown", code='

<!--
# 🙍‍♂️ man frowning
#
# {
#     "emoji": "\ud83d\ude4d\u200d\u2642\ufe0f",
#     "description": "man frowning",
#     "category": "People & Body",
#     "aliases": [
#         "frowning_man"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "10.0",
#     "skin_tones": true
# }
-->

:frowning_man: `:frowning_man:`
') }}
{{ markdown(title="🙍‍♀️ woman frowning" type="markdown", code='

<!--
# 🙍‍♀️ woman frowning
#
# {
#     "emoji": "\ud83d\ude4d\u200d\u2640\ufe0f",
#     "description": "woman frowning",
#     "category": "People & Body",
#     "aliases": [
#         "frowning_woman"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:frowning_woman: `:frowning_woman:`
') }}
{{ markdown(title="🙎 person pouting" type="markdown", code='

<!--
# 🙎 person pouting
#
# {
#     "emoji": "\ud83d\ude4e",
#     "description": "person pouting",
#     "category": "People & Body",
#     "aliases": [
#         "pouting_face"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:pouting_face: `:pouting_face:`
') }}
{{ markdown(title="🙎‍♂️ man pouting" type="markdown", code='

<!--
# 🙎‍♂️ man pouting
#
# {
#     "emoji": "\ud83d\ude4e\u200d\u2642\ufe0f",
#     "description": "man pouting",
#     "category": "People & Body",
#     "aliases": [
#         "pouting_man"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "10.0",
#     "skin_tones": true
# }
-->

:pouting_man: `:pouting_man:`
') }}
{{ markdown(title="🙎‍♀️ woman pouting" type="markdown", code='

<!--
# 🙎‍♀️ woman pouting
#
# {
#     "emoji": "\ud83d\ude4e\u200d\u2640\ufe0f",
#     "description": "woman pouting",
#     "category": "People & Body",
#     "aliases": [
#         "pouting_woman"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:pouting_woman: `:pouting_woman:`
') }}
{{ markdown(title="🙅 person gesturing NO" type="markdown", code='

<!--
# 🙅 person gesturing NO
#
# {
#     "emoji": "\ud83d\ude45",
#     "description": "person gesturing NO",
#     "category": "People & Body",
#     "aliases": [
#         "no_good"
#     ],
#     "tags": [
#         "stop",
#         "halt",
#         "denied"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:no_good: `:no_good:`
') }}
{{ markdown(title="🙅‍♂️ man gesturing NO" type="markdown", code='

<!--
# 🙅‍♂️ man gesturing NO
#
# {
#     "emoji": "\ud83d\ude45\u200d\u2642\ufe0f",
#     "description": "man gesturing NO",
#     "category": "People & Body",
#     "aliases": [
#         "no_good_man",
#         "ng_man"
#     ],
#     "tags": [
#         "stop",
#         "halt",
#         "denied"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "10.0",
#     "skin_tones": true
# }
-->

:no_good_man: `:no_good_man:`

:ng_man: `:ng_man:`
') }}
{{ markdown(title="🙅‍♀️ woman gesturing NO" type="markdown", code='

<!--
# 🙅‍♀️ woman gesturing NO
#
# {
#     "emoji": "\ud83d\ude45\u200d\u2640\ufe0f",
#     "description": "woman gesturing NO",
#     "category": "People & Body",
#     "aliases": [
#         "no_good_woman",
#         "ng_woman"
#     ],
#     "tags": [
#         "stop",
#         "halt",
#         "denied"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:no_good_woman: `:no_good_woman:`

:ng_woman: `:ng_woman:`
') }}
{{ markdown(title="🙆 person gesturing OK" type="markdown", code='

<!--
# 🙆 person gesturing OK
#
# {
#     "emoji": "\ud83d\ude46",
#     "description": "person gesturing OK",
#     "category": "People & Body",
#     "aliases": [
#         "ok_person"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:ok_person: `:ok_person:`
') }}
{{ markdown(title="🙆‍♂️ man gesturing OK" type="markdown", code='

<!--
# 🙆‍♂️ man gesturing OK
#
# {
#     "emoji": "\ud83d\ude46\u200d\u2642\ufe0f",
#     "description": "man gesturing OK",
#     "category": "People & Body",
#     "aliases": [
#         "ok_man"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "10.0",
#     "skin_tones": true
# }
-->

:ok_man: `:ok_man:`
') }}
{{ markdown(title="🙆‍♀️ woman gesturing OK" type="markdown", code='

<!--
# 🙆‍♀️ woman gesturing OK
#
# {
#     "emoji": "\ud83d\ude46\u200d\u2640\ufe0f",
#     "description": "woman gesturing OK",
#     "category": "People & Body",
#     "aliases": [
#         "ok_woman"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:ok_woman: `:ok_woman:`
') }}
{{ markdown(title="💁 person tipping hand" type="markdown", code='

<!--
# 💁 person tipping hand
#
# {
#     "emoji": "\ud83d\udc81",
#     "description": "person tipping hand",
#     "category": "People & Body",
#     "aliases": [
#         "tipping_hand_person",
#         "information_desk_person"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:tipping_hand_person: `:tipping_hand_person:`

:information_desk_person: `:information_desk_person:`
') }}
{{ markdown(title="💁‍♂️ man tipping hand" type="markdown", code='

<!--
# 💁‍♂️ man tipping hand
#
# {
#     "emoji": "\ud83d\udc81\u200d\u2642\ufe0f",
#     "description": "man tipping hand",
#     "category": "People & Body",
#     "aliases": [
#         "tipping_hand_man",
#         "sassy_man"
#     ],
#     "tags": [
#         "information"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "10.0",
#     "skin_tones": true
# }
-->

:tipping_hand_man: `:tipping_hand_man:`

:sassy_man: `:sassy_man:`
') }}
{{ markdown(title="💁‍♀️ woman tipping hand" type="markdown", code='

<!--
# 💁‍♀️ woman tipping hand
#
# {
#     "emoji": "\ud83d\udc81\u200d\u2640\ufe0f",
#     "description": "woman tipping hand",
#     "category": "People & Body",
#     "aliases": [
#         "tipping_hand_woman",
#         "sassy_woman"
#     ],
#     "tags": [
#         "information"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:tipping_hand_woman: `:tipping_hand_woman:`

:sassy_woman: `:sassy_woman:`
') }}
{{ markdown(title="🙋 person raising hand" type="markdown", code='

<!--
# 🙋 person raising hand
#
# {
#     "emoji": "\ud83d\ude4b",
#     "description": "person raising hand",
#     "category": "People & Body",
#     "aliases": [
#         "raising_hand"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:raising_hand: `:raising_hand:`
') }}
{{ markdown(title="🙋‍♂️ man raising hand" type="markdown", code='

<!--
# 🙋‍♂️ man raising hand
#
# {
#     "emoji": "\ud83d\ude4b\u200d\u2642\ufe0f",
#     "description": "man raising hand",
#     "category": "People & Body",
#     "aliases": [
#         "raising_hand_man"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "10.0",
#     "skin_tones": true
# }
-->

:raising_hand_man: `:raising_hand_man:`
') }}
{{ markdown(title="🙋‍♀️ woman raising hand" type="markdown", code='

<!--
# 🙋‍♀️ woman raising hand
#
# {
#     "emoji": "\ud83d\ude4b\u200d\u2640\ufe0f",
#     "description": "woman raising hand",
#     "category": "People & Body",
#     "aliases": [
#         "raising_hand_woman"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:raising_hand_woman: `:raising_hand_woman:`
') }}
{{ markdown(title="🧏 deaf person" type="markdown", code='

<!--
# 🧏 deaf person
#
# {
#     "emoji": "\ud83e\uddcf",
#     "description": "deaf person",
#     "category": "People & Body",
#     "aliases": [
#         "deaf_person"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0",
#     "skin_tones": true
# }
-->

:deaf_person: `:deaf_person:`
') }}
{{ markdown(title="🧏‍♂️ deaf man" type="markdown", code='

<!--
# 🧏‍♂️ deaf man
#
# {
#     "emoji": "\ud83e\uddcf\u200d\u2642\ufe0f",
#     "description": "deaf man",
#     "category": "People & Body",
#     "aliases": [
#         "deaf_man"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0",
#     "skin_tones": true
# }
-->

:deaf_man: `:deaf_man:`
') }}
{{ markdown(title="🧏‍♀️ deaf woman" type="markdown", code='

<!--
# 🧏‍♀️ deaf woman
#
# {
#     "emoji": "\ud83e\uddcf\u200d\u2640\ufe0f",
#     "description": "deaf woman",
#     "category": "People & Body",
#     "aliases": [
#         "deaf_woman"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0",
#     "skin_tones": true
# }
-->

:deaf_woman: `:deaf_woman:`
') }}
{{ markdown(title="🙇 person bowing" type="markdown", code='

<!--
# 🙇 person bowing
#
# {
#     "emoji": "\ud83d\ude47",
#     "description": "person bowing",
#     "category": "People & Body",
#     "aliases": [
#         "bow"
#     ],
#     "tags": [
#         "respect",
#         "thanks"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:bow: `:bow:`
') }}
{{ markdown(title="🙇‍♂️ man bowing" type="markdown", code='

<!--
# 🙇‍♂️ man bowing
#
# {
#     "emoji": "\ud83d\ude47\u200d\u2642\ufe0f",
#     "description": "man bowing",
#     "category": "People & Body",
#     "aliases": [
#         "bowing_man"
#     ],
#     "tags": [
#         "respect",
#         "thanks"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:bowing_man: `:bowing_man:`
') }}
{{ markdown(title="🙇‍♀️ woman bowing" type="markdown", code='

<!--
# 🙇‍♀️ woman bowing
#
# {
#     "emoji": "\ud83d\ude47\u200d\u2640\ufe0f",
#     "description": "woman bowing",
#     "category": "People & Body",
#     "aliases": [
#         "bowing_woman"
#     ],
#     "tags": [
#         "respect",
#         "thanks"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "10.0",
#     "skin_tones": true
# }
-->

:bowing_woman: `:bowing_woman:`
') }}
{{ markdown(title="🤦 person facepalming" type="markdown", code='

<!--
# 🤦 person facepalming
#
# {
#     "emoji": "\ud83e\udd26",
#     "description": "person facepalming",
#     "category": "People & Body",
#     "aliases": [
#         "facepalm"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:facepalm: `:facepalm:`
') }}
{{ markdown(title="🤦‍♂️ man facepalming" type="markdown", code='

<!--
# 🤦‍♂️ man facepalming
#
# {
#     "emoji": "\ud83e\udd26\u200d\u2642\ufe0f",
#     "description": "man facepalming",
#     "category": "People & Body",
#     "aliases": [
#         "man_facepalming"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:man_facepalming: `:man_facepalming:`
') }}
{{ markdown(title="🤦‍♀️ woman facepalming" type="markdown", code='

<!--
# 🤦‍♀️ woman facepalming
#
# {
#     "emoji": "\ud83e\udd26\u200d\u2640\ufe0f",
#     "description": "woman facepalming",
#     "category": "People & Body",
#     "aliases": [
#         "woman_facepalming"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:woman_facepalming: `:woman_facepalming:`
') }}
{{ markdown(title="🤷 person shrugging" type="markdown", code='

<!--
# 🤷 person shrugging
#
# {
#     "emoji": "\ud83e\udd37",
#     "description": "person shrugging",
#     "category": "People & Body",
#     "aliases": [
#         "shrug"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:shrug: `:shrug:`
') }}
{{ markdown(title="🤷‍♂️ man shrugging" type="markdown", code='

<!--
# 🤷‍♂️ man shrugging
#
# {
#     "emoji": "\ud83e\udd37\u200d\u2642\ufe0f",
#     "description": "man shrugging",
#     "category": "People & Body",
#     "aliases": [
#         "man_shrugging"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:man_shrugging: `:man_shrugging:`
') }}
{{ markdown(title="🤷‍♀️ woman shrugging" type="markdown", code='

<!--
# 🤷‍♀️ woman shrugging
#
# {
#     "emoji": "\ud83e\udd37\u200d\u2640\ufe0f",
#     "description": "woman shrugging",
#     "category": "People & Body",
#     "aliases": [
#         "woman_shrugging"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:woman_shrugging: `:woman_shrugging:`
') }}
{{ markdown(title="🧑‍⚕️ health worker" type="markdown", code='

<!--
# 🧑‍⚕️ health worker
#
# {
#     "emoji": "\ud83e\uddd1\u200d\u2695\ufe0f",
#     "description": "health worker",
#     "category": "People & Body",
#     "aliases": [
#         "health_worker"
#     ],
#     "tags": [],
#     "unicode_version": "12.1",
#     "ios_version": "13.2",
#     "skin_tones": true
# }
-->

:health_worker: `:health_worker:`
') }}
{{ markdown(title="👨‍⚕️ man health worker" type="markdown", code='

<!--
# 👨‍⚕️ man health worker
#
# {
#     "emoji": "\ud83d\udc68\u200d\u2695\ufe0f",
#     "description": "man health worker",
#     "category": "People & Body",
#     "aliases": [
#         "man_health_worker"
#     ],
#     "tags": [
#         "doctor",
#         "nurse"
#     ],
#     "unicode_version": "",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:man_health_worker: `:man_health_worker:`
') }}
{{ markdown(title="👩‍⚕️ woman health worker" type="markdown", code='

<!--
# 👩‍⚕️ woman health worker
#
# {
#     "emoji": "\ud83d\udc69\u200d\u2695\ufe0f",
#     "description": "woman health worker",
#     "category": "People & Body",
#     "aliases": [
#         "woman_health_worker"
#     ],
#     "tags": [
#         "doctor",
#         "nurse"
#     ],
#     "unicode_version": "",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:woman_health_worker: `:woman_health_worker:`
') }}
{{ markdown(title="🧑‍🎓 student" type="markdown", code='

<!--
# 🧑‍🎓 student
#
# {
#     "emoji": "\ud83e\uddd1\u200d\ud83c\udf93",
#     "description": "student",
#     "category": "People & Body",
#     "aliases": [
#         "student"
#     ],
#     "tags": [],
#     "unicode_version": "12.1",
#     "ios_version": "13.2",
#     "skin_tones": true
# }
-->

:student: `:student:`
') }}
{{ markdown(title="👨‍🎓 man student" type="markdown", code='

<!--
# 👨‍🎓 man student
#
# {
#     "emoji": "\ud83d\udc68\u200d\ud83c\udf93",
#     "description": "man student",
#     "category": "People & Body",
#     "aliases": [
#         "man_student"
#     ],
#     "tags": [
#         "graduation"
#     ],
#     "unicode_version": "",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:man_student: `:man_student:`
') }}
{{ markdown(title="👩‍🎓 woman student" type="markdown", code='

<!--
# 👩‍🎓 woman student
#
# {
#     "emoji": "\ud83d\udc69\u200d\ud83c\udf93",
#     "description": "woman student",
#     "category": "People & Body",
#     "aliases": [
#         "woman_student"
#     ],
#     "tags": [
#         "graduation"
#     ],
#     "unicode_version": "",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:woman_student: `:woman_student:`
') }}
{{ markdown(title="🧑‍🏫 teacher" type="markdown", code='

<!--
# 🧑‍🏫 teacher
#
# {
#     "emoji": "\ud83e\uddd1\u200d\ud83c\udfeb",
#     "description": "teacher",
#     "category": "People & Body",
#     "aliases": [
#         "teacher"
#     ],
#     "tags": [],
#     "unicode_version": "12.1",
#     "ios_version": "13.2",
#     "skin_tones": true
# }
-->

:teacher: `:teacher:`
') }}
{{ markdown(title="👨‍🏫 man teacher" type="markdown", code='

<!--
# 👨‍🏫 man teacher
#
# {
#     "emoji": "\ud83d\udc68\u200d\ud83c\udfeb",
#     "description": "man teacher",
#     "category": "People & Body",
#     "aliases": [
#         "man_teacher"
#     ],
#     "tags": [
#         "school",
#         "professor"
#     ],
#     "unicode_version": "",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:man_teacher: `:man_teacher:`
') }}
{{ markdown(title="👩‍🏫 woman teacher" type="markdown", code='

<!--
# 👩‍🏫 woman teacher
#
# {
#     "emoji": "\ud83d\udc69\u200d\ud83c\udfeb",
#     "description": "woman teacher",
#     "category": "People & Body",
#     "aliases": [
#         "woman_teacher"
#     ],
#     "tags": [
#         "school",
#         "professor"
#     ],
#     "unicode_version": "",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:woman_teacher: `:woman_teacher:`
') }}
{{ markdown(title="🧑‍⚖️ judge" type="markdown", code='

<!--
# 🧑‍⚖️ judge
#
# {
#     "emoji": "\ud83e\uddd1\u200d\u2696\ufe0f",
#     "description": "judge",
#     "category": "People & Body",
#     "aliases": [
#         "judge"
#     ],
#     "tags": [],
#     "unicode_version": "12.1",
#     "ios_version": "13.2",
#     "skin_tones": true
# }
-->

:judge: `:judge:`
') }}
{{ markdown(title="👨‍⚖️ man judge" type="markdown", code='

<!--
# 👨‍⚖️ man judge
#
# {
#     "emoji": "\ud83d\udc68\u200d\u2696\ufe0f",
#     "description": "man judge",
#     "category": "People & Body",
#     "aliases": [
#         "man_judge"
#     ],
#     "tags": [
#         "justice"
#     ],
#     "unicode_version": "",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:man_judge: `:man_judge:`
') }}
{{ markdown(title="👩‍⚖️ woman judge" type="markdown", code='

<!--
# 👩‍⚖️ woman judge
#
# {
#     "emoji": "\ud83d\udc69\u200d\u2696\ufe0f",
#     "description": "woman judge",
#     "category": "People & Body",
#     "aliases": [
#         "woman_judge"
#     ],
#     "tags": [
#         "justice"
#     ],
#     "unicode_version": "",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:woman_judge: `:woman_judge:`
') }}
{{ markdown(title="🧑‍🌾 farmer" type="markdown", code='

<!--
# 🧑‍🌾 farmer
#
# {
#     "emoji": "\ud83e\uddd1\u200d\ud83c\udf3e",
#     "description": "farmer",
#     "category": "People & Body",
#     "aliases": [
#         "farmer"
#     ],
#     "tags": [],
#     "unicode_version": "12.1",
#     "ios_version": "13.2",
#     "skin_tones": true
# }
-->

:farmer: `:farmer:`
') }}
{{ markdown(title="👨‍🌾 man farmer" type="markdown", code='

<!--
# 👨‍🌾 man farmer
#
# {
#     "emoji": "\ud83d\udc68\u200d\ud83c\udf3e",
#     "description": "man farmer",
#     "category": "People & Body",
#     "aliases": [
#         "man_farmer"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:man_farmer: `:man_farmer:`
') }}
{{ markdown(title="👩‍🌾 woman farmer" type="markdown", code='

<!--
# 👩‍🌾 woman farmer
#
# {
#     "emoji": "\ud83d\udc69\u200d\ud83c\udf3e",
#     "description": "woman farmer",
#     "category": "People & Body",
#     "aliases": [
#         "woman_farmer"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:woman_farmer: `:woman_farmer:`
') }}
{{ markdown(title="🧑‍🍳 cook" type="markdown", code='

<!--
# 🧑‍🍳 cook
#
# {
#     "emoji": "\ud83e\uddd1\u200d\ud83c\udf73",
#     "description": "cook",
#     "category": "People & Body",
#     "aliases": [
#         "cook"
#     ],
#     "tags": [],
#     "unicode_version": "12.1",
#     "ios_version": "13.2",
#     "skin_tones": true
# }
-->

:cook: `:cook:`
') }}
{{ markdown(title="👨‍🍳 man cook" type="markdown", code='

<!--
# 👨‍🍳 man cook
#
# {
#     "emoji": "\ud83d\udc68\u200d\ud83c\udf73",
#     "description": "man cook",
#     "category": "People & Body",
#     "aliases": [
#         "man_cook"
#     ],
#     "tags": [
#         "chef"
#     ],
#     "unicode_version": "",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:man_cook: `:man_cook:`
') }}
{{ markdown(title="👩‍🍳 woman cook" type="markdown", code='

<!--
# 👩‍🍳 woman cook
#
# {
#     "emoji": "\ud83d\udc69\u200d\ud83c\udf73",
#     "description": "woman cook",
#     "category": "People & Body",
#     "aliases": [
#         "woman_cook"
#     ],
#     "tags": [
#         "chef"
#     ],
#     "unicode_version": "",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:woman_cook: `:woman_cook:`
') }}
{{ markdown(title="🧑‍🔧 mechanic" type="markdown", code='

<!--
# 🧑‍🔧 mechanic
#
# {
#     "emoji": "\ud83e\uddd1\u200d\ud83d\udd27",
#     "description": "mechanic",
#     "category": "People & Body",
#     "aliases": [
#         "mechanic"
#     ],
#     "tags": [],
#     "unicode_version": "12.1",
#     "ios_version": "13.2",
#     "skin_tones": true
# }
-->

:mechanic: `:mechanic:`
') }}
{{ markdown(title="👨‍🔧 man mechanic" type="markdown", code='

<!--
# 👨‍🔧 man mechanic
#
# {
#     "emoji": "\ud83d\udc68\u200d\ud83d\udd27",
#     "description": "man mechanic",
#     "category": "People & Body",
#     "aliases": [
#         "man_mechanic"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:man_mechanic: `:man_mechanic:`
') }}
{{ markdown(title="👩‍🔧 woman mechanic" type="markdown", code='

<!--
# 👩‍🔧 woman mechanic
#
# {
#     "emoji": "\ud83d\udc69\u200d\ud83d\udd27",
#     "description": "woman mechanic",
#     "category": "People & Body",
#     "aliases": [
#         "woman_mechanic"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:woman_mechanic: `:woman_mechanic:`
') }}
{{ markdown(title="🧑‍🏭 factory worker" type="markdown", code='

<!--
# 🧑‍🏭 factory worker
#
# {
#     "emoji": "\ud83e\uddd1\u200d\ud83c\udfed",
#     "description": "factory worker",
#     "category": "People & Body",
#     "aliases": [
#         "factory_worker"
#     ],
#     "tags": [],
#     "unicode_version": "12.1",
#     "ios_version": "13.2",
#     "skin_tones": true
# }
-->

:factory_worker: `:factory_worker:`
') }}
{{ markdown(title="👨‍🏭 man factory worker" type="markdown", code='

<!--
# 👨‍🏭 man factory worker
#
# {
#     "emoji": "\ud83d\udc68\u200d\ud83c\udfed",
#     "description": "man factory worker",
#     "category": "People & Body",
#     "aliases": [
#         "man_factory_worker"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:man_factory_worker: `:man_factory_worker:`
') }}
{{ markdown(title="👩‍🏭 woman factory worker" type="markdown", code='

<!--
# 👩‍🏭 woman factory worker
#
# {
#     "emoji": "\ud83d\udc69\u200d\ud83c\udfed",
#     "description": "woman factory worker",
#     "category": "People & Body",
#     "aliases": [
#         "woman_factory_worker"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:woman_factory_worker: `:woman_factory_worker:`
') }}
{{ markdown(title="🧑‍💼 office worker" type="markdown", code='

<!--
# 🧑‍💼 office worker
#
# {
#     "emoji": "\ud83e\uddd1\u200d\ud83d\udcbc",
#     "description": "office worker",
#     "category": "People & Body",
#     "aliases": [
#         "office_worker"
#     ],
#     "tags": [],
#     "unicode_version": "12.1",
#     "ios_version": "13.2",
#     "skin_tones": true
# }
-->

:office_worker: `:office_worker:`
') }}
{{ markdown(title="👨‍💼 man office worker" type="markdown", code='

<!--
# 👨‍💼 man office worker
#
# {
#     "emoji": "\ud83d\udc68\u200d\ud83d\udcbc",
#     "description": "man office worker",
#     "category": "People & Body",
#     "aliases": [
#         "man_office_worker"
#     ],
#     "tags": [
#         "business"
#     ],
#     "unicode_version": "",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:man_office_worker: `:man_office_worker:`
') }}
{{ markdown(title="👩‍💼 woman office worker" type="markdown", code='

<!--
# 👩‍💼 woman office worker
#
# {
#     "emoji": "\ud83d\udc69\u200d\ud83d\udcbc",
#     "description": "woman office worker",
#     "category": "People & Body",
#     "aliases": [
#         "woman_office_worker"
#     ],
#     "tags": [
#         "business"
#     ],
#     "unicode_version": "",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:woman_office_worker: `:woman_office_worker:`
') }}
{{ markdown(title="🧑‍🔬 scientist" type="markdown", code='

<!--
# 🧑‍🔬 scientist
#
# {
#     "emoji": "\ud83e\uddd1\u200d\ud83d\udd2c",
#     "description": "scientist",
#     "category": "People & Body",
#     "aliases": [
#         "scientist"
#     ],
#     "tags": [],
#     "unicode_version": "12.1",
#     "ios_version": "13.2",
#     "skin_tones": true
# }
-->

:scientist: `:scientist:`
') }}
{{ markdown(title="👨‍🔬 man scientist" type="markdown", code='

<!--
# 👨‍🔬 man scientist
#
# {
#     "emoji": "\ud83d\udc68\u200d\ud83d\udd2c",
#     "description": "man scientist",
#     "category": "People & Body",
#     "aliases": [
#         "man_scientist"
#     ],
#     "tags": [
#         "research"
#     ],
#     "unicode_version": "",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:man_scientist: `:man_scientist:`
') }}
{{ markdown(title="👩‍🔬 woman scientist" type="markdown", code='

<!--
# 👩‍🔬 woman scientist
#
# {
#     "emoji": "\ud83d\udc69\u200d\ud83d\udd2c",
#     "description": "woman scientist",
#     "category": "People & Body",
#     "aliases": [
#         "woman_scientist"
#     ],
#     "tags": [
#         "research"
#     ],
#     "unicode_version": "",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:woman_scientist: `:woman_scientist:`
') }}
{{ markdown(title="🧑‍💻 technologist" type="markdown", code='

<!--
# 🧑‍💻 technologist
#
# {
#     "emoji": "\ud83e\uddd1\u200d\ud83d\udcbb",
#     "description": "technologist",
#     "category": "People & Body",
#     "aliases": [
#         "technologist"
#     ],
#     "tags": [],
#     "unicode_version": "12.1",
#     "ios_version": "13.2",
#     "skin_tones": true
# }
-->

:technologist: `:technologist:`
') }}
{{ markdown(title="👨‍💻 man technologist" type="markdown", code='

<!--
# 👨‍💻 man technologist
#
# {
#     "emoji": "\ud83d\udc68\u200d\ud83d\udcbb",
#     "description": "man technologist",
#     "category": "People & Body",
#     "aliases": [
#         "man_technologist"
#     ],
#     "tags": [
#         "coder"
#     ],
#     "unicode_version": "",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:man_technologist: `:man_technologist:`
') }}
{{ markdown(title="👩‍💻 woman technologist" type="markdown", code='

<!--
# 👩‍💻 woman technologist
#
# {
#     "emoji": "\ud83d\udc69\u200d\ud83d\udcbb",
#     "description": "woman technologist",
#     "category": "People & Body",
#     "aliases": [
#         "woman_technologist"
#     ],
#     "tags": [
#         "coder"
#     ],
#     "unicode_version": "",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:woman_technologist: `:woman_technologist:`
') }}
{{ markdown(title="🧑‍🎤 singer" type="markdown", code='

<!--
# 🧑‍🎤 singer
#
# {
#     "emoji": "\ud83e\uddd1\u200d\ud83c\udfa4",
#     "description": "singer",
#     "category": "People & Body",
#     "aliases": [
#         "singer"
#     ],
#     "tags": [],
#     "unicode_version": "12.1",
#     "ios_version": "13.2",
#     "skin_tones": true
# }
-->

:singer: `:singer:`
') }}
{{ markdown(title="👨‍🎤 man singer" type="markdown", code='

<!--
# 👨‍🎤 man singer
#
# {
#     "emoji": "\ud83d\udc68\u200d\ud83c\udfa4",
#     "description": "man singer",
#     "category": "People & Body",
#     "aliases": [
#         "man_singer"
#     ],
#     "tags": [
#         "rockstar"
#     ],
#     "unicode_version": "",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:man_singer: `:man_singer:`
') }}
{{ markdown(title="👩‍🎤 woman singer" type="markdown", code='

<!--
# 👩‍🎤 woman singer
#
# {
#     "emoji": "\ud83d\udc69\u200d\ud83c\udfa4",
#     "description": "woman singer",
#     "category": "People & Body",
#     "aliases": [
#         "woman_singer"
#     ],
#     "tags": [
#         "rockstar"
#     ],
#     "unicode_version": "",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:woman_singer: `:woman_singer:`
') }}
{{ markdown(title="🧑‍🎨 artist" type="markdown", code='

<!--
# 🧑‍🎨 artist
#
# {
#     "emoji": "\ud83e\uddd1\u200d\ud83c\udfa8",
#     "description": "artist",
#     "category": "People & Body",
#     "aliases": [
#         "artist"
#     ],
#     "tags": [],
#     "unicode_version": "12.1",
#     "ios_version": "13.2",
#     "skin_tones": true
# }
-->

:artist: `:artist:`
') }}
{{ markdown(title="👨‍🎨 man artist" type="markdown", code='

<!--
# 👨‍🎨 man artist
#
# {
#     "emoji": "\ud83d\udc68\u200d\ud83c\udfa8",
#     "description": "man artist",
#     "category": "People & Body",
#     "aliases": [
#         "man_artist"
#     ],
#     "tags": [
#         "painter"
#     ],
#     "unicode_version": "",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:man_artist: `:man_artist:`
') }}
{{ markdown(title="👩‍🎨 woman artist" type="markdown", code='

<!--
# 👩‍🎨 woman artist
#
# {
#     "emoji": "\ud83d\udc69\u200d\ud83c\udfa8",
#     "description": "woman artist",
#     "category": "People & Body",
#     "aliases": [
#         "woman_artist"
#     ],
#     "tags": [
#         "painter"
#     ],
#     "unicode_version": "",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:woman_artist: `:woman_artist:`
') }}
{{ markdown(title="🧑‍✈️ pilot" type="markdown", code='

<!--
# 🧑‍✈️ pilot
#
# {
#     "emoji": "\ud83e\uddd1\u200d\u2708\ufe0f",
#     "description": "pilot",
#     "category": "People & Body",
#     "aliases": [
#         "pilot"
#     ],
#     "tags": [],
#     "unicode_version": "12.1",
#     "ios_version": "13.2",
#     "skin_tones": true
# }
-->

:pilot: `:pilot:`
') }}
{{ markdown(title="👨‍✈️ man pilot" type="markdown", code='

<!--
# 👨‍✈️ man pilot
#
# {
#     "emoji": "\ud83d\udc68\u200d\u2708\ufe0f",
#     "description": "man pilot",
#     "category": "People & Body",
#     "aliases": [
#         "man_pilot"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:man_pilot: `:man_pilot:`
') }}
{{ markdown(title="👩‍✈️ woman pilot" type="markdown", code='

<!--
# 👩‍✈️ woman pilot
#
# {
#     "emoji": "\ud83d\udc69\u200d\u2708\ufe0f",
#     "description": "woman pilot",
#     "category": "People & Body",
#     "aliases": [
#         "woman_pilot"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:woman_pilot: `:woman_pilot:`
') }}
{{ markdown(title="🧑‍🚀 astronaut" type="markdown", code='

<!--
# 🧑‍🚀 astronaut
#
# {
#     "emoji": "\ud83e\uddd1\u200d\ud83d\ude80",
#     "description": "astronaut",
#     "category": "People & Body",
#     "aliases": [
#         "astronaut"
#     ],
#     "tags": [],
#     "unicode_version": "12.1",
#     "ios_version": "13.2",
#     "skin_tones": true
# }
-->

:astronaut: `:astronaut:`
') }}
{{ markdown(title="👨‍🚀 man astronaut" type="markdown", code='

<!--
# 👨‍🚀 man astronaut
#
# {
#     "emoji": "\ud83d\udc68\u200d\ud83d\ude80",
#     "description": "man astronaut",
#     "category": "People & Body",
#     "aliases": [
#         "man_astronaut"
#     ],
#     "tags": [
#         "space"
#     ],
#     "unicode_version": "",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:man_astronaut: `:man_astronaut:`
') }}
{{ markdown(title="👩‍🚀 woman astronaut" type="markdown", code='

<!--
# 👩‍🚀 woman astronaut
#
# {
#     "emoji": "\ud83d\udc69\u200d\ud83d\ude80",
#     "description": "woman astronaut",
#     "category": "People & Body",
#     "aliases": [
#         "woman_astronaut"
#     ],
#     "tags": [
#         "space"
#     ],
#     "unicode_version": "",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:woman_astronaut: `:woman_astronaut:`
') }}
{{ markdown(title="🧑‍🚒 firefighter" type="markdown", code='

<!--
# 🧑‍🚒 firefighter
#
# {
#     "emoji": "\ud83e\uddd1\u200d\ud83d\ude92",
#     "description": "firefighter",
#     "category": "People & Body",
#     "aliases": [
#         "firefighter"
#     ],
#     "tags": [],
#     "unicode_version": "12.1",
#     "ios_version": "13.2",
#     "skin_tones": true
# }
-->

:firefighter: `:firefighter:`
') }}
{{ markdown(title="👨‍🚒 man firefighter" type="markdown", code='

<!--
# 👨‍🚒 man firefighter
#
# {
#     "emoji": "\ud83d\udc68\u200d\ud83d\ude92",
#     "description": "man firefighter",
#     "category": "People & Body",
#     "aliases": [
#         "man_firefighter"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:man_firefighter: `:man_firefighter:`
') }}
{{ markdown(title="👩‍🚒 woman firefighter" type="markdown", code='

<!--
# 👩‍🚒 woman firefighter
#
# {
#     "emoji": "\ud83d\udc69\u200d\ud83d\ude92",
#     "description": "woman firefighter",
#     "category": "People & Body",
#     "aliases": [
#         "woman_firefighter"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:woman_firefighter: `:woman_firefighter:`
') }}
{{ markdown(title="👮 police officer" type="markdown", code='

<!--
# 👮 police officer
#
# {
#     "emoji": "\ud83d\udc6e",
#     "description": "police officer",
#     "category": "People & Body",
#     "aliases": [
#         "police_officer",
#         "cop"
#     ],
#     "tags": [
#         "law"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:police_officer: `:police_officer:`

:cop: `:cop:`
') }}
{{ markdown(title="👮‍♂️ man police officer" type="markdown", code='

<!--
# 👮‍♂️ man police officer
#
# {
#     "emoji": "\ud83d\udc6e\u200d\u2642\ufe0f",
#     "description": "man police officer",
#     "category": "People & Body",
#     "aliases": [
#         "policeman"
#     ],
#     "tags": [
#         "law",
#         "cop"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:policeman: `:policeman:`
') }}
{{ markdown(title="👮‍♀️ woman police officer" type="markdown", code='

<!--
# 👮‍♀️ woman police officer
#
# {
#     "emoji": "\ud83d\udc6e\u200d\u2640\ufe0f",
#     "description": "woman police officer",
#     "category": "People & Body",
#     "aliases": [
#         "policewoman"
#     ],
#     "tags": [
#         "law",
#         "cop"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "10.0",
#     "skin_tones": true
# }
-->

:policewoman: `:policewoman:`
') }}
{{ markdown(title="🕵️ detective" type="markdown", code='

<!--
# 🕵️ detective
#
# {
#     "emoji": "\ud83d\udd75\ufe0f",
#     "description": "detective",
#     "category": "People & Body",
#     "aliases": [
#         "detective"
#     ],
#     "tags": [
#         "sleuth"
#     ],
#     "unicode_version": "7.0",
#     "ios_version": "9.1",
#     "skin_tones": true
# }
-->

:detective: `:detective:`
') }}
{{ markdown(title="🕵️‍♂️ man detective" type="markdown", code='

<!--
# 🕵️‍♂️ man detective
#
# {
#     "emoji": "\ud83d\udd75\ufe0f\u200d\u2642\ufe0f",
#     "description": "man detective",
#     "category": "People & Body",
#     "aliases": [
#         "male_detective"
#     ],
#     "tags": [
#         "sleuth"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:male_detective: `:male_detective:`
') }}
{{ markdown(title="🕵️‍♀️ woman detective" type="markdown", code='

<!--
# 🕵️‍♀️ woman detective
#
# {
#     "emoji": "\ud83d\udd75\ufe0f\u200d\u2640\ufe0f",
#     "description": "woman detective",
#     "category": "People & Body",
#     "aliases": [
#         "female_detective"
#     ],
#     "tags": [
#         "sleuth"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "10.0",
#     "skin_tones": true
# }
-->

:female_detective: `:female_detective:`
') }}
{{ markdown(title="💂 guard" type="markdown", code='

<!--
# 💂 guard
#
# {
#     "emoji": "\ud83d\udc82",
#     "description": "guard",
#     "category": "People & Body",
#     "aliases": [
#         "guard"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:guard: `:guard:`
') }}
{{ markdown(title="💂‍♂️ man guard" type="markdown", code='

<!--
# 💂‍♂️ man guard
#
# {
#     "emoji": "\ud83d\udc82\u200d\u2642\ufe0f",
#     "description": "man guard",
#     "category": "People & Body",
#     "aliases": [
#         "guardsman"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:guardsman: `:guardsman:`
') }}
{{ markdown(title="💂‍♀️ woman guard" type="markdown", code='

<!--
# 💂‍♀️ woman guard
#
# {
#     "emoji": "\ud83d\udc82\u200d\u2640\ufe0f",
#     "description": "woman guard",
#     "category": "People & Body",
#     "aliases": [
#         "guardswoman"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "10.0",
#     "skin_tones": true
# }
-->

:guardswoman: `:guardswoman:`
') }}
{{ markdown(title="🥷 ninja" type="markdown", code='

<!--
# 🥷 ninja
#
# {
#     "emoji": "\ud83e\udd77",
#     "description": "ninja",
#     "category": "People & Body",
#     "aliases": [
#         "ninja"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0",
#     "skin_tones": true
# }
-->

:ninja: `:ninja:`
') }}
{{ markdown(title="👷 construction worker" type="markdown", code='

<!--
# 👷 construction worker
#
# {
#     "emoji": "\ud83d\udc77",
#     "description": "construction worker",
#     "category": "People & Body",
#     "aliases": [
#         "construction_worker"
#     ],
#     "tags": [
#         "helmet"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:construction_worker: `:construction_worker:`
') }}
{{ markdown(title="👷‍♂️ man construction worker" type="markdown", code='

<!--
# 👷‍♂️ man construction worker
#
# {
#     "emoji": "\ud83d\udc77\u200d\u2642\ufe0f",
#     "description": "man construction worker",
#     "category": "People & Body",
#     "aliases": [
#         "construction_worker_man"
#     ],
#     "tags": [
#         "helmet"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:construction_worker_man: `:construction_worker_man:`
') }}
{{ markdown(title="👷‍♀️ woman construction worker" type="markdown", code='

<!--
# 👷‍♀️ woman construction worker
#
# {
#     "emoji": "\ud83d\udc77\u200d\u2640\ufe0f",
#     "description": "woman construction worker",
#     "category": "People & Body",
#     "aliases": [
#         "construction_worker_woman"
#     ],
#     "tags": [
#         "helmet"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "10.0",
#     "skin_tones": true
# }
-->

:construction_worker_woman: `:construction_worker_woman:`
') }}
{{ markdown(title="🫅 person with crown" type="markdown", code='

<!--
# 🫅 person with crown
#
# {
#     "emoji": "\ud83e\udec5",
#     "description": "person with crown",
#     "category": "People & Body",
#     "aliases": [
#         "person_with_crown"
#     ],
#     "tags": [],
#     "unicode_version": "14.0",
#     "ios_version": "15.4",
#     "skin_tones": true
# }
-->

:person_with_crown: `:person_with_crown:`
') }}
{{ markdown(title="🤴 prince" type="markdown", code='

<!--
# 🤴 prince
#
# {
#     "emoji": "\ud83e\udd34",
#     "description": "prince",
#     "category": "People & Body",
#     "aliases": [
#         "prince"
#     ],
#     "tags": [
#         "crown",
#         "royal"
#     ],
#     "unicode_version": "9.0",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:prince: `:prince:`
') }}
{{ markdown(title="👸 princess" type="markdown", code='

<!--
# 👸 princess
#
# {
#     "emoji": "\ud83d\udc78",
#     "description": "princess",
#     "category": "People & Body",
#     "aliases": [
#         "princess"
#     ],
#     "tags": [
#         "crown",
#         "royal"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:princess: `:princess:`
') }}
{{ markdown(title="👳 person wearing turban" type="markdown", code='

<!--
# 👳 person wearing turban
#
# {
#     "emoji": "\ud83d\udc73",
#     "description": "person wearing turban",
#     "category": "People & Body",
#     "aliases": [
#         "person_with_turban"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:person_with_turban: `:person_with_turban:`
') }}
{{ markdown(title="👳‍♂️ man wearing turban" type="markdown", code='

<!--
# 👳‍♂️ man wearing turban
#
# {
#     "emoji": "\ud83d\udc73\u200d\u2642\ufe0f",
#     "description": "man wearing turban",
#     "category": "People & Body",
#     "aliases": [
#         "man_with_turban"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:man_with_turban: `:man_with_turban:`
') }}
{{ markdown(title="👳‍♀️ woman wearing turban" type="markdown", code='

<!--
# 👳‍♀️ woman wearing turban
#
# {
#     "emoji": "\ud83d\udc73\u200d\u2640\ufe0f",
#     "description": "woman wearing turban",
#     "category": "People & Body",
#     "aliases": [
#         "woman_with_turban"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "10.0",
#     "skin_tones": true
# }
-->

:woman_with_turban: `:woman_with_turban:`
') }}
{{ markdown(title="👲 person with skullcap" type="markdown", code='

<!--
# 👲 person with skullcap
#
# {
#     "emoji": "\ud83d\udc72",
#     "description": "person with skullcap",
#     "category": "People & Body",
#     "aliases": [
#         "man_with_gua_pi_mao"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:man_with_gua_pi_mao: `:man_with_gua_pi_mao:`
') }}
{{ markdown(title="🧕 woman with headscarf" type="markdown", code='

<!--
# 🧕 woman with headscarf
#
# {
#     "emoji": "\ud83e\uddd5",
#     "description": "woman with headscarf",
#     "category": "People & Body",
#     "aliases": [
#         "woman_with_headscarf"
#     ],
#     "tags": [
#         "hijab"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:woman_with_headscarf: `:woman_with_headscarf:`
') }}
{{ markdown(title="🤵 person in tuxedo" type="markdown", code='

<!--
# 🤵 person in tuxedo
#
# {
#     "emoji": "\ud83e\udd35",
#     "description": "person in tuxedo",
#     "category": "People & Body",
#     "aliases": [
#         "person_in_tuxedo"
#     ],
#     "tags": [
#         "groom",
#         "marriage",
#         "wedding"
#     ],
#     "unicode_version": "9.0",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:person_in_tuxedo: `:person_in_tuxedo:`
') }}
{{ markdown(title="🤵‍♂️ man in tuxedo" type="markdown", code='

<!--
# 🤵‍♂️ man in tuxedo
#
# {
#     "emoji": "\ud83e\udd35\u200d\u2642\ufe0f",
#     "description": "man in tuxedo",
#     "category": "People & Body",
#     "aliases": [
#         "man_in_tuxedo"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0",
#     "skin_tones": true
# }
-->

:man_in_tuxedo: `:man_in_tuxedo:`
') }}
{{ markdown(title="🤵‍♀️ woman in tuxedo" type="markdown", code='

<!--
# 🤵‍♀️ woman in tuxedo
#
# {
#     "emoji": "\ud83e\udd35\u200d\u2640\ufe0f",
#     "description": "woman in tuxedo",
#     "category": "People & Body",
#     "aliases": [
#         "woman_in_tuxedo"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0",
#     "skin_tones": true
# }
-->

:woman_in_tuxedo: `:woman_in_tuxedo:`
') }}
{{ markdown(title="👰 person with veil" type="markdown", code='

<!--
# 👰 person with veil
#
# {
#     "emoji": "\ud83d\udc70",
#     "description": "person with veil",
#     "category": "People & Body",
#     "aliases": [
#         "person_with_veil"
#     ],
#     "tags": [
#         "marriage",
#         "wedding"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:person_with_veil: `:person_with_veil:`
') }}
{{ markdown(title="👰‍♂️ man with veil" type="markdown", code='

<!--
# 👰‍♂️ man with veil
#
# {
#     "emoji": "\ud83d\udc70\u200d\u2642\ufe0f",
#     "description": "man with veil",
#     "category": "People & Body",
#     "aliases": [
#         "man_with_veil"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0",
#     "skin_tones": true
# }
-->

:man_with_veil: `:man_with_veil:`
') }}
{{ markdown(title="👰‍♀️ woman with veil" type="markdown", code='

<!--
# 👰‍♀️ woman with veil
#
# {
#     "emoji": "\ud83d\udc70\u200d\u2640\ufe0f",
#     "description": "woman with veil",
#     "category": "People & Body",
#     "aliases": [
#         "woman_with_veil",
#         "bride_with_veil"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0",
#     "skin_tones": true
# }
-->

:woman_with_veil: `:woman_with_veil:`

:bride_with_veil: `:bride_with_veil:`
') }}
{{ markdown(title="🤰 pregnant woman" type="markdown", code='

<!--
# 🤰 pregnant woman
#
# {
#     "emoji": "\ud83e\udd30",
#     "description": "pregnant woman",
#     "category": "People & Body",
#     "aliases": [
#         "pregnant_woman"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:pregnant_woman: `:pregnant_woman:`
') }}
{{ markdown(title="🫃 pregnant man" type="markdown", code='

<!--
# 🫃 pregnant man
#
# {
#     "emoji": "\ud83e\udec3",
#     "description": "pregnant man",
#     "category": "People & Body",
#     "aliases": [
#         "pregnant_man"
#     ],
#     "tags": [],
#     "unicode_version": "14.0",
#     "ios_version": "15.4",
#     "skin_tones": true
# }
-->

:pregnant_man: `:pregnant_man:`
') }}
{{ markdown(title="🫄 pregnant person" type="markdown", code='

<!--
# 🫄 pregnant person
#
# {
#     "emoji": "\ud83e\udec4",
#     "description": "pregnant person",
#     "category": "People & Body",
#     "aliases": [
#         "pregnant_person"
#     ],
#     "tags": [],
#     "unicode_version": "14.0",
#     "ios_version": "15.4",
#     "skin_tones": true
# }
-->

:pregnant_person: `:pregnant_person:`
') }}
{{ markdown(title="🤱 breast-feeding" type="markdown", code='

<!--
# 🤱 breast-feeding
#
# {
#     "emoji": "\ud83e\udd31",
#     "description": "breast-feeding",
#     "category": "People & Body",
#     "aliases": [
#         "breast_feeding"
#     ],
#     "tags": [
#         "nursing"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:breast_feeding: `:breast_feeding:`
') }}
{{ markdown(title="👩‍🍼 woman feeding baby" type="markdown", code='

<!--
# 👩‍🍼 woman feeding baby
#
# {
#     "emoji": "\ud83d\udc69\u200d\ud83c\udf7c",
#     "description": "woman feeding baby",
#     "category": "People & Body",
#     "aliases": [
#         "woman_feeding_baby"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0",
#     "skin_tones": true
# }
-->

:woman_feeding_baby: `:woman_feeding_baby:`
') }}
{{ markdown(title="👨‍🍼 man feeding baby" type="markdown", code='

<!--
# 👨‍🍼 man feeding baby
#
# {
#     "emoji": "\ud83d\udc68\u200d\ud83c\udf7c",
#     "description": "man feeding baby",
#     "category": "People & Body",
#     "aliases": [
#         "man_feeding_baby"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0",
#     "skin_tones": true
# }
-->

:man_feeding_baby: `:man_feeding_baby:`
') }}
{{ markdown(title="🧑‍🍼 person feeding baby" type="markdown", code='

<!--
# 🧑‍🍼 person feeding baby
#
# {
#     "emoji": "\ud83e\uddd1\u200d\ud83c\udf7c",
#     "description": "person feeding baby",
#     "category": "People & Body",
#     "aliases": [
#         "person_feeding_baby"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0",
#     "skin_tones": true
# }
-->

:person_feeding_baby: `:person_feeding_baby:`
') }}
{{ markdown(title="👼 baby angel" type="markdown", code='

<!--
# 👼 baby angel
#
# {
#     "emoji": "\ud83d\udc7c",
#     "description": "baby angel",
#     "category": "People & Body",
#     "aliases": [
#         "angel"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:angel: `:angel:`
') }}
{{ markdown(title="🎅 Santa Claus" type="markdown", code='

<!--
# 🎅 Santa Claus
#
# {
#     "emoji": "\ud83c\udf85",
#     "description": "Santa Claus",
#     "category": "People & Body",
#     "aliases": [
#         "santa"
#     ],
#     "tags": [
#         "christmas"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:santa: `:santa:`
') }}
{{ markdown(title="🤶 Mrs. Claus" type="markdown", code='

<!--
# 🤶 Mrs. Claus
#
# {
#     "emoji": "\ud83e\udd36",
#     "description": "Mrs. Claus",
#     "category": "People & Body",
#     "aliases": [
#         "mrs_claus"
#     ],
#     "tags": [
#         "santa"
#     ],
#     "unicode_version": "9.0",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:mrs_claus: `:mrs_claus:`
') }}
{{ markdown(title="🧑‍🎄 mx claus" type="markdown", code='

<!--
# 🧑‍🎄 mx claus
#
# {
#     "emoji": "\ud83e\uddd1\u200d\ud83c\udf84",
#     "description": "mx claus",
#     "category": "People & Body",
#     "aliases": [
#         "mx_claus"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0",
#     "skin_tones": true
# }
-->

:mx_claus: `:mx_claus:`
') }}
{{ markdown(title="🦸 superhero" type="markdown", code='

<!--
# 🦸 superhero
#
# {
#     "emoji": "\ud83e\uddb8",
#     "description": "superhero",
#     "category": "People & Body",
#     "aliases": [
#         "superhero"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:superhero: `:superhero:`
') }}
{{ markdown(title="🦸‍♂️ man superhero" type="markdown", code='

<!--
# 🦸‍♂️ man superhero
#
# {
#     "emoji": "\ud83e\uddb8\u200d\u2642\ufe0f",
#     "description": "man superhero",
#     "category": "People & Body",
#     "aliases": [
#         "superhero_man"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:superhero_man: `:superhero_man:`
') }}
{{ markdown(title="🦸‍♀️ woman superhero" type="markdown", code='

<!--
# 🦸‍♀️ woman superhero
#
# {
#     "emoji": "\ud83e\uddb8\u200d\u2640\ufe0f",
#     "description": "woman superhero",
#     "category": "People & Body",
#     "aliases": [
#         "superhero_woman"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:superhero_woman: `:superhero_woman:`
') }}
{{ markdown(title="🦹 supervillain" type="markdown", code='

<!--
# 🦹 supervillain
#
# {
#     "emoji": "\ud83e\uddb9",
#     "description": "supervillain",
#     "category": "People & Body",
#     "aliases": [
#         "supervillain"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:supervillain: `:supervillain:`
') }}
{{ markdown(title="🦹‍♂️ man supervillain" type="markdown", code='

<!--
# 🦹‍♂️ man supervillain
#
# {
#     "emoji": "\ud83e\uddb9\u200d\u2642\ufe0f",
#     "description": "man supervillain",
#     "category": "People & Body",
#     "aliases": [
#         "supervillain_man"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:supervillain_man: `:supervillain_man:`
') }}
{{ markdown(title="🦹‍♀️ woman supervillain" type="markdown", code='

<!--
# 🦹‍♀️ woman supervillain
#
# {
#     "emoji": "\ud83e\uddb9\u200d\u2640\ufe0f",
#     "description": "woman supervillain",
#     "category": "People & Body",
#     "aliases": [
#         "supervillain_woman"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:supervillain_woman: `:supervillain_woman:`
') }}
{{ markdown(title="🧙 mage" type="markdown", code='

<!--
# 🧙 mage
#
# {
#     "emoji": "\ud83e\uddd9",
#     "description": "mage",
#     "category": "People & Body",
#     "aliases": [
#         "mage"
#     ],
#     "tags": [
#         "wizard"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:mage: `:mage:`
') }}
{{ markdown(title="🧙‍♂️ man mage" type="markdown", code='

<!--
# 🧙‍♂️ man mage
#
# {
#     "emoji": "\ud83e\uddd9\u200d\u2642\ufe0f",
#     "description": "man mage",
#     "category": "People & Body",
#     "aliases": [
#         "mage_man"
#     ],
#     "tags": [
#         "wizard"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:mage_man: `:mage_man:`
') }}
{{ markdown(title="🧙‍♀️ woman mage" type="markdown", code='

<!--
# 🧙‍♀️ woman mage
#
# {
#     "emoji": "\ud83e\uddd9\u200d\u2640\ufe0f",
#     "description": "woman mage",
#     "category": "People & Body",
#     "aliases": [
#         "mage_woman"
#     ],
#     "tags": [
#         "wizard"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:mage_woman: `:mage_woman:`
') }}
{{ markdown(title="🧚 fairy" type="markdown", code='

<!--
# 🧚 fairy
#
# {
#     "emoji": "\ud83e\uddda",
#     "description": "fairy",
#     "category": "People & Body",
#     "aliases": [
#         "fairy"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:fairy: `:fairy:`
') }}
{{ markdown(title="🧚‍♂️ man fairy" type="markdown", code='

<!--
# 🧚‍♂️ man fairy
#
# {
#     "emoji": "\ud83e\uddda\u200d\u2642\ufe0f",
#     "description": "man fairy",
#     "category": "People & Body",
#     "aliases": [
#         "fairy_man"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:fairy_man: `:fairy_man:`
') }}
{{ markdown(title="🧚‍♀️ woman fairy" type="markdown", code='

<!--
# 🧚‍♀️ woman fairy
#
# {
#     "emoji": "\ud83e\uddda\u200d\u2640\ufe0f",
#     "description": "woman fairy",
#     "category": "People & Body",
#     "aliases": [
#         "fairy_woman"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:fairy_woman: `:fairy_woman:`
') }}
{{ markdown(title="🧛 vampire" type="markdown", code='

<!--
# 🧛 vampire
#
# {
#     "emoji": "\ud83e\udddb",
#     "description": "vampire",
#     "category": "People & Body",
#     "aliases": [
#         "vampire"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:vampire: `:vampire:`
') }}
{{ markdown(title="🧛‍♂️ man vampire" type="markdown", code='

<!--
# 🧛‍♂️ man vampire
#
# {
#     "emoji": "\ud83e\udddb\u200d\u2642\ufe0f",
#     "description": "man vampire",
#     "category": "People & Body",
#     "aliases": [
#         "vampire_man"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:vampire_man: `:vampire_man:`
') }}
{{ markdown(title="🧛‍♀️ woman vampire" type="markdown", code='

<!--
# 🧛‍♀️ woman vampire
#
# {
#     "emoji": "\ud83e\udddb\u200d\u2640\ufe0f",
#     "description": "woman vampire",
#     "category": "People & Body",
#     "aliases": [
#         "vampire_woman"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:vampire_woman: `:vampire_woman:`
') }}
{{ markdown(title="🧜 merperson" type="markdown", code='

<!--
# 🧜 merperson
#
# {
#     "emoji": "\ud83e\udddc",
#     "description": "merperson",
#     "category": "People & Body",
#     "aliases": [
#         "merperson"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:merperson: `:merperson:`
') }}
{{ markdown(title="🧜‍♂️ merman" type="markdown", code='

<!--
# 🧜‍♂️ merman
#
# {
#     "emoji": "\ud83e\udddc\u200d\u2642\ufe0f",
#     "description": "merman",
#     "category": "People & Body",
#     "aliases": [
#         "merman"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:merman: `:merman:`
') }}
{{ markdown(title="🧜‍♀️ mermaid" type="markdown", code='

<!--
# 🧜‍♀️ mermaid
#
# {
#     "emoji": "\ud83e\udddc\u200d\u2640\ufe0f",
#     "description": "mermaid",
#     "category": "People & Body",
#     "aliases": [
#         "mermaid"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:mermaid: `:mermaid:`
') }}
{{ markdown(title="🧝 elf" type="markdown", code='

<!--
# 🧝 elf
#
# {
#     "emoji": "\ud83e\udddd",
#     "description": "elf",
#     "category": "People & Body",
#     "aliases": [
#         "elf"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:elf: `:elf:`
') }}
{{ markdown(title="🧝‍♂️ man elf" type="markdown", code='

<!--
# 🧝‍♂️ man elf
#
# {
#     "emoji": "\ud83e\udddd\u200d\u2642\ufe0f",
#     "description": "man elf",
#     "category": "People & Body",
#     "aliases": [
#         "elf_man"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:elf_man: `:elf_man:`
') }}
{{ markdown(title="🧝‍♀️ woman elf" type="markdown", code='

<!--
# 🧝‍♀️ woman elf
#
# {
#     "emoji": "\ud83e\udddd\u200d\u2640\ufe0f",
#     "description": "woman elf",
#     "category": "People & Body",
#     "aliases": [
#         "elf_woman"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:elf_woman: `:elf_woman:`
') }}
{{ markdown(title="🧞 genie" type="markdown", code='

<!--
# 🧞 genie
#
# {
#     "emoji": "\ud83e\uddde",
#     "description": "genie",
#     "category": "People & Body",
#     "aliases": [
#         "genie"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:genie: `:genie:`
') }}
{{ markdown(title="🧞‍♂️ man genie" type="markdown", code='

<!--
# 🧞‍♂️ man genie
#
# {
#     "emoji": "\ud83e\uddde\u200d\u2642\ufe0f",
#     "description": "man genie",
#     "category": "People & Body",
#     "aliases": [
#         "genie_man"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:genie_man: `:genie_man:`
') }}
{{ markdown(title="🧞‍♀️ woman genie" type="markdown", code='

<!--
# 🧞‍♀️ woman genie
#
# {
#     "emoji": "\ud83e\uddde\u200d\u2640\ufe0f",
#     "description": "woman genie",
#     "category": "People & Body",
#     "aliases": [
#         "genie_woman"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:genie_woman: `:genie_woman:`
') }}
{{ markdown(title="🧟 zombie" type="markdown", code='

<!--
# 🧟 zombie
#
# {
#     "emoji": "\ud83e\udddf",
#     "description": "zombie",
#     "category": "People & Body",
#     "aliases": [
#         "zombie"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:zombie: `:zombie:`
') }}
{{ markdown(title="🧟‍♂️ man zombie" type="markdown", code='

<!--
# 🧟‍♂️ man zombie
#
# {
#     "emoji": "\ud83e\udddf\u200d\u2642\ufe0f",
#     "description": "man zombie",
#     "category": "People & Body",
#     "aliases": [
#         "zombie_man"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:zombie_man: `:zombie_man:`
') }}
{{ markdown(title="🧟‍♀️ woman zombie" type="markdown", code='

<!--
# 🧟‍♀️ woman zombie
#
# {
#     "emoji": "\ud83e\udddf\u200d\u2640\ufe0f",
#     "description": "woman zombie",
#     "category": "People & Body",
#     "aliases": [
#         "zombie_woman"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:zombie_woman: `:zombie_woman:`
') }}
{{ markdown(title="🧌 troll" type="markdown", code='

<!--
# 🧌 troll
#
# {
#     "emoji": "\ud83e\uddcc",
#     "description": "troll",
#     "category": "People & Body",
#     "aliases": [
#         "troll"
#     ],
#     "tags": [],
#     "unicode_version": "14.0",
#     "ios_version": "15.4"
# }
-->

:troll: `:troll:`
') }}
{{ markdown(title="💆 person getting massage" type="markdown", code='

<!--
# 💆 person getting massage
#
# {
#     "emoji": "\ud83d\udc86",
#     "description": "person getting massage",
#     "category": "People & Body",
#     "aliases": [
#         "massage"
#     ],
#     "tags": [
#         "spa"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:massage: `:massage:`
') }}
{{ markdown(title="💆‍♂️ man getting massage" type="markdown", code='

<!--
# 💆‍♂️ man getting massage
#
# {
#     "emoji": "\ud83d\udc86\u200d\u2642\ufe0f",
#     "description": "man getting massage",
#     "category": "People & Body",
#     "aliases": [
#         "massage_man"
#     ],
#     "tags": [
#         "spa"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "10.0",
#     "skin_tones": true
# }
-->

:massage_man: `:massage_man:`
') }}
{{ markdown(title="💆‍♀️ woman getting massage" type="markdown", code='

<!--
# 💆‍♀️ woman getting massage
#
# {
#     "emoji": "\ud83d\udc86\u200d\u2640\ufe0f",
#     "description": "woman getting massage",
#     "category": "People & Body",
#     "aliases": [
#         "massage_woman"
#     ],
#     "tags": [
#         "spa"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:massage_woman: `:massage_woman:`
') }}
{{ markdown(title="💇 person getting haircut" type="markdown", code='

<!--
# 💇 person getting haircut
#
# {
#     "emoji": "\ud83d\udc87",
#     "description": "person getting haircut",
#     "category": "People & Body",
#     "aliases": [
#         "haircut"
#     ],
#     "tags": [
#         "beauty"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:haircut: `:haircut:`
') }}
{{ markdown(title="💇‍♂️ man getting haircut" type="markdown", code='

<!--
# 💇‍♂️ man getting haircut
#
# {
#     "emoji": "\ud83d\udc87\u200d\u2642\ufe0f",
#     "description": "man getting haircut",
#     "category": "People & Body",
#     "aliases": [
#         "haircut_man"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "10.0",
#     "skin_tones": true
# }
-->

:haircut_man: `:haircut_man:`
') }}
{{ markdown(title="💇‍♀️ woman getting haircut" type="markdown", code='

<!--
# 💇‍♀️ woman getting haircut
#
# {
#     "emoji": "\ud83d\udc87\u200d\u2640\ufe0f",
#     "description": "woman getting haircut",
#     "category": "People & Body",
#     "aliases": [
#         "haircut_woman"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:haircut_woman: `:haircut_woman:`
') }}
{{ markdown(title="🚶 person walking" type="markdown", code='

<!--
# 🚶 person walking
#
# {
#     "emoji": "\ud83d\udeb6",
#     "description": "person walking",
#     "category": "People & Body",
#     "aliases": [
#         "walking"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:walking: `:walking:`
') }}
{{ markdown(title="🚶‍♂️ man walking" type="markdown", code='

<!--
# 🚶‍♂️ man walking
#
# {
#     "emoji": "\ud83d\udeb6\u200d\u2642\ufe0f",
#     "description": "man walking",
#     "category": "People & Body",
#     "aliases": [
#         "walking_man"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:walking_man: `:walking_man:`
') }}
{{ markdown(title="🚶‍♀️ woman walking" type="markdown", code='

<!--
# 🚶‍♀️ woman walking
#
# {
#     "emoji": "\ud83d\udeb6\u200d\u2640\ufe0f",
#     "description": "woman walking",
#     "category": "People & Body",
#     "aliases": [
#         "walking_woman"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "10.0",
#     "skin_tones": true
# }
-->

:walking_woman: `:walking_woman:`
') }}
{{ markdown(title="🧍 person standing" type="markdown", code='

<!--
# 🧍 person standing
#
# {
#     "emoji": "\ud83e\uddcd",
#     "description": "person standing",
#     "category": "People & Body",
#     "aliases": [
#         "standing_person"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0",
#     "skin_tones": true
# }
-->

:standing_person: `:standing_person:`
') }}
{{ markdown(title="🧍‍♂️ man standing" type="markdown", code='

<!--
# 🧍‍♂️ man standing
#
# {
#     "emoji": "\ud83e\uddcd\u200d\u2642\ufe0f",
#     "description": "man standing",
#     "category": "People & Body",
#     "aliases": [
#         "standing_man"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0",
#     "skin_tones": true
# }
-->

:standing_man: `:standing_man:`
') }}
{{ markdown(title="🧍‍♀️ woman standing" type="markdown", code='

<!--
# 🧍‍♀️ woman standing
#
# {
#     "emoji": "\ud83e\uddcd\u200d\u2640\ufe0f",
#     "description": "woman standing",
#     "category": "People & Body",
#     "aliases": [
#         "standing_woman"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0",
#     "skin_tones": true
# }
-->

:standing_woman: `:standing_woman:`
') }}
{{ markdown(title="🧎 person kneeling" type="markdown", code='

<!--
# 🧎 person kneeling
#
# {
#     "emoji": "\ud83e\uddce",
#     "description": "person kneeling",
#     "category": "People & Body",
#     "aliases": [
#         "kneeling_person"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0",
#     "skin_tones": true
# }
-->

:kneeling_person: `:kneeling_person:`
') }}
{{ markdown(title="🧎‍♂️ man kneeling" type="markdown", code='

<!--
# 🧎‍♂️ man kneeling
#
# {
#     "emoji": "\ud83e\uddce\u200d\u2642\ufe0f",
#     "description": "man kneeling",
#     "category": "People & Body",
#     "aliases": [
#         "kneeling_man"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0",
#     "skin_tones": true
# }
-->

:kneeling_man: `:kneeling_man:`
') }}
{{ markdown(title="🧎‍♀️ woman kneeling" type="markdown", code='

<!--
# 🧎‍♀️ woman kneeling
#
# {
#     "emoji": "\ud83e\uddce\u200d\u2640\ufe0f",
#     "description": "woman kneeling",
#     "category": "People & Body",
#     "aliases": [
#         "kneeling_woman"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0",
#     "skin_tones": true
# }
-->

:kneeling_woman: `:kneeling_woman:`
') }}
{{ markdown(title="🧑‍🦯 person with white cane" type="markdown", code='

<!--
# 🧑‍🦯 person with white cane
#
# {
#     "emoji": "\ud83e\uddd1\u200d\ud83e\uddaf",
#     "description": "person with white cane",
#     "category": "People & Body",
#     "aliases": [
#         "person_with_probing_cane"
#     ],
#     "tags": [],
#     "unicode_version": "12.1",
#     "ios_version": "13.2",
#     "skin_tones": true
# }
-->

:person_with_probing_cane: `:person_with_probing_cane:`
') }}
{{ markdown(title="👨‍🦯 man with white cane" type="markdown", code='

<!--
# 👨‍🦯 man with white cane
#
# {
#     "emoji": "\ud83d\udc68\u200d\ud83e\uddaf",
#     "description": "man with white cane",
#     "category": "People & Body",
#     "aliases": [
#         "man_with_probing_cane"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0",
#     "skin_tones": true
# }
-->

:man_with_probing_cane: `:man_with_probing_cane:`
') }}
{{ markdown(title="👩‍🦯 woman with white cane" type="markdown", code='

<!--
# 👩‍🦯 woman with white cane
#
# {
#     "emoji": "\ud83d\udc69\u200d\ud83e\uddaf",
#     "description": "woman with white cane",
#     "category": "People & Body",
#     "aliases": [
#         "woman_with_probing_cane"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0",
#     "skin_tones": true
# }
-->

:woman_with_probing_cane: `:woman_with_probing_cane:`
') }}
{{ markdown(title="🧑‍🦼 person in motorized wheelchair" type="markdown", code='

<!--
# 🧑‍🦼 person in motorized wheelchair
#
# {
#     "emoji": "\ud83e\uddd1\u200d\ud83e\uddbc",
#     "description": "person in motorized wheelchair",
#     "category": "People & Body",
#     "aliases": [
#         "person_in_motorized_wheelchair"
#     ],
#     "tags": [],
#     "unicode_version": "12.1",
#     "ios_version": "13.2",
#     "skin_tones": true
# }
-->

:person_in_motorized_wheelchair: `:person_in_motorized_wheelchair:`
') }}
{{ markdown(title="👨‍🦼 man in motorized wheelchair" type="markdown", code='

<!--
# 👨‍🦼 man in motorized wheelchair
#
# {
#     "emoji": "\ud83d\udc68\u200d\ud83e\uddbc",
#     "description": "man in motorized wheelchair",
#     "category": "People & Body",
#     "aliases": [
#         "man_in_motorized_wheelchair"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0",
#     "skin_tones": true
# }
-->

:man_in_motorized_wheelchair: `:man_in_motorized_wheelchair:`
') }}
{{ markdown(title="👩‍🦼 woman in motorized wheelchair" type="markdown", code='

<!--
# 👩‍🦼 woman in motorized wheelchair
#
# {
#     "emoji": "\ud83d\udc69\u200d\ud83e\uddbc",
#     "description": "woman in motorized wheelchair",
#     "category": "People & Body",
#     "aliases": [
#         "woman_in_motorized_wheelchair"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0",
#     "skin_tones": true
# }
-->

:woman_in_motorized_wheelchair: `:woman_in_motorized_wheelchair:`
') }}
{{ markdown(title="🧑‍🦽 person in manual wheelchair" type="markdown", code='

<!--
# 🧑‍🦽 person in manual wheelchair
#
# {
#     "emoji": "\ud83e\uddd1\u200d\ud83e\uddbd",
#     "description": "person in manual wheelchair",
#     "category": "People & Body",
#     "aliases": [
#         "person_in_manual_wheelchair"
#     ],
#     "tags": [],
#     "unicode_version": "12.1",
#     "ios_version": "13.2",
#     "skin_tones": true
# }
-->

:person_in_manual_wheelchair: `:person_in_manual_wheelchair:`
') }}
{{ markdown(title="👨‍🦽 man in manual wheelchair" type="markdown", code='

<!--
# 👨‍🦽 man in manual wheelchair
#
# {
#     "emoji": "\ud83d\udc68\u200d\ud83e\uddbd",
#     "description": "man in manual wheelchair",
#     "category": "People & Body",
#     "aliases": [
#         "man_in_manual_wheelchair"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0",
#     "skin_tones": true
# }
-->

:man_in_manual_wheelchair: `:man_in_manual_wheelchair:`
') }}
{{ markdown(title="👩‍🦽 woman in manual wheelchair" type="markdown", code='

<!--
# 👩‍🦽 woman in manual wheelchair
#
# {
#     "emoji": "\ud83d\udc69\u200d\ud83e\uddbd",
#     "description": "woman in manual wheelchair",
#     "category": "People & Body",
#     "aliases": [
#         "woman_in_manual_wheelchair"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0",
#     "skin_tones": true
# }
-->

:woman_in_manual_wheelchair: `:woman_in_manual_wheelchair:`
') }}
{{ markdown(title="🏃 person running" type="markdown", code='

<!--
# 🏃 person running
#
# {
#     "emoji": "\ud83c\udfc3",
#     "description": "person running",
#     "category": "People & Body",
#     "aliases": [
#         "runner",
#         "running"
#     ],
#     "tags": [
#         "exercise",
#         "workout",
#         "marathon"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:runner: `:runner:`

:running: `:running:`
') }}
{{ markdown(title="🏃‍♂️ man running" type="markdown", code='

<!--
# 🏃‍♂️ man running
#
# {
#     "emoji": "\ud83c\udfc3\u200d\u2642\ufe0f",
#     "description": "man running",
#     "category": "People & Body",
#     "aliases": [
#         "running_man"
#     ],
#     "tags": [
#         "exercise",
#         "workout",
#         "marathon"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:running_man: `:running_man:`
') }}
{{ markdown(title="🏃‍♀️ woman running" type="markdown", code='

<!--
# 🏃‍♀️ woman running
#
# {
#     "emoji": "\ud83c\udfc3\u200d\u2640\ufe0f",
#     "description": "woman running",
#     "category": "People & Body",
#     "aliases": [
#         "running_woman"
#     ],
#     "tags": [
#         "exercise",
#         "workout",
#         "marathon"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "10.0",
#     "skin_tones": true
# }
-->

:running_woman: `:running_woman:`
') }}
{{ markdown(title="💃 woman dancing" type="markdown", code='

<!--
# 💃 woman dancing
#
# {
#     "emoji": "\ud83d\udc83",
#     "description": "woman dancing",
#     "category": "People & Body",
#     "aliases": [
#         "woman_dancing",
#         "dancer"
#     ],
#     "tags": [
#         "dress"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:woman_dancing: `:woman_dancing:`

:dancer: `:dancer:`
') }}
{{ markdown(title="🕺 man dancing" type="markdown", code='

<!--
# 🕺 man dancing
#
# {
#     "emoji": "\ud83d\udd7a",
#     "description": "man dancing",
#     "category": "People & Body",
#     "aliases": [
#         "man_dancing"
#     ],
#     "tags": [
#         "dancer"
#     ],
#     "unicode_version": "9.0",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:man_dancing: `:man_dancing:`
') }}
{{ markdown(title="🕴️ person in suit levitating" type="markdown", code='

<!--
# 🕴️ person in suit levitating
#
# {
#     "emoji": "\ud83d\udd74\ufe0f",
#     "description": "person in suit levitating",
#     "category": "People & Body",
#     "aliases": [
#         "business_suit_levitating"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1",
#     "skin_tones": true
# }
-->

:business_suit_levitating: `:business_suit_levitating:`
') }}
{{ markdown(title="👯 people with bunny ears" type="markdown", code='

<!--
# 👯 people with bunny ears
#
# {
#     "emoji": "\ud83d\udc6f",
#     "description": "people with bunny ears",
#     "category": "People & Body",
#     "aliases": [
#         "dancers"
#     ],
#     "tags": [
#         "bunny"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:dancers: `:dancers:`
') }}
{{ markdown(title="👯‍♂️ men with bunny ears" type="markdown", code='

<!--
# 👯‍♂️ men with bunny ears
#
# {
#     "emoji": "\ud83d\udc6f\u200d\u2642\ufe0f",
#     "description": "men with bunny ears",
#     "category": "People & Body",
#     "aliases": [
#         "dancing_men"
#     ],
#     "tags": [
#         "bunny"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "10.0"
# }
-->

:dancing_men: `:dancing_men:`
') }}
{{ markdown(title="👯‍♀️ women with bunny ears" type="markdown", code='

<!--
# 👯‍♀️ women with bunny ears
#
# {
#     "emoji": "\ud83d\udc6f\u200d\u2640\ufe0f",
#     "description": "women with bunny ears",
#     "category": "People & Body",
#     "aliases": [
#         "dancing_women"
#     ],
#     "tags": [
#         "bunny"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:dancing_women: `:dancing_women:`
') }}
{{ markdown(title="🧖 person in steamy room" type="markdown", code='

<!--
# 🧖 person in steamy room
#
# {
#     "emoji": "\ud83e\uddd6",
#     "description": "person in steamy room",
#     "category": "People & Body",
#     "aliases": [
#         "sauna_person"
#     ],
#     "tags": [
#         "steamy"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:sauna_person: `:sauna_person:`
') }}
{{ markdown(title="🧖‍♂️ man in steamy room" type="markdown", code='

<!--
# 🧖‍♂️ man in steamy room
#
# {
#     "emoji": "\ud83e\uddd6\u200d\u2642\ufe0f",
#     "description": "man in steamy room",
#     "category": "People & Body",
#     "aliases": [
#         "sauna_man"
#     ],
#     "tags": [
#         "steamy"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:sauna_man: `:sauna_man:`
') }}
{{ markdown(title="🧖‍♀️ woman in steamy room" type="markdown", code='

<!--
# 🧖‍♀️ woman in steamy room
#
# {
#     "emoji": "\ud83e\uddd6\u200d\u2640\ufe0f",
#     "description": "woman in steamy room",
#     "category": "People & Body",
#     "aliases": [
#         "sauna_woman"
#     ],
#     "tags": [
#         "steamy"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:sauna_woman: `:sauna_woman:`
') }}
{{ markdown(title="🧗 person climbing" type="markdown", code='

<!--
# 🧗 person climbing
#
# {
#     "emoji": "\ud83e\uddd7",
#     "description": "person climbing",
#     "category": "People & Body",
#     "aliases": [
#         "climbing"
#     ],
#     "tags": [
#         "bouldering"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:climbing: `:climbing:`
') }}
{{ markdown(title="🧗‍♂️ man climbing" type="markdown", code='

<!--
# 🧗‍♂️ man climbing
#
# {
#     "emoji": "\ud83e\uddd7\u200d\u2642\ufe0f",
#     "description": "man climbing",
#     "category": "People & Body",
#     "aliases": [
#         "climbing_man"
#     ],
#     "tags": [
#         "bouldering"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:climbing_man: `:climbing_man:`
') }}
{{ markdown(title="🧗‍♀️ woman climbing" type="markdown", code='

<!--
# 🧗‍♀️ woman climbing
#
# {
#     "emoji": "\ud83e\uddd7\u200d\u2640\ufe0f",
#     "description": "woman climbing",
#     "category": "People & Body",
#     "aliases": [
#         "climbing_woman"
#     ],
#     "tags": [
#         "bouldering"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:climbing_woman: `:climbing_woman:`
') }}
{{ markdown(title="🤺 person fencing" type="markdown", code='

<!--
# 🤺 person fencing
#
# {
#     "emoji": "\ud83e\udd3a",
#     "description": "person fencing",
#     "category": "People & Body",
#     "aliases": [
#         "person_fencing"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:person_fencing: `:person_fencing:`
') }}
{{ markdown(title="🏇 horse racing" type="markdown", code='

<!--
# 🏇 horse racing
#
# {
#     "emoji": "\ud83c\udfc7",
#     "description": "horse racing",
#     "category": "People & Body",
#     "aliases": [
#         "horse_racing"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:horse_racing: `:horse_racing:`
') }}
{{ markdown(title="⛷️ skier" type="markdown", code='

<!--
# ⛷️ skier
#
# {
#     "emoji": "\u26f7\ufe0f",
#     "description": "skier",
#     "category": "People & Body",
#     "aliases": [
#         "skier"
#     ],
#     "tags": [],
#     "unicode_version": "5.2",
#     "ios_version": "9.1"
# }
-->

:skier: `:skier:`
') }}
{{ markdown(title="🏂 snowboarder" type="markdown", code='

<!--
# 🏂 snowboarder
#
# {
#     "emoji": "\ud83c\udfc2",
#     "description": "snowboarder",
#     "category": "People & Body",
#     "aliases": [
#         "snowboarder"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:snowboarder: `:snowboarder:`
') }}
{{ markdown(title="🏌️ person golfing" type="markdown", code='

<!--
# 🏌️ person golfing
#
# {
#     "emoji": "\ud83c\udfcc\ufe0f",
#     "description": "person golfing",
#     "category": "People & Body",
#     "aliases": [
#         "golfing"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1",
#     "skin_tones": true
# }
-->

:golfing: `:golfing:`
') }}
{{ markdown(title="🏌️‍♂️ man golfing" type="markdown", code='

<!--
# 🏌️‍♂️ man golfing
#
# {
#     "emoji": "\ud83c\udfcc\ufe0f\u200d\u2642\ufe0f",
#     "description": "man golfing",
#     "category": "People & Body",
#     "aliases": [
#         "golfing_man"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:golfing_man: `:golfing_man:`
') }}
{{ markdown(title="🏌️‍♀️ woman golfing" type="markdown", code='

<!--
# 🏌️‍♀️ woman golfing
#
# {
#     "emoji": "\ud83c\udfcc\ufe0f\u200d\u2640\ufe0f",
#     "description": "woman golfing",
#     "category": "People & Body",
#     "aliases": [
#         "golfing_woman"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "10.0",
#     "skin_tones": true
# }
-->

:golfing_woman: `:golfing_woman:`
') }}
{{ markdown(title="🏄 person surfing" type="markdown", code='

<!--
# 🏄 person surfing
#
# {
#     "emoji": "\ud83c\udfc4",
#     "description": "person surfing",
#     "category": "People & Body",
#     "aliases": [
#         "surfer"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:surfer: `:surfer:`
') }}
{{ markdown(title="🏄‍♂️ man surfing" type="markdown", code='

<!--
# 🏄‍♂️ man surfing
#
# {
#     "emoji": "\ud83c\udfc4\u200d\u2642\ufe0f",
#     "description": "man surfing",
#     "category": "People & Body",
#     "aliases": [
#         "surfing_man"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:surfing_man: `:surfing_man:`
') }}
{{ markdown(title="🏄‍♀️ woman surfing" type="markdown", code='

<!--
# 🏄‍♀️ woman surfing
#
# {
#     "emoji": "\ud83c\udfc4\u200d\u2640\ufe0f",
#     "description": "woman surfing",
#     "category": "People & Body",
#     "aliases": [
#         "surfing_woman"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "10.0",
#     "skin_tones": true
# }
-->

:surfing_woman: `:surfing_woman:`
') }}
{{ markdown(title="🚣 person rowing boat" type="markdown", code='

<!--
# 🚣 person rowing boat
#
# {
#     "emoji": "\ud83d\udea3",
#     "description": "person rowing boat",
#     "category": "People & Body",
#     "aliases": [
#         "rowboat"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:rowboat: `:rowboat:`
') }}
{{ markdown(title="🚣‍♂️ man rowing boat" type="markdown", code='

<!--
# 🚣‍♂️ man rowing boat
#
# {
#     "emoji": "\ud83d\udea3\u200d\u2642\ufe0f",
#     "description": "man rowing boat",
#     "category": "People & Body",
#     "aliases": [
#         "rowing_man"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:rowing_man: `:rowing_man:`
') }}
{{ markdown(title="🚣‍♀️ woman rowing boat" type="markdown", code='

<!--
# 🚣‍♀️ woman rowing boat
#
# {
#     "emoji": "\ud83d\udea3\u200d\u2640\ufe0f",
#     "description": "woman rowing boat",
#     "category": "People & Body",
#     "aliases": [
#         "rowing_woman"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "10.0",
#     "skin_tones": true
# }
-->

:rowing_woman: `:rowing_woman:`
') }}
{{ markdown(title="🏊 person swimming" type="markdown", code='

<!--
# 🏊 person swimming
#
# {
#     "emoji": "\ud83c\udfca",
#     "description": "person swimming",
#     "category": "People & Body",
#     "aliases": [
#         "swimmer"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:swimmer: `:swimmer:`
') }}
{{ markdown(title="🏊‍♂️ man swimming" type="markdown", code='

<!--
# 🏊‍♂️ man swimming
#
# {
#     "emoji": "\ud83c\udfca\u200d\u2642\ufe0f",
#     "description": "man swimming",
#     "category": "People & Body",
#     "aliases": [
#         "swimming_man"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:swimming_man: `:swimming_man:`
') }}
{{ markdown(title="🏊‍♀️ woman swimming" type="markdown", code='

<!--
# 🏊‍♀️ woman swimming
#
# {
#     "emoji": "\ud83c\udfca\u200d\u2640\ufe0f",
#     "description": "woman swimming",
#     "category": "People & Body",
#     "aliases": [
#         "swimming_woman"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "10.0",
#     "skin_tones": true
# }
-->

:swimming_woman: `:swimming_woman:`
') }}
{{ markdown(title="⛹️ person bouncing ball" type="markdown", code='

<!--
# ⛹️ person bouncing ball
#
# {
#     "emoji": "\u26f9\ufe0f",
#     "description": "person bouncing ball",
#     "category": "People & Body",
#     "aliases": [
#         "bouncing_ball_person"
#     ],
#     "tags": [
#         "basketball"
#     ],
#     "unicode_version": "5.2",
#     "ios_version": "9.1",
#     "skin_tones": true
# }
-->

:bouncing_ball_person: `:bouncing_ball_person:`
') }}
{{ markdown(title="⛹️‍♂️ man bouncing ball" type="markdown", code='

<!--
# ⛹️‍♂️ man bouncing ball
#
# {
#     "emoji": "\u26f9\ufe0f\u200d\u2642\ufe0f",
#     "description": "man bouncing ball",
#     "category": "People & Body",
#     "aliases": [
#         "bouncing_ball_man",
#         "basketball_man"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:bouncing_ball_man: `:bouncing_ball_man:`

:basketball_man: `:basketball_man:`
') }}
{{ markdown(title="⛹️‍♀️ woman bouncing ball" type="markdown", code='

<!--
# ⛹️‍♀️ woman bouncing ball
#
# {
#     "emoji": "\u26f9\ufe0f\u200d\u2640\ufe0f",
#     "description": "woman bouncing ball",
#     "category": "People & Body",
#     "aliases": [
#         "bouncing_ball_woman",
#         "basketball_woman"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "10.0",
#     "skin_tones": true
# }
-->

:bouncing_ball_woman: `:bouncing_ball_woman:`

:basketball_woman: `:basketball_woman:`
') }}
{{ markdown(title="🏋️ person lifting weights" type="markdown", code='

<!--
# 🏋️ person lifting weights
#
# {
#     "emoji": "\ud83c\udfcb\ufe0f",
#     "description": "person lifting weights",
#     "category": "People & Body",
#     "aliases": [
#         "weight_lifting"
#     ],
#     "tags": [
#         "gym",
#         "workout"
#     ],
#     "unicode_version": "7.0",
#     "ios_version": "9.1",
#     "skin_tones": true
# }
-->

:weight_lifting: `:weight_lifting:`
') }}
{{ markdown(title="🏋️‍♂️ man lifting weights" type="markdown", code='

<!--
# 🏋️‍♂️ man lifting weights
#
# {
#     "emoji": "\ud83c\udfcb\ufe0f\u200d\u2642\ufe0f",
#     "description": "man lifting weights",
#     "category": "People & Body",
#     "aliases": [
#         "weight_lifting_man"
#     ],
#     "tags": [
#         "gym",
#         "workout"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:weight_lifting_man: `:weight_lifting_man:`
') }}
{{ markdown(title="🏋️‍♀️ woman lifting weights" type="markdown", code='

<!--
# 🏋️‍♀️ woman lifting weights
#
# {
#     "emoji": "\ud83c\udfcb\ufe0f\u200d\u2640\ufe0f",
#     "description": "woman lifting weights",
#     "category": "People & Body",
#     "aliases": [
#         "weight_lifting_woman"
#     ],
#     "tags": [
#         "gym",
#         "workout"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "10.0",
#     "skin_tones": true
# }
-->

:weight_lifting_woman: `:weight_lifting_woman:`
') }}
{{ markdown(title="🚴 person biking" type="markdown", code='

<!--
# 🚴 person biking
#
# {
#     "emoji": "\ud83d\udeb4",
#     "description": "person biking",
#     "category": "People & Body",
#     "aliases": [
#         "bicyclist"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:bicyclist: `:bicyclist:`
') }}
{{ markdown(title="🚴‍♂️ man biking" type="markdown", code='

<!--
# 🚴‍♂️ man biking
#
# {
#     "emoji": "\ud83d\udeb4\u200d\u2642\ufe0f",
#     "description": "man biking",
#     "category": "People & Body",
#     "aliases": [
#         "biking_man"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:biking_man: `:biking_man:`
') }}
{{ markdown(title="🚴‍♀️ woman biking" type="markdown", code='

<!--
# 🚴‍♀️ woman biking
#
# {
#     "emoji": "\ud83d\udeb4\u200d\u2640\ufe0f",
#     "description": "woman biking",
#     "category": "People & Body",
#     "aliases": [
#         "biking_woman"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "10.0",
#     "skin_tones": true
# }
-->

:biking_woman: `:biking_woman:`
') }}
{{ markdown(title="🚵 person mountain biking" type="markdown", code='

<!--
# 🚵 person mountain biking
#
# {
#     "emoji": "\ud83d\udeb5",
#     "description": "person mountain biking",
#     "category": "People & Body",
#     "aliases": [
#         "mountain_bicyclist"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:mountain_bicyclist: `:mountain_bicyclist:`
') }}
{{ markdown(title="🚵‍♂️ man mountain biking" type="markdown", code='

<!--
# 🚵‍♂️ man mountain biking
#
# {
#     "emoji": "\ud83d\udeb5\u200d\u2642\ufe0f",
#     "description": "man mountain biking",
#     "category": "People & Body",
#     "aliases": [
#         "mountain_biking_man"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:mountain_biking_man: `:mountain_biking_man:`
') }}
{{ markdown(title="🚵‍♀️ woman mountain biking" type="markdown", code='

<!--
# 🚵‍♀️ woman mountain biking
#
# {
#     "emoji": "\ud83d\udeb5\u200d\u2640\ufe0f",
#     "description": "woman mountain biking",
#     "category": "People & Body",
#     "aliases": [
#         "mountain_biking_woman"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "10.0",
#     "skin_tones": true
# }
-->

:mountain_biking_woman: `:mountain_biking_woman:`
') }}
{{ markdown(title="🤸 person cartwheeling" type="markdown", code='

<!--
# 🤸 person cartwheeling
#
# {
#     "emoji": "\ud83e\udd38",
#     "description": "person cartwheeling",
#     "category": "People & Body",
#     "aliases": [
#         "cartwheeling"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:cartwheeling: `:cartwheeling:`
') }}
{{ markdown(title="🤸‍♂️ man cartwheeling" type="markdown", code='

<!--
# 🤸‍♂️ man cartwheeling
#
# {
#     "emoji": "\ud83e\udd38\u200d\u2642\ufe0f",
#     "description": "man cartwheeling",
#     "category": "People & Body",
#     "aliases": [
#         "man_cartwheeling"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:man_cartwheeling: `:man_cartwheeling:`
') }}
{{ markdown(title="🤸‍♀️ woman cartwheeling" type="markdown", code='

<!--
# 🤸‍♀️ woman cartwheeling
#
# {
#     "emoji": "\ud83e\udd38\u200d\u2640\ufe0f",
#     "description": "woman cartwheeling",
#     "category": "People & Body",
#     "aliases": [
#         "woman_cartwheeling"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:woman_cartwheeling: `:woman_cartwheeling:`
') }}
{{ markdown(title="🤼 people wrestling" type="markdown", code='

<!--
# 🤼 people wrestling
#
# {
#     "emoji": "\ud83e\udd3c",
#     "description": "people wrestling",
#     "category": "People & Body",
#     "aliases": [
#         "wrestling"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:wrestling: `:wrestling:`
') }}
{{ markdown(title="🤼‍♂️ men wrestling" type="markdown", code='

<!--
# 🤼‍♂️ men wrestling
#
# {
#     "emoji": "\ud83e\udd3c\u200d\u2642\ufe0f",
#     "description": "men wrestling",
#     "category": "People & Body",
#     "aliases": [
#         "men_wrestling"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:men_wrestling: `:men_wrestling:`
') }}
{{ markdown(title="🤼‍♀️ women wrestling" type="markdown", code='

<!--
# 🤼‍♀️ women wrestling
#
# {
#     "emoji": "\ud83e\udd3c\u200d\u2640\ufe0f",
#     "description": "women wrestling",
#     "category": "People & Body",
#     "aliases": [
#         "women_wrestling"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:women_wrestling: `:women_wrestling:`
') }}
{{ markdown(title="🤽 person playing water polo" type="markdown", code='

<!--
# 🤽 person playing water polo
#
# {
#     "emoji": "\ud83e\udd3d",
#     "description": "person playing water polo",
#     "category": "People & Body",
#     "aliases": [
#         "water_polo"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:water_polo: `:water_polo:`
') }}
{{ markdown(title="🤽‍♂️ man playing water polo" type="markdown", code='

<!--
# 🤽‍♂️ man playing water polo
#
# {
#     "emoji": "\ud83e\udd3d\u200d\u2642\ufe0f",
#     "description": "man playing water polo",
#     "category": "People & Body",
#     "aliases": [
#         "man_playing_water_polo"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:man_playing_water_polo: `:man_playing_water_polo:`
') }}
{{ markdown(title="🤽‍♀️ woman playing water polo" type="markdown", code='

<!--
# 🤽‍♀️ woman playing water polo
#
# {
#     "emoji": "\ud83e\udd3d\u200d\u2640\ufe0f",
#     "description": "woman playing water polo",
#     "category": "People & Body",
#     "aliases": [
#         "woman_playing_water_polo"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:woman_playing_water_polo: `:woman_playing_water_polo:`
') }}
{{ markdown(title="🤾 person playing handball" type="markdown", code='

<!--
# 🤾 person playing handball
#
# {
#     "emoji": "\ud83e\udd3e",
#     "description": "person playing handball",
#     "category": "People & Body",
#     "aliases": [
#         "handball_person"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:handball_person: `:handball_person:`
') }}
{{ markdown(title="🤾‍♂️ man playing handball" type="markdown", code='

<!--
# 🤾‍♂️ man playing handball
#
# {
#     "emoji": "\ud83e\udd3e\u200d\u2642\ufe0f",
#     "description": "man playing handball",
#     "category": "People & Body",
#     "aliases": [
#         "man_playing_handball"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:man_playing_handball: `:man_playing_handball:`
') }}
{{ markdown(title="🤾‍♀️ woman playing handball" type="markdown", code='

<!--
# 🤾‍♀️ woman playing handball
#
# {
#     "emoji": "\ud83e\udd3e\u200d\u2640\ufe0f",
#     "description": "woman playing handball",
#     "category": "People & Body",
#     "aliases": [
#         "woman_playing_handball"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:woman_playing_handball: `:woman_playing_handball:`
') }}
{{ markdown(title="🤹 person juggling" type="markdown", code='

<!--
# 🤹 person juggling
#
# {
#     "emoji": "\ud83e\udd39",
#     "description": "person juggling",
#     "category": "People & Body",
#     "aliases": [
#         "juggling_person"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:juggling_person: `:juggling_person:`
') }}
{{ markdown(title="🤹‍♂️ man juggling" type="markdown", code='

<!--
# 🤹‍♂️ man juggling
#
# {
#     "emoji": "\ud83e\udd39\u200d\u2642\ufe0f",
#     "description": "man juggling",
#     "category": "People & Body",
#     "aliases": [
#         "man_juggling"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:man_juggling: `:man_juggling:`
') }}
{{ markdown(title="🤹‍♀️ woman juggling" type="markdown", code='

<!--
# 🤹‍♀️ woman juggling
#
# {
#     "emoji": "\ud83e\udd39\u200d\u2640\ufe0f",
#     "description": "woman juggling",
#     "category": "People & Body",
#     "aliases": [
#         "woman_juggling"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2",
#     "skin_tones": true
# }
-->

:woman_juggling: `:woman_juggling:`
') }}
{{ markdown(title="🧘 person in lotus position" type="markdown", code='

<!--
# 🧘 person in lotus position
#
# {
#     "emoji": "\ud83e\uddd8",
#     "description": "person in lotus position",
#     "category": "People & Body",
#     "aliases": [
#         "lotus_position"
#     ],
#     "tags": [
#         "meditation"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:lotus_position: `:lotus_position:`
') }}
{{ markdown(title="🧘‍♂️ man in lotus position" type="markdown", code='

<!--
# 🧘‍♂️ man in lotus position
#
# {
#     "emoji": "\ud83e\uddd8\u200d\u2642\ufe0f",
#     "description": "man in lotus position",
#     "category": "People & Body",
#     "aliases": [
#         "lotus_position_man"
#     ],
#     "tags": [
#         "meditation"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:lotus_position_man: `:lotus_position_man:`
') }}
{{ markdown(title="🧘‍♀️ woman in lotus position" type="markdown", code='

<!--
# 🧘‍♀️ woman in lotus position
#
# {
#     "emoji": "\ud83e\uddd8\u200d\u2640\ufe0f",
#     "description": "woman in lotus position",
#     "category": "People & Body",
#     "aliases": [
#         "lotus_position_woman"
#     ],
#     "tags": [
#         "meditation"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:lotus_position_woman: `:lotus_position_woman:`
') }}
{{ markdown(title="🛀 person taking bath" type="markdown", code='

<!--
# 🛀 person taking bath
#
# {
#     "emoji": "\ud83d\udec0",
#     "description": "person taking bath",
#     "category": "People & Body",
#     "aliases": [
#         "bath"
#     ],
#     "tags": [
#         "shower"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:bath: `:bath:`
') }}
{{ markdown(title="🛌 person in bed" type="markdown", code='

<!--
# 🛌 person in bed
#
# {
#     "emoji": "\ud83d\udecc",
#     "description": "person in bed",
#     "category": "People & Body",
#     "aliases": [
#         "sleeping_bed"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1",
#     "skin_tones": true
# }
-->

:sleeping_bed: `:sleeping_bed:`
') }}
{{ markdown(title="🧑‍🤝‍🧑 people holding hands" type="markdown", code='

<!--
# 🧑‍🤝‍🧑 people holding hands
#
# {
#     "emoji": "\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1",
#     "description": "people holding hands",
#     "category": "People & Body",
#     "aliases": [
#         "people_holding_hands"
#     ],
#     "tags": [
#         "couple",
#         "date"
#     ],
#     "unicode_version": "12.0",
#     "ios_version": "13.0",
#     "skin_tones": true
# }
-->

:people_holding_hands: `:people_holding_hands:`
') }}
{{ markdown(title="👭 women holding hands" type="markdown", code='

<!--
# 👭 women holding hands
#
# {
#     "emoji": "\ud83d\udc6d",
#     "description": "women holding hands",
#     "category": "People & Body",
#     "aliases": [
#         "two_women_holding_hands"
#     ],
#     "tags": [
#         "couple",
#         "date"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:two_women_holding_hands: `:two_women_holding_hands:`
') }}
{{ markdown(title="👫 woman and man holding hands" type="markdown", code='

<!--
# 👫 woman and man holding hands
#
# {
#     "emoji": "\ud83d\udc6b",
#     "description": "woman and man holding hands",
#     "category": "People & Body",
#     "aliases": [
#         "couple"
#     ],
#     "tags": [
#         "date"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:couple: `:couple:`
') }}
{{ markdown(title="👬 men holding hands" type="markdown", code='

<!--
# 👬 men holding hands
#
# {
#     "emoji": "\ud83d\udc6c",
#     "description": "men holding hands",
#     "category": "People & Body",
#     "aliases": [
#         "two_men_holding_hands"
#     ],
#     "tags": [
#         "couple",
#         "date"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:two_men_holding_hands: `:two_men_holding_hands:`
') }}
{{ markdown(title="💏 kiss" type="markdown", code='

<!--
# 💏 kiss
#
# {
#     "emoji": "\ud83d\udc8f",
#     "description": "kiss",
#     "category": "People & Body",
#     "aliases": [
#         "couplekiss"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:couplekiss: `:couplekiss:`
') }}
{{ markdown(title="👩‍❤️‍💋‍👨 kiss: woman, man" type="markdown", code='

<!--
# 👩‍❤️‍💋‍👨 kiss: woman, man
#
# {
#     "emoji": "\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68",
#     "description": "kiss: woman, man",
#     "category": "People & Body",
#     "aliases": [
#         "couplekiss_man_woman"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:couplekiss_man_woman: `:couplekiss_man_woman:`
') }}
{{ markdown(title="👨‍❤️‍💋‍👨 kiss: man, man" type="markdown", code='

<!--
# 👨‍❤️‍💋‍👨 kiss: man, man
#
# {
#     "emoji": "\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68",
#     "description": "kiss: man, man",
#     "category": "People & Body",
#     "aliases": [
#         "couplekiss_man_man"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3",
#     "skin_tones": true
# }
-->

:couplekiss_man_man: `:couplekiss_man_man:`
') }}
{{ markdown(title="👩‍❤️‍💋‍👩 kiss: woman, woman" type="markdown", code='

<!--
# 👩‍❤️‍💋‍👩 kiss: woman, woman
#
# {
#     "emoji": "\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69",
#     "description": "kiss: woman, woman",
#     "category": "People & Body",
#     "aliases": [
#         "couplekiss_woman_woman"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3",
#     "skin_tones": true
# }
-->

:couplekiss_woman_woman: `:couplekiss_woman_woman:`
') }}
{{ markdown(title="💑 couple with heart" type="markdown", code='

<!--
# 💑 couple with heart
#
# {
#     "emoji": "\ud83d\udc91",
#     "description": "couple with heart",
#     "category": "People & Body",
#     "aliases": [
#         "couple_with_heart"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0",
#     "skin_tones": true
# }
-->

:couple_with_heart: `:couple_with_heart:`
') }}
{{ markdown(title="👩‍❤️‍👨 couple with heart: woman, man" type="markdown", code='

<!--
# 👩‍❤️‍👨 couple with heart: woman, man
#
# {
#     "emoji": "\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc68",
#     "description": "couple with heart: woman, man",
#     "category": "People & Body",
#     "aliases": [
#         "couple_with_heart_woman_man"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1",
#     "skin_tones": true
# }
-->

:couple_with_heart_woman_man: `:couple_with_heart_woman_man:`
') }}
{{ markdown(title="👨‍❤️‍👨 couple with heart: man, man" type="markdown", code='

<!--
# 👨‍❤️‍👨 couple with heart: man, man
#
# {
#     "emoji": "\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68",
#     "description": "couple with heart: man, man",
#     "category": "People & Body",
#     "aliases": [
#         "couple_with_heart_man_man"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3",
#     "skin_tones": true
# }
-->

:couple_with_heart_man_man: `:couple_with_heart_man_man:`
') }}
{{ markdown(title="👩‍❤️‍👩 couple with heart: woman, woman" type="markdown", code='

<!--
# 👩‍❤️‍👩 couple with heart: woman, woman
#
# {
#     "emoji": "\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc69",
#     "description": "couple with heart: woman, woman",
#     "category": "People & Body",
#     "aliases": [
#         "couple_with_heart_woman_woman"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3",
#     "skin_tones": true
# }
-->

:couple_with_heart_woman_woman: `:couple_with_heart_woman_woman:`
') }}
{{ markdown(title="👪 family" type="markdown", code='

<!--
# 👪 family
#
# {
#     "emoji": "\ud83d\udc6a",
#     "description": "family",
#     "category": "People & Body",
#     "aliases": [
#         "family"
#     ],
#     "tags": [
#         "home",
#         "parents",
#         "child"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:family: `:family:`
') }}
{{ markdown(title="👨‍👩‍👦 family: man, woman, boy" type="markdown", code='

<!--
# 👨‍👩‍👦 family: man, woman, boy
#
# {
#     "emoji": "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66",
#     "description": "family: man, woman, boy",
#     "category": "People & Body",
#     "aliases": [
#         "family_man_woman_boy"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:family_man_woman_boy: `:family_man_woman_boy:`
') }}
{{ markdown(title="👨‍👩‍👧 family: man, woman, girl" type="markdown", code='

<!--
# 👨‍👩‍👧 family: man, woman, girl
#
# {
#     "emoji": "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67",
#     "description": "family: man, woman, girl",
#     "category": "People & Body",
#     "aliases": [
#         "family_man_woman_girl"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:family_man_woman_girl: `:family_man_woman_girl:`
') }}
{{ markdown(title="👨‍👩‍👧‍👦 family: man, woman, girl, boy" type="markdown", code='

<!--
# 👨‍👩‍👧‍👦 family: man, woman, girl, boy
#
# {
#     "emoji": "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66",
#     "description": "family: man, woman, girl, boy",
#     "category": "People & Body",
#     "aliases": [
#         "family_man_woman_girl_boy"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:family_man_woman_girl_boy: `:family_man_woman_girl_boy:`
') }}
{{ markdown(title="👨‍👩‍👦‍👦 family: man, woman, boy, boy" type="markdown", code='

<!--
# 👨‍👩‍👦‍👦 family: man, woman, boy, boy
#
# {
#     "emoji": "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66",
#     "description": "family: man, woman, boy, boy",
#     "category": "People & Body",
#     "aliases": [
#         "family_man_woman_boy_boy"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:family_man_woman_boy_boy: `:family_man_woman_boy_boy:`
') }}
{{ markdown(title="👨‍👩‍👧‍👧 family: man, woman, girl, girl" type="markdown", code='

<!--
# 👨‍👩‍👧‍👧 family: man, woman, girl, girl
#
# {
#     "emoji": "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc67",
#     "description": "family: man, woman, girl, girl",
#     "category": "People & Body",
#     "aliases": [
#         "family_man_woman_girl_girl"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:family_man_woman_girl_girl: `:family_man_woman_girl_girl:`
') }}
{{ markdown(title="👨‍👨‍👦 family: man, man, boy" type="markdown", code='

<!--
# 👨‍👨‍👦 family: man, man, boy
#
# {
#     "emoji": "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66",
#     "description": "family: man, man, boy",
#     "category": "People & Body",
#     "aliases": [
#         "family_man_man_boy"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:family_man_man_boy: `:family_man_man_boy:`
') }}
{{ markdown(title="👨‍👨‍👧 family: man, man, girl" type="markdown", code='

<!--
# 👨‍👨‍👧 family: man, man, girl
#
# {
#     "emoji": "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67",
#     "description": "family: man, man, girl",
#     "category": "People & Body",
#     "aliases": [
#         "family_man_man_girl"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:family_man_man_girl: `:family_man_man_girl:`
') }}
{{ markdown(title="👨‍👨‍👧‍👦 family: man, man, girl, boy" type="markdown", code='

<!--
# 👨‍👨‍👧‍👦 family: man, man, girl, boy
#
# {
#     "emoji": "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc66",
#     "description": "family: man, man, girl, boy",
#     "category": "People & Body",
#     "aliases": [
#         "family_man_man_girl_boy"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:family_man_man_girl_boy: `:family_man_man_girl_boy:`
') }}
{{ markdown(title="👨‍👨‍👦‍👦 family: man, man, boy, boy" type="markdown", code='

<!--
# 👨‍👨‍👦‍👦 family: man, man, boy, boy
#
# {
#     "emoji": "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66",
#     "description": "family: man, man, boy, boy",
#     "category": "People & Body",
#     "aliases": [
#         "family_man_man_boy_boy"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:family_man_man_boy_boy: `:family_man_man_boy_boy:`
') }}
{{ markdown(title="👨‍👨‍👧‍👧 family: man, man, girl, girl" type="markdown", code='

<!--
# 👨‍👨‍👧‍👧 family: man, man, girl, girl
#
# {
#     "emoji": "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc67",
#     "description": "family: man, man, girl, girl",
#     "category": "People & Body",
#     "aliases": [
#         "family_man_man_girl_girl"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:family_man_man_girl_girl: `:family_man_man_girl_girl:`
') }}
{{ markdown(title="👩‍👩‍👦 family: woman, woman, boy" type="markdown", code='

<!--
# 👩‍👩‍👦 family: woman, woman, boy
#
# {
#     "emoji": "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66",
#     "description": "family: woman, woman, boy",
#     "category": "People & Body",
#     "aliases": [
#         "family_woman_woman_boy"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:family_woman_woman_boy: `:family_woman_woman_boy:`
') }}
{{ markdown(title="👩‍👩‍👧 family: woman, woman, girl" type="markdown", code='

<!--
# 👩‍👩‍👧 family: woman, woman, girl
#
# {
#     "emoji": "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67",
#     "description": "family: woman, woman, girl",
#     "category": "People & Body",
#     "aliases": [
#         "family_woman_woman_girl"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:family_woman_woman_girl: `:family_woman_woman_girl:`
') }}
{{ markdown(title="👩‍👩‍👧‍👦 family: woman, woman, girl, boy" type="markdown", code='

<!--
# 👩‍👩‍👧‍👦 family: woman, woman, girl, boy
#
# {
#     "emoji": "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66",
#     "description": "family: woman, woman, girl, boy",
#     "category": "People & Body",
#     "aliases": [
#         "family_woman_woman_girl_boy"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:family_woman_woman_girl_boy: `:family_woman_woman_girl_boy:`
') }}
{{ markdown(title="👩‍👩‍👦‍👦 family: woman, woman, boy, boy" type="markdown", code='

<!--
# 👩‍👩‍👦‍👦 family: woman, woman, boy, boy
#
# {
#     "emoji": "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66",
#     "description": "family: woman, woman, boy, boy",
#     "category": "People & Body",
#     "aliases": [
#         "family_woman_woman_boy_boy"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:family_woman_woman_boy_boy: `:family_woman_woman_boy_boy:`
') }}
{{ markdown(title="👩‍👩‍👧‍👧 family: woman, woman, girl, girl" type="markdown", code='

<!--
# 👩‍👩‍👧‍👧 family: woman, woman, girl, girl
#
# {
#     "emoji": "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc67",
#     "description": "family: woman, woman, girl, girl",
#     "category": "People & Body",
#     "aliases": [
#         "family_woman_woman_girl_girl"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:family_woman_woman_girl_girl: `:family_woman_woman_girl_girl:`
') }}
{{ markdown(title="👨‍👦 family: man, boy" type="markdown", code='

<!--
# 👨‍👦 family: man, boy
#
# {
#     "emoji": "\ud83d\udc68\u200d\ud83d\udc66",
#     "description": "family: man, boy",
#     "category": "People & Body",
#     "aliases": [
#         "family_man_boy"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "10.0"
# }
-->

:family_man_boy: `:family_man_boy:`
') }}
{{ markdown(title="👨‍👦‍👦 family: man, boy, boy" type="markdown", code='

<!--
# 👨‍👦‍👦 family: man, boy, boy
#
# {
#     "emoji": "\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66",
#     "description": "family: man, boy, boy",
#     "category": "People & Body",
#     "aliases": [
#         "family_man_boy_boy"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "10.0"
# }
-->

:family_man_boy_boy: `:family_man_boy_boy:`
') }}
{{ markdown(title="👨‍👧 family: man, girl" type="markdown", code='

<!--
# 👨‍👧 family: man, girl
#
# {
#     "emoji": "\ud83d\udc68\u200d\ud83d\udc67",
#     "description": "family: man, girl",
#     "category": "People & Body",
#     "aliases": [
#         "family_man_girl"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "10.0"
# }
-->

:family_man_girl: `:family_man_girl:`
') }}
{{ markdown(title="👨‍👧‍👦 family: man, girl, boy" type="markdown", code='

<!--
# 👨‍👧‍👦 family: man, girl, boy
#
# {
#     "emoji": "\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc66",
#     "description": "family: man, girl, boy",
#     "category": "People & Body",
#     "aliases": [
#         "family_man_girl_boy"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "10.0"
# }
-->

:family_man_girl_boy: `:family_man_girl_boy:`
') }}
{{ markdown(title="👨‍👧‍👧 family: man, girl, girl" type="markdown", code='

<!--
# 👨‍👧‍👧 family: man, girl, girl
#
# {
#     "emoji": "\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc67",
#     "description": "family: man, girl, girl",
#     "category": "People & Body",
#     "aliases": [
#         "family_man_girl_girl"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "10.0"
# }
-->

:family_man_girl_girl: `:family_man_girl_girl:`
') }}
{{ markdown(title="👩‍👦 family: woman, boy" type="markdown", code='

<!--
# 👩‍👦 family: woman, boy
#
# {
#     "emoji": "\ud83d\udc69\u200d\ud83d\udc66",
#     "description": "family: woman, boy",
#     "category": "People & Body",
#     "aliases": [
#         "family_woman_boy"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "10.0"
# }
-->

:family_woman_boy: `:family_woman_boy:`
') }}
{{ markdown(title="👩‍👦‍👦 family: woman, boy, boy" type="markdown", code='

<!--
# 👩‍👦‍👦 family: woman, boy, boy
#
# {
#     "emoji": "\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66",
#     "description": "family: woman, boy, boy",
#     "category": "People & Body",
#     "aliases": [
#         "family_woman_boy_boy"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "10.0"
# }
-->

:family_woman_boy_boy: `:family_woman_boy_boy:`
') }}
{{ markdown(title="👩‍👧 family: woman, girl" type="markdown", code='

<!--
# 👩‍👧 family: woman, girl
#
# {
#     "emoji": "\ud83d\udc69\u200d\ud83d\udc67",
#     "description": "family: woman, girl",
#     "category": "People & Body",
#     "aliases": [
#         "family_woman_girl"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "10.0"
# }
-->

:family_woman_girl: `:family_woman_girl:`
') }}
{{ markdown(title="👩‍👧‍👦 family: woman, girl, boy" type="markdown", code='

<!--
# 👩‍👧‍👦 family: woman, girl, boy
#
# {
#     "emoji": "\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66",
#     "description": "family: woman, girl, boy",
#     "category": "People & Body",
#     "aliases": [
#         "family_woman_girl_boy"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "10.0"
# }
-->

:family_woman_girl_boy: `:family_woman_girl_boy:`
') }}
{{ markdown(title="👩‍👧‍👧 family: woman, girl, girl" type="markdown", code='

<!--
# 👩‍👧‍👧 family: woman, girl, girl
#
# {
#     "emoji": "\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc67",
#     "description": "family: woman, girl, girl",
#     "category": "People & Body",
#     "aliases": [
#         "family_woman_girl_girl"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "10.0"
# }
-->

:family_woman_girl_girl: `:family_woman_girl_girl:`
') }}
{{ markdown(title="🗣️ speaking head" type="markdown", code='

<!--
# 🗣️ speaking head
#
# {
#     "emoji": "\ud83d\udde3\ufe0f",
#     "description": "speaking head",
#     "category": "People & Body",
#     "aliases": [
#         "speaking_head"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:speaking_head: `:speaking_head:`
') }}
{{ markdown(title="👤 bust in silhouette" type="markdown", code='

<!--
# 👤 bust in silhouette
#
# {
#     "emoji": "\ud83d\udc64",
#     "description": "bust in silhouette",
#     "category": "People & Body",
#     "aliases": [
#         "bust_in_silhouette"
#     ],
#     "tags": [
#         "user"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:bust_in_silhouette: `:bust_in_silhouette:`
') }}
{{ markdown(title="👥 busts in silhouette" type="markdown", code='

<!--
# 👥 busts in silhouette
#
# {
#     "emoji": "\ud83d\udc65",
#     "description": "busts in silhouette",
#     "category": "People & Body",
#     "aliases": [
#         "busts_in_silhouette"
#     ],
#     "tags": [
#         "users",
#         "group",
#         "team"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:busts_in_silhouette: `:busts_in_silhouette:`
') }}
{{ markdown(title="🫂 people hugging" type="markdown", code='

<!--
# 🫂 people hugging
#
# {
#     "emoji": "\ud83e\udec2",
#     "description": "people hugging",
#     "category": "People & Body",
#     "aliases": [
#         "people_hugging"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:people_hugging: `:people_hugging:`
') }}
{{ markdown(title="👣 footprints" type="markdown", code='

<!--
# 👣 footprints
#
# {
#     "emoji": "\ud83d\udc63",
#     "description": "footprints",
#     "category": "People & Body",
#     "aliases": [
#         "footprints"
#     ],
#     "tags": [
#         "feet",
#         "tracks"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:footprints: `:footprints:`
') }}
{{ markdown(title="🐵 monkey face" type="markdown", code='

<!--
# 🐵 monkey face
#
# {
#     "emoji": "\ud83d\udc35",
#     "description": "monkey face",
#     "category": "Animals & Nature",
#     "aliases": [
#         "monkey_face"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:monkey_face: `:monkey_face:`
') }}
{{ markdown(title="🐒 monkey" type="markdown", code='

<!--
# 🐒 monkey
#
# {
#     "emoji": "\ud83d\udc12",
#     "description": "monkey",
#     "category": "Animals & Nature",
#     "aliases": [
#         "monkey"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:monkey: `:monkey:`
') }}
{{ markdown(title="🦍 gorilla" type="markdown", code='

<!--
# 🦍 gorilla
#
# {
#     "emoji": "\ud83e\udd8d",
#     "description": "gorilla",
#     "category": "Animals & Nature",
#     "aliases": [
#         "gorilla"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:gorilla: `:gorilla:`
') }}
{{ markdown(title="🦧 orangutan" type="markdown", code='

<!--
# 🦧 orangutan
#
# {
#     "emoji": "\ud83e\udda7",
#     "description": "orangutan",
#     "category": "Animals & Nature",
#     "aliases": [
#         "orangutan"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:orangutan: `:orangutan:`
') }}
{{ markdown(title="🐶 dog face" type="markdown", code='

<!--
# 🐶 dog face
#
# {
#     "emoji": "\ud83d\udc36",
#     "description": "dog face",
#     "category": "Animals & Nature",
#     "aliases": [
#         "dog"
#     ],
#     "tags": [
#         "pet"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:dog: `:dog:`
') }}
{{ markdown(title="🐕 dog" type="markdown", code='

<!--
# 🐕 dog
#
# {
#     "emoji": "\ud83d\udc15",
#     "description": "dog",
#     "category": "Animals & Nature",
#     "aliases": [
#         "dog2"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:dog2: `:dog2:`
') }}
{{ markdown(title="🦮 guide dog" type="markdown", code='

<!--
# 🦮 guide dog
#
# {
#     "emoji": "\ud83e\uddae",
#     "description": "guide dog",
#     "category": "Animals & Nature",
#     "aliases": [
#         "guide_dog"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:guide_dog: `:guide_dog:`
') }}
{{ markdown(title="🐕‍🦺 service dog" type="markdown", code='

<!--
# 🐕‍🦺 service dog
#
# {
#     "emoji": "\ud83d\udc15\u200d\ud83e\uddba",
#     "description": "service dog",
#     "category": "Animals & Nature",
#     "aliases": [
#         "service_dog"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:service_dog: `:service_dog:`
') }}
{{ markdown(title="🐩 poodle" type="markdown", code='

<!--
# 🐩 poodle
#
# {
#     "emoji": "\ud83d\udc29",
#     "description": "poodle",
#     "category": "Animals & Nature",
#     "aliases": [
#         "poodle"
#     ],
#     "tags": [
#         "dog"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:poodle: `:poodle:`
') }}
{{ markdown(title="🐺 wolf" type="markdown", code='

<!--
# 🐺 wolf
#
# {
#     "emoji": "\ud83d\udc3a",
#     "description": "wolf",
#     "category": "Animals & Nature",
#     "aliases": [
#         "wolf"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:wolf: `:wolf:`
') }}
{{ markdown(title="🦊 fox" type="markdown", code='

<!--
# 🦊 fox
#
# {
#     "emoji": "\ud83e\udd8a",
#     "description": "fox",
#     "category": "Animals & Nature",
#     "aliases": [
#         "fox_face"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:fox_face: `:fox_face:`
') }}
{{ markdown(title="🦝 raccoon" type="markdown", code='

<!--
# 🦝 raccoon
#
# {
#     "emoji": "\ud83e\udd9d",
#     "description": "raccoon",
#     "category": "Animals & Nature",
#     "aliases": [
#         "raccoon"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:raccoon: `:raccoon:`
') }}
{{ markdown(title="🐱 cat face" type="markdown", code='

<!--
# 🐱 cat face
#
# {
#     "emoji": "\ud83d\udc31",
#     "description": "cat face",
#     "category": "Animals & Nature",
#     "aliases": [
#         "cat"
#     ],
#     "tags": [
#         "pet"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:cat: `:cat:`
') }}
{{ markdown(title="🐈 cat" type="markdown", code='

<!--
# 🐈 cat
#
# {
#     "emoji": "\ud83d\udc08",
#     "description": "cat",
#     "category": "Animals & Nature",
#     "aliases": [
#         "cat2"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:cat2: `:cat2:`
') }}
{{ markdown(title="🐈‍⬛ black cat" type="markdown", code='

<!--
# 🐈‍⬛ black cat
#
# {
#     "emoji": "\ud83d\udc08\u200d\u2b1b",
#     "description": "black cat",
#     "category": "Animals & Nature",
#     "aliases": [
#         "black_cat"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:black_cat: `:black_cat:`
') }}
{{ markdown(title="🦁 lion" type="markdown", code='

<!--
# 🦁 lion
#
# {
#     "emoji": "\ud83e\udd81",
#     "description": "lion",
#     "category": "Animals & Nature",
#     "aliases": [
#         "lion"
#     ],
#     "tags": [],
#     "unicode_version": "8.0",
#     "ios_version": "9.1"
# }
-->

:lion: `:lion:`
') }}
{{ markdown(title="🐯 tiger face" type="markdown", code='

<!--
# 🐯 tiger face
#
# {
#     "emoji": "\ud83d\udc2f",
#     "description": "tiger face",
#     "category": "Animals & Nature",
#     "aliases": [
#         "tiger"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:tiger: `:tiger:`
') }}
{{ markdown(title="🐅 tiger" type="markdown", code='

<!--
# 🐅 tiger
#
# {
#     "emoji": "\ud83d\udc05",
#     "description": "tiger",
#     "category": "Animals & Nature",
#     "aliases": [
#         "tiger2"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:tiger2: `:tiger2:`
') }}
{{ markdown(title="🐆 leopard" type="markdown", code='

<!--
# 🐆 leopard
#
# {
#     "emoji": "\ud83d\udc06",
#     "description": "leopard",
#     "category": "Animals & Nature",
#     "aliases": [
#         "leopard"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:leopard: `:leopard:`
') }}
{{ markdown(title="🐴 horse face" type="markdown", code='

<!--
# 🐴 horse face
#
# {
#     "emoji": "\ud83d\udc34",
#     "description": "horse face",
#     "category": "Animals & Nature",
#     "aliases": [
#         "horse"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:horse: `:horse:`
') }}
{{ markdown(title="🫎 moose" type="markdown", code='

<!--
# 🫎 moose
#
# {
#     "emoji": "\ud83e\udece",
#     "description": "moose",
#     "category": "Animals & Nature",
#     "aliases": [
#         "moose"
#     ],
#     "tags": [
#         "canada"
#     ],
#     "unicode_version": "15.0",
#     "ios_version": "16.4"
# }
-->

:moose: `:moose:`
') }}
{{ markdown(title="🫏 donkey" type="markdown", code='

<!--
# 🫏 donkey
#
# {
#     "emoji": "\ud83e\udecf",
#     "description": "donkey",
#     "category": "Animals & Nature",
#     "aliases": [
#         "donkey"
#     ],
#     "tags": [
#         "mule"
#     ],
#     "unicode_version": "15.0",
#     "ios_version": "16.4"
# }
-->

:donkey: `:donkey:`
') }}
{{ markdown(title="🐎 horse" type="markdown", code='

<!--
# 🐎 horse
#
# {
#     "emoji": "\ud83d\udc0e",
#     "description": "horse",
#     "category": "Animals & Nature",
#     "aliases": [
#         "racehorse"
#     ],
#     "tags": [
#         "speed"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:racehorse: `:racehorse:`
') }}
{{ markdown(title="🦄 unicorn" type="markdown", code='

<!--
# 🦄 unicorn
#
# {
#     "emoji": "\ud83e\udd84",
#     "description": "unicorn",
#     "category": "Animals & Nature",
#     "aliases": [
#         "unicorn"
#     ],
#     "tags": [],
#     "unicode_version": "8.0",
#     "ios_version": "9.1"
# }
-->

:unicorn: `:unicorn:`
') }}
{{ markdown(title="🦓 zebra" type="markdown", code='

<!--
# 🦓 zebra
#
# {
#     "emoji": "\ud83e\udd93",
#     "description": "zebra",
#     "category": "Animals & Nature",
#     "aliases": [
#         "zebra"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:zebra: `:zebra:`
') }}
{{ markdown(title="🦌 deer" type="markdown", code='

<!--
# 🦌 deer
#
# {
#     "emoji": "\ud83e\udd8c",
#     "description": "deer",
#     "category": "Animals & Nature",
#     "aliases": [
#         "deer"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:deer: `:deer:`
') }}
{{ markdown(title="🦬 bison" type="markdown", code='

<!--
# 🦬 bison
#
# {
#     "emoji": "\ud83e\uddac",
#     "description": "bison",
#     "category": "Animals & Nature",
#     "aliases": [
#         "bison"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:bison: `:bison:`
') }}
{{ markdown(title="🐮 cow face" type="markdown", code='

<!--
# 🐮 cow face
#
# {
#     "emoji": "\ud83d\udc2e",
#     "description": "cow face",
#     "category": "Animals & Nature",
#     "aliases": [
#         "cow"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:cow: `:cow:`
') }}
{{ markdown(title="🐂 ox" type="markdown", code='

<!--
# 🐂 ox
#
# {
#     "emoji": "\ud83d\udc02",
#     "description": "ox",
#     "category": "Animals & Nature",
#     "aliases": [
#         "ox"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:ox: `:ox:`
') }}
{{ markdown(title="🐃 water buffalo" type="markdown", code='

<!--
# 🐃 water buffalo
#
# {
#     "emoji": "\ud83d\udc03",
#     "description": "water buffalo",
#     "category": "Animals & Nature",
#     "aliases": [
#         "water_buffalo"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:water_buffalo: `:water_buffalo:`
') }}
{{ markdown(title="🐄 cow" type="markdown", code='

<!--
# 🐄 cow
#
# {
#     "emoji": "\ud83d\udc04",
#     "description": "cow",
#     "category": "Animals & Nature",
#     "aliases": [
#         "cow2"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:cow2: `:cow2:`
') }}
{{ markdown(title="🐷 pig face" type="markdown", code='

<!--
# 🐷 pig face
#
# {
#     "emoji": "\ud83d\udc37",
#     "description": "pig face",
#     "category": "Animals & Nature",
#     "aliases": [
#         "pig"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:pig: `:pig:`
') }}
{{ markdown(title="🐖 pig" type="markdown", code='

<!--
# 🐖 pig
#
# {
#     "emoji": "\ud83d\udc16",
#     "description": "pig",
#     "category": "Animals & Nature",
#     "aliases": [
#         "pig2"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:pig2: `:pig2:`
') }}
{{ markdown(title="🐗 boar" type="markdown", code='

<!--
# 🐗 boar
#
# {
#     "emoji": "\ud83d\udc17",
#     "description": "boar",
#     "category": "Animals & Nature",
#     "aliases": [
#         "boar"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:boar: `:boar:`
') }}
{{ markdown(title="🐽 pig nose" type="markdown", code='

<!--
# 🐽 pig nose
#
# {
#     "emoji": "\ud83d\udc3d",
#     "description": "pig nose",
#     "category": "Animals & Nature",
#     "aliases": [
#         "pig_nose"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:pig_nose: `:pig_nose:`
') }}
{{ markdown(title="🐏 ram" type="markdown", code='

<!--
# 🐏 ram
#
# {
#     "emoji": "\ud83d\udc0f",
#     "description": "ram",
#     "category": "Animals & Nature",
#     "aliases": [
#         "ram"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:ram: `:ram:`
') }}
{{ markdown(title="🐑 ewe" type="markdown", code='

<!--
# 🐑 ewe
#
# {
#     "emoji": "\ud83d\udc11",
#     "description": "ewe",
#     "category": "Animals & Nature",
#     "aliases": [
#         "sheep"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:sheep: `:sheep:`
') }}
{{ markdown(title="🐐 goat" type="markdown", code='

<!--
# 🐐 goat
#
# {
#     "emoji": "\ud83d\udc10",
#     "description": "goat",
#     "category": "Animals & Nature",
#     "aliases": [
#         "goat"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:goat: `:goat:`
') }}
{{ markdown(title="🐪 camel" type="markdown", code='

<!--
# 🐪 camel
#
# {
#     "emoji": "\ud83d\udc2a",
#     "description": "camel",
#     "category": "Animals & Nature",
#     "aliases": [
#         "dromedary_camel"
#     ],
#     "tags": [
#         "desert"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:dromedary_camel: `:dromedary_camel:`
') }}
{{ markdown(title="🐫 two-hump camel" type="markdown", code='

<!--
# 🐫 two-hump camel
#
# {
#     "emoji": "\ud83d\udc2b",
#     "description": "two-hump camel",
#     "category": "Animals & Nature",
#     "aliases": [
#         "camel"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:camel: `:camel:`
') }}
{{ markdown(title="🦙 llama" type="markdown", code='

<!--
# 🦙 llama
#
# {
#     "emoji": "\ud83e\udd99",
#     "description": "llama",
#     "category": "Animals & Nature",
#     "aliases": [
#         "llama"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:llama: `:llama:`
') }}
{{ markdown(title="🦒 giraffe" type="markdown", code='

<!--
# 🦒 giraffe
#
# {
#     "emoji": "\ud83e\udd92",
#     "description": "giraffe",
#     "category": "Animals & Nature",
#     "aliases": [
#         "giraffe"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:giraffe: `:giraffe:`
') }}
{{ markdown(title="🐘 elephant" type="markdown", code='

<!--
# 🐘 elephant
#
# {
#     "emoji": "\ud83d\udc18",
#     "description": "elephant",
#     "category": "Animals & Nature",
#     "aliases": [
#         "elephant"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:elephant: `:elephant:`
') }}
{{ markdown(title="🦣 mammoth" type="markdown", code='

<!--
# 🦣 mammoth
#
# {
#     "emoji": "\ud83e\udda3",
#     "description": "mammoth",
#     "category": "Animals & Nature",
#     "aliases": [
#         "mammoth"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:mammoth: `:mammoth:`
') }}
{{ markdown(title="🦏 rhinoceros" type="markdown", code='

<!--
# 🦏 rhinoceros
#
# {
#     "emoji": "\ud83e\udd8f",
#     "description": "rhinoceros",
#     "category": "Animals & Nature",
#     "aliases": [
#         "rhinoceros"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:rhinoceros: `:rhinoceros:`
') }}
{{ markdown(title="🦛 hippopotamus" type="markdown", code='

<!--
# 🦛 hippopotamus
#
# {
#     "emoji": "\ud83e\udd9b",
#     "description": "hippopotamus",
#     "category": "Animals & Nature",
#     "aliases": [
#         "hippopotamus"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:hippopotamus: `:hippopotamus:`
') }}
{{ markdown(title="🐭 mouse face" type="markdown", code='

<!--
# 🐭 mouse face
#
# {
#     "emoji": "\ud83d\udc2d",
#     "description": "mouse face",
#     "category": "Animals & Nature",
#     "aliases": [
#         "mouse"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:mouse: `:mouse:`
') }}
{{ markdown(title="🐁 mouse" type="markdown", code='

<!--
# 🐁 mouse
#
# {
#     "emoji": "\ud83d\udc01",
#     "description": "mouse",
#     "category": "Animals & Nature",
#     "aliases": [
#         "mouse2"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:mouse2: `:mouse2:`
') }}
{{ markdown(title="🐀 rat" type="markdown", code='

<!--
# 🐀 rat
#
# {
#     "emoji": "\ud83d\udc00",
#     "description": "rat",
#     "category": "Animals & Nature",
#     "aliases": [
#         "rat"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:rat: `:rat:`
') }}
{{ markdown(title="🐹 hamster" type="markdown", code='

<!--
# 🐹 hamster
#
# {
#     "emoji": "\ud83d\udc39",
#     "description": "hamster",
#     "category": "Animals & Nature",
#     "aliases": [
#         "hamster"
#     ],
#     "tags": [
#         "pet"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:hamster: `:hamster:`
') }}
{{ markdown(title="🐰 rabbit face" type="markdown", code='

<!--
# 🐰 rabbit face
#
# {
#     "emoji": "\ud83d\udc30",
#     "description": "rabbit face",
#     "category": "Animals & Nature",
#     "aliases": [
#         "rabbit"
#     ],
#     "tags": [
#         "bunny"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:rabbit: `:rabbit:`
') }}
{{ markdown(title="🐇 rabbit" type="markdown", code='

<!--
# 🐇 rabbit
#
# {
#     "emoji": "\ud83d\udc07",
#     "description": "rabbit",
#     "category": "Animals & Nature",
#     "aliases": [
#         "rabbit2"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:rabbit2: `:rabbit2:`
') }}
{{ markdown(title="🐿️ chipmunk" type="markdown", code='

<!--
# 🐿️ chipmunk
#
# {
#     "emoji": "\ud83d\udc3f\ufe0f",
#     "description": "chipmunk",
#     "category": "Animals & Nature",
#     "aliases": [
#         "chipmunk"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:chipmunk: `:chipmunk:`
') }}
{{ markdown(title="🦫 beaver" type="markdown", code='

<!--
# 🦫 beaver
#
# {
#     "emoji": "\ud83e\uddab",
#     "description": "beaver",
#     "category": "Animals & Nature",
#     "aliases": [
#         "beaver"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:beaver: `:beaver:`
') }}
{{ markdown(title="🦔 hedgehog" type="markdown", code='

<!--
# 🦔 hedgehog
#
# {
#     "emoji": "\ud83e\udd94",
#     "description": "hedgehog",
#     "category": "Animals & Nature",
#     "aliases": [
#         "hedgehog"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:hedgehog: `:hedgehog:`
') }}
{{ markdown(title="🦇 bat" type="markdown", code='

<!--
# 🦇 bat
#
# {
#     "emoji": "\ud83e\udd87",
#     "description": "bat",
#     "category": "Animals & Nature",
#     "aliases": [
#         "bat"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:bat: `:bat:`
') }}
{{ markdown(title="🐻 bear" type="markdown", code='

<!--
# 🐻 bear
#
# {
#     "emoji": "\ud83d\udc3b",
#     "description": "bear",
#     "category": "Animals & Nature",
#     "aliases": [
#         "bear"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:bear: `:bear:`
') }}
{{ markdown(title="🐻‍❄️ polar bear" type="markdown", code='

<!--
# 🐻‍❄️ polar bear
#
# {
#     "emoji": "\ud83d\udc3b\u200d\u2744\ufe0f",
#     "description": "polar bear",
#     "category": "Animals & Nature",
#     "aliases": [
#         "polar_bear"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:polar_bear: `:polar_bear:`
') }}
{{ markdown(title="🐨 koala" type="markdown", code='

<!--
# 🐨 koala
#
# {
#     "emoji": "\ud83d\udc28",
#     "description": "koala",
#     "category": "Animals & Nature",
#     "aliases": [
#         "koala"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:koala: `:koala:`
') }}
{{ markdown(title="🐼 panda" type="markdown", code='

<!--
# 🐼 panda
#
# {
#     "emoji": "\ud83d\udc3c",
#     "description": "panda",
#     "category": "Animals & Nature",
#     "aliases": [
#         "panda_face"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:panda_face: `:panda_face:`
') }}
{{ markdown(title="🦥 sloth" type="markdown", code='

<!--
# 🦥 sloth
#
# {
#     "emoji": "\ud83e\udda5",
#     "description": "sloth",
#     "category": "Animals & Nature",
#     "aliases": [
#         "sloth"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:sloth: `:sloth:`
') }}
{{ markdown(title="🦦 otter" type="markdown", code='

<!--
# 🦦 otter
#
# {
#     "emoji": "\ud83e\udda6",
#     "description": "otter",
#     "category": "Animals & Nature",
#     "aliases": [
#         "otter"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:otter: `:otter:`
') }}
{{ markdown(title="🦨 skunk" type="markdown", code='

<!--
# 🦨 skunk
#
# {
#     "emoji": "\ud83e\udda8",
#     "description": "skunk",
#     "category": "Animals & Nature",
#     "aliases": [
#         "skunk"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:skunk: `:skunk:`
') }}
{{ markdown(title="🦘 kangaroo" type="markdown", code='

<!--
# 🦘 kangaroo
#
# {
#     "emoji": "\ud83e\udd98",
#     "description": "kangaroo",
#     "category": "Animals & Nature",
#     "aliases": [
#         "kangaroo"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:kangaroo: `:kangaroo:`
') }}
{{ markdown(title="🦡 badger" type="markdown", code='

<!--
# 🦡 badger
#
# {
#     "emoji": "\ud83e\udda1",
#     "description": "badger",
#     "category": "Animals & Nature",
#     "aliases": [
#         "badger"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:badger: `:badger:`
') }}
{{ markdown(title="🐾 paw prints" type="markdown", code='

<!--
# 🐾 paw prints
#
# {
#     "emoji": "\ud83d\udc3e",
#     "description": "paw prints",
#     "category": "Animals & Nature",
#     "aliases": [
#         "feet",
#         "paw_prints"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:feet: `:feet:`

:paw_prints: `:paw_prints:`
') }}
{{ markdown(title="🦃 turkey" type="markdown", code='

<!--
# 🦃 turkey
#
# {
#     "emoji": "\ud83e\udd83",
#     "description": "turkey",
#     "category": "Animals & Nature",
#     "aliases": [
#         "turkey"
#     ],
#     "tags": [
#         "thanksgiving"
#     ],
#     "unicode_version": "8.0",
#     "ios_version": "9.1"
# }
-->

:turkey: `:turkey:`
') }}
{{ markdown(title="🐔 chicken" type="markdown", code='

<!--
# 🐔 chicken
#
# {
#     "emoji": "\ud83d\udc14",
#     "description": "chicken",
#     "category": "Animals & Nature",
#     "aliases": [
#         "chicken"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:chicken: `:chicken:`
') }}
{{ markdown(title="🐓 rooster" type="markdown", code='

<!--
# 🐓 rooster
#
# {
#     "emoji": "\ud83d\udc13",
#     "description": "rooster",
#     "category": "Animals & Nature",
#     "aliases": [
#         "rooster"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:rooster: `:rooster:`
') }}
{{ markdown(title="🐣 hatching chick" type="markdown", code='

<!--
# 🐣 hatching chick
#
# {
#     "emoji": "\ud83d\udc23",
#     "description": "hatching chick",
#     "category": "Animals & Nature",
#     "aliases": [
#         "hatching_chick"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:hatching_chick: `:hatching_chick:`
') }}
{{ markdown(title="🐤 baby chick" type="markdown", code='

<!--
# 🐤 baby chick
#
# {
#     "emoji": "\ud83d\udc24",
#     "description": "baby chick",
#     "category": "Animals & Nature",
#     "aliases": [
#         "baby_chick"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:baby_chick: `:baby_chick:`
') }}
{{ markdown(title="🐥 front-facing baby chick" type="markdown", code='

<!--
# 🐥 front-facing baby chick
#
# {
#     "emoji": "\ud83d\udc25",
#     "description": "front-facing baby chick",
#     "category": "Animals & Nature",
#     "aliases": [
#         "hatched_chick"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:hatched_chick: `:hatched_chick:`
') }}
{{ markdown(title="🐦 bird" type="markdown", code='

<!--
# 🐦 bird
#
# {
#     "emoji": "\ud83d\udc26",
#     "description": "bird",
#     "category": "Animals & Nature",
#     "aliases": [
#         "bird"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:bird: `:bird:`
') }}
{{ markdown(title="🐧 penguin" type="markdown", code='

<!--
# 🐧 penguin
#
# {
#     "emoji": "\ud83d\udc27",
#     "description": "penguin",
#     "category": "Animals & Nature",
#     "aliases": [
#         "penguin"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:penguin: `:penguin:`
') }}
{{ markdown(title="🕊️ dove" type="markdown", code='

<!--
# 🕊️ dove
#
# {
#     "emoji": "\ud83d\udd4a\ufe0f",
#     "description": "dove",
#     "category": "Animals & Nature",
#     "aliases": [
#         "dove"
#     ],
#     "tags": [
#         "peace"
#     ],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:dove: `:dove:`
') }}
{{ markdown(title="🦅 eagle" type="markdown", code='

<!--
# 🦅 eagle
#
# {
#     "emoji": "\ud83e\udd85",
#     "description": "eagle",
#     "category": "Animals & Nature",
#     "aliases": [
#         "eagle"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:eagle: `:eagle:`
') }}
{{ markdown(title="🦆 duck" type="markdown", code='

<!--
# 🦆 duck
#
# {
#     "emoji": "\ud83e\udd86",
#     "description": "duck",
#     "category": "Animals & Nature",
#     "aliases": [
#         "duck"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:duck: `:duck:`
') }}
{{ markdown(title="🦢 swan" type="markdown", code='

<!--
# 🦢 swan
#
# {
#     "emoji": "\ud83e\udda2",
#     "description": "swan",
#     "category": "Animals & Nature",
#     "aliases": [
#         "swan"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:swan: `:swan:`
') }}
{{ markdown(title="🦉 owl" type="markdown", code='

<!--
# 🦉 owl
#
# {
#     "emoji": "\ud83e\udd89",
#     "description": "owl",
#     "category": "Animals & Nature",
#     "aliases": [
#         "owl"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:owl: `:owl:`
') }}
{{ markdown(title="🦤 dodo" type="markdown", code='

<!--
# 🦤 dodo
#
# {
#     "emoji": "\ud83e\udda4",
#     "description": "dodo",
#     "category": "Animals & Nature",
#     "aliases": [
#         "dodo"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:dodo: `:dodo:`
') }}
{{ markdown(title="🪶 feather" type="markdown", code='

<!--
# 🪶 feather
#
# {
#     "emoji": "\ud83e\udeb6",
#     "description": "feather",
#     "category": "Animals & Nature",
#     "aliases": [
#         "feather"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:feather: `:feather:`
') }}
{{ markdown(title="🦩 flamingo" type="markdown", code='

<!--
# 🦩 flamingo
#
# {
#     "emoji": "\ud83e\udda9",
#     "description": "flamingo",
#     "category": "Animals & Nature",
#     "aliases": [
#         "flamingo"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:flamingo: `:flamingo:`
') }}
{{ markdown(title="🦚 peacock" type="markdown", code='

<!--
# 🦚 peacock
#
# {
#     "emoji": "\ud83e\udd9a",
#     "description": "peacock",
#     "category": "Animals & Nature",
#     "aliases": [
#         "peacock"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:peacock: `:peacock:`
') }}
{{ markdown(title="🦜 parrot" type="markdown", code='

<!--
# 🦜 parrot
#
# {
#     "emoji": "\ud83e\udd9c",
#     "description": "parrot",
#     "category": "Animals & Nature",
#     "aliases": [
#         "parrot"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:parrot: `:parrot:`
') }}
{{ markdown(title="🪽 wing" type="markdown", code='

<!--
# 🪽 wing
#
# {
#     "emoji": "\ud83e\udebd",
#     "description": "wing",
#     "category": "Animals & Nature",
#     "aliases": [
#         "wing"
#     ],
#     "tags": [
#         "fly"
#     ],
#     "unicode_version": "15.0",
#     "ios_version": "16.4"
# }
-->

:wing: `:wing:`
') }}
{{ markdown(title="🐦‍⬛ black bird" type="markdown", code='

<!--
# 🐦‍⬛ black bird
#
# {
#     "emoji": "\ud83d\udc26\u200d\u2b1b",
#     "description": "black bird",
#     "category": "Animals & Nature",
#     "aliases": [
#         "black_bird"
#     ],
#     "tags": [],
#     "unicode_version": "15.0",
#     "ios_version": "16.4"
# }
-->

:black_bird: `:black_bird:`
') }}
{{ markdown(title="🪿 goose" type="markdown", code='

<!--
# 🪿 goose
#
# {
#     "emoji": "\ud83e\udebf",
#     "description": "goose",
#     "category": "Animals & Nature",
#     "aliases": [
#         "goose"
#     ],
#     "tags": [
#         "honk"
#     ],
#     "unicode_version": "15.0",
#     "ios_version": "16.4"
# }
-->

:goose: `:goose:`
') }}
{{ markdown(title="🐸 frog" type="markdown", code='

<!--
# 🐸 frog
#
# {
#     "emoji": "\ud83d\udc38",
#     "description": "frog",
#     "category": "Animals & Nature",
#     "aliases": [
#         "frog"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:frog: `:frog:`
') }}
{{ markdown(title="🐊 crocodile" type="markdown", code='

<!--
# 🐊 crocodile
#
# {
#     "emoji": "\ud83d\udc0a",
#     "description": "crocodile",
#     "category": "Animals & Nature",
#     "aliases": [
#         "crocodile"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:crocodile: `:crocodile:`
') }}
{{ markdown(title="🐢 turtle" type="markdown", code='

<!--
# 🐢 turtle
#
# {
#     "emoji": "\ud83d\udc22",
#     "description": "turtle",
#     "category": "Animals & Nature",
#     "aliases": [
#         "turtle"
#     ],
#     "tags": [
#         "slow"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:turtle: `:turtle:`
') }}
{{ markdown(title="🦎 lizard" type="markdown", code='

<!--
# 🦎 lizard
#
# {
#     "emoji": "\ud83e\udd8e",
#     "description": "lizard",
#     "category": "Animals & Nature",
#     "aliases": [
#         "lizard"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:lizard: `:lizard:`
') }}
{{ markdown(title="🐍 snake" type="markdown", code='

<!--
# 🐍 snake
#
# {
#     "emoji": "\ud83d\udc0d",
#     "description": "snake",
#     "category": "Animals & Nature",
#     "aliases": [
#         "snake"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:snake: `:snake:`
') }}
{{ markdown(title="🐲 dragon face" type="markdown", code='

<!--
# 🐲 dragon face
#
# {
#     "emoji": "\ud83d\udc32",
#     "description": "dragon face",
#     "category": "Animals & Nature",
#     "aliases": [
#         "dragon_face"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:dragon_face: `:dragon_face:`
') }}
{{ markdown(title="🐉 dragon" type="markdown", code='

<!--
# 🐉 dragon
#
# {
#     "emoji": "\ud83d\udc09",
#     "description": "dragon",
#     "category": "Animals & Nature",
#     "aliases": [
#         "dragon"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:dragon: `:dragon:`
') }}
{{ markdown(title="🦕 sauropod" type="markdown", code='

<!--
# 🦕 sauropod
#
# {
#     "emoji": "\ud83e\udd95",
#     "description": "sauropod",
#     "category": "Animals & Nature",
#     "aliases": [
#         "sauropod"
#     ],
#     "tags": [
#         "dinosaur"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:sauropod: `:sauropod:`
') }}
{{ markdown(title="🦖 T-Rex" type="markdown", code='

<!--
# 🦖 T-Rex
#
# {
#     "emoji": "\ud83e\udd96",
#     "description": "T-Rex",
#     "category": "Animals & Nature",
#     "aliases": [
#         "t-rex"
#     ],
#     "tags": [
#         "dinosaur"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:t-rex: `:t-rex:`
') }}
{{ markdown(title="🐳 spouting whale" type="markdown", code='

<!--
# 🐳 spouting whale
#
# {
#     "emoji": "\ud83d\udc33",
#     "description": "spouting whale",
#     "category": "Animals & Nature",
#     "aliases": [
#         "whale"
#     ],
#     "tags": [
#         "sea"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:whale: `:whale:`
') }}
{{ markdown(title="🐋 whale" type="markdown", code='

<!--
# 🐋 whale
#
# {
#     "emoji": "\ud83d\udc0b",
#     "description": "whale",
#     "category": "Animals & Nature",
#     "aliases": [
#         "whale2"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:whale2: `:whale2:`
') }}
{{ markdown(title="🐬 dolphin" type="markdown", code='

<!--
# 🐬 dolphin
#
# {
#     "emoji": "\ud83d\udc2c",
#     "description": "dolphin",
#     "category": "Animals & Nature",
#     "aliases": [
#         "dolphin",
#         "flipper"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:dolphin: `:dolphin:`

:flipper: `:flipper:`
') }}
{{ markdown(title="🦭 seal" type="markdown", code='

<!--
# 🦭 seal
#
# {
#     "emoji": "\ud83e\uddad",
#     "description": "seal",
#     "category": "Animals & Nature",
#     "aliases": [
#         "seal"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:seal: `:seal:`
') }}
{{ markdown(title="🐟 fish" type="markdown", code='

<!--
# 🐟 fish
#
# {
#     "emoji": "\ud83d\udc1f",
#     "description": "fish",
#     "category": "Animals & Nature",
#     "aliases": [
#         "fish"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:fish: `:fish:`
') }}
{{ markdown(title="🐠 tropical fish" type="markdown", code='

<!--
# 🐠 tropical fish
#
# {
#     "emoji": "\ud83d\udc20",
#     "description": "tropical fish",
#     "category": "Animals & Nature",
#     "aliases": [
#         "tropical_fish"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:tropical_fish: `:tropical_fish:`
') }}
{{ markdown(title="🐡 blowfish" type="markdown", code='

<!--
# 🐡 blowfish
#
# {
#     "emoji": "\ud83d\udc21",
#     "description": "blowfish",
#     "category": "Animals & Nature",
#     "aliases": [
#         "blowfish"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:blowfish: `:blowfish:`
') }}
{{ markdown(title="🦈 shark" type="markdown", code='

<!--
# 🦈 shark
#
# {
#     "emoji": "\ud83e\udd88",
#     "description": "shark",
#     "category": "Animals & Nature",
#     "aliases": [
#         "shark"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:shark: `:shark:`
') }}
{{ markdown(title="🐙 octopus" type="markdown", code='

<!--
# 🐙 octopus
#
# {
#     "emoji": "\ud83d\udc19",
#     "description": "octopus",
#     "category": "Animals & Nature",
#     "aliases": [
#         "octopus"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:octopus: `:octopus:`
') }}
{{ markdown(title="🐚 spiral shell" type="markdown", code='

<!--
# 🐚 spiral shell
#
# {
#     "emoji": "\ud83d\udc1a",
#     "description": "spiral shell",
#     "category": "Animals & Nature",
#     "aliases": [
#         "shell"
#     ],
#     "tags": [
#         "sea",
#         "beach"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:shell: `:shell:`
') }}
{{ markdown(title="🪸 coral" type="markdown", code='

<!--
# 🪸 coral
#
# {
#     "emoji": "\ud83e\udeb8",
#     "description": "coral",
#     "category": "Animals & Nature",
#     "aliases": [
#         "coral"
#     ],
#     "tags": [],
#     "unicode_version": "14.0",
#     "ios_version": "15.4"
# }
-->

:coral: `:coral:`
') }}
{{ markdown(title="🪼 jellyfish" type="markdown", code='

<!--
# 🪼 jellyfish
#
# {
#     "emoji": "\ud83e\udebc",
#     "description": "jellyfish",
#     "category": "Animals & Nature",
#     "aliases": [
#         "jellyfish"
#     ],
#     "tags": [],
#     "unicode_version": "15.0",
#     "ios_version": "16.4"
# }
-->

:jellyfish: `:jellyfish:`
') }}
{{ markdown(title="🐌 snail" type="markdown", code='

<!--
# 🐌 snail
#
# {
#     "emoji": "\ud83d\udc0c",
#     "description": "snail",
#     "category": "Animals & Nature",
#     "aliases": [
#         "snail"
#     ],
#     "tags": [
#         "slow"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:snail: `:snail:`
') }}
{{ markdown(title="🦋 butterfly" type="markdown", code='

<!--
# 🦋 butterfly
#
# {
#     "emoji": "\ud83e\udd8b",
#     "description": "butterfly",
#     "category": "Animals & Nature",
#     "aliases": [
#         "butterfly"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:butterfly: `:butterfly:`
') }}
{{ markdown(title="🐛 bug" type="markdown", code='

<!--
# 🐛 bug
#
# {
#     "emoji": "\ud83d\udc1b",
#     "description": "bug",
#     "category": "Animals & Nature",
#     "aliases": [
#         "bug"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:bug: `:bug:`
') }}
{{ markdown(title="🐜 ant" type="markdown", code='

<!--
# 🐜 ant
#
# {
#     "emoji": "\ud83d\udc1c",
#     "description": "ant",
#     "category": "Animals & Nature",
#     "aliases": [
#         "ant"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:ant: `:ant:`
') }}
{{ markdown(title="🐝 honeybee" type="markdown", code='

<!--
# 🐝 honeybee
#
# {
#     "emoji": "\ud83d\udc1d",
#     "description": "honeybee",
#     "category": "Animals & Nature",
#     "aliases": [
#         "bee",
#         "honeybee"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:bee: `:bee:`

:honeybee: `:honeybee:`
') }}
{{ markdown(title="🪲 beetle" type="markdown", code='

<!--
# 🪲 beetle
#
# {
#     "emoji": "\ud83e\udeb2",
#     "description": "beetle",
#     "category": "Animals & Nature",
#     "aliases": [
#         "beetle"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:beetle: `:beetle:`
') }}
{{ markdown(title="🐞 lady beetle" type="markdown", code='

<!--
# 🐞 lady beetle
#
# {
#     "emoji": "\ud83d\udc1e",
#     "description": "lady beetle",
#     "category": "Animals & Nature",
#     "aliases": [
#         "lady_beetle"
#     ],
#     "tags": [
#         "bug"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:lady_beetle: `:lady_beetle:`
') }}
{{ markdown(title="🦗 cricket" type="markdown", code='

<!--
# 🦗 cricket
#
# {
#     "emoji": "\ud83e\udd97",
#     "description": "cricket",
#     "category": "Animals & Nature",
#     "aliases": [
#         "cricket"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:cricket: `:cricket:`
') }}
{{ markdown(title="🪳 cockroach" type="markdown", code='

<!--
# 🪳 cockroach
#
# {
#     "emoji": "\ud83e\udeb3",
#     "description": "cockroach",
#     "category": "Animals & Nature",
#     "aliases": [
#         "cockroach"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:cockroach: `:cockroach:`
') }}
{{ markdown(title="🕷️ spider" type="markdown", code='

<!--
# 🕷️ spider
#
# {
#     "emoji": "\ud83d\udd77\ufe0f",
#     "description": "spider",
#     "category": "Animals & Nature",
#     "aliases": [
#         "spider"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:spider: `:spider:`
') }}
{{ markdown(title="🕸️ spider web" type="markdown", code='

<!--
# 🕸️ spider web
#
# {
#     "emoji": "\ud83d\udd78\ufe0f",
#     "description": "spider web",
#     "category": "Animals & Nature",
#     "aliases": [
#         "spider_web"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:spider_web: `:spider_web:`
') }}
{{ markdown(title="🦂 scorpion" type="markdown", code='

<!--
# 🦂 scorpion
#
# {
#     "emoji": "\ud83e\udd82",
#     "description": "scorpion",
#     "category": "Animals & Nature",
#     "aliases": [
#         "scorpion"
#     ],
#     "tags": [],
#     "unicode_version": "8.0",
#     "ios_version": "9.1"
# }
-->

:scorpion: `:scorpion:`
') }}
{{ markdown(title="🦟 mosquito" type="markdown", code='

<!--
# 🦟 mosquito
#
# {
#     "emoji": "\ud83e\udd9f",
#     "description": "mosquito",
#     "category": "Animals & Nature",
#     "aliases": [
#         "mosquito"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:mosquito: `:mosquito:`
') }}
{{ markdown(title="🪰 fly" type="markdown", code='

<!--
# 🪰 fly
#
# {
#     "emoji": "\ud83e\udeb0",
#     "description": "fly",
#     "category": "Animals & Nature",
#     "aliases": [
#         "fly"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:fly: `:fly:`
') }}
{{ markdown(title="🪱 worm" type="markdown", code='

<!--
# 🪱 worm
#
# {
#     "emoji": "\ud83e\udeb1",
#     "description": "worm",
#     "category": "Animals & Nature",
#     "aliases": [
#         "worm"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:worm: `:worm:`
') }}
{{ markdown(title="🦠 microbe" type="markdown", code='

<!--
# 🦠 microbe
#
# {
#     "emoji": "\ud83e\udda0",
#     "description": "microbe",
#     "category": "Animals & Nature",
#     "aliases": [
#         "microbe"
#     ],
#     "tags": [
#         "germ"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:microbe: `:microbe:`
') }}
{{ markdown(title="💐 bouquet" type="markdown", code='

<!--
# 💐 bouquet
#
# {
#     "emoji": "\ud83d\udc90",
#     "description": "bouquet",
#     "category": "Animals & Nature",
#     "aliases": [
#         "bouquet"
#     ],
#     "tags": [
#         "flowers"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:bouquet: `:bouquet:`
') }}
{{ markdown(title="🌸 cherry blossom" type="markdown", code='

<!--
# 🌸 cherry blossom
#
# {
#     "emoji": "\ud83c\udf38",
#     "description": "cherry blossom",
#     "category": "Animals & Nature",
#     "aliases": [
#         "cherry_blossom"
#     ],
#     "tags": [
#         "flower",
#         "spring"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:cherry_blossom: `:cherry_blossom:`
') }}
{{ markdown(title="💮 white flower" type="markdown", code='

<!--
# 💮 white flower
#
# {
#     "emoji": "\ud83d\udcae",
#     "description": "white flower",
#     "category": "Animals & Nature",
#     "aliases": [
#         "white_flower"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:white_flower: `:white_flower:`
') }}
{{ markdown(title="🪷 lotus" type="markdown", code='

<!--
# 🪷 lotus
#
# {
#     "emoji": "\ud83e\udeb7",
#     "description": "lotus",
#     "category": "Animals & Nature",
#     "aliases": [
#         "lotus"
#     ],
#     "tags": [],
#     "unicode_version": "14.0",
#     "ios_version": "15.4"
# }
-->

:lotus: `:lotus:`
') }}
{{ markdown(title="🏵️ rosette" type="markdown", code='

<!--
# 🏵️ rosette
#
# {
#     "emoji": "\ud83c\udff5\ufe0f",
#     "description": "rosette",
#     "category": "Animals & Nature",
#     "aliases": [
#         "rosette"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:rosette: `:rosette:`
') }}
{{ markdown(title="🌹 rose" type="markdown", code='

<!--
# 🌹 rose
#
# {
#     "emoji": "\ud83c\udf39",
#     "description": "rose",
#     "category": "Animals & Nature",
#     "aliases": [
#         "rose"
#     ],
#     "tags": [
#         "flower"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:rose: `:rose:`
') }}
{{ markdown(title="🥀 wilted flower" type="markdown", code='

<!--
# 🥀 wilted flower
#
# {
#     "emoji": "\ud83e\udd40",
#     "description": "wilted flower",
#     "category": "Animals & Nature",
#     "aliases": [
#         "wilted_flower"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:wilted_flower: `:wilted_flower:`
') }}
{{ markdown(title="🌺 hibiscus" type="markdown", code='

<!--
# 🌺 hibiscus
#
# {
#     "emoji": "\ud83c\udf3a",
#     "description": "hibiscus",
#     "category": "Animals & Nature",
#     "aliases": [
#         "hibiscus"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:hibiscus: `:hibiscus:`
') }}
{{ markdown(title="🌻 sunflower" type="markdown", code='

<!--
# 🌻 sunflower
#
# {
#     "emoji": "\ud83c\udf3b",
#     "description": "sunflower",
#     "category": "Animals & Nature",
#     "aliases": [
#         "sunflower"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:sunflower: `:sunflower:`
') }}
{{ markdown(title="🌼 blossom" type="markdown", code='

<!--
# 🌼 blossom
#
# {
#     "emoji": "\ud83c\udf3c",
#     "description": "blossom",
#     "category": "Animals & Nature",
#     "aliases": [
#         "blossom"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:blossom: `:blossom:`
') }}
{{ markdown(title="🌷 tulip" type="markdown", code='

<!--
# 🌷 tulip
#
# {
#     "emoji": "\ud83c\udf37",
#     "description": "tulip",
#     "category": "Animals & Nature",
#     "aliases": [
#         "tulip"
#     ],
#     "tags": [
#         "flower"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:tulip: `:tulip:`
') }}
{{ markdown(title="🪻 hyacinth" type="markdown", code='

<!--
# 🪻 hyacinth
#
# {
#     "emoji": "\ud83e\udebb",
#     "description": "hyacinth",
#     "category": "Animals & Nature",
#     "aliases": [
#         "hyacinth"
#     ],
#     "tags": [],
#     "unicode_version": "15.0",
#     "ios_version": "16.4"
# }
-->

:hyacinth: `:hyacinth:`
') }}
{{ markdown(title="🌱 seedling" type="markdown", code='

<!--
# 🌱 seedling
#
# {
#     "emoji": "\ud83c\udf31",
#     "description": "seedling",
#     "category": "Animals & Nature",
#     "aliases": [
#         "seedling"
#     ],
#     "tags": [
#         "plant"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:seedling: `:seedling:`
') }}
{{ markdown(title="🪴 potted plant" type="markdown", code='

<!--
# 🪴 potted plant
#
# {
#     "emoji": "\ud83e\udeb4",
#     "description": "potted plant",
#     "category": "Animals & Nature",
#     "aliases": [
#         "potted_plant"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:potted_plant: `:potted_plant:`
') }}
{{ markdown(title="🌲 evergreen tree" type="markdown", code='

<!--
# 🌲 evergreen tree
#
# {
#     "emoji": "\ud83c\udf32",
#     "description": "evergreen tree",
#     "category": "Animals & Nature",
#     "aliases": [
#         "evergreen_tree"
#     ],
#     "tags": [
#         "wood"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:evergreen_tree: `:evergreen_tree:`
') }}
{{ markdown(title="🌳 deciduous tree" type="markdown", code='

<!--
# 🌳 deciduous tree
#
# {
#     "emoji": "\ud83c\udf33",
#     "description": "deciduous tree",
#     "category": "Animals & Nature",
#     "aliases": [
#         "deciduous_tree"
#     ],
#     "tags": [
#         "wood"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:deciduous_tree: `:deciduous_tree:`
') }}
{{ markdown(title="🌴 palm tree" type="markdown", code='

<!--
# 🌴 palm tree
#
# {
#     "emoji": "\ud83c\udf34",
#     "description": "palm tree",
#     "category": "Animals & Nature",
#     "aliases": [
#         "palm_tree"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:palm_tree: `:palm_tree:`
') }}
{{ markdown(title="🌵 cactus" type="markdown", code='

<!--
# 🌵 cactus
#
# {
#     "emoji": "\ud83c\udf35",
#     "description": "cactus",
#     "category": "Animals & Nature",
#     "aliases": [
#         "cactus"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:cactus: `:cactus:`
') }}
{{ markdown(title="🌾 sheaf of rice" type="markdown", code='

<!--
# 🌾 sheaf of rice
#
# {
#     "emoji": "\ud83c\udf3e",
#     "description": "sheaf of rice",
#     "category": "Animals & Nature",
#     "aliases": [
#         "ear_of_rice"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:ear_of_rice: `:ear_of_rice:`
') }}
{{ markdown(title="🌿 herb" type="markdown", code='

<!--
# 🌿 herb
#
# {
#     "emoji": "\ud83c\udf3f",
#     "description": "herb",
#     "category": "Animals & Nature",
#     "aliases": [
#         "herb"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:herb: `:herb:`
') }}
{{ markdown(title="☘️ shamrock" type="markdown", code='

<!--
# ☘️ shamrock
#
# {
#     "emoji": "\u2618\ufe0f",
#     "description": "shamrock",
#     "category": "Animals & Nature",
#     "aliases": [
#         "shamrock"
#     ],
#     "tags": [],
#     "unicode_version": "4.1",
#     "ios_version": "9.1"
# }
-->

:shamrock: `:shamrock:`
') }}
{{ markdown(title="🍀 four leaf clover" type="markdown", code='

<!--
# 🍀 four leaf clover
#
# {
#     "emoji": "\ud83c\udf40",
#     "description": "four leaf clover",
#     "category": "Animals & Nature",
#     "aliases": [
#         "four_leaf_clover"
#     ],
#     "tags": [
#         "luck"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:four_leaf_clover: `:four_leaf_clover:`
') }}
{{ markdown(title="🍁 maple leaf" type="markdown", code='

<!--
# 🍁 maple leaf
#
# {
#     "emoji": "\ud83c\udf41",
#     "description": "maple leaf",
#     "category": "Animals & Nature",
#     "aliases": [
#         "maple_leaf"
#     ],
#     "tags": [
#         "canada"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:maple_leaf: `:maple_leaf:`
') }}
{{ markdown(title="🍂 fallen leaf" type="markdown", code='

<!--
# 🍂 fallen leaf
#
# {
#     "emoji": "\ud83c\udf42",
#     "description": "fallen leaf",
#     "category": "Animals & Nature",
#     "aliases": [
#         "fallen_leaf"
#     ],
#     "tags": [
#         "autumn"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:fallen_leaf: `:fallen_leaf:`
') }}
{{ markdown(title="🍃 leaf fluttering in wind" type="markdown", code='

<!--
# 🍃 leaf fluttering in wind
#
# {
#     "emoji": "\ud83c\udf43",
#     "description": "leaf fluttering in wind",
#     "category": "Animals & Nature",
#     "aliases": [
#         "leaves"
#     ],
#     "tags": [
#         "leaf"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:leaves: `:leaves:`
') }}
{{ markdown(title="🪹 empty nest" type="markdown", code='

<!--
# 🪹 empty nest
#
# {
#     "emoji": "\ud83e\udeb9",
#     "description": "empty nest",
#     "category": "Animals & Nature",
#     "aliases": [
#         "empty_nest"
#     ],
#     "tags": [],
#     "unicode_version": "14.0",
#     "ios_version": "15.4"
# }
-->

:empty_nest: `:empty_nest:`
') }}
{{ markdown(title="🪺 nest with eggs" type="markdown", code='

<!--
# 🪺 nest with eggs
#
# {
#     "emoji": "\ud83e\udeba",
#     "description": "nest with eggs",
#     "category": "Animals & Nature",
#     "aliases": [
#         "nest_with_eggs"
#     ],
#     "tags": [],
#     "unicode_version": "14.0",
#     "ios_version": "15.4"
# }
-->

:nest_with_eggs: `:nest_with_eggs:`
') }}
{{ markdown(title="🍄 mushroom" type="markdown", code='

<!--
# 🍄 mushroom
#
# {
#     "emoji": "\ud83c\udf44",
#     "description": "mushroom",
#     "category": "Animals & Nature",
#     "aliases": [
#         "mushroom"
#     ],
#     "tags": [
#         "fungus"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:mushroom: `:mushroom:`
') }}
{{ markdown(title="🍇 grapes" type="markdown", code='

<!--
# 🍇 grapes
#
# {
#     "emoji": "\ud83c\udf47",
#     "description": "grapes",
#     "category": "Food & Drink",
#     "aliases": [
#         "grapes"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:grapes: `:grapes:`
') }}
{{ markdown(title="🍈 melon" type="markdown", code='

<!--
# 🍈 melon
#
# {
#     "emoji": "\ud83c\udf48",
#     "description": "melon",
#     "category": "Food & Drink",
#     "aliases": [
#         "melon"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:melon: `:melon:`
') }}
{{ markdown(title="🍉 watermelon" type="markdown", code='

<!--
# 🍉 watermelon
#
# {
#     "emoji": "\ud83c\udf49",
#     "description": "watermelon",
#     "category": "Food & Drink",
#     "aliases": [
#         "watermelon"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:watermelon: `:watermelon:`
') }}
{{ markdown(title="🍊 tangerine" type="markdown", code='

<!--
# 🍊 tangerine
#
# {
#     "emoji": "\ud83c\udf4a",
#     "description": "tangerine",
#     "category": "Food & Drink",
#     "aliases": [
#         "tangerine",
#         "orange",
#         "mandarin"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:tangerine: `:tangerine:`

:orange: `:orange:`

:mandarin: `:mandarin:`
') }}
{{ markdown(title="🍋 lemon" type="markdown", code='

<!--
# 🍋 lemon
#
# {
#     "emoji": "\ud83c\udf4b",
#     "description": "lemon",
#     "category": "Food & Drink",
#     "aliases": [
#         "lemon"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:lemon: `:lemon:`
') }}
{{ markdown(title="🍌 banana" type="markdown", code='

<!--
# 🍌 banana
#
# {
#     "emoji": "\ud83c\udf4c",
#     "description": "banana",
#     "category": "Food & Drink",
#     "aliases": [
#         "banana"
#     ],
#     "tags": [
#         "fruit"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:banana: `:banana:`
') }}
{{ markdown(title="🍍 pineapple" type="markdown", code='

<!--
# 🍍 pineapple
#
# {
#     "emoji": "\ud83c\udf4d",
#     "description": "pineapple",
#     "category": "Food & Drink",
#     "aliases": [
#         "pineapple"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:pineapple: `:pineapple:`
') }}
{{ markdown(title="🥭 mango" type="markdown", code='

<!--
# 🥭 mango
#
# {
#     "emoji": "\ud83e\udd6d",
#     "description": "mango",
#     "category": "Food & Drink",
#     "aliases": [
#         "mango"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:mango: `:mango:`
') }}
{{ markdown(title="🍎 red apple" type="markdown", code='

<!--
# 🍎 red apple
#
# {
#     "emoji": "\ud83c\udf4e",
#     "description": "red apple",
#     "category": "Food & Drink",
#     "aliases": [
#         "apple"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:apple: `:apple:`
') }}
{{ markdown(title="🍏 green apple" type="markdown", code='

<!--
# 🍏 green apple
#
# {
#     "emoji": "\ud83c\udf4f",
#     "description": "green apple",
#     "category": "Food & Drink",
#     "aliases": [
#         "green_apple"
#     ],
#     "tags": [
#         "fruit"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:green_apple: `:green_apple:`
') }}
{{ markdown(title="🍐 pear" type="markdown", code='

<!--
# 🍐 pear
#
# {
#     "emoji": "\ud83c\udf50",
#     "description": "pear",
#     "category": "Food & Drink",
#     "aliases": [
#         "pear"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:pear: `:pear:`
') }}
{{ markdown(title="🍑 peach" type="markdown", code='

<!--
# 🍑 peach
#
# {
#     "emoji": "\ud83c\udf51",
#     "description": "peach",
#     "category": "Food & Drink",
#     "aliases": [
#         "peach"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:peach: `:peach:`
') }}
{{ markdown(title="🍒 cherries" type="markdown", code='

<!--
# 🍒 cherries
#
# {
#     "emoji": "\ud83c\udf52",
#     "description": "cherries",
#     "category": "Food & Drink",
#     "aliases": [
#         "cherries"
#     ],
#     "tags": [
#         "fruit"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:cherries: `:cherries:`
') }}
{{ markdown(title="🍓 strawberry" type="markdown", code='

<!--
# 🍓 strawberry
#
# {
#     "emoji": "\ud83c\udf53",
#     "description": "strawberry",
#     "category": "Food & Drink",
#     "aliases": [
#         "strawberry"
#     ],
#     "tags": [
#         "fruit"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:strawberry: `:strawberry:`
') }}
{{ markdown(title="🫐 blueberries" type="markdown", code='

<!--
# 🫐 blueberries
#
# {
#     "emoji": "\ud83e\uded0",
#     "description": "blueberries",
#     "category": "Food & Drink",
#     "aliases": [
#         "blueberries"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:blueberries: `:blueberries:`
') }}
{{ markdown(title="🥝 kiwi fruit" type="markdown", code='

<!--
# 🥝 kiwi fruit
#
# {
#     "emoji": "\ud83e\udd5d",
#     "description": "kiwi fruit",
#     "category": "Food & Drink",
#     "aliases": [
#         "kiwi_fruit"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:kiwi_fruit: `:kiwi_fruit:`
') }}
{{ markdown(title="🍅 tomato" type="markdown", code='

<!--
# 🍅 tomato
#
# {
#     "emoji": "\ud83c\udf45",
#     "description": "tomato",
#     "category": "Food & Drink",
#     "aliases": [
#         "tomato"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:tomato: `:tomato:`
') }}
{{ markdown(title="🫒 olive" type="markdown", code='

<!--
# 🫒 olive
#
# {
#     "emoji": "\ud83e\uded2",
#     "description": "olive",
#     "category": "Food & Drink",
#     "aliases": [
#         "olive"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:olive: `:olive:`
') }}
{{ markdown(title="🥥 coconut" type="markdown", code='

<!--
# 🥥 coconut
#
# {
#     "emoji": "\ud83e\udd65",
#     "description": "coconut",
#     "category": "Food & Drink",
#     "aliases": [
#         "coconut"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:coconut: `:coconut:`
') }}
{{ markdown(title="🥑 avocado" type="markdown", code='

<!--
# 🥑 avocado
#
# {
#     "emoji": "\ud83e\udd51",
#     "description": "avocado",
#     "category": "Food & Drink",
#     "aliases": [
#         "avocado"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:avocado: `:avocado:`
') }}
{{ markdown(title="🍆 eggplant" type="markdown", code='

<!--
# 🍆 eggplant
#
# {
#     "emoji": "\ud83c\udf46",
#     "description": "eggplant",
#     "category": "Food & Drink",
#     "aliases": [
#         "eggplant"
#     ],
#     "tags": [
#         "aubergine"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:eggplant: `:eggplant:`
') }}
{{ markdown(title="🥔 potato" type="markdown", code='

<!--
# 🥔 potato
#
# {
#     "emoji": "\ud83e\udd54",
#     "description": "potato",
#     "category": "Food & Drink",
#     "aliases": [
#         "potato"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:potato: `:potato:`
') }}
{{ markdown(title="🥕 carrot" type="markdown", code='

<!--
# 🥕 carrot
#
# {
#     "emoji": "\ud83e\udd55",
#     "description": "carrot",
#     "category": "Food & Drink",
#     "aliases": [
#         "carrot"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:carrot: `:carrot:`
') }}
{{ markdown(title="🌽 ear of corn" type="markdown", code='

<!--
# 🌽 ear of corn
#
# {
#     "emoji": "\ud83c\udf3d",
#     "description": "ear of corn",
#     "category": "Food & Drink",
#     "aliases": [
#         "corn"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:corn: `:corn:`
') }}
{{ markdown(title="🌶️ hot pepper" type="markdown", code='

<!--
# 🌶️ hot pepper
#
# {
#     "emoji": "\ud83c\udf36\ufe0f",
#     "description": "hot pepper",
#     "category": "Food & Drink",
#     "aliases": [
#         "hot_pepper"
#     ],
#     "tags": [
#         "spicy"
#     ],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:hot_pepper: `:hot_pepper:`
') }}
{{ markdown(title="🫑 bell pepper" type="markdown", code='

<!--
# 🫑 bell pepper
#
# {
#     "emoji": "\ud83e\uded1",
#     "description": "bell pepper",
#     "category": "Food & Drink",
#     "aliases": [
#         "bell_pepper"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:bell_pepper: `:bell_pepper:`
') }}
{{ markdown(title="🥒 cucumber" type="markdown", code='

<!--
# 🥒 cucumber
#
# {
#     "emoji": "\ud83e\udd52",
#     "description": "cucumber",
#     "category": "Food & Drink",
#     "aliases": [
#         "cucumber"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:cucumber: `:cucumber:`
') }}
{{ markdown(title="🥬 leafy green" type="markdown", code='

<!--
# 🥬 leafy green
#
# {
#     "emoji": "\ud83e\udd6c",
#     "description": "leafy green",
#     "category": "Food & Drink",
#     "aliases": [
#         "leafy_green"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:leafy_green: `:leafy_green:`
') }}
{{ markdown(title="🥦 broccoli" type="markdown", code='

<!--
# 🥦 broccoli
#
# {
#     "emoji": "\ud83e\udd66",
#     "description": "broccoli",
#     "category": "Food & Drink",
#     "aliases": [
#         "broccoli"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:broccoli: `:broccoli:`
') }}
{{ markdown(title="🧄 garlic" type="markdown", code='

<!--
# 🧄 garlic
#
# {
#     "emoji": "\ud83e\uddc4",
#     "description": "garlic",
#     "category": "Food & Drink",
#     "aliases": [
#         "garlic"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:garlic: `:garlic:`
') }}
{{ markdown(title="🧅 onion" type="markdown", code='

<!--
# 🧅 onion
#
# {
#     "emoji": "\ud83e\uddc5",
#     "description": "onion",
#     "category": "Food & Drink",
#     "aliases": [
#         "onion"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:onion: `:onion:`
') }}
{{ markdown(title="🥜 peanuts" type="markdown", code='

<!--
# 🥜 peanuts
#
# {
#     "emoji": "\ud83e\udd5c",
#     "description": "peanuts",
#     "category": "Food & Drink",
#     "aliases": [
#         "peanuts"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:peanuts: `:peanuts:`
') }}
{{ markdown(title="🫘 beans" type="markdown", code='

<!--
# 🫘 beans
#
# {
#     "emoji": "\ud83e\uded8",
#     "description": "beans",
#     "category": "Food & Drink",
#     "aliases": [
#         "beans"
#     ],
#     "tags": [],
#     "unicode_version": "14.0",
#     "ios_version": "15.4"
# }
-->

:beans: `:beans:`
') }}
{{ markdown(title="🌰 chestnut" type="markdown", code='

<!--
# 🌰 chestnut
#
# {
#     "emoji": "\ud83c\udf30",
#     "description": "chestnut",
#     "category": "Food & Drink",
#     "aliases": [
#         "chestnut"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:chestnut: `:chestnut:`
') }}
{{ markdown(title="🫚 ginger root" type="markdown", code='

<!--
# 🫚 ginger root
#
# {
#     "emoji": "\ud83e\udeda",
#     "description": "ginger root",
#     "category": "Food & Drink",
#     "aliases": [
#         "ginger_root"
#     ],
#     "tags": [],
#     "unicode_version": "15.0",
#     "ios_version": "16.4"
# }
-->

:ginger_root: `:ginger_root:`
') }}
{{ markdown(title="🫛 pea pod" type="markdown", code='

<!--
# 🫛 pea pod
#
# {
#     "emoji": "\ud83e\udedb",
#     "description": "pea pod",
#     "category": "Food & Drink",
#     "aliases": [
#         "pea_pod"
#     ],
#     "tags": [],
#     "unicode_version": "15.0",
#     "ios_version": "16.4"
# }
-->

:pea_pod: `:pea_pod:`
') }}
{{ markdown(title="🍞 bread" type="markdown", code='

<!--
# 🍞 bread
#
# {
#     "emoji": "\ud83c\udf5e",
#     "description": "bread",
#     "category": "Food & Drink",
#     "aliases": [
#         "bread"
#     ],
#     "tags": [
#         "toast"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:bread: `:bread:`
') }}
{{ markdown(title="🥐 croissant" type="markdown", code='

<!--
# 🥐 croissant
#
# {
#     "emoji": "\ud83e\udd50",
#     "description": "croissant",
#     "category": "Food & Drink",
#     "aliases": [
#         "croissant"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:croissant: `:croissant:`
') }}
{{ markdown(title="🥖 baguette bread" type="markdown", code='

<!--
# 🥖 baguette bread
#
# {
#     "emoji": "\ud83e\udd56",
#     "description": "baguette bread",
#     "category": "Food & Drink",
#     "aliases": [
#         "baguette_bread"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:baguette_bread: `:baguette_bread:`
') }}
{{ markdown(title="🫓 flatbread" type="markdown", code='

<!--
# 🫓 flatbread
#
# {
#     "emoji": "\ud83e\uded3",
#     "description": "flatbread",
#     "category": "Food & Drink",
#     "aliases": [
#         "flatbread"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:flatbread: `:flatbread:`
') }}
{{ markdown(title="🥨 pretzel" type="markdown", code='

<!--
# 🥨 pretzel
#
# {
#     "emoji": "\ud83e\udd68",
#     "description": "pretzel",
#     "category": "Food & Drink",
#     "aliases": [
#         "pretzel"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:pretzel: `:pretzel:`
') }}
{{ markdown(title="🥯 bagel" type="markdown", code='

<!--
# 🥯 bagel
#
# {
#     "emoji": "\ud83e\udd6f",
#     "description": "bagel",
#     "category": "Food & Drink",
#     "aliases": [
#         "bagel"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:bagel: `:bagel:`
') }}
{{ markdown(title="🥞 pancakes" type="markdown", code='

<!--
# 🥞 pancakes
#
# {
#     "emoji": "\ud83e\udd5e",
#     "description": "pancakes",
#     "category": "Food & Drink",
#     "aliases": [
#         "pancakes"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:pancakes: `:pancakes:`
') }}
{{ markdown(title="🧇 waffle" type="markdown", code='

<!--
# 🧇 waffle
#
# {
#     "emoji": "\ud83e\uddc7",
#     "description": "waffle",
#     "category": "Food & Drink",
#     "aliases": [
#         "waffle"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:waffle: `:waffle:`
') }}
{{ markdown(title="🧀 cheese wedge" type="markdown", code='

<!--
# 🧀 cheese wedge
#
# {
#     "emoji": "\ud83e\uddc0",
#     "description": "cheese wedge",
#     "category": "Food & Drink",
#     "aliases": [
#         "cheese"
#     ],
#     "tags": [],
#     "unicode_version": "8.0",
#     "ios_version": "9.1"
# }
-->

:cheese: `:cheese:`
') }}
{{ markdown(title="🍖 meat on bone" type="markdown", code='

<!--
# 🍖 meat on bone
#
# {
#     "emoji": "\ud83c\udf56",
#     "description": "meat on bone",
#     "category": "Food & Drink",
#     "aliases": [
#         "meat_on_bone"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:meat_on_bone: `:meat_on_bone:`
') }}
{{ markdown(title="🍗 poultry leg" type="markdown", code='

<!--
# 🍗 poultry leg
#
# {
#     "emoji": "\ud83c\udf57",
#     "description": "poultry leg",
#     "category": "Food & Drink",
#     "aliases": [
#         "poultry_leg"
#     ],
#     "tags": [
#         "meat",
#         "chicken"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:poultry_leg: `:poultry_leg:`
') }}
{{ markdown(title="🥩 cut of meat" type="markdown", code='

<!--
# 🥩 cut of meat
#
# {
#     "emoji": "\ud83e\udd69",
#     "description": "cut of meat",
#     "category": "Food & Drink",
#     "aliases": [
#         "cut_of_meat"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:cut_of_meat: `:cut_of_meat:`
') }}
{{ markdown(title="🥓 bacon" type="markdown", code='

<!--
# 🥓 bacon
#
# {
#     "emoji": "\ud83e\udd53",
#     "description": "bacon",
#     "category": "Food & Drink",
#     "aliases": [
#         "bacon"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:bacon: `:bacon:`
') }}
{{ markdown(title="🍔 hamburger" type="markdown", code='

<!--
# 🍔 hamburger
#
# {
#     "emoji": "\ud83c\udf54",
#     "description": "hamburger",
#     "category": "Food & Drink",
#     "aliases": [
#         "hamburger"
#     ],
#     "tags": [
#         "burger"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:hamburger: `:hamburger:`
') }}
{{ markdown(title="🍟 french fries" type="markdown", code='

<!--
# 🍟 french fries
#
# {
#     "emoji": "\ud83c\udf5f",
#     "description": "french fries",
#     "category": "Food & Drink",
#     "aliases": [
#         "fries"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:fries: `:fries:`
') }}
{{ markdown(title="🍕 pizza" type="markdown", code='

<!--
# 🍕 pizza
#
# {
#     "emoji": "\ud83c\udf55",
#     "description": "pizza",
#     "category": "Food & Drink",
#     "aliases": [
#         "pizza"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:pizza: `:pizza:`
') }}
{{ markdown(title="🌭 hot dog" type="markdown", code='

<!--
# 🌭 hot dog
#
# {
#     "emoji": "\ud83c\udf2d",
#     "description": "hot dog",
#     "category": "Food & Drink",
#     "aliases": [
#         "hotdog"
#     ],
#     "tags": [],
#     "unicode_version": "8.0",
#     "ios_version": "9.1"
# }
-->

:hotdog: `:hotdog:`
') }}
{{ markdown(title="🥪 sandwich" type="markdown", code='

<!--
# 🥪 sandwich
#
# {
#     "emoji": "\ud83e\udd6a",
#     "description": "sandwich",
#     "category": "Food & Drink",
#     "aliases": [
#         "sandwich"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:sandwich: `:sandwich:`
') }}
{{ markdown(title="🌮 taco" type="markdown", code='

<!--
# 🌮 taco
#
# {
#     "emoji": "\ud83c\udf2e",
#     "description": "taco",
#     "category": "Food & Drink",
#     "aliases": [
#         "taco"
#     ],
#     "tags": [],
#     "unicode_version": "8.0",
#     "ios_version": "9.1"
# }
-->

:taco: `:taco:`
') }}
{{ markdown(title="🌯 burrito" type="markdown", code='

<!--
# 🌯 burrito
#
# {
#     "emoji": "\ud83c\udf2f",
#     "description": "burrito",
#     "category": "Food & Drink",
#     "aliases": [
#         "burrito"
#     ],
#     "tags": [],
#     "unicode_version": "8.0",
#     "ios_version": "9.1"
# }
-->

:burrito: `:burrito:`
') }}
{{ markdown(title="🫔 tamale" type="markdown", code='

<!--
# 🫔 tamale
#
# {
#     "emoji": "\ud83e\uded4",
#     "description": "tamale",
#     "category": "Food & Drink",
#     "aliases": [
#         "tamale"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:tamale: `:tamale:`
') }}
{{ markdown(title="🥙 stuffed flatbread" type="markdown", code='

<!--
# 🥙 stuffed flatbread
#
# {
#     "emoji": "\ud83e\udd59",
#     "description": "stuffed flatbread",
#     "category": "Food & Drink",
#     "aliases": [
#         "stuffed_flatbread"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:stuffed_flatbread: `:stuffed_flatbread:`
') }}
{{ markdown(title="🧆 falafel" type="markdown", code='

<!--
# 🧆 falafel
#
# {
#     "emoji": "\ud83e\uddc6",
#     "description": "falafel",
#     "category": "Food & Drink",
#     "aliases": [
#         "falafel"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:falafel: `:falafel:`
') }}
{{ markdown(title="🥚 egg" type="markdown", code='

<!--
# 🥚 egg
#
# {
#     "emoji": "\ud83e\udd5a",
#     "description": "egg",
#     "category": "Food & Drink",
#     "aliases": [
#         "egg"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:egg: `:egg:`
') }}
{{ markdown(title="🍳 cooking" type="markdown", code='

<!--
# 🍳 cooking
#
# {
#     "emoji": "\ud83c\udf73",
#     "description": "cooking",
#     "category": "Food & Drink",
#     "aliases": [
#         "fried_egg"
#     ],
#     "tags": [
#         "breakfast"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:fried_egg: `:fried_egg:`
') }}
{{ markdown(title="🥘 shallow pan of food" type="markdown", code='

<!--
# 🥘 shallow pan of food
#
# {
#     "emoji": "\ud83e\udd58",
#     "description": "shallow pan of food",
#     "category": "Food & Drink",
#     "aliases": [
#         "shallow_pan_of_food"
#     ],
#     "tags": [
#         "paella",
#         "curry"
#     ],
#     "unicode_version": "",
#     "ios_version": "10.2"
# }
-->

:shallow_pan_of_food: `:shallow_pan_of_food:`
') }}
{{ markdown(title="🍲 pot of food" type="markdown", code='

<!--
# 🍲 pot of food
#
# {
#     "emoji": "\ud83c\udf72",
#     "description": "pot of food",
#     "category": "Food & Drink",
#     "aliases": [
#         "stew"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:stew: `:stew:`
') }}
{{ markdown(title="🫕 fondue" type="markdown", code='

<!--
# 🫕 fondue
#
# {
#     "emoji": "\ud83e\uded5",
#     "description": "fondue",
#     "category": "Food & Drink",
#     "aliases": [
#         "fondue"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:fondue: `:fondue:`
') }}
{{ markdown(title="🥣 bowl with spoon" type="markdown", code='

<!--
# 🥣 bowl with spoon
#
# {
#     "emoji": "\ud83e\udd63",
#     "description": "bowl with spoon",
#     "category": "Food & Drink",
#     "aliases": [
#         "bowl_with_spoon"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:bowl_with_spoon: `:bowl_with_spoon:`
') }}
{{ markdown(title="🥗 green salad" type="markdown", code='

<!--
# 🥗 green salad
#
# {
#     "emoji": "\ud83e\udd57",
#     "description": "green salad",
#     "category": "Food & Drink",
#     "aliases": [
#         "green_salad"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:green_salad: `:green_salad:`
') }}
{{ markdown(title="🍿 popcorn" type="markdown", code='

<!--
# 🍿 popcorn
#
# {
#     "emoji": "\ud83c\udf7f",
#     "description": "popcorn",
#     "category": "Food & Drink",
#     "aliases": [
#         "popcorn"
#     ],
#     "tags": [],
#     "unicode_version": "8.0",
#     "ios_version": "9.1"
# }
-->

:popcorn: `:popcorn:`
') }}
{{ markdown(title="🧈 butter" type="markdown", code='

<!--
# 🧈 butter
#
# {
#     "emoji": "\ud83e\uddc8",
#     "description": "butter",
#     "category": "Food & Drink",
#     "aliases": [
#         "butter"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:butter: `:butter:`
') }}
{{ markdown(title="🧂 salt" type="markdown", code='

<!--
# 🧂 salt
#
# {
#     "emoji": "\ud83e\uddc2",
#     "description": "salt",
#     "category": "Food & Drink",
#     "aliases": [
#         "salt"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:salt: `:salt:`
') }}
{{ markdown(title="🥫 canned food" type="markdown", code='

<!--
# 🥫 canned food
#
# {
#     "emoji": "\ud83e\udd6b",
#     "description": "canned food",
#     "category": "Food & Drink",
#     "aliases": [
#         "canned_food"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:canned_food: `:canned_food:`
') }}
{{ markdown(title="🍱 bento box" type="markdown", code='

<!--
# 🍱 bento box
#
# {
#     "emoji": "\ud83c\udf71",
#     "description": "bento box",
#     "category": "Food & Drink",
#     "aliases": [
#         "bento"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:bento: `:bento:`
') }}
{{ markdown(title="🍘 rice cracker" type="markdown", code='

<!--
# 🍘 rice cracker
#
# {
#     "emoji": "\ud83c\udf58",
#     "description": "rice cracker",
#     "category": "Food & Drink",
#     "aliases": [
#         "rice_cracker"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:rice_cracker: `:rice_cracker:`
') }}
{{ markdown(title="🍙 rice ball" type="markdown", code='

<!--
# 🍙 rice ball
#
# {
#     "emoji": "\ud83c\udf59",
#     "description": "rice ball",
#     "category": "Food & Drink",
#     "aliases": [
#         "rice_ball"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:rice_ball: `:rice_ball:`
') }}
{{ markdown(title="🍚 cooked rice" type="markdown", code='

<!--
# 🍚 cooked rice
#
# {
#     "emoji": "\ud83c\udf5a",
#     "description": "cooked rice",
#     "category": "Food & Drink",
#     "aliases": [
#         "rice"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:rice: `:rice:`
') }}
{{ markdown(title="🍛 curry rice" type="markdown", code='

<!--
# 🍛 curry rice
#
# {
#     "emoji": "\ud83c\udf5b",
#     "description": "curry rice",
#     "category": "Food & Drink",
#     "aliases": [
#         "curry"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:curry: `:curry:`
') }}
{{ markdown(title="🍜 steaming bowl" type="markdown", code='

<!--
# 🍜 steaming bowl
#
# {
#     "emoji": "\ud83c\udf5c",
#     "description": "steaming bowl",
#     "category": "Food & Drink",
#     "aliases": [
#         "ramen"
#     ],
#     "tags": [
#         "noodle"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:ramen: `:ramen:`
') }}
{{ markdown(title="🍝 spaghetti" type="markdown", code='

<!--
# 🍝 spaghetti
#
# {
#     "emoji": "\ud83c\udf5d",
#     "description": "spaghetti",
#     "category": "Food & Drink",
#     "aliases": [
#         "spaghetti"
#     ],
#     "tags": [
#         "pasta"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:spaghetti: `:spaghetti:`
') }}
{{ markdown(title="🍠 roasted sweet potato" type="markdown", code='

<!--
# 🍠 roasted sweet potato
#
# {
#     "emoji": "\ud83c\udf60",
#     "description": "roasted sweet potato",
#     "category": "Food & Drink",
#     "aliases": [
#         "sweet_potato"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:sweet_potato: `:sweet_potato:`
') }}
{{ markdown(title="🍢 oden" type="markdown", code='

<!--
# 🍢 oden
#
# {
#     "emoji": "\ud83c\udf62",
#     "description": "oden",
#     "category": "Food & Drink",
#     "aliases": [
#         "oden"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:oden: `:oden:`
') }}
{{ markdown(title="🍣 sushi" type="markdown", code='

<!--
# 🍣 sushi
#
# {
#     "emoji": "\ud83c\udf63",
#     "description": "sushi",
#     "category": "Food & Drink",
#     "aliases": [
#         "sushi"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:sushi: `:sushi:`
') }}
{{ markdown(title="🍤 fried shrimp" type="markdown", code='

<!--
# 🍤 fried shrimp
#
# {
#     "emoji": "\ud83c\udf64",
#     "description": "fried shrimp",
#     "category": "Food & Drink",
#     "aliases": [
#         "fried_shrimp"
#     ],
#     "tags": [
#         "tempura"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:fried_shrimp: `:fried_shrimp:`
') }}
{{ markdown(title="🍥 fish cake with swirl" type="markdown", code='

<!--
# 🍥 fish cake with swirl
#
# {
#     "emoji": "\ud83c\udf65",
#     "description": "fish cake with swirl",
#     "category": "Food & Drink",
#     "aliases": [
#         "fish_cake"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:fish_cake: `:fish_cake:`
') }}
{{ markdown(title="🥮 moon cake" type="markdown", code='

<!--
# 🥮 moon cake
#
# {
#     "emoji": "\ud83e\udd6e",
#     "description": "moon cake",
#     "category": "Food & Drink",
#     "aliases": [
#         "moon_cake"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:moon_cake: `:moon_cake:`
') }}
{{ markdown(title="🍡 dango" type="markdown", code='

<!--
# 🍡 dango
#
# {
#     "emoji": "\ud83c\udf61",
#     "description": "dango",
#     "category": "Food & Drink",
#     "aliases": [
#         "dango"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:dango: `:dango:`
') }}
{{ markdown(title="🥟 dumpling" type="markdown", code='

<!--
# 🥟 dumpling
#
# {
#     "emoji": "\ud83e\udd5f",
#     "description": "dumpling",
#     "category": "Food & Drink",
#     "aliases": [
#         "dumpling"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:dumpling: `:dumpling:`
') }}
{{ markdown(title="🥠 fortune cookie" type="markdown", code='

<!--
# 🥠 fortune cookie
#
# {
#     "emoji": "\ud83e\udd60",
#     "description": "fortune cookie",
#     "category": "Food & Drink",
#     "aliases": [
#         "fortune_cookie"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:fortune_cookie: `:fortune_cookie:`
') }}
{{ markdown(title="🥡 takeout box" type="markdown", code='

<!--
# 🥡 takeout box
#
# {
#     "emoji": "\ud83e\udd61",
#     "description": "takeout box",
#     "category": "Food & Drink",
#     "aliases": [
#         "takeout_box"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:takeout_box: `:takeout_box:`
') }}
{{ markdown(title="🦀 crab" type="markdown", code='

<!--
# 🦀 crab
#
# {
#     "emoji": "\ud83e\udd80",
#     "description": "crab",
#     "category": "Food & Drink",
#     "aliases": [
#         "crab"
#     ],
#     "tags": [],
#     "unicode_version": "8.0",
#     "ios_version": "9.1"
# }
-->

:crab: `:crab:`
') }}
{{ markdown(title="🦞 lobster" type="markdown", code='

<!--
# 🦞 lobster
#
# {
#     "emoji": "\ud83e\udd9e",
#     "description": "lobster",
#     "category": "Food & Drink",
#     "aliases": [
#         "lobster"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:lobster: `:lobster:`
') }}
{{ markdown(title="🦐 shrimp" type="markdown", code='

<!--
# 🦐 shrimp
#
# {
#     "emoji": "\ud83e\udd90",
#     "description": "shrimp",
#     "category": "Food & Drink",
#     "aliases": [
#         "shrimp"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:shrimp: `:shrimp:`
') }}
{{ markdown(title="🦑 squid" type="markdown", code='

<!--
# 🦑 squid
#
# {
#     "emoji": "\ud83e\udd91",
#     "description": "squid",
#     "category": "Food & Drink",
#     "aliases": [
#         "squid"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:squid: `:squid:`
') }}
{{ markdown(title="🦪 oyster" type="markdown", code='

<!--
# 🦪 oyster
#
# {
#     "emoji": "\ud83e\uddaa",
#     "description": "oyster",
#     "category": "Food & Drink",
#     "aliases": [
#         "oyster"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:oyster: `:oyster:`
') }}
{{ markdown(title="🍦 soft ice cream" type="markdown", code='

<!--
# 🍦 soft ice cream
#
# {
#     "emoji": "\ud83c\udf66",
#     "description": "soft ice cream",
#     "category": "Food & Drink",
#     "aliases": [
#         "icecream"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:icecream: `:icecream:`
') }}
{{ markdown(title="🍧 shaved ice" type="markdown", code='

<!--
# 🍧 shaved ice
#
# {
#     "emoji": "\ud83c\udf67",
#     "description": "shaved ice",
#     "category": "Food & Drink",
#     "aliases": [
#         "shaved_ice"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:shaved_ice: `:shaved_ice:`
') }}
{{ markdown(title="🍨 ice cream" type="markdown", code='

<!--
# 🍨 ice cream
#
# {
#     "emoji": "\ud83c\udf68",
#     "description": "ice cream",
#     "category": "Food & Drink",
#     "aliases": [
#         "ice_cream"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:ice_cream: `:ice_cream:`
') }}
{{ markdown(title="🍩 doughnut" type="markdown", code='

<!--
# 🍩 doughnut
#
# {
#     "emoji": "\ud83c\udf69",
#     "description": "doughnut",
#     "category": "Food & Drink",
#     "aliases": [
#         "doughnut"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:doughnut: `:doughnut:`
') }}
{{ markdown(title="🍪 cookie" type="markdown", code='

<!--
# 🍪 cookie
#
# {
#     "emoji": "\ud83c\udf6a",
#     "description": "cookie",
#     "category": "Food & Drink",
#     "aliases": [
#         "cookie"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:cookie: `:cookie:`
') }}
{{ markdown(title="🎂 birthday cake" type="markdown", code='

<!--
# 🎂 birthday cake
#
# {
#     "emoji": "\ud83c\udf82",
#     "description": "birthday cake",
#     "category": "Food & Drink",
#     "aliases": [
#         "birthday"
#     ],
#     "tags": [
#         "party"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:birthday: `:birthday:`
') }}
{{ markdown(title="🍰 shortcake" type="markdown", code='

<!--
# 🍰 shortcake
#
# {
#     "emoji": "\ud83c\udf70",
#     "description": "shortcake",
#     "category": "Food & Drink",
#     "aliases": [
#         "cake"
#     ],
#     "tags": [
#         "dessert"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:cake: `:cake:`
') }}
{{ markdown(title="🧁 cupcake" type="markdown", code='

<!--
# 🧁 cupcake
#
# {
#     "emoji": "\ud83e\uddc1",
#     "description": "cupcake",
#     "category": "Food & Drink",
#     "aliases": [
#         "cupcake"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:cupcake: `:cupcake:`
') }}
{{ markdown(title="🥧 pie" type="markdown", code='

<!--
# 🥧 pie
#
# {
#     "emoji": "\ud83e\udd67",
#     "description": "pie",
#     "category": "Food & Drink",
#     "aliases": [
#         "pie"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:pie: `:pie:`
') }}
{{ markdown(title="🍫 chocolate bar" type="markdown", code='

<!--
# 🍫 chocolate bar
#
# {
#     "emoji": "\ud83c\udf6b",
#     "description": "chocolate bar",
#     "category": "Food & Drink",
#     "aliases": [
#         "chocolate_bar"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:chocolate_bar: `:chocolate_bar:`
') }}
{{ markdown(title="🍬 candy" type="markdown", code='

<!--
# 🍬 candy
#
# {
#     "emoji": "\ud83c\udf6c",
#     "description": "candy",
#     "category": "Food & Drink",
#     "aliases": [
#         "candy"
#     ],
#     "tags": [
#         "sweet"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:candy: `:candy:`
') }}
{{ markdown(title="🍭 lollipop" type="markdown", code='

<!--
# 🍭 lollipop
#
# {
#     "emoji": "\ud83c\udf6d",
#     "description": "lollipop",
#     "category": "Food & Drink",
#     "aliases": [
#         "lollipop"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:lollipop: `:lollipop:`
') }}
{{ markdown(title="🍮 custard" type="markdown", code='

<!--
# 🍮 custard
#
# {
#     "emoji": "\ud83c\udf6e",
#     "description": "custard",
#     "category": "Food & Drink",
#     "aliases": [
#         "custard"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:custard: `:custard:`
') }}
{{ markdown(title="🍯 honey pot" type="markdown", code='

<!--
# 🍯 honey pot
#
# {
#     "emoji": "\ud83c\udf6f",
#     "description": "honey pot",
#     "category": "Food & Drink",
#     "aliases": [
#         "honey_pot"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:honey_pot: `:honey_pot:`
') }}
{{ markdown(title="🍼 baby bottle" type="markdown", code='

<!--
# 🍼 baby bottle
#
# {
#     "emoji": "\ud83c\udf7c",
#     "description": "baby bottle",
#     "category": "Food & Drink",
#     "aliases": [
#         "baby_bottle"
#     ],
#     "tags": [
#         "milk"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:baby_bottle: `:baby_bottle:`
') }}
{{ markdown(title="🥛 glass of milk" type="markdown", code='

<!--
# 🥛 glass of milk
#
# {
#     "emoji": "\ud83e\udd5b",
#     "description": "glass of milk",
#     "category": "Food & Drink",
#     "aliases": [
#         "milk_glass"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:milk_glass: `:milk_glass:`
') }}
{{ markdown(title="☕ hot beverage" type="markdown", code='

<!--
# ☕ hot beverage
#
# {
#     "emoji": "\u2615",
#     "description": "hot beverage",
#     "category": "Food & Drink",
#     "aliases": [
#         "coffee"
#     ],
#     "tags": [
#         "cafe",
#         "espresso"
#     ],
#     "unicode_version": "4.0",
#     "ios_version": "6.0"
# }
-->

:coffee: `:coffee:`
') }}
{{ markdown(title="🫖 teapot" type="markdown", code='

<!--
# 🫖 teapot
#
# {
#     "emoji": "\ud83e\uded6",
#     "description": "teapot",
#     "category": "Food & Drink",
#     "aliases": [
#         "teapot"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:teapot: `:teapot:`
') }}
{{ markdown(title="🍵 teacup without handle" type="markdown", code='

<!--
# 🍵 teacup without handle
#
# {
#     "emoji": "\ud83c\udf75",
#     "description": "teacup without handle",
#     "category": "Food & Drink",
#     "aliases": [
#         "tea"
#     ],
#     "tags": [
#         "green",
#         "breakfast"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:tea: `:tea:`
') }}
{{ markdown(title="🍶 sake" type="markdown", code='

<!--
# 🍶 sake
#
# {
#     "emoji": "\ud83c\udf76",
#     "description": "sake",
#     "category": "Food & Drink",
#     "aliases": [
#         "sake"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:sake: `:sake:`
') }}
{{ markdown(title="🍾 bottle with popping cork" type="markdown", code='

<!--
# 🍾 bottle with popping cork
#
# {
#     "emoji": "\ud83c\udf7e",
#     "description": "bottle with popping cork",
#     "category": "Food & Drink",
#     "aliases": [
#         "champagne"
#     ],
#     "tags": [
#         "bottle",
#         "bubbly",
#         "celebration"
#     ],
#     "unicode_version": "8.0",
#     "ios_version": "9.1"
# }
-->

:champagne: `:champagne:`
') }}
{{ markdown(title="🍷 wine glass" type="markdown", code='

<!--
# 🍷 wine glass
#
# {
#     "emoji": "\ud83c\udf77",
#     "description": "wine glass",
#     "category": "Food & Drink",
#     "aliases": [
#         "wine_glass"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:wine_glass: `:wine_glass:`
') }}
{{ markdown(title="🍸 cocktail glass" type="markdown", code='

<!--
# 🍸 cocktail glass
#
# {
#     "emoji": "\ud83c\udf78",
#     "description": "cocktail glass",
#     "category": "Food & Drink",
#     "aliases": [
#         "cocktail"
#     ],
#     "tags": [
#         "drink"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:cocktail: `:cocktail:`
') }}
{{ markdown(title="🍹 tropical drink" type="markdown", code='

<!--
# 🍹 tropical drink
#
# {
#     "emoji": "\ud83c\udf79",
#     "description": "tropical drink",
#     "category": "Food & Drink",
#     "aliases": [
#         "tropical_drink"
#     ],
#     "tags": [
#         "summer",
#         "vacation"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:tropical_drink: `:tropical_drink:`
') }}
{{ markdown(title="🍺 beer mug" type="markdown", code='

<!--
# 🍺 beer mug
#
# {
#     "emoji": "\ud83c\udf7a",
#     "description": "beer mug",
#     "category": "Food & Drink",
#     "aliases": [
#         "beer"
#     ],
#     "tags": [
#         "drink"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:beer: `:beer:`
') }}
{{ markdown(title="🍻 clinking beer mugs" type="markdown", code='

<!--
# 🍻 clinking beer mugs
#
# {
#     "emoji": "\ud83c\udf7b",
#     "description": "clinking beer mugs",
#     "category": "Food & Drink",
#     "aliases": [
#         "beers"
#     ],
#     "tags": [
#         "drinks"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:beers: `:beers:`
') }}
{{ markdown(title="🥂 clinking glasses" type="markdown", code='

<!--
# 🥂 clinking glasses
#
# {
#     "emoji": "\ud83e\udd42",
#     "description": "clinking glasses",
#     "category": "Food & Drink",
#     "aliases": [
#         "clinking_glasses"
#     ],
#     "tags": [
#         "cheers",
#         "toast"
#     ],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:clinking_glasses: `:clinking_glasses:`
') }}
{{ markdown(title="🥃 tumbler glass" type="markdown", code='

<!--
# 🥃 tumbler glass
#
# {
#     "emoji": "\ud83e\udd43",
#     "description": "tumbler glass",
#     "category": "Food & Drink",
#     "aliases": [
#         "tumbler_glass"
#     ],
#     "tags": [
#         "whisky"
#     ],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:tumbler_glass: `:tumbler_glass:`
') }}
{{ markdown(title="🫗 pouring liquid" type="markdown", code='

<!--
# 🫗 pouring liquid
#
# {
#     "emoji": "\ud83e\uded7",
#     "description": "pouring liquid",
#     "category": "Food & Drink",
#     "aliases": [
#         "pouring_liquid"
#     ],
#     "tags": [],
#     "unicode_version": "14.0",
#     "ios_version": "15.4"
# }
-->

:pouring_liquid: `:pouring_liquid:`
') }}
{{ markdown(title="🥤 cup with straw" type="markdown", code='

<!--
# 🥤 cup with straw
#
# {
#     "emoji": "\ud83e\udd64",
#     "description": "cup with straw",
#     "category": "Food & Drink",
#     "aliases": [
#         "cup_with_straw"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:cup_with_straw: `:cup_with_straw:`
') }}
{{ markdown(title="🧋 bubble tea" type="markdown", code='

<!--
# 🧋 bubble tea
#
# {
#     "emoji": "\ud83e\uddcb",
#     "description": "bubble tea",
#     "category": "Food & Drink",
#     "aliases": [
#         "bubble_tea"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:bubble_tea: `:bubble_tea:`
') }}
{{ markdown(title="🧃 beverage box" type="markdown", code='

<!--
# 🧃 beverage box
#
# {
#     "emoji": "\ud83e\uddc3",
#     "description": "beverage box",
#     "category": "Food & Drink",
#     "aliases": [
#         "beverage_box"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:beverage_box: `:beverage_box:`
') }}
{{ markdown(title="🧉 mate" type="markdown", code='

<!--
# 🧉 mate
#
# {
#     "emoji": "\ud83e\uddc9",
#     "description": "mate",
#     "category": "Food & Drink",
#     "aliases": [
#         "mate"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:mate: `:mate:`
') }}
{{ markdown(title="🧊 ice" type="markdown", code='

<!--
# 🧊 ice
#
# {
#     "emoji": "\ud83e\uddca",
#     "description": "ice",
#     "category": "Food & Drink",
#     "aliases": [
#         "ice_cube"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:ice_cube: `:ice_cube:`
') }}
{{ markdown(title="🥢 chopsticks" type="markdown", code='

<!--
# 🥢 chopsticks
#
# {
#     "emoji": "\ud83e\udd62",
#     "description": "chopsticks",
#     "category": "Food & Drink",
#     "aliases": [
#         "chopsticks"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:chopsticks: `:chopsticks:`
') }}
{{ markdown(title="🍽️ fork and knife with plate" type="markdown", code='

<!--
# 🍽️ fork and knife with plate
#
# {
#     "emoji": "\ud83c\udf7d\ufe0f",
#     "description": "fork and knife with plate",
#     "category": "Food & Drink",
#     "aliases": [
#         "plate_with_cutlery"
#     ],
#     "tags": [
#         "dining",
#         "dinner"
#     ],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:plate_with_cutlery: `:plate_with_cutlery:`
') }}
{{ markdown(title="🍴 fork and knife" type="markdown", code='

<!--
# 🍴 fork and knife
#
# {
#     "emoji": "\ud83c\udf74",
#     "description": "fork and knife",
#     "category": "Food & Drink",
#     "aliases": [
#         "fork_and_knife"
#     ],
#     "tags": [
#         "cutlery"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:fork_and_knife: `:fork_and_knife:`
') }}
{{ markdown(title="🥄 spoon" type="markdown", code='

<!--
# 🥄 spoon
#
# {
#     "emoji": "\ud83e\udd44",
#     "description": "spoon",
#     "category": "Food & Drink",
#     "aliases": [
#         "spoon"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:spoon: `:spoon:`
') }}
{{ markdown(title="🔪 kitchen knife" type="markdown", code='

<!--
# 🔪 kitchen knife
#
# {
#     "emoji": "\ud83d\udd2a",
#     "description": "kitchen knife",
#     "category": "Food & Drink",
#     "aliases": [
#         "hocho",
#         "knife"
#     ],
#     "tags": [
#         "cut",
#         "chop"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:hocho: `:hocho:`

:knife: `:knife:`
') }}
{{ markdown(title="🫙 jar" type="markdown", code='

<!--
# 🫙 jar
#
# {
#     "emoji": "\ud83e\uded9",
#     "description": "jar",
#     "category": "Food & Drink",
#     "aliases": [
#         "jar"
#     ],
#     "tags": [],
#     "unicode_version": "14.0",
#     "ios_version": "15.4"
# }
-->

:jar: `:jar:`
') }}
{{ markdown(title="🏺 amphora" type="markdown", code='

<!--
# 🏺 amphora
#
# {
#     "emoji": "\ud83c\udffa",
#     "description": "amphora",
#     "category": "Food & Drink",
#     "aliases": [
#         "amphora"
#     ],
#     "tags": [],
#     "unicode_version": "8.0",
#     "ios_version": "9.1"
# }
-->

:amphora: `:amphora:`
') }}
{{ markdown(title="🌍 globe showing Europe-Africa" type="markdown", code='

<!--
# 🌍 globe showing Europe-Africa
#
# {
#     "emoji": "\ud83c\udf0d",
#     "description": "globe showing Europe-Africa",
#     "category": "Travel & Places",
#     "aliases": [
#         "earth_africa"
#     ],
#     "tags": [
#         "globe",
#         "world",
#         "international"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:earth_africa: `:earth_africa:`
') }}
{{ markdown(title="🌎 globe showing Americas" type="markdown", code='

<!--
# 🌎 globe showing Americas
#
# {
#     "emoji": "\ud83c\udf0e",
#     "description": "globe showing Americas",
#     "category": "Travel & Places",
#     "aliases": [
#         "earth_americas"
#     ],
#     "tags": [
#         "globe",
#         "world",
#         "international"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:earth_americas: `:earth_americas:`
') }}
{{ markdown(title="🌏 globe showing Asia-Australia" type="markdown", code='

<!--
# 🌏 globe showing Asia-Australia
#
# {
#     "emoji": "\ud83c\udf0f",
#     "description": "globe showing Asia-Australia",
#     "category": "Travel & Places",
#     "aliases": [
#         "earth_asia"
#     ],
#     "tags": [
#         "globe",
#         "world",
#         "international"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:earth_asia: `:earth_asia:`
') }}
{{ markdown(title="🌐 globe with meridians" type="markdown", code='

<!--
# 🌐 globe with meridians
#
# {
#     "emoji": "\ud83c\udf10",
#     "description": "globe with meridians",
#     "category": "Travel & Places",
#     "aliases": [
#         "globe_with_meridians"
#     ],
#     "tags": [
#         "world",
#         "global",
#         "international"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:globe_with_meridians: `:globe_with_meridians:`
') }}
{{ markdown(title="🗺️ world map" type="markdown", code='

<!--
# 🗺️ world map
#
# {
#     "emoji": "\ud83d\uddfa\ufe0f",
#     "description": "world map",
#     "category": "Travel & Places",
#     "aliases": [
#         "world_map"
#     ],
#     "tags": [
#         "travel"
#     ],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:world_map: `:world_map:`
') }}
{{ markdown(title="🗾 map of Japan" type="markdown", code='

<!--
# 🗾 map of Japan
#
# {
#     "emoji": "\ud83d\uddfe",
#     "description": "map of Japan",
#     "category": "Travel & Places",
#     "aliases": [
#         "japan"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:japan: `:japan:`
') }}
{{ markdown(title="🧭 compass" type="markdown", code='

<!--
# 🧭 compass
#
# {
#     "emoji": "\ud83e\udded",
#     "description": "compass",
#     "category": "Travel & Places",
#     "aliases": [
#         "compass"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:compass: `:compass:`
') }}
{{ markdown(title="🏔️ snow-capped mountain" type="markdown", code='

<!--
# 🏔️ snow-capped mountain
#
# {
#     "emoji": "\ud83c\udfd4\ufe0f",
#     "description": "snow-capped mountain",
#     "category": "Travel & Places",
#     "aliases": [
#         "mountain_snow"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:mountain_snow: `:mountain_snow:`
') }}
{{ markdown(title="⛰️ mountain" type="markdown", code='

<!--
# ⛰️ mountain
#
# {
#     "emoji": "\u26f0\ufe0f",
#     "description": "mountain",
#     "category": "Travel & Places",
#     "aliases": [
#         "mountain"
#     ],
#     "tags": [],
#     "unicode_version": "5.2",
#     "ios_version": "9.1"
# }
-->

:mountain: `:mountain:`
') }}
{{ markdown(title="🌋 volcano" type="markdown", code='

<!--
# 🌋 volcano
#
# {
#     "emoji": "\ud83c\udf0b",
#     "description": "volcano",
#     "category": "Travel & Places",
#     "aliases": [
#         "volcano"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:volcano: `:volcano:`
') }}
{{ markdown(title="🗻 mount fuji" type="markdown", code='

<!--
# 🗻 mount fuji
#
# {
#     "emoji": "\ud83d\uddfb",
#     "description": "mount fuji",
#     "category": "Travel & Places",
#     "aliases": [
#         "mount_fuji"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:mount_fuji: `:mount_fuji:`
') }}
{{ markdown(title="🏕️ camping" type="markdown", code='

<!--
# 🏕️ camping
#
# {
#     "emoji": "\ud83c\udfd5\ufe0f",
#     "description": "camping",
#     "category": "Travel & Places",
#     "aliases": [
#         "camping"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:camping: `:camping:`
') }}
{{ markdown(title="🏖️ beach with umbrella" type="markdown", code='

<!--
# 🏖️ beach with umbrella
#
# {
#     "emoji": "\ud83c\udfd6\ufe0f",
#     "description": "beach with umbrella",
#     "category": "Travel & Places",
#     "aliases": [
#         "beach_umbrella"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:beach_umbrella: `:beach_umbrella:`
') }}
{{ markdown(title="🏜️ desert" type="markdown", code='

<!--
# 🏜️ desert
#
# {
#     "emoji": "\ud83c\udfdc\ufe0f",
#     "description": "desert",
#     "category": "Travel & Places",
#     "aliases": [
#         "desert"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:desert: `:desert:`
') }}
{{ markdown(title="🏝️ desert island" type="markdown", code='

<!--
# 🏝️ desert island
#
# {
#     "emoji": "\ud83c\udfdd\ufe0f",
#     "description": "desert island",
#     "category": "Travel & Places",
#     "aliases": [
#         "desert_island"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:desert_island: `:desert_island:`
') }}
{{ markdown(title="🏞️ national park" type="markdown", code='

<!--
# 🏞️ national park
#
# {
#     "emoji": "\ud83c\udfde\ufe0f",
#     "description": "national park",
#     "category": "Travel & Places",
#     "aliases": [
#         "national_park"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:national_park: `:national_park:`
') }}
{{ markdown(title="🏟️ stadium" type="markdown", code='

<!--
# 🏟️ stadium
#
# {
#     "emoji": "\ud83c\udfdf\ufe0f",
#     "description": "stadium",
#     "category": "Travel & Places",
#     "aliases": [
#         "stadium"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:stadium: `:stadium:`
') }}
{{ markdown(title="🏛️ classical building" type="markdown", code='

<!--
# 🏛️ classical building
#
# {
#     "emoji": "\ud83c\udfdb\ufe0f",
#     "description": "classical building",
#     "category": "Travel & Places",
#     "aliases": [
#         "classical_building"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:classical_building: `:classical_building:`
') }}
{{ markdown(title="🏗️ building construction" type="markdown", code='

<!--
# 🏗️ building construction
#
# {
#     "emoji": "\ud83c\udfd7\ufe0f",
#     "description": "building construction",
#     "category": "Travel & Places",
#     "aliases": [
#         "building_construction"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:building_construction: `:building_construction:`
') }}
{{ markdown(title="🧱 brick" type="markdown", code='

<!--
# 🧱 brick
#
# {
#     "emoji": "\ud83e\uddf1",
#     "description": "brick",
#     "category": "Travel & Places",
#     "aliases": [
#         "bricks"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:bricks: `:bricks:`
') }}
{{ markdown(title="🪨 rock" type="markdown", code='

<!--
# 🪨 rock
#
# {
#     "emoji": "\ud83e\udea8",
#     "description": "rock",
#     "category": "Travel & Places",
#     "aliases": [
#         "rock"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:rock: `:rock:`
') }}
{{ markdown(title="🪵 wood" type="markdown", code='

<!--
# 🪵 wood
#
# {
#     "emoji": "\ud83e\udeb5",
#     "description": "wood",
#     "category": "Travel & Places",
#     "aliases": [
#         "wood"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:wood: `:wood:`
') }}
{{ markdown(title="🛖 hut" type="markdown", code='

<!--
# 🛖 hut
#
# {
#     "emoji": "\ud83d\uded6",
#     "description": "hut",
#     "category": "Travel & Places",
#     "aliases": [
#         "hut"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:hut: `:hut:`
') }}
{{ markdown(title="🏘️ houses" type="markdown", code='

<!--
# 🏘️ houses
#
# {
#     "emoji": "\ud83c\udfd8\ufe0f",
#     "description": "houses",
#     "category": "Travel & Places",
#     "aliases": [
#         "houses"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:houses: `:houses:`
') }}
{{ markdown(title="🏚️ derelict house" type="markdown", code='

<!--
# 🏚️ derelict house
#
# {
#     "emoji": "\ud83c\udfda\ufe0f",
#     "description": "derelict house",
#     "category": "Travel & Places",
#     "aliases": [
#         "derelict_house"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:derelict_house: `:derelict_house:`
') }}
{{ markdown(title="🏠 house" type="markdown", code='

<!--
# 🏠 house
#
# {
#     "emoji": "\ud83c\udfe0",
#     "description": "house",
#     "category": "Travel & Places",
#     "aliases": [
#         "house"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:house: `:house:`
') }}
{{ markdown(title="🏡 house with garden" type="markdown", code='

<!--
# 🏡 house with garden
#
# {
#     "emoji": "\ud83c\udfe1",
#     "description": "house with garden",
#     "category": "Travel & Places",
#     "aliases": [
#         "house_with_garden"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:house_with_garden: `:house_with_garden:`
') }}
{{ markdown(title="🏢 office building" type="markdown", code='

<!--
# 🏢 office building
#
# {
#     "emoji": "\ud83c\udfe2",
#     "description": "office building",
#     "category": "Travel & Places",
#     "aliases": [
#         "office"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:office: `:office:`
') }}
{{ markdown(title="🏣 Japanese post office" type="markdown", code='

<!--
# 🏣 Japanese post office
#
# {
#     "emoji": "\ud83c\udfe3",
#     "description": "Japanese post office",
#     "category": "Travel & Places",
#     "aliases": [
#         "post_office"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:post_office: `:post_office:`
') }}
{{ markdown(title="🏤 post office" type="markdown", code='

<!--
# 🏤 post office
#
# {
#     "emoji": "\ud83c\udfe4",
#     "description": "post office",
#     "category": "Travel & Places",
#     "aliases": [
#         "european_post_office"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:european_post_office: `:european_post_office:`
') }}
{{ markdown(title="🏥 hospital" type="markdown", code='

<!--
# 🏥 hospital
#
# {
#     "emoji": "\ud83c\udfe5",
#     "description": "hospital",
#     "category": "Travel & Places",
#     "aliases": [
#         "hospital"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:hospital: `:hospital:`
') }}
{{ markdown(title="🏦 bank" type="markdown", code='

<!--
# 🏦 bank
#
# {
#     "emoji": "\ud83c\udfe6",
#     "description": "bank",
#     "category": "Travel & Places",
#     "aliases": [
#         "bank"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:bank: `:bank:`
') }}
{{ markdown(title="🏨 hotel" type="markdown", code='

<!--
# 🏨 hotel
#
# {
#     "emoji": "\ud83c\udfe8",
#     "description": "hotel",
#     "category": "Travel & Places",
#     "aliases": [
#         "hotel"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:hotel: `:hotel:`
') }}
{{ markdown(title="🏩 love hotel" type="markdown", code='

<!--
# 🏩 love hotel
#
# {
#     "emoji": "\ud83c\udfe9",
#     "description": "love hotel",
#     "category": "Travel & Places",
#     "aliases": [
#         "love_hotel"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:love_hotel: `:love_hotel:`
') }}
{{ markdown(title="🏪 convenience store" type="markdown", code='

<!--
# 🏪 convenience store
#
# {
#     "emoji": "\ud83c\udfea",
#     "description": "convenience store",
#     "category": "Travel & Places",
#     "aliases": [
#         "convenience_store"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:convenience_store: `:convenience_store:`
') }}
{{ markdown(title="🏫 school" type="markdown", code='

<!--
# 🏫 school
#
# {
#     "emoji": "\ud83c\udfeb",
#     "description": "school",
#     "category": "Travel & Places",
#     "aliases": [
#         "school"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:school: `:school:`
') }}
{{ markdown(title="🏬 department store" type="markdown", code='

<!--
# 🏬 department store
#
# {
#     "emoji": "\ud83c\udfec",
#     "description": "department store",
#     "category": "Travel & Places",
#     "aliases": [
#         "department_store"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:department_store: `:department_store:`
') }}
{{ markdown(title="🏭 factory" type="markdown", code='

<!--
# 🏭 factory
#
# {
#     "emoji": "\ud83c\udfed",
#     "description": "factory",
#     "category": "Travel & Places",
#     "aliases": [
#         "factory"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:factory: `:factory:`
') }}
{{ markdown(title="🏯 Japanese castle" type="markdown", code='

<!--
# 🏯 Japanese castle
#
# {
#     "emoji": "\ud83c\udfef",
#     "description": "Japanese castle",
#     "category": "Travel & Places",
#     "aliases": [
#         "japanese_castle"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:japanese_castle: `:japanese_castle:`
') }}
{{ markdown(title="🏰 castle" type="markdown", code='

<!--
# 🏰 castle
#
# {
#     "emoji": "\ud83c\udff0",
#     "description": "castle",
#     "category": "Travel & Places",
#     "aliases": [
#         "european_castle"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:european_castle: `:european_castle:`
') }}
{{ markdown(title="💒 wedding" type="markdown", code='

<!--
# 💒 wedding
#
# {
#     "emoji": "\ud83d\udc92",
#     "description": "wedding",
#     "category": "Travel & Places",
#     "aliases": [
#         "wedding"
#     ],
#     "tags": [
#         "marriage"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:wedding: `:wedding:`
') }}
{{ markdown(title="🗼 Tokyo tower" type="markdown", code='

<!--
# 🗼 Tokyo tower
#
# {
#     "emoji": "\ud83d\uddfc",
#     "description": "Tokyo tower",
#     "category": "Travel & Places",
#     "aliases": [
#         "tokyo_tower"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:tokyo_tower: `:tokyo_tower:`
') }}
{{ markdown(title="🗽 Statue of Liberty" type="markdown", code='

<!--
# 🗽 Statue of Liberty
#
# {
#     "emoji": "\ud83d\uddfd",
#     "description": "Statue of Liberty",
#     "category": "Travel & Places",
#     "aliases": [
#         "statue_of_liberty"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:statue_of_liberty: `:statue_of_liberty:`
') }}
{{ markdown(title="⛪ church" type="markdown", code='

<!--
# ⛪ church
#
# {
#     "emoji": "\u26ea",
#     "description": "church",
#     "category": "Travel & Places",
#     "aliases": [
#         "church"
#     ],
#     "tags": [],
#     "unicode_version": "5.2",
#     "ios_version": "6.0"
# }
-->

:church: `:church:`
') }}
{{ markdown(title="🕌 mosque" type="markdown", code='

<!--
# 🕌 mosque
#
# {
#     "emoji": "\ud83d\udd4c",
#     "description": "mosque",
#     "category": "Travel & Places",
#     "aliases": [
#         "mosque"
#     ],
#     "tags": [],
#     "unicode_version": "8.0",
#     "ios_version": "9.1"
# }
-->

:mosque: `:mosque:`
') }}
{{ markdown(title="🛕 hindu temple" type="markdown", code='

<!--
# 🛕 hindu temple
#
# {
#     "emoji": "\ud83d\uded5",
#     "description": "hindu temple",
#     "category": "Travel & Places",
#     "aliases": [
#         "hindu_temple"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:hindu_temple: `:hindu_temple:`
') }}
{{ markdown(title="🕍 synagogue" type="markdown", code='

<!--
# 🕍 synagogue
#
# {
#     "emoji": "\ud83d\udd4d",
#     "description": "synagogue",
#     "category": "Travel & Places",
#     "aliases": [
#         "synagogue"
#     ],
#     "tags": [],
#     "unicode_version": "8.0",
#     "ios_version": "9.1"
# }
-->

:synagogue: `:synagogue:`
') }}
{{ markdown(title="⛩️ shinto shrine" type="markdown", code='

<!--
# ⛩️ shinto shrine
#
# {
#     "emoji": "\u26e9\ufe0f",
#     "description": "shinto shrine",
#     "category": "Travel & Places",
#     "aliases": [
#         "shinto_shrine"
#     ],
#     "tags": [],
#     "unicode_version": "5.2",
#     "ios_version": "9.1"
# }
-->

:shinto_shrine: `:shinto_shrine:`
') }}
{{ markdown(title="🕋 kaaba" type="markdown", code='

<!--
# 🕋 kaaba
#
# {
#     "emoji": "\ud83d\udd4b",
#     "description": "kaaba",
#     "category": "Travel & Places",
#     "aliases": [
#         "kaaba"
#     ],
#     "tags": [],
#     "unicode_version": "8.0",
#     "ios_version": "9.1"
# }
-->

:kaaba: `:kaaba:`
') }}
{{ markdown(title="⛲ fountain" type="markdown", code='

<!--
# ⛲ fountain
#
# {
#     "emoji": "\u26f2",
#     "description": "fountain",
#     "category": "Travel & Places",
#     "aliases": [
#         "fountain"
#     ],
#     "tags": [],
#     "unicode_version": "5.2",
#     "ios_version": "6.0"
# }
-->

:fountain: `:fountain:`
') }}
{{ markdown(title="⛺ tent" type="markdown", code='

<!--
# ⛺ tent
#
# {
#     "emoji": "\u26fa",
#     "description": "tent",
#     "category": "Travel & Places",
#     "aliases": [
#         "tent"
#     ],
#     "tags": [
#         "camping"
#     ],
#     "unicode_version": "5.2",
#     "ios_version": "6.0"
# }
-->

:tent: `:tent:`
') }}
{{ markdown(title="🌁 foggy" type="markdown", code='

<!--
# 🌁 foggy
#
# {
#     "emoji": "\ud83c\udf01",
#     "description": "foggy",
#     "category": "Travel & Places",
#     "aliases": [
#         "foggy"
#     ],
#     "tags": [
#         "karl"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:foggy: `:foggy:`
') }}
{{ markdown(title="🌃 night with stars" type="markdown", code='

<!--
# 🌃 night with stars
#
# {
#     "emoji": "\ud83c\udf03",
#     "description": "night with stars",
#     "category": "Travel & Places",
#     "aliases": [
#         "night_with_stars"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:night_with_stars: `:night_with_stars:`
') }}
{{ markdown(title="🏙️ cityscape" type="markdown", code='

<!--
# 🏙️ cityscape
#
# {
#     "emoji": "\ud83c\udfd9\ufe0f",
#     "description": "cityscape",
#     "category": "Travel & Places",
#     "aliases": [
#         "cityscape"
#     ],
#     "tags": [
#         "skyline"
#     ],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:cityscape: `:cityscape:`
') }}
{{ markdown(title="🌄 sunrise over mountains" type="markdown", code='

<!--
# 🌄 sunrise over mountains
#
# {
#     "emoji": "\ud83c\udf04",
#     "description": "sunrise over mountains",
#     "category": "Travel & Places",
#     "aliases": [
#         "sunrise_over_mountains"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:sunrise_over_mountains: `:sunrise_over_mountains:`
') }}
{{ markdown(title="🌅 sunrise" type="markdown", code='

<!--
# 🌅 sunrise
#
# {
#     "emoji": "\ud83c\udf05",
#     "description": "sunrise",
#     "category": "Travel & Places",
#     "aliases": [
#         "sunrise"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:sunrise: `:sunrise:`
') }}
{{ markdown(title="🌆 cityscape at dusk" type="markdown", code='

<!--
# 🌆 cityscape at dusk
#
# {
#     "emoji": "\ud83c\udf06",
#     "description": "cityscape at dusk",
#     "category": "Travel & Places",
#     "aliases": [
#         "city_sunset"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:city_sunset: `:city_sunset:`
') }}
{{ markdown(title="🌇 sunset" type="markdown", code='

<!--
# 🌇 sunset
#
# {
#     "emoji": "\ud83c\udf07",
#     "description": "sunset",
#     "category": "Travel & Places",
#     "aliases": [
#         "city_sunrise"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:city_sunrise: `:city_sunrise:`
') }}
{{ markdown(title="🌉 bridge at night" type="markdown", code='

<!--
# 🌉 bridge at night
#
# {
#     "emoji": "\ud83c\udf09",
#     "description": "bridge at night",
#     "category": "Travel & Places",
#     "aliases": [
#         "bridge_at_night"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:bridge_at_night: `:bridge_at_night:`
') }}
{{ markdown(title="♨️ hot springs" type="markdown", code='

<!--
# ♨️ hot springs
#
# {
#     "emoji": "\u2668\ufe0f",
#     "description": "hot springs",
#     "category": "Travel & Places",
#     "aliases": [
#         "hotsprings"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:hotsprings: `:hotsprings:`
') }}
{{ markdown(title="🎠 carousel horse" type="markdown", code='

<!--
# 🎠 carousel horse
#
# {
#     "emoji": "\ud83c\udfa0",
#     "description": "carousel horse",
#     "category": "Travel & Places",
#     "aliases": [
#         "carousel_horse"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:carousel_horse: `:carousel_horse:`
') }}
{{ markdown(title="🛝 playground slide" type="markdown", code='

<!--
# 🛝 playground slide
#
# {
#     "emoji": "\ud83d\udedd",
#     "description": "playground slide",
#     "category": "Travel & Places",
#     "aliases": [
#         "playground_slide"
#     ],
#     "tags": [],
#     "unicode_version": "14.0",
#     "ios_version": "15.4"
# }
-->

:playground_slide: `:playground_slide:`
') }}
{{ markdown(title="🎡 ferris wheel" type="markdown", code='

<!--
# 🎡 ferris wheel
#
# {
#     "emoji": "\ud83c\udfa1",
#     "description": "ferris wheel",
#     "category": "Travel & Places",
#     "aliases": [
#         "ferris_wheel"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:ferris_wheel: `:ferris_wheel:`
') }}
{{ markdown(title="🎢 roller coaster" type="markdown", code='

<!--
# 🎢 roller coaster
#
# {
#     "emoji": "\ud83c\udfa2",
#     "description": "roller coaster",
#     "category": "Travel & Places",
#     "aliases": [
#         "roller_coaster"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:roller_coaster: `:roller_coaster:`
') }}
{{ markdown(title="💈 barber pole" type="markdown", code='

<!--
# 💈 barber pole
#
# {
#     "emoji": "\ud83d\udc88",
#     "description": "barber pole",
#     "category": "Travel & Places",
#     "aliases": [
#         "barber"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:barber: `:barber:`
') }}
{{ markdown(title="🎪 circus tent" type="markdown", code='

<!--
# 🎪 circus tent
#
# {
#     "emoji": "\ud83c\udfaa",
#     "description": "circus tent",
#     "category": "Travel & Places",
#     "aliases": [
#         "circus_tent"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:circus_tent: `:circus_tent:`
') }}
{{ markdown(title="🚂 locomotive" type="markdown", code='

<!--
# 🚂 locomotive
#
# {
#     "emoji": "\ud83d\ude82",
#     "description": "locomotive",
#     "category": "Travel & Places",
#     "aliases": [
#         "steam_locomotive"
#     ],
#     "tags": [
#         "train"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:steam_locomotive: `:steam_locomotive:`
') }}
{{ markdown(title="🚃 railway car" type="markdown", code='

<!--
# 🚃 railway car
#
# {
#     "emoji": "\ud83d\ude83",
#     "description": "railway car",
#     "category": "Travel & Places",
#     "aliases": [
#         "railway_car"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:railway_car: `:railway_car:`
') }}
{{ markdown(title="🚄 high-speed train" type="markdown", code='

<!--
# 🚄 high-speed train
#
# {
#     "emoji": "\ud83d\ude84",
#     "description": "high-speed train",
#     "category": "Travel & Places",
#     "aliases": [
#         "bullettrain_side"
#     ],
#     "tags": [
#         "train"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:bullettrain_side: `:bullettrain_side:`
') }}
{{ markdown(title="🚅 bullet train" type="markdown", code='

<!--
# 🚅 bullet train
#
# {
#     "emoji": "\ud83d\ude85",
#     "description": "bullet train",
#     "category": "Travel & Places",
#     "aliases": [
#         "bullettrain_front"
#     ],
#     "tags": [
#         "train"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:bullettrain_front: `:bullettrain_front:`
') }}
{{ markdown(title="🚆 train" type="markdown", code='

<!--
# 🚆 train
#
# {
#     "emoji": "\ud83d\ude86",
#     "description": "train",
#     "category": "Travel & Places",
#     "aliases": [
#         "train2"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:train2: `:train2:`
') }}
{{ markdown(title="🚇 metro" type="markdown", code='

<!--
# 🚇 metro
#
# {
#     "emoji": "\ud83d\ude87",
#     "description": "metro",
#     "category": "Travel & Places",
#     "aliases": [
#         "metro"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:metro: `:metro:`
') }}
{{ markdown(title="🚈 light rail" type="markdown", code='

<!--
# 🚈 light rail
#
# {
#     "emoji": "\ud83d\ude88",
#     "description": "light rail",
#     "category": "Travel & Places",
#     "aliases": [
#         "light_rail"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:light_rail: `:light_rail:`
') }}
{{ markdown(title="🚉 station" type="markdown", code='

<!--
# 🚉 station
#
# {
#     "emoji": "\ud83d\ude89",
#     "description": "station",
#     "category": "Travel & Places",
#     "aliases": [
#         "station"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:station: `:station:`
') }}
{{ markdown(title="🚊 tram" type="markdown", code='

<!--
# 🚊 tram
#
# {
#     "emoji": "\ud83d\ude8a",
#     "description": "tram",
#     "category": "Travel & Places",
#     "aliases": [
#         "tram"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:tram: `:tram:`
') }}
{{ markdown(title="🚝 monorail" type="markdown", code='

<!--
# 🚝 monorail
#
# {
#     "emoji": "\ud83d\ude9d",
#     "description": "monorail",
#     "category": "Travel & Places",
#     "aliases": [
#         "monorail"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:monorail: `:monorail:`
') }}
{{ markdown(title="🚞 mountain railway" type="markdown", code='

<!--
# 🚞 mountain railway
#
# {
#     "emoji": "\ud83d\ude9e",
#     "description": "mountain railway",
#     "category": "Travel & Places",
#     "aliases": [
#         "mountain_railway"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:mountain_railway: `:mountain_railway:`
') }}
{{ markdown(title="🚋 tram car" type="markdown", code='

<!--
# 🚋 tram car
#
# {
#     "emoji": "\ud83d\ude8b",
#     "description": "tram car",
#     "category": "Travel & Places",
#     "aliases": [
#         "train"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:train: `:train:`
') }}
{{ markdown(title="🚌 bus" type="markdown", code='

<!--
# 🚌 bus
#
# {
#     "emoji": "\ud83d\ude8c",
#     "description": "bus",
#     "category": "Travel & Places",
#     "aliases": [
#         "bus"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:bus: `:bus:`
') }}
{{ markdown(title="🚍 oncoming bus" type="markdown", code='

<!--
# 🚍 oncoming bus
#
# {
#     "emoji": "\ud83d\ude8d",
#     "description": "oncoming bus",
#     "category": "Travel & Places",
#     "aliases": [
#         "oncoming_bus"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:oncoming_bus: `:oncoming_bus:`
') }}
{{ markdown(title="🚎 trolleybus" type="markdown", code='

<!--
# 🚎 trolleybus
#
# {
#     "emoji": "\ud83d\ude8e",
#     "description": "trolleybus",
#     "category": "Travel & Places",
#     "aliases": [
#         "trolleybus"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:trolleybus: `:trolleybus:`
') }}
{{ markdown(title="🚐 minibus" type="markdown", code='

<!--
# 🚐 minibus
#
# {
#     "emoji": "\ud83d\ude90",
#     "description": "minibus",
#     "category": "Travel & Places",
#     "aliases": [
#         "minibus"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:minibus: `:minibus:`
') }}
{{ markdown(title="🚑 ambulance" type="markdown", code='

<!--
# 🚑 ambulance
#
# {
#     "emoji": "\ud83d\ude91",
#     "description": "ambulance",
#     "category": "Travel & Places",
#     "aliases": [
#         "ambulance"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:ambulance: `:ambulance:`
') }}
{{ markdown(title="🚒 fire engine" type="markdown", code='

<!--
# 🚒 fire engine
#
# {
#     "emoji": "\ud83d\ude92",
#     "description": "fire engine",
#     "category": "Travel & Places",
#     "aliases": [
#         "fire_engine"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:fire_engine: `:fire_engine:`
') }}
{{ markdown(title="🚓 police car" type="markdown", code='

<!--
# 🚓 police car
#
# {
#     "emoji": "\ud83d\ude93",
#     "description": "police car",
#     "category": "Travel & Places",
#     "aliases": [
#         "police_car"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:police_car: `:police_car:`
') }}
{{ markdown(title="🚔 oncoming police car" type="markdown", code='

<!--
# 🚔 oncoming police car
#
# {
#     "emoji": "\ud83d\ude94",
#     "description": "oncoming police car",
#     "category": "Travel & Places",
#     "aliases": [
#         "oncoming_police_car"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:oncoming_police_car: `:oncoming_police_car:`
') }}
{{ markdown(title="🚕 taxi" type="markdown", code='

<!--
# 🚕 taxi
#
# {
#     "emoji": "\ud83d\ude95",
#     "description": "taxi",
#     "category": "Travel & Places",
#     "aliases": [
#         "taxi"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:taxi: `:taxi:`
') }}
{{ markdown(title="🚖 oncoming taxi" type="markdown", code='

<!--
# 🚖 oncoming taxi
#
# {
#     "emoji": "\ud83d\ude96",
#     "description": "oncoming taxi",
#     "category": "Travel & Places",
#     "aliases": [
#         "oncoming_taxi"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:oncoming_taxi: `:oncoming_taxi:`
') }}
{{ markdown(title="🚗 automobile" type="markdown", code='

<!--
# 🚗 automobile
#
# {
#     "emoji": "\ud83d\ude97",
#     "description": "automobile",
#     "category": "Travel & Places",
#     "aliases": [
#         "car",
#         "red_car"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:car: `:car:`

:red_car: `:red_car:`
') }}
{{ markdown(title="🚘 oncoming automobile" type="markdown", code='

<!--
# 🚘 oncoming automobile
#
# {
#     "emoji": "\ud83d\ude98",
#     "description": "oncoming automobile",
#     "category": "Travel & Places",
#     "aliases": [
#         "oncoming_automobile"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:oncoming_automobile: `:oncoming_automobile:`
') }}
{{ markdown(title="🚙 sport utility vehicle" type="markdown", code='

<!--
# 🚙 sport utility vehicle
#
# {
#     "emoji": "\ud83d\ude99",
#     "description": "sport utility vehicle",
#     "category": "Travel & Places",
#     "aliases": [
#         "blue_car"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:blue_car: `:blue_car:`
') }}
{{ markdown(title="🛻 pickup truck" type="markdown", code='

<!--
# 🛻 pickup truck
#
# {
#     "emoji": "\ud83d\udefb",
#     "description": "pickup truck",
#     "category": "Travel & Places",
#     "aliases": [
#         "pickup_truck"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:pickup_truck: `:pickup_truck:`
') }}
{{ markdown(title="🚚 delivery truck" type="markdown", code='

<!--
# 🚚 delivery truck
#
# {
#     "emoji": "\ud83d\ude9a",
#     "description": "delivery truck",
#     "category": "Travel & Places",
#     "aliases": [
#         "truck"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:truck: `:truck:`
') }}
{{ markdown(title="🚛 articulated lorry" type="markdown", code='

<!--
# 🚛 articulated lorry
#
# {
#     "emoji": "\ud83d\ude9b",
#     "description": "articulated lorry",
#     "category": "Travel & Places",
#     "aliases": [
#         "articulated_lorry"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:articulated_lorry: `:articulated_lorry:`
') }}
{{ markdown(title="🚜 tractor" type="markdown", code='

<!--
# 🚜 tractor
#
# {
#     "emoji": "\ud83d\ude9c",
#     "description": "tractor",
#     "category": "Travel & Places",
#     "aliases": [
#         "tractor"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:tractor: `:tractor:`
') }}
{{ markdown(title="🏎️ racing car" type="markdown", code='

<!--
# 🏎️ racing car
#
# {
#     "emoji": "\ud83c\udfce\ufe0f",
#     "description": "racing car",
#     "category": "Travel & Places",
#     "aliases": [
#         "racing_car"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:racing_car: `:racing_car:`
') }}
{{ markdown(title="🏍️ motorcycle" type="markdown", code='

<!--
# 🏍️ motorcycle
#
# {
#     "emoji": "\ud83c\udfcd\ufe0f",
#     "description": "motorcycle",
#     "category": "Travel & Places",
#     "aliases": [
#         "motorcycle"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:motorcycle: `:motorcycle:`
') }}
{{ markdown(title="🛵 motor scooter" type="markdown", code='

<!--
# 🛵 motor scooter
#
# {
#     "emoji": "\ud83d\udef5",
#     "description": "motor scooter",
#     "category": "Travel & Places",
#     "aliases": [
#         "motor_scooter"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:motor_scooter: `:motor_scooter:`
') }}
{{ markdown(title="🦽 manual wheelchair" type="markdown", code='

<!--
# 🦽 manual wheelchair
#
# {
#     "emoji": "\ud83e\uddbd",
#     "description": "manual wheelchair",
#     "category": "Travel & Places",
#     "aliases": [
#         "manual_wheelchair"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:manual_wheelchair: `:manual_wheelchair:`
') }}
{{ markdown(title="🦼 motorized wheelchair" type="markdown", code='

<!--
# 🦼 motorized wheelchair
#
# {
#     "emoji": "\ud83e\uddbc",
#     "description": "motorized wheelchair",
#     "category": "Travel & Places",
#     "aliases": [
#         "motorized_wheelchair"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:motorized_wheelchair: `:motorized_wheelchair:`
') }}
{{ markdown(title="🛺 auto rickshaw" type="markdown", code='

<!--
# 🛺 auto rickshaw
#
# {
#     "emoji": "\ud83d\udefa",
#     "description": "auto rickshaw",
#     "category": "Travel & Places",
#     "aliases": [
#         "auto_rickshaw"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:auto_rickshaw: `:auto_rickshaw:`
') }}
{{ markdown(title="🚲 bicycle" type="markdown", code='

<!--
# 🚲 bicycle
#
# {
#     "emoji": "\ud83d\udeb2",
#     "description": "bicycle",
#     "category": "Travel & Places",
#     "aliases": [
#         "bike"
#     ],
#     "tags": [
#         "bicycle"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:bike: `:bike:`
') }}
{{ markdown(title="🛴 kick scooter" type="markdown", code='

<!--
# 🛴 kick scooter
#
# {
#     "emoji": "\ud83d\udef4",
#     "description": "kick scooter",
#     "category": "Travel & Places",
#     "aliases": [
#         "kick_scooter"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:kick_scooter: `:kick_scooter:`
') }}
{{ markdown(title="🛹 skateboard" type="markdown", code='

<!--
# 🛹 skateboard
#
# {
#     "emoji": "\ud83d\udef9",
#     "description": "skateboard",
#     "category": "Travel & Places",
#     "aliases": [
#         "skateboard"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:skateboard: `:skateboard:`
') }}
{{ markdown(title="🛼 roller skate" type="markdown", code='

<!--
# 🛼 roller skate
#
# {
#     "emoji": "\ud83d\udefc",
#     "description": "roller skate",
#     "category": "Travel & Places",
#     "aliases": [
#         "roller_skate"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:roller_skate: `:roller_skate:`
') }}
{{ markdown(title="🚏 bus stop" type="markdown", code='

<!--
# 🚏 bus stop
#
# {
#     "emoji": "\ud83d\ude8f",
#     "description": "bus stop",
#     "category": "Travel & Places",
#     "aliases": [
#         "busstop"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:busstop: `:busstop:`
') }}
{{ markdown(title="🛣️ motorway" type="markdown", code='

<!--
# 🛣️ motorway
#
# {
#     "emoji": "\ud83d\udee3\ufe0f",
#     "description": "motorway",
#     "category": "Travel & Places",
#     "aliases": [
#         "motorway"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:motorway: `:motorway:`
') }}
{{ markdown(title="🛤️ railway track" type="markdown", code='

<!--
# 🛤️ railway track
#
# {
#     "emoji": "\ud83d\udee4\ufe0f",
#     "description": "railway track",
#     "category": "Travel & Places",
#     "aliases": [
#         "railway_track"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:railway_track: `:railway_track:`
') }}
{{ markdown(title="🛢️ oil drum" type="markdown", code='

<!--
# 🛢️ oil drum
#
# {
#     "emoji": "\ud83d\udee2\ufe0f",
#     "description": "oil drum",
#     "category": "Travel & Places",
#     "aliases": [
#         "oil_drum"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:oil_drum: `:oil_drum:`
') }}
{{ markdown(title="⛽ fuel pump" type="markdown", code='

<!--
# ⛽ fuel pump
#
# {
#     "emoji": "\u26fd",
#     "description": "fuel pump",
#     "category": "Travel & Places",
#     "aliases": [
#         "fuelpump"
#     ],
#     "tags": [],
#     "unicode_version": "5.2",
#     "ios_version": "6.0"
# }
-->

:fuelpump: `:fuelpump:`
') }}
{{ markdown(title="🛞 wheel" type="markdown", code='

<!--
# 🛞 wheel
#
# {
#     "emoji": "\ud83d\udede",
#     "description": "wheel",
#     "category": "Travel & Places",
#     "aliases": [
#         "wheel"
#     ],
#     "tags": [],
#     "unicode_version": "14.0",
#     "ios_version": "15.4"
# }
-->

:wheel: `:wheel:`
') }}
{{ markdown(title="🚨 police car light" type="markdown", code='

<!--
# 🚨 police car light
#
# {
#     "emoji": "\ud83d\udea8",
#     "description": "police car light",
#     "category": "Travel & Places",
#     "aliases": [
#         "rotating_light"
#     ],
#     "tags": [
#         "911",
#         "emergency"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:rotating_light: `:rotating_light:`
') }}
{{ markdown(title="🚥 horizontal traffic light" type="markdown", code='

<!--
# 🚥 horizontal traffic light
#
# {
#     "emoji": "\ud83d\udea5",
#     "description": "horizontal traffic light",
#     "category": "Travel & Places",
#     "aliases": [
#         "traffic_light"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:traffic_light: `:traffic_light:`
') }}
{{ markdown(title="🚦 vertical traffic light" type="markdown", code='

<!--
# 🚦 vertical traffic light
#
# {
#     "emoji": "\ud83d\udea6",
#     "description": "vertical traffic light",
#     "category": "Travel & Places",
#     "aliases": [
#         "vertical_traffic_light"
#     ],
#     "tags": [
#         "semaphore"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:vertical_traffic_light: `:vertical_traffic_light:`
') }}
{{ markdown(title="🛑 stop sign" type="markdown", code='

<!--
# 🛑 stop sign
#
# {
#     "emoji": "\ud83d\uded1",
#     "description": "stop sign",
#     "category": "Travel & Places",
#     "aliases": [
#         "stop_sign"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:stop_sign: `:stop_sign:`
') }}
{{ markdown(title="🚧 construction" type="markdown", code='

<!--
# 🚧 construction
#
# {
#     "emoji": "\ud83d\udea7",
#     "description": "construction",
#     "category": "Travel & Places",
#     "aliases": [
#         "construction"
#     ],
#     "tags": [
#         "wip"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:construction: `:construction:`
') }}
{{ markdown(title="⚓ anchor" type="markdown", code='

<!--
# ⚓ anchor
#
# {
#     "emoji": "\u2693",
#     "description": "anchor",
#     "category": "Travel & Places",
#     "aliases": [
#         "anchor"
#     ],
#     "tags": [
#         "ship"
#     ],
#     "unicode_version": "4.1",
#     "ios_version": "6.0"
# }
-->

:anchor: `:anchor:`
') }}
{{ markdown(title="🛟 ring buoy" type="markdown", code='

<!--
# 🛟 ring buoy
#
# {
#     "emoji": "\ud83d\udedf",
#     "description": "ring buoy",
#     "category": "Travel & Places",
#     "aliases": [
#         "ring_buoy"
#     ],
#     "tags": [
#         "life preserver"
#     ],
#     "unicode_version": "14.0",
#     "ios_version": "15.4"
# }
-->

:ring_buoy: `:ring_buoy:`
') }}
{{ markdown(title="⛵ sailboat" type="markdown", code='

<!--
# ⛵ sailboat
#
# {
#     "emoji": "\u26f5",
#     "description": "sailboat",
#     "category": "Travel & Places",
#     "aliases": [
#         "boat",
#         "sailboat"
#     ],
#     "tags": [],
#     "unicode_version": "5.2",
#     "ios_version": "6.0"
# }
-->

:boat: `:boat:`

:sailboat: `:sailboat:`
') }}
{{ markdown(title="🛶 canoe" type="markdown", code='

<!--
# 🛶 canoe
#
# {
#     "emoji": "\ud83d\udef6",
#     "description": "canoe",
#     "category": "Travel & Places",
#     "aliases": [
#         "canoe"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:canoe: `:canoe:`
') }}
{{ markdown(title="🚤 speedboat" type="markdown", code='

<!--
# 🚤 speedboat
#
# {
#     "emoji": "\ud83d\udea4",
#     "description": "speedboat",
#     "category": "Travel & Places",
#     "aliases": [
#         "speedboat"
#     ],
#     "tags": [
#         "ship"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:speedboat: `:speedboat:`
') }}
{{ markdown(title="🛳️ passenger ship" type="markdown", code='

<!--
# 🛳️ passenger ship
#
# {
#     "emoji": "\ud83d\udef3\ufe0f",
#     "description": "passenger ship",
#     "category": "Travel & Places",
#     "aliases": [
#         "passenger_ship"
#     ],
#     "tags": [
#         "cruise"
#     ],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:passenger_ship: `:passenger_ship:`
') }}
{{ markdown(title="⛴️ ferry" type="markdown", code='

<!--
# ⛴️ ferry
#
# {
#     "emoji": "\u26f4\ufe0f",
#     "description": "ferry",
#     "category": "Travel & Places",
#     "aliases": [
#         "ferry"
#     ],
#     "tags": [],
#     "unicode_version": "5.2",
#     "ios_version": "9.1"
# }
-->

:ferry: `:ferry:`
') }}
{{ markdown(title="🛥️ motor boat" type="markdown", code='

<!--
# 🛥️ motor boat
#
# {
#     "emoji": "\ud83d\udee5\ufe0f",
#     "description": "motor boat",
#     "category": "Travel & Places",
#     "aliases": [
#         "motor_boat"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:motor_boat: `:motor_boat:`
') }}
{{ markdown(title="🚢 ship" type="markdown", code='

<!--
# 🚢 ship
#
# {
#     "emoji": "\ud83d\udea2",
#     "description": "ship",
#     "category": "Travel & Places",
#     "aliases": [
#         "ship"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:ship: `:ship:`
') }}
{{ markdown(title="✈️ airplane" type="markdown", code='

<!--
# ✈️ airplane
#
# {
#     "emoji": "\u2708\ufe0f",
#     "description": "airplane",
#     "category": "Travel & Places",
#     "aliases": [
#         "airplane"
#     ],
#     "tags": [
#         "flight"
#     ],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:airplane: `:airplane:`
') }}
{{ markdown(title="🛩️ small airplane" type="markdown", code='

<!--
# 🛩️ small airplane
#
# {
#     "emoji": "\ud83d\udee9\ufe0f",
#     "description": "small airplane",
#     "category": "Travel & Places",
#     "aliases": [
#         "small_airplane"
#     ],
#     "tags": [
#         "flight"
#     ],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:small_airplane: `:small_airplane:`
') }}
{{ markdown(title="🛫 airplane departure" type="markdown", code='

<!--
# 🛫 airplane departure
#
# {
#     "emoji": "\ud83d\udeeb",
#     "description": "airplane departure",
#     "category": "Travel & Places",
#     "aliases": [
#         "flight_departure"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:flight_departure: `:flight_departure:`
') }}
{{ markdown(title="🛬 airplane arrival" type="markdown", code='

<!--
# 🛬 airplane arrival
#
# {
#     "emoji": "\ud83d\udeec",
#     "description": "airplane arrival",
#     "category": "Travel & Places",
#     "aliases": [
#         "flight_arrival"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:flight_arrival: `:flight_arrival:`
') }}
{{ markdown(title="🪂 parachute" type="markdown", code='

<!--
# 🪂 parachute
#
# {
#     "emoji": "\ud83e\ude82",
#     "description": "parachute",
#     "category": "Travel & Places",
#     "aliases": [
#         "parachute"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:parachute: `:parachute:`
') }}
{{ markdown(title="💺 seat" type="markdown", code='

<!--
# 💺 seat
#
# {
#     "emoji": "\ud83d\udcba",
#     "description": "seat",
#     "category": "Travel & Places",
#     "aliases": [
#         "seat"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:seat: `:seat:`
') }}
{{ markdown(title="🚁 helicopter" type="markdown", code='

<!--
# 🚁 helicopter
#
# {
#     "emoji": "\ud83d\ude81",
#     "description": "helicopter",
#     "category": "Travel & Places",
#     "aliases": [
#         "helicopter"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:helicopter: `:helicopter:`
') }}
{{ markdown(title="🚟 suspension railway" type="markdown", code='

<!--
# 🚟 suspension railway
#
# {
#     "emoji": "\ud83d\ude9f",
#     "description": "suspension railway",
#     "category": "Travel & Places",
#     "aliases": [
#         "suspension_railway"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:suspension_railway: `:suspension_railway:`
') }}
{{ markdown(title="🚠 mountain cableway" type="markdown", code='

<!--
# 🚠 mountain cableway
#
# {
#     "emoji": "\ud83d\udea0",
#     "description": "mountain cableway",
#     "category": "Travel & Places",
#     "aliases": [
#         "mountain_cableway"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:mountain_cableway: `:mountain_cableway:`
') }}
{{ markdown(title="🚡 aerial tramway" type="markdown", code='

<!--
# 🚡 aerial tramway
#
# {
#     "emoji": "\ud83d\udea1",
#     "description": "aerial tramway",
#     "category": "Travel & Places",
#     "aliases": [
#         "aerial_tramway"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:aerial_tramway: `:aerial_tramway:`
') }}
{{ markdown(title="🛰️ satellite" type="markdown", code='

<!--
# 🛰️ satellite
#
# {
#     "emoji": "\ud83d\udef0\ufe0f",
#     "description": "satellite",
#     "category": "Travel & Places",
#     "aliases": [
#         "artificial_satellite"
#     ],
#     "tags": [
#         "orbit",
#         "space"
#     ],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:artificial_satellite: `:artificial_satellite:`
') }}
{{ markdown(title="🚀 rocket" type="markdown", code='

<!--
# 🚀 rocket
#
# {
#     "emoji": "\ud83d\ude80",
#     "description": "rocket",
#     "category": "Travel & Places",
#     "aliases": [
#         "rocket"
#     ],
#     "tags": [
#         "ship",
#         "launch"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:rocket: `:rocket:`
') }}
{{ markdown(title="🛸 flying saucer" type="markdown", code='

<!--
# 🛸 flying saucer
#
# {
#     "emoji": "\ud83d\udef8",
#     "description": "flying saucer",
#     "category": "Travel & Places",
#     "aliases": [
#         "flying_saucer"
#     ],
#     "tags": [
#         "ufo"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:flying_saucer: `:flying_saucer:`
') }}
{{ markdown(title="🛎️ bellhop bell" type="markdown", code='

<!--
# 🛎️ bellhop bell
#
# {
#     "emoji": "\ud83d\udece\ufe0f",
#     "description": "bellhop bell",
#     "category": "Travel & Places",
#     "aliases": [
#         "bellhop_bell"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:bellhop_bell: `:bellhop_bell:`
') }}
{{ markdown(title="🧳 luggage" type="markdown", code='

<!--
# 🧳 luggage
#
# {
#     "emoji": "\ud83e\uddf3",
#     "description": "luggage",
#     "category": "Travel & Places",
#     "aliases": [
#         "luggage"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:luggage: `:luggage:`
') }}
{{ markdown(title="⌛ hourglass done" type="markdown", code='

<!--
# ⌛ hourglass done
#
# {
#     "emoji": "\u231b",
#     "description": "hourglass done",
#     "category": "Travel & Places",
#     "aliases": [
#         "hourglass"
#     ],
#     "tags": [
#         "time"
#     ],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:hourglass: `:hourglass:`
') }}
{{ markdown(title="⏳ hourglass not done" type="markdown", code='

<!--
# ⏳ hourglass not done
#
# {
#     "emoji": "\u23f3",
#     "description": "hourglass not done",
#     "category": "Travel & Places",
#     "aliases": [
#         "hourglass_flowing_sand"
#     ],
#     "tags": [
#         "time"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:hourglass_flowing_sand: `:hourglass_flowing_sand:`
') }}
{{ markdown(title="⌚ watch" type="markdown", code='

<!--
# ⌚ watch
#
# {
#     "emoji": "\u231a",
#     "description": "watch",
#     "category": "Travel & Places",
#     "aliases": [
#         "watch"
#     ],
#     "tags": [
#         "time"
#     ],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:watch: `:watch:`
') }}
{{ markdown(title="⏰ alarm clock" type="markdown", code='

<!--
# ⏰ alarm clock
#
# {
#     "emoji": "\u23f0",
#     "description": "alarm clock",
#     "category": "Travel & Places",
#     "aliases": [
#         "alarm_clock"
#     ],
#     "tags": [
#         "morning"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:alarm_clock: `:alarm_clock:`
') }}
{{ markdown(title="⏱️ stopwatch" type="markdown", code='

<!--
# ⏱️ stopwatch
#
# {
#     "emoji": "\u23f1\ufe0f",
#     "description": "stopwatch",
#     "category": "Travel & Places",
#     "aliases": [
#         "stopwatch"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.1"
# }
-->

:stopwatch: `:stopwatch:`
') }}
{{ markdown(title="⏲️ timer clock" type="markdown", code='

<!--
# ⏲️ timer clock
#
# {
#     "emoji": "\u23f2\ufe0f",
#     "description": "timer clock",
#     "category": "Travel & Places",
#     "aliases": [
#         "timer_clock"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.1"
# }
-->

:timer_clock: `:timer_clock:`
') }}
{{ markdown(title="🕰️ mantelpiece clock" type="markdown", code='

<!--
# 🕰️ mantelpiece clock
#
# {
#     "emoji": "\ud83d\udd70\ufe0f",
#     "description": "mantelpiece clock",
#     "category": "Travel & Places",
#     "aliases": [
#         "mantelpiece_clock"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:mantelpiece_clock: `:mantelpiece_clock:`
') }}
{{ markdown(title="🕛 twelve o’clock" type="markdown", code='

<!--
# 🕛 twelve o’clock
#
# {
#     "emoji": "\ud83d\udd5b",
#     "description": "twelve o\u2019clock",
#     "category": "Travel & Places",
#     "aliases": [
#         "clock12"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:clock12: `:clock12:`
') }}
{{ markdown(title="🕧 twelve-thirty" type="markdown", code='

<!--
# 🕧 twelve-thirty
#
# {
#     "emoji": "\ud83d\udd67",
#     "description": "twelve-thirty",
#     "category": "Travel & Places",
#     "aliases": [
#         "clock1230"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:clock1230: `:clock1230:`
') }}
{{ markdown(title="🕐 one o’clock" type="markdown", code='

<!--
# 🕐 one o’clock
#
# {
#     "emoji": "\ud83d\udd50",
#     "description": "one o\u2019clock",
#     "category": "Travel & Places",
#     "aliases": [
#         "clock1"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:clock1: `:clock1:`
') }}
{{ markdown(title="🕜 one-thirty" type="markdown", code='

<!--
# 🕜 one-thirty
#
# {
#     "emoji": "\ud83d\udd5c",
#     "description": "one-thirty",
#     "category": "Travel & Places",
#     "aliases": [
#         "clock130"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:clock130: `:clock130:`
') }}
{{ markdown(title="🕑 two o’clock" type="markdown", code='

<!--
# 🕑 two o’clock
#
# {
#     "emoji": "\ud83d\udd51",
#     "description": "two o\u2019clock",
#     "category": "Travel & Places",
#     "aliases": [
#         "clock2"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:clock2: `:clock2:`
') }}
{{ markdown(title="🕝 two-thirty" type="markdown", code='

<!--
# 🕝 two-thirty
#
# {
#     "emoji": "\ud83d\udd5d",
#     "description": "two-thirty",
#     "category": "Travel & Places",
#     "aliases": [
#         "clock230"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:clock230: `:clock230:`
') }}
{{ markdown(title="🕒 three o’clock" type="markdown", code='

<!--
# 🕒 three o’clock
#
# {
#     "emoji": "\ud83d\udd52",
#     "description": "three o\u2019clock",
#     "category": "Travel & Places",
#     "aliases": [
#         "clock3"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:clock3: `:clock3:`
') }}
{{ markdown(title="🕞 three-thirty" type="markdown", code='

<!--
# 🕞 three-thirty
#
# {
#     "emoji": "\ud83d\udd5e",
#     "description": "three-thirty",
#     "category": "Travel & Places",
#     "aliases": [
#         "clock330"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:clock330: `:clock330:`
') }}
{{ markdown(title="🕓 four o’clock" type="markdown", code='

<!--
# 🕓 four o’clock
#
# {
#     "emoji": "\ud83d\udd53",
#     "description": "four o\u2019clock",
#     "category": "Travel & Places",
#     "aliases": [
#         "clock4"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:clock4: `:clock4:`
') }}
{{ markdown(title="🕟 four-thirty" type="markdown", code='

<!--
# 🕟 four-thirty
#
# {
#     "emoji": "\ud83d\udd5f",
#     "description": "four-thirty",
#     "category": "Travel & Places",
#     "aliases": [
#         "clock430"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:clock430: `:clock430:`
') }}
{{ markdown(title="🕔 five o’clock" type="markdown", code='

<!--
# 🕔 five o’clock
#
# {
#     "emoji": "\ud83d\udd54",
#     "description": "five o\u2019clock",
#     "category": "Travel & Places",
#     "aliases": [
#         "clock5"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:clock5: `:clock5:`
') }}
{{ markdown(title="🕠 five-thirty" type="markdown", code='

<!--
# 🕠 five-thirty
#
# {
#     "emoji": "\ud83d\udd60",
#     "description": "five-thirty",
#     "category": "Travel & Places",
#     "aliases": [
#         "clock530"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:clock530: `:clock530:`
') }}
{{ markdown(title="🕕 six o’clock" type="markdown", code='

<!--
# 🕕 six o’clock
#
# {
#     "emoji": "\ud83d\udd55",
#     "description": "six o\u2019clock",
#     "category": "Travel & Places",
#     "aliases": [
#         "clock6"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:clock6: `:clock6:`
') }}
{{ markdown(title="🕡 six-thirty" type="markdown", code='

<!--
# 🕡 six-thirty
#
# {
#     "emoji": "\ud83d\udd61",
#     "description": "six-thirty",
#     "category": "Travel & Places",
#     "aliases": [
#         "clock630"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:clock630: `:clock630:`
') }}
{{ markdown(title="🕖 seven o’clock" type="markdown", code='

<!--
# 🕖 seven o’clock
#
# {
#     "emoji": "\ud83d\udd56",
#     "description": "seven o\u2019clock",
#     "category": "Travel & Places",
#     "aliases": [
#         "clock7"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:clock7: `:clock7:`
') }}
{{ markdown(title="🕢 seven-thirty" type="markdown", code='

<!--
# 🕢 seven-thirty
#
# {
#     "emoji": "\ud83d\udd62",
#     "description": "seven-thirty",
#     "category": "Travel & Places",
#     "aliases": [
#         "clock730"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:clock730: `:clock730:`
') }}
{{ markdown(title="🕗 eight o’clock" type="markdown", code='

<!--
# 🕗 eight o’clock
#
# {
#     "emoji": "\ud83d\udd57",
#     "description": "eight o\u2019clock",
#     "category": "Travel & Places",
#     "aliases": [
#         "clock8"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:clock8: `:clock8:`
') }}
{{ markdown(title="🕣 eight-thirty" type="markdown", code='

<!--
# 🕣 eight-thirty
#
# {
#     "emoji": "\ud83d\udd63",
#     "description": "eight-thirty",
#     "category": "Travel & Places",
#     "aliases": [
#         "clock830"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:clock830: `:clock830:`
') }}
{{ markdown(title="🕘 nine o’clock" type="markdown", code='

<!--
# 🕘 nine o’clock
#
# {
#     "emoji": "\ud83d\udd58",
#     "description": "nine o\u2019clock",
#     "category": "Travel & Places",
#     "aliases": [
#         "clock9"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:clock9: `:clock9:`
') }}
{{ markdown(title="🕤 nine-thirty" type="markdown", code='

<!--
# 🕤 nine-thirty
#
# {
#     "emoji": "\ud83d\udd64",
#     "description": "nine-thirty",
#     "category": "Travel & Places",
#     "aliases": [
#         "clock930"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:clock930: `:clock930:`
') }}
{{ markdown(title="🕙 ten o’clock" type="markdown", code='

<!--
# 🕙 ten o’clock
#
# {
#     "emoji": "\ud83d\udd59",
#     "description": "ten o\u2019clock",
#     "category": "Travel & Places",
#     "aliases": [
#         "clock10"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:clock10: `:clock10:`
') }}
{{ markdown(title="🕥 ten-thirty" type="markdown", code='

<!--
# 🕥 ten-thirty
#
# {
#     "emoji": "\ud83d\udd65",
#     "description": "ten-thirty",
#     "category": "Travel & Places",
#     "aliases": [
#         "clock1030"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:clock1030: `:clock1030:`
') }}
{{ markdown(title="🕚 eleven o’clock" type="markdown", code='

<!--
# 🕚 eleven o’clock
#
# {
#     "emoji": "\ud83d\udd5a",
#     "description": "eleven o\u2019clock",
#     "category": "Travel & Places",
#     "aliases": [
#         "clock11"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:clock11: `:clock11:`
') }}
{{ markdown(title="🕦 eleven-thirty" type="markdown", code='

<!--
# 🕦 eleven-thirty
#
# {
#     "emoji": "\ud83d\udd66",
#     "description": "eleven-thirty",
#     "category": "Travel & Places",
#     "aliases": [
#         "clock1130"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:clock1130: `:clock1130:`
') }}
{{ markdown(title="🌑 new moon" type="markdown", code='

<!--
# 🌑 new moon
#
# {
#     "emoji": "\ud83c\udf11",
#     "description": "new moon",
#     "category": "Travel & Places",
#     "aliases": [
#         "new_moon"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:new_moon: `:new_moon:`
') }}
{{ markdown(title="🌒 waxing crescent moon" type="markdown", code='

<!--
# 🌒 waxing crescent moon
#
# {
#     "emoji": "\ud83c\udf12",
#     "description": "waxing crescent moon",
#     "category": "Travel & Places",
#     "aliases": [
#         "waxing_crescent_moon"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:waxing_crescent_moon: `:waxing_crescent_moon:`
') }}
{{ markdown(title="🌓 first quarter moon" type="markdown", code='

<!--
# 🌓 first quarter moon
#
# {
#     "emoji": "\ud83c\udf13",
#     "description": "first quarter moon",
#     "category": "Travel & Places",
#     "aliases": [
#         "first_quarter_moon"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:first_quarter_moon: `:first_quarter_moon:`
') }}
{{ markdown(title="🌔 waxing gibbous moon" type="markdown", code='

<!--
# 🌔 waxing gibbous moon
#
# {
#     "emoji": "\ud83c\udf14",
#     "description": "waxing gibbous moon",
#     "category": "Travel & Places",
#     "aliases": [
#         "moon",
#         "waxing_gibbous_moon"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:moon: `:moon:`

:waxing_gibbous_moon: `:waxing_gibbous_moon:`
') }}
{{ markdown(title="🌕 full moon" type="markdown", code='

<!--
# 🌕 full moon
#
# {
#     "emoji": "\ud83c\udf15",
#     "description": "full moon",
#     "category": "Travel & Places",
#     "aliases": [
#         "full_moon"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:full_moon: `:full_moon:`
') }}
{{ markdown(title="🌖 waning gibbous moon" type="markdown", code='

<!--
# 🌖 waning gibbous moon
#
# {
#     "emoji": "\ud83c\udf16",
#     "description": "waning gibbous moon",
#     "category": "Travel & Places",
#     "aliases": [
#         "waning_gibbous_moon"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:waning_gibbous_moon: `:waning_gibbous_moon:`
') }}
{{ markdown(title="🌗 last quarter moon" type="markdown", code='

<!--
# 🌗 last quarter moon
#
# {
#     "emoji": "\ud83c\udf17",
#     "description": "last quarter moon",
#     "category": "Travel & Places",
#     "aliases": [
#         "last_quarter_moon"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:last_quarter_moon: `:last_quarter_moon:`
') }}
{{ markdown(title="🌘 waning crescent moon" type="markdown", code='

<!--
# 🌘 waning crescent moon
#
# {
#     "emoji": "\ud83c\udf18",
#     "description": "waning crescent moon",
#     "category": "Travel & Places",
#     "aliases": [
#         "waning_crescent_moon"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:waning_crescent_moon: `:waning_crescent_moon:`
') }}
{{ markdown(title="🌙 crescent moon" type="markdown", code='

<!--
# 🌙 crescent moon
#
# {
#     "emoji": "\ud83c\udf19",
#     "description": "crescent moon",
#     "category": "Travel & Places",
#     "aliases": [
#         "crescent_moon"
#     ],
#     "tags": [
#         "night"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:crescent_moon: `:crescent_moon:`
') }}
{{ markdown(title="🌚 new moon face" type="markdown", code='

<!--
# 🌚 new moon face
#
# {
#     "emoji": "\ud83c\udf1a",
#     "description": "new moon face",
#     "category": "Travel & Places",
#     "aliases": [
#         "new_moon_with_face"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:new_moon_with_face: `:new_moon_with_face:`
') }}
{{ markdown(title="🌛 first quarter moon face" type="markdown", code='

<!--
# 🌛 first quarter moon face
#
# {
#     "emoji": "\ud83c\udf1b",
#     "description": "first quarter moon face",
#     "category": "Travel & Places",
#     "aliases": [
#         "first_quarter_moon_with_face"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:first_quarter_moon_with_face: `:first_quarter_moon_with_face:`
') }}
{{ markdown(title="🌜 last quarter moon face" type="markdown", code='

<!--
# 🌜 last quarter moon face
#
# {
#     "emoji": "\ud83c\udf1c",
#     "description": "last quarter moon face",
#     "category": "Travel & Places",
#     "aliases": [
#         "last_quarter_moon_with_face"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:last_quarter_moon_with_face: `:last_quarter_moon_with_face:`
') }}
{{ markdown(title="🌡️ thermometer" type="markdown", code='

<!--
# 🌡️ thermometer
#
# {
#     "emoji": "\ud83c\udf21\ufe0f",
#     "description": "thermometer",
#     "category": "Travel & Places",
#     "aliases": [
#         "thermometer"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:thermometer: `:thermometer:`
') }}
{{ markdown(title="☀️ sun" type="markdown", code='

<!--
# ☀️ sun
#
# {
#     "emoji": "\u2600\ufe0f",
#     "description": "sun",
#     "category": "Travel & Places",
#     "aliases": [
#         "sunny"
#     ],
#     "tags": [
#         "weather"
#     ],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:sunny: `:sunny:`
') }}
{{ markdown(title="🌝 full moon face" type="markdown", code='

<!--
# 🌝 full moon face
#
# {
#     "emoji": "\ud83c\udf1d",
#     "description": "full moon face",
#     "category": "Travel & Places",
#     "aliases": [
#         "full_moon_with_face"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:full_moon_with_face: `:full_moon_with_face:`
') }}
{{ markdown(title="🌞 sun with face" type="markdown", code='

<!--
# 🌞 sun with face
#
# {
#     "emoji": "\ud83c\udf1e",
#     "description": "sun with face",
#     "category": "Travel & Places",
#     "aliases": [
#         "sun_with_face"
#     ],
#     "tags": [
#         "summer"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:sun_with_face: `:sun_with_face:`
') }}
{{ markdown(title="🪐 ringed planet" type="markdown", code='

<!--
# 🪐 ringed planet
#
# {
#     "emoji": "\ud83e\ude90",
#     "description": "ringed planet",
#     "category": "Travel & Places",
#     "aliases": [
#         "ringed_planet"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:ringed_planet: `:ringed_planet:`
') }}
{{ markdown(title="⭐ star" type="markdown", code='

<!--
# ⭐ star
#
# {
#     "emoji": "\u2b50",
#     "description": "star",
#     "category": "Travel & Places",
#     "aliases": [
#         "star"
#     ],
#     "tags": [],
#     "unicode_version": "5.1",
#     "ios_version": "6.0"
# }
-->

:star: `:star:`
') }}
{{ markdown(title="🌟 glowing star" type="markdown", code='

<!--
# 🌟 glowing star
#
# {
#     "emoji": "\ud83c\udf1f",
#     "description": "glowing star",
#     "category": "Travel & Places",
#     "aliases": [
#         "star2"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:star2: `:star2:`
') }}
{{ markdown(title="🌠 shooting star" type="markdown", code='

<!--
# 🌠 shooting star
#
# {
#     "emoji": "\ud83c\udf20",
#     "description": "shooting star",
#     "category": "Travel & Places",
#     "aliases": [
#         "stars"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:stars: `:stars:`
') }}
{{ markdown(title="🌌 milky way" type="markdown", code='

<!--
# 🌌 milky way
#
# {
#     "emoji": "\ud83c\udf0c",
#     "description": "milky way",
#     "category": "Travel & Places",
#     "aliases": [
#         "milky_way"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:milky_way: `:milky_way:`
') }}
{{ markdown(title="☁️ cloud" type="markdown", code='

<!--
# ☁️ cloud
#
# {
#     "emoji": "\u2601\ufe0f",
#     "description": "cloud",
#     "category": "Travel & Places",
#     "aliases": [
#         "cloud"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:cloud: `:cloud:`
') }}
{{ markdown(title="⛅ sun behind cloud" type="markdown", code='

<!--
# ⛅ sun behind cloud
#
# {
#     "emoji": "\u26c5",
#     "description": "sun behind cloud",
#     "category": "Travel & Places",
#     "aliases": [
#         "partly_sunny"
#     ],
#     "tags": [
#         "weather",
#         "cloud"
#     ],
#     "unicode_version": "5.2",
#     "ios_version": "6.0"
# }
-->

:partly_sunny: `:partly_sunny:`
') }}
{{ markdown(title="⛈️ cloud with lightning and rain" type="markdown", code='

<!--
# ⛈️ cloud with lightning and rain
#
# {
#     "emoji": "\u26c8\ufe0f",
#     "description": "cloud with lightning and rain",
#     "category": "Travel & Places",
#     "aliases": [
#         "cloud_with_lightning_and_rain"
#     ],
#     "tags": [],
#     "unicode_version": "5.2",
#     "ios_version": "9.1"
# }
-->

:cloud_with_lightning_and_rain: `:cloud_with_lightning_and_rain:`
') }}
{{ markdown(title="🌤️ sun behind small cloud" type="markdown", code='

<!--
# 🌤️ sun behind small cloud
#
# {
#     "emoji": "\ud83c\udf24\ufe0f",
#     "description": "sun behind small cloud",
#     "category": "Travel & Places",
#     "aliases": [
#         "sun_behind_small_cloud"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:sun_behind_small_cloud: `:sun_behind_small_cloud:`
') }}
{{ markdown(title="🌥️ sun behind large cloud" type="markdown", code='

<!--
# 🌥️ sun behind large cloud
#
# {
#     "emoji": "\ud83c\udf25\ufe0f",
#     "description": "sun behind large cloud",
#     "category": "Travel & Places",
#     "aliases": [
#         "sun_behind_large_cloud"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:sun_behind_large_cloud: `:sun_behind_large_cloud:`
') }}
{{ markdown(title="🌦️ sun behind rain cloud" type="markdown", code='

<!--
# 🌦️ sun behind rain cloud
#
# {
#     "emoji": "\ud83c\udf26\ufe0f",
#     "description": "sun behind rain cloud",
#     "category": "Travel & Places",
#     "aliases": [
#         "sun_behind_rain_cloud"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:sun_behind_rain_cloud: `:sun_behind_rain_cloud:`
') }}
{{ markdown(title="🌧️ cloud with rain" type="markdown", code='

<!--
# 🌧️ cloud with rain
#
# {
#     "emoji": "\ud83c\udf27\ufe0f",
#     "description": "cloud with rain",
#     "category": "Travel & Places",
#     "aliases": [
#         "cloud_with_rain"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:cloud_with_rain: `:cloud_with_rain:`
') }}
{{ markdown(title="🌨️ cloud with snow" type="markdown", code='

<!--
# 🌨️ cloud with snow
#
# {
#     "emoji": "\ud83c\udf28\ufe0f",
#     "description": "cloud with snow",
#     "category": "Travel & Places",
#     "aliases": [
#         "cloud_with_snow"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:cloud_with_snow: `:cloud_with_snow:`
') }}
{{ markdown(title="🌩️ cloud with lightning" type="markdown", code='

<!--
# 🌩️ cloud with lightning
#
# {
#     "emoji": "\ud83c\udf29\ufe0f",
#     "description": "cloud with lightning",
#     "category": "Travel & Places",
#     "aliases": [
#         "cloud_with_lightning"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:cloud_with_lightning: `:cloud_with_lightning:`
') }}
{{ markdown(title="🌪️ tornado" type="markdown", code='

<!--
# 🌪️ tornado
#
# {
#     "emoji": "\ud83c\udf2a\ufe0f",
#     "description": "tornado",
#     "category": "Travel & Places",
#     "aliases": [
#         "tornado"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:tornado: `:tornado:`
') }}
{{ markdown(title="🌫️ fog" type="markdown", code='

<!--
# 🌫️ fog
#
# {
#     "emoji": "\ud83c\udf2b\ufe0f",
#     "description": "fog",
#     "category": "Travel & Places",
#     "aliases": [
#         "fog"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:fog: `:fog:`
') }}
{{ markdown(title="🌬️ wind face" type="markdown", code='

<!--
# 🌬️ wind face
#
# {
#     "emoji": "\ud83c\udf2c\ufe0f",
#     "description": "wind face",
#     "category": "Travel & Places",
#     "aliases": [
#         "wind_face"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:wind_face: `:wind_face:`
') }}
{{ markdown(title="🌀 cyclone" type="markdown", code='

<!--
# 🌀 cyclone
#
# {
#     "emoji": "\ud83c\udf00",
#     "description": "cyclone",
#     "category": "Travel & Places",
#     "aliases": [
#         "cyclone"
#     ],
#     "tags": [
#         "swirl"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:cyclone: `:cyclone:`
') }}
{{ markdown(title="🌈 rainbow" type="markdown", code='

<!--
# 🌈 rainbow
#
# {
#     "emoji": "\ud83c\udf08",
#     "description": "rainbow",
#     "category": "Travel & Places",
#     "aliases": [
#         "rainbow"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:rainbow: `:rainbow:`
') }}
{{ markdown(title="🌂 closed umbrella" type="markdown", code='

<!--
# 🌂 closed umbrella
#
# {
#     "emoji": "\ud83c\udf02",
#     "description": "closed umbrella",
#     "category": "Travel & Places",
#     "aliases": [
#         "closed_umbrella"
#     ],
#     "tags": [
#         "weather",
#         "rain"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:closed_umbrella: `:closed_umbrella:`
') }}
{{ markdown(title="☂️ umbrella" type="markdown", code='

<!--
# ☂️ umbrella
#
# {
#     "emoji": "\u2602\ufe0f",
#     "description": "umbrella",
#     "category": "Travel & Places",
#     "aliases": [
#         "open_umbrella"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "9.1"
# }
-->

:open_umbrella: `:open_umbrella:`
') }}
{{ markdown(title="☔ umbrella with rain drops" type="markdown", code='

<!--
# ☔ umbrella with rain drops
#
# {
#     "emoji": "\u2614",
#     "description": "umbrella with rain drops",
#     "category": "Travel & Places",
#     "aliases": [
#         "umbrella"
#     ],
#     "tags": [
#         "rain",
#         "weather"
#     ],
#     "unicode_version": "4.0",
#     "ios_version": "6.0"
# }
-->

:umbrella: `:umbrella:`
') }}
{{ markdown(title="⛱️ umbrella on ground" type="markdown", code='

<!--
# ⛱️ umbrella on ground
#
# {
#     "emoji": "\u26f1\ufe0f",
#     "description": "umbrella on ground",
#     "category": "Travel & Places",
#     "aliases": [
#         "parasol_on_ground"
#     ],
#     "tags": [
#         "beach_umbrella"
#     ],
#     "unicode_version": "5.2",
#     "ios_version": "9.1"
# }
-->

:parasol_on_ground: `:parasol_on_ground:`
') }}
{{ markdown(title="⚡ high voltage" type="markdown", code='

<!--
# ⚡ high voltage
#
# {
#     "emoji": "\u26a1",
#     "description": "high voltage",
#     "category": "Travel & Places",
#     "aliases": [
#         "zap"
#     ],
#     "tags": [
#         "lightning",
#         "thunder"
#     ],
#     "unicode_version": "4.0",
#     "ios_version": "6.0"
# }
-->

:zap: `:zap:`
') }}
{{ markdown(title="❄️ snowflake" type="markdown", code='

<!--
# ❄️ snowflake
#
# {
#     "emoji": "\u2744\ufe0f",
#     "description": "snowflake",
#     "category": "Travel & Places",
#     "aliases": [
#         "snowflake"
#     ],
#     "tags": [
#         "winter",
#         "cold",
#         "weather"
#     ],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:snowflake: `:snowflake:`
') }}
{{ markdown(title="☃️ snowman" type="markdown", code='

<!--
# ☃️ snowman
#
# {
#     "emoji": "\u2603\ufe0f",
#     "description": "snowman",
#     "category": "Travel & Places",
#     "aliases": [
#         "snowman_with_snow"
#     ],
#     "tags": [
#         "winter",
#         "christmas"
#     ],
#     "unicode_version": "",
#     "ios_version": "9.1"
# }
-->

:snowman_with_snow: `:snowman_with_snow:`
') }}
{{ markdown(title="⛄ snowman without snow" type="markdown", code='

<!--
# ⛄ snowman without snow
#
# {
#     "emoji": "\u26c4",
#     "description": "snowman without snow",
#     "category": "Travel & Places",
#     "aliases": [
#         "snowman"
#     ],
#     "tags": [
#         "winter"
#     ],
#     "unicode_version": "5.2",
#     "ios_version": "6.0"
# }
-->

:snowman: `:snowman:`
') }}
{{ markdown(title="☄️ comet" type="markdown", code='

<!--
# ☄️ comet
#
# {
#     "emoji": "\u2604\ufe0f",
#     "description": "comet",
#     "category": "Travel & Places",
#     "aliases": [
#         "comet"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "9.1"
# }
-->

:comet: `:comet:`
') }}
{{ markdown(title="🔥 fire" type="markdown", code='

<!--
# 🔥 fire
#
# {
#     "emoji": "\ud83d\udd25",
#     "description": "fire",
#     "category": "Travel & Places",
#     "aliases": [
#         "fire"
#     ],
#     "tags": [
#         "burn"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:fire: `:fire:`
') }}
{{ markdown(title="💧 droplet" type="markdown", code='

<!--
# 💧 droplet
#
# {
#     "emoji": "\ud83d\udca7",
#     "description": "droplet",
#     "category": "Travel & Places",
#     "aliases": [
#         "droplet"
#     ],
#     "tags": [
#         "water"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:droplet: `:droplet:`
') }}
{{ markdown(title="🌊 water wave" type="markdown", code='

<!--
# 🌊 water wave
#
# {
#     "emoji": "\ud83c\udf0a",
#     "description": "water wave",
#     "category": "Travel & Places",
#     "aliases": [
#         "ocean"
#     ],
#     "tags": [
#         "sea"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:ocean: `:ocean:`
') }}
{{ markdown(title="🎃 jack-o-lantern" type="markdown", code='

<!--
# 🎃 jack-o-lantern
#
# {
#     "emoji": "\ud83c\udf83",
#     "description": "jack-o-lantern",
#     "category": "Activities",
#     "aliases": [
#         "jack_o_lantern"
#     ],
#     "tags": [
#         "halloween"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:jack_o_lantern: `:jack_o_lantern:`
') }}
{{ markdown(title="🎄 Christmas tree" type="markdown", code='

<!--
# 🎄 Christmas tree
#
# {
#     "emoji": "\ud83c\udf84",
#     "description": "Christmas tree",
#     "category": "Activities",
#     "aliases": [
#         "christmas_tree"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:christmas_tree: `:christmas_tree:`
') }}
{{ markdown(title="🎆 fireworks" type="markdown", code='

<!--
# 🎆 fireworks
#
# {
#     "emoji": "\ud83c\udf86",
#     "description": "fireworks",
#     "category": "Activities",
#     "aliases": [
#         "fireworks"
#     ],
#     "tags": [
#         "festival",
#         "celebration"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:fireworks: `:fireworks:`
') }}
{{ markdown(title="🎇 sparkler" type="markdown", code='

<!--
# 🎇 sparkler
#
# {
#     "emoji": "\ud83c\udf87",
#     "description": "sparkler",
#     "category": "Activities",
#     "aliases": [
#         "sparkler"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:sparkler: `:sparkler:`
') }}
{{ markdown(title="🧨 firecracker" type="markdown", code='

<!--
# 🧨 firecracker
#
# {
#     "emoji": "\ud83e\udde8",
#     "description": "firecracker",
#     "category": "Activities",
#     "aliases": [
#         "firecracker"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:firecracker: `:firecracker:`
') }}
{{ markdown(title="✨ sparkles" type="markdown", code='

<!--
# ✨ sparkles
#
# {
#     "emoji": "\u2728",
#     "description": "sparkles",
#     "category": "Activities",
#     "aliases": [
#         "sparkles"
#     ],
#     "tags": [
#         "shiny"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:sparkles: `:sparkles:`
') }}
{{ markdown(title="🎈 balloon" type="markdown", code='

<!--
# 🎈 balloon
#
# {
#     "emoji": "\ud83c\udf88",
#     "description": "balloon",
#     "category": "Activities",
#     "aliases": [
#         "balloon"
#     ],
#     "tags": [
#         "party",
#         "birthday"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:balloon: `:balloon:`
') }}
{{ markdown(title="🎉 party popper" type="markdown", code='

<!--
# 🎉 party popper
#
# {
#     "emoji": "\ud83c\udf89",
#     "description": "party popper",
#     "category": "Activities",
#     "aliases": [
#         "tada"
#     ],
#     "tags": [
#         "hooray",
#         "party"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:tada: `:tada:`
') }}
{{ markdown(title="🎊 confetti ball" type="markdown", code='

<!--
# 🎊 confetti ball
#
# {
#     "emoji": "\ud83c\udf8a",
#     "description": "confetti ball",
#     "category": "Activities",
#     "aliases": [
#         "confetti_ball"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:confetti_ball: `:confetti_ball:`
') }}
{{ markdown(title="🎋 tanabata tree" type="markdown", code='

<!--
# 🎋 tanabata tree
#
# {
#     "emoji": "\ud83c\udf8b",
#     "description": "tanabata tree",
#     "category": "Activities",
#     "aliases": [
#         "tanabata_tree"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:tanabata_tree: `:tanabata_tree:`
') }}
{{ markdown(title="🎍 pine decoration" type="markdown", code='

<!--
# 🎍 pine decoration
#
# {
#     "emoji": "\ud83c\udf8d",
#     "description": "pine decoration",
#     "category": "Activities",
#     "aliases": [
#         "bamboo"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:bamboo: `:bamboo:`
') }}
{{ markdown(title="🎎 Japanese dolls" type="markdown", code='

<!--
# 🎎 Japanese dolls
#
# {
#     "emoji": "\ud83c\udf8e",
#     "description": "Japanese dolls",
#     "category": "Activities",
#     "aliases": [
#         "dolls"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:dolls: `:dolls:`
') }}
{{ markdown(title="🎏 carp streamer" type="markdown", code='

<!--
# 🎏 carp streamer
#
# {
#     "emoji": "\ud83c\udf8f",
#     "description": "carp streamer",
#     "category": "Activities",
#     "aliases": [
#         "flags"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:flags: `:flags:`
') }}
{{ markdown(title="🎐 wind chime" type="markdown", code='

<!--
# 🎐 wind chime
#
# {
#     "emoji": "\ud83c\udf90",
#     "description": "wind chime",
#     "category": "Activities",
#     "aliases": [
#         "wind_chime"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:wind_chime: `:wind_chime:`
') }}
{{ markdown(title="🎑 moon viewing ceremony" type="markdown", code='

<!--
# 🎑 moon viewing ceremony
#
# {
#     "emoji": "\ud83c\udf91",
#     "description": "moon viewing ceremony",
#     "category": "Activities",
#     "aliases": [
#         "rice_scene"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:rice_scene: `:rice_scene:`
') }}
{{ markdown(title="🧧 red envelope" type="markdown", code='

<!--
# 🧧 red envelope
#
# {
#     "emoji": "\ud83e\udde7",
#     "description": "red envelope",
#     "category": "Activities",
#     "aliases": [
#         "red_envelope"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:red_envelope: `:red_envelope:`
') }}
{{ markdown(title="🎀 ribbon" type="markdown", code='

<!--
# 🎀 ribbon
#
# {
#     "emoji": "\ud83c\udf80",
#     "description": "ribbon",
#     "category": "Activities",
#     "aliases": [
#         "ribbon"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:ribbon: `:ribbon:`
') }}
{{ markdown(title="🎁 wrapped gift" type="markdown", code='

<!--
# 🎁 wrapped gift
#
# {
#     "emoji": "\ud83c\udf81",
#     "description": "wrapped gift",
#     "category": "Activities",
#     "aliases": [
#         "gift"
#     ],
#     "tags": [
#         "present",
#         "birthday",
#         "christmas"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:gift: `:gift:`
') }}
{{ markdown(title="🎗️ reminder ribbon" type="markdown", code='

<!--
# 🎗️ reminder ribbon
#
# {
#     "emoji": "\ud83c\udf97\ufe0f",
#     "description": "reminder ribbon",
#     "category": "Activities",
#     "aliases": [
#         "reminder_ribbon"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:reminder_ribbon: `:reminder_ribbon:`
') }}
{{ markdown(title="🎟️ admission tickets" type="markdown", code='

<!--
# 🎟️ admission tickets
#
# {
#     "emoji": "\ud83c\udf9f\ufe0f",
#     "description": "admission tickets",
#     "category": "Activities",
#     "aliases": [
#         "tickets"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:tickets: `:tickets:`
') }}
{{ markdown(title="🎫 ticket" type="markdown", code='

<!--
# 🎫 ticket
#
# {
#     "emoji": "\ud83c\udfab",
#     "description": "ticket",
#     "category": "Activities",
#     "aliases": [
#         "ticket"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:ticket: `:ticket:`
') }}
{{ markdown(title="🎖️ military medal" type="markdown", code='

<!--
# 🎖️ military medal
#
# {
#     "emoji": "\ud83c\udf96\ufe0f",
#     "description": "military medal",
#     "category": "Activities",
#     "aliases": [
#         "medal_military"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:medal_military: `:medal_military:`
') }}
{{ markdown(title="🏆 trophy" type="markdown", code='

<!--
# 🏆 trophy
#
# {
#     "emoji": "\ud83c\udfc6",
#     "description": "trophy",
#     "category": "Activities",
#     "aliases": [
#         "trophy"
#     ],
#     "tags": [
#         "award",
#         "contest",
#         "winner"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:trophy: `:trophy:`
') }}
{{ markdown(title="🏅 sports medal" type="markdown", code='

<!--
# 🏅 sports medal
#
# {
#     "emoji": "\ud83c\udfc5",
#     "description": "sports medal",
#     "category": "Activities",
#     "aliases": [
#         "medal_sports"
#     ],
#     "tags": [
#         "gold",
#         "winner"
#     ],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:medal_sports: `:medal_sports:`
') }}
{{ markdown(title="🥇 1st place medal" type="markdown", code='

<!--
# 🥇 1st place medal
#
# {
#     "emoji": "\ud83e\udd47",
#     "description": "1st place medal",
#     "category": "Activities",
#     "aliases": [
#         "1st_place_medal"
#     ],
#     "tags": [
#         "gold"
#     ],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:1st_place_medal: `:1st_place_medal:`
') }}
{{ markdown(title="🥈 2nd place medal" type="markdown", code='

<!--
# 🥈 2nd place medal
#
# {
#     "emoji": "\ud83e\udd48",
#     "description": "2nd place medal",
#     "category": "Activities",
#     "aliases": [
#         "2nd_place_medal"
#     ],
#     "tags": [
#         "silver"
#     ],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:2nd_place_medal: `:2nd_place_medal:`
') }}
{{ markdown(title="🥉 3rd place medal" type="markdown", code='

<!--
# 🥉 3rd place medal
#
# {
#     "emoji": "\ud83e\udd49",
#     "description": "3rd place medal",
#     "category": "Activities",
#     "aliases": [
#         "3rd_place_medal"
#     ],
#     "tags": [
#         "bronze"
#     ],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:3rd_place_medal: `:3rd_place_medal:`
') }}
{{ markdown(title="⚽ soccer ball" type="markdown", code='

<!--
# ⚽ soccer ball
#
# {
#     "emoji": "\u26bd",
#     "description": "soccer ball",
#     "category": "Activities",
#     "aliases": [
#         "soccer"
#     ],
#     "tags": [
#         "sports"
#     ],
#     "unicode_version": "5.2",
#     "ios_version": "6.0"
# }
-->

:soccer: `:soccer:`
') }}
{{ markdown(title="⚾ baseball" type="markdown", code='

<!--
# ⚾ baseball
#
# {
#     "emoji": "\u26be",
#     "description": "baseball",
#     "category": "Activities",
#     "aliases": [
#         "baseball"
#     ],
#     "tags": [
#         "sports"
#     ],
#     "unicode_version": "5.2",
#     "ios_version": "6.0"
# }
-->

:baseball: `:baseball:`
') }}
{{ markdown(title="🥎 softball" type="markdown", code='

<!--
# 🥎 softball
#
# {
#     "emoji": "\ud83e\udd4e",
#     "description": "softball",
#     "category": "Activities",
#     "aliases": [
#         "softball"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:softball: `:softball:`
') }}
{{ markdown(title="🏀 basketball" type="markdown", code='

<!--
# 🏀 basketball
#
# {
#     "emoji": "\ud83c\udfc0",
#     "description": "basketball",
#     "category": "Activities",
#     "aliases": [
#         "basketball"
#     ],
#     "tags": [
#         "sports"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:basketball: `:basketball:`
') }}
{{ markdown(title="🏐 volleyball" type="markdown", code='

<!--
# 🏐 volleyball
#
# {
#     "emoji": "\ud83c\udfd0",
#     "description": "volleyball",
#     "category": "Activities",
#     "aliases": [
#         "volleyball"
#     ],
#     "tags": [],
#     "unicode_version": "8.0",
#     "ios_version": "9.1"
# }
-->

:volleyball: `:volleyball:`
') }}
{{ markdown(title="🏈 american football" type="markdown", code='

<!--
# 🏈 american football
#
# {
#     "emoji": "\ud83c\udfc8",
#     "description": "american football",
#     "category": "Activities",
#     "aliases": [
#         "football"
#     ],
#     "tags": [
#         "sports"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:football: `:football:`
') }}
{{ markdown(title="🏉 rugby football" type="markdown", code='

<!--
# 🏉 rugby football
#
# {
#     "emoji": "\ud83c\udfc9",
#     "description": "rugby football",
#     "category": "Activities",
#     "aliases": [
#         "rugby_football"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:rugby_football: `:rugby_football:`
') }}
{{ markdown(title="🎾 tennis" type="markdown", code='

<!--
# 🎾 tennis
#
# {
#     "emoji": "\ud83c\udfbe",
#     "description": "tennis",
#     "category": "Activities",
#     "aliases": [
#         "tennis"
#     ],
#     "tags": [
#         "sports"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:tennis: `:tennis:`
') }}
{{ markdown(title="🥏 flying disc" type="markdown", code='

<!--
# 🥏 flying disc
#
# {
#     "emoji": "\ud83e\udd4f",
#     "description": "flying disc",
#     "category": "Activities",
#     "aliases": [
#         "flying_disc"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:flying_disc: `:flying_disc:`
') }}
{{ markdown(title="🎳 bowling" type="markdown", code='

<!--
# 🎳 bowling
#
# {
#     "emoji": "\ud83c\udfb3",
#     "description": "bowling",
#     "category": "Activities",
#     "aliases": [
#         "bowling"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:bowling: `:bowling:`
') }}
{{ markdown(title="🏏 cricket game" type="markdown", code='

<!--
# 🏏 cricket game
#
# {
#     "emoji": "\ud83c\udfcf",
#     "description": "cricket game",
#     "category": "Activities",
#     "aliases": [
#         "cricket_game"
#     ],
#     "tags": [],
#     "unicode_version": "8.0",
#     "ios_version": "9.1"
# }
-->

:cricket_game: `:cricket_game:`
') }}
{{ markdown(title="🏑 field hockey" type="markdown", code='

<!--
# 🏑 field hockey
#
# {
#     "emoji": "\ud83c\udfd1",
#     "description": "field hockey",
#     "category": "Activities",
#     "aliases": [
#         "field_hockey"
#     ],
#     "tags": [],
#     "unicode_version": "8.0",
#     "ios_version": "9.1"
# }
-->

:field_hockey: `:field_hockey:`
') }}
{{ markdown(title="🏒 ice hockey" type="markdown", code='

<!--
# 🏒 ice hockey
#
# {
#     "emoji": "\ud83c\udfd2",
#     "description": "ice hockey",
#     "category": "Activities",
#     "aliases": [
#         "ice_hockey"
#     ],
#     "tags": [],
#     "unicode_version": "8.0",
#     "ios_version": "9.1"
# }
-->

:ice_hockey: `:ice_hockey:`
') }}
{{ markdown(title="🥍 lacrosse" type="markdown", code='

<!--
# 🥍 lacrosse
#
# {
#     "emoji": "\ud83e\udd4d",
#     "description": "lacrosse",
#     "category": "Activities",
#     "aliases": [
#         "lacrosse"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:lacrosse: `:lacrosse:`
') }}
{{ markdown(title="🏓 ping pong" type="markdown", code='

<!--
# 🏓 ping pong
#
# {
#     "emoji": "\ud83c\udfd3",
#     "description": "ping pong",
#     "category": "Activities",
#     "aliases": [
#         "ping_pong"
#     ],
#     "tags": [],
#     "unicode_version": "8.0",
#     "ios_version": "9.1"
# }
-->

:ping_pong: `:ping_pong:`
') }}
{{ markdown(title="🏸 badminton" type="markdown", code='

<!--
# 🏸 badminton
#
# {
#     "emoji": "\ud83c\udff8",
#     "description": "badminton",
#     "category": "Activities",
#     "aliases": [
#         "badminton"
#     ],
#     "tags": [],
#     "unicode_version": "8.0",
#     "ios_version": "9.1"
# }
-->

:badminton: `:badminton:`
') }}
{{ markdown(title="🥊 boxing glove" type="markdown", code='

<!--
# 🥊 boxing glove
#
# {
#     "emoji": "\ud83e\udd4a",
#     "description": "boxing glove",
#     "category": "Activities",
#     "aliases": [
#         "boxing_glove"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:boxing_glove: `:boxing_glove:`
') }}
{{ markdown(title="🥋 martial arts uniform" type="markdown", code='

<!--
# 🥋 martial arts uniform
#
# {
#     "emoji": "\ud83e\udd4b",
#     "description": "martial arts uniform",
#     "category": "Activities",
#     "aliases": [
#         "martial_arts_uniform"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:martial_arts_uniform: `:martial_arts_uniform:`
') }}
{{ markdown(title="🥅 goal net" type="markdown", code='

<!--
# 🥅 goal net
#
# {
#     "emoji": "\ud83e\udd45",
#     "description": "goal net",
#     "category": "Activities",
#     "aliases": [
#         "goal_net"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:goal_net: `:goal_net:`
') }}
{{ markdown(title="⛳ flag in hole" type="markdown", code='

<!--
# ⛳ flag in hole
#
# {
#     "emoji": "\u26f3",
#     "description": "flag in hole",
#     "category": "Activities",
#     "aliases": [
#         "golf"
#     ],
#     "tags": [],
#     "unicode_version": "5.2",
#     "ios_version": "6.0"
# }
-->

:golf: `:golf:`
') }}
{{ markdown(title="⛸️ ice skate" type="markdown", code='

<!--
# ⛸️ ice skate
#
# {
#     "emoji": "\u26f8\ufe0f",
#     "description": "ice skate",
#     "category": "Activities",
#     "aliases": [
#         "ice_skate"
#     ],
#     "tags": [
#         "skating"
#     ],
#     "unicode_version": "5.2",
#     "ios_version": "9.1"
# }
-->

:ice_skate: `:ice_skate:`
') }}
{{ markdown(title="🎣 fishing pole" type="markdown", code='

<!--
# 🎣 fishing pole
#
# {
#     "emoji": "\ud83c\udfa3",
#     "description": "fishing pole",
#     "category": "Activities",
#     "aliases": [
#         "fishing_pole_and_fish"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:fishing_pole_and_fish: `:fishing_pole_and_fish:`
') }}
{{ markdown(title="🤿 diving mask" type="markdown", code='

<!--
# 🤿 diving mask
#
# {
#     "emoji": "\ud83e\udd3f",
#     "description": "diving mask",
#     "category": "Activities",
#     "aliases": [
#         "diving_mask"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:diving_mask: `:diving_mask:`
') }}
{{ markdown(title="🎽 running shirt" type="markdown", code='

<!--
# 🎽 running shirt
#
# {
#     "emoji": "\ud83c\udfbd",
#     "description": "running shirt",
#     "category": "Activities",
#     "aliases": [
#         "running_shirt_with_sash"
#     ],
#     "tags": [
#         "marathon"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:running_shirt_with_sash: `:running_shirt_with_sash:`
') }}
{{ markdown(title="🎿 skis" type="markdown", code='

<!--
# 🎿 skis
#
# {
#     "emoji": "\ud83c\udfbf",
#     "description": "skis",
#     "category": "Activities",
#     "aliases": [
#         "ski"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:ski: `:ski:`
') }}
{{ markdown(title="🛷 sled" type="markdown", code='

<!--
# 🛷 sled
#
# {
#     "emoji": "\ud83d\udef7",
#     "description": "sled",
#     "category": "Activities",
#     "aliases": [
#         "sled"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:sled: `:sled:`
') }}
{{ markdown(title="🥌 curling stone" type="markdown", code='

<!--
# 🥌 curling stone
#
# {
#     "emoji": "\ud83e\udd4c",
#     "description": "curling stone",
#     "category": "Activities",
#     "aliases": [
#         "curling_stone"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:curling_stone: `:curling_stone:`
') }}
{{ markdown(title="🎯 bullseye" type="markdown", code='

<!--
# 🎯 bullseye
#
# {
#     "emoji": "\ud83c\udfaf",
#     "description": "bullseye",
#     "category": "Activities",
#     "aliases": [
#         "dart"
#     ],
#     "tags": [
#         "target"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:dart: `:dart:`
') }}
{{ markdown(title="🪀 yo-yo" type="markdown", code='

<!--
# 🪀 yo-yo
#
# {
#     "emoji": "\ud83e\ude80",
#     "description": "yo-yo",
#     "category": "Activities",
#     "aliases": [
#         "yo_yo"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:yo_yo: `:yo_yo:`
') }}
{{ markdown(title="🪁 kite" type="markdown", code='

<!--
# 🪁 kite
#
# {
#     "emoji": "\ud83e\ude81",
#     "description": "kite",
#     "category": "Activities",
#     "aliases": [
#         "kite"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:kite: `:kite:`
') }}
{{ markdown(title="🔫 water pistol" type="markdown", code='

<!--
# 🔫 water pistol
#
# {
#     "emoji": "\ud83d\udd2b",
#     "description": "water pistol",
#     "category": "Activities",
#     "aliases": [
#         "gun"
#     ],
#     "tags": [
#         "shoot",
#         "weapon"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:gun: `:gun:`
') }}
{{ markdown(title="🎱 pool 8 ball" type="markdown", code='

<!--
# 🎱 pool 8 ball
#
# {
#     "emoji": "\ud83c\udfb1",
#     "description": "pool 8 ball",
#     "category": "Activities",
#     "aliases": [
#         "8ball"
#     ],
#     "tags": [
#         "pool",
#         "billiards"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:8ball: `:8ball:`
') }}
{{ markdown(title="🔮 crystal ball" type="markdown", code='

<!--
# 🔮 crystal ball
#
# {
#     "emoji": "\ud83d\udd2e",
#     "description": "crystal ball",
#     "category": "Activities",
#     "aliases": [
#         "crystal_ball"
#     ],
#     "tags": [
#         "fortune"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:crystal_ball: `:crystal_ball:`
') }}
{{ markdown(title="🪄 magic wand" type="markdown", code='

<!--
# 🪄 magic wand
#
# {
#     "emoji": "\ud83e\ude84",
#     "description": "magic wand",
#     "category": "Activities",
#     "aliases": [
#         "magic_wand"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:magic_wand: `:magic_wand:`
') }}
{{ markdown(title="🎮 video game" type="markdown", code='

<!--
# 🎮 video game
#
# {
#     "emoji": "\ud83c\udfae",
#     "description": "video game",
#     "category": "Activities",
#     "aliases": [
#         "video_game"
#     ],
#     "tags": [
#         "play",
#         "controller",
#         "console"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:video_game: `:video_game:`
') }}
{{ markdown(title="🕹️ joystick" type="markdown", code='

<!--
# 🕹️ joystick
#
# {
#     "emoji": "\ud83d\udd79\ufe0f",
#     "description": "joystick",
#     "category": "Activities",
#     "aliases": [
#         "joystick"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:joystick: `:joystick:`
') }}
{{ markdown(title="🎰 slot machine" type="markdown", code='

<!--
# 🎰 slot machine
#
# {
#     "emoji": "\ud83c\udfb0",
#     "description": "slot machine",
#     "category": "Activities",
#     "aliases": [
#         "slot_machine"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:slot_machine: `:slot_machine:`
') }}
{{ markdown(title="🎲 game die" type="markdown", code='

<!--
# 🎲 game die
#
# {
#     "emoji": "\ud83c\udfb2",
#     "description": "game die",
#     "category": "Activities",
#     "aliases": [
#         "game_die"
#     ],
#     "tags": [
#         "dice",
#         "gambling"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:game_die: `:game_die:`
') }}
{{ markdown(title="🧩 puzzle piece" type="markdown", code='

<!--
# 🧩 puzzle piece
#
# {
#     "emoji": "\ud83e\udde9",
#     "description": "puzzle piece",
#     "category": "Activities",
#     "aliases": [
#         "jigsaw"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:jigsaw: `:jigsaw:`
') }}
{{ markdown(title="🧸 teddy bear" type="markdown", code='

<!--
# 🧸 teddy bear
#
# {
#     "emoji": "\ud83e\uddf8",
#     "description": "teddy bear",
#     "category": "Activities",
#     "aliases": [
#         "teddy_bear"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:teddy_bear: `:teddy_bear:`
') }}
{{ markdown(title="🪅 piñata" type="markdown", code='

<!--
# 🪅 piñata
#
# {
#     "emoji": "\ud83e\ude85",
#     "description": "pi\u00f1ata",
#     "category": "Activities",
#     "aliases": [
#         "pinata"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:pinata: `:pinata:`
') }}
{{ markdown(title="🪩 mirror ball" type="markdown", code='

<!--
# 🪩 mirror ball
#
# {
#     "emoji": "\ud83e\udea9",
#     "description": "mirror ball",
#     "category": "Activities",
#     "aliases": [
#         "mirror_ball"
#     ],
#     "tags": [
#         "disco",
#         "party"
#     ],
#     "unicode_version": "14.0",
#     "ios_version": "15.4"
# }
-->

:mirror_ball: `:mirror_ball:`
') }}
{{ markdown(title="🪆 nesting dolls" type="markdown", code='

<!--
# 🪆 nesting dolls
#
# {
#     "emoji": "\ud83e\ude86",
#     "description": "nesting dolls",
#     "category": "Activities",
#     "aliases": [
#         "nesting_dolls"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:nesting_dolls: `:nesting_dolls:`
') }}
{{ markdown(title="♠️ spade suit" type="markdown", code='

<!--
# ♠️ spade suit
#
# {
#     "emoji": "\u2660\ufe0f",
#     "description": "spade suit",
#     "category": "Activities",
#     "aliases": [
#         "spades"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:spades: `:spades:`
') }}
{{ markdown(title="♥️ heart suit" type="markdown", code='

<!--
# ♥️ heart suit
#
# {
#     "emoji": "\u2665\ufe0f",
#     "description": "heart suit",
#     "category": "Activities",
#     "aliases": [
#         "hearts"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:hearts: `:hearts:`
') }}
{{ markdown(title="♦️ diamond suit" type="markdown", code='

<!--
# ♦️ diamond suit
#
# {
#     "emoji": "\u2666\ufe0f",
#     "description": "diamond suit",
#     "category": "Activities",
#     "aliases": [
#         "diamonds"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:diamonds: `:diamonds:`
') }}
{{ markdown(title="♣️ club suit" type="markdown", code='

<!--
# ♣️ club suit
#
# {
#     "emoji": "\u2663\ufe0f",
#     "description": "club suit",
#     "category": "Activities",
#     "aliases": [
#         "clubs"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:clubs: `:clubs:`
') }}
{{ markdown(title="♟️ chess pawn" type="markdown", code='

<!--
# ♟️ chess pawn
#
# {
#     "emoji": "\u265f\ufe0f",
#     "description": "chess pawn",
#     "category": "Activities",
#     "aliases": [
#         "chess_pawn"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:chess_pawn: `:chess_pawn:`
') }}
{{ markdown(title="🃏 joker" type="markdown", code='

<!--
# 🃏 joker
#
# {
#     "emoji": "\ud83c\udccf",
#     "description": "joker",
#     "category": "Activities",
#     "aliases": [
#         "black_joker"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:black_joker: `:black_joker:`
') }}
{{ markdown(title="🀄 mahjong red dragon" type="markdown", code='

<!--
# 🀄 mahjong red dragon
#
# {
#     "emoji": "\ud83c\udc04",
#     "description": "mahjong red dragon",
#     "category": "Activities",
#     "aliases": [
#         "mahjong"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:mahjong: `:mahjong:`
') }}
{{ markdown(title="🎴 flower playing cards" type="markdown", code='

<!--
# 🎴 flower playing cards
#
# {
#     "emoji": "\ud83c\udfb4",
#     "description": "flower playing cards",
#     "category": "Activities",
#     "aliases": [
#         "flower_playing_cards"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:flower_playing_cards: `:flower_playing_cards:`
') }}
{{ markdown(title="🎭 performing arts" type="markdown", code='

<!--
# 🎭 performing arts
#
# {
#     "emoji": "\ud83c\udfad",
#     "description": "performing arts",
#     "category": "Activities",
#     "aliases": [
#         "performing_arts"
#     ],
#     "tags": [
#         "theater",
#         "drama"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:performing_arts: `:performing_arts:`
') }}
{{ markdown(title="🖼️ framed picture" type="markdown", code='

<!--
# 🖼️ framed picture
#
# {
#     "emoji": "\ud83d\uddbc\ufe0f",
#     "description": "framed picture",
#     "category": "Activities",
#     "aliases": [
#         "framed_picture"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:framed_picture: `:framed_picture:`
') }}
{{ markdown(title="🎨 artist palette" type="markdown", code='

<!--
# 🎨 artist palette
#
# {
#     "emoji": "\ud83c\udfa8",
#     "description": "artist palette",
#     "category": "Activities",
#     "aliases": [
#         "art"
#     ],
#     "tags": [
#         "design",
#         "paint"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:art: `:art:`
') }}
{{ markdown(title="🧵 thread" type="markdown", code='

<!--
# 🧵 thread
#
# {
#     "emoji": "\ud83e\uddf5",
#     "description": "thread",
#     "category": "Activities",
#     "aliases": [
#         "thread"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:thread: `:thread:`
') }}
{{ markdown(title="🪡 sewing needle" type="markdown", code='

<!--
# 🪡 sewing needle
#
# {
#     "emoji": "\ud83e\udea1",
#     "description": "sewing needle",
#     "category": "Activities",
#     "aliases": [
#         "sewing_needle"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:sewing_needle: `:sewing_needle:`
') }}
{{ markdown(title="🧶 yarn" type="markdown", code='

<!--
# 🧶 yarn
#
# {
#     "emoji": "\ud83e\uddf6",
#     "description": "yarn",
#     "category": "Activities",
#     "aliases": [
#         "yarn"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:yarn: `:yarn:`
') }}
{{ markdown(title="🪢 knot" type="markdown", code='

<!--
# 🪢 knot
#
# {
#     "emoji": "\ud83e\udea2",
#     "description": "knot",
#     "category": "Activities",
#     "aliases": [
#         "knot"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:knot: `:knot:`
') }}
{{ markdown(title="👓 glasses" type="markdown", code='

<!--
# 👓 glasses
#
# {
#     "emoji": "\ud83d\udc53",
#     "description": "glasses",
#     "category": "Objects",
#     "aliases": [
#         "eyeglasses"
#     ],
#     "tags": [
#         "glasses"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:eyeglasses: `:eyeglasses:`
') }}
{{ markdown(title="🕶️ sunglasses" type="markdown", code='

<!--
# 🕶️ sunglasses
#
# {
#     "emoji": "\ud83d\udd76\ufe0f",
#     "description": "sunglasses",
#     "category": "Objects",
#     "aliases": [
#         "dark_sunglasses"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:dark_sunglasses: `:dark_sunglasses:`
') }}
{{ markdown(title="🥽 goggles" type="markdown", code='

<!--
# 🥽 goggles
#
# {
#     "emoji": "\ud83e\udd7d",
#     "description": "goggles",
#     "category": "Objects",
#     "aliases": [
#         "goggles"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:goggles: `:goggles:`
') }}
{{ markdown(title="🥼 lab coat" type="markdown", code='

<!--
# 🥼 lab coat
#
# {
#     "emoji": "\ud83e\udd7c",
#     "description": "lab coat",
#     "category": "Objects",
#     "aliases": [
#         "lab_coat"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:lab_coat: `:lab_coat:`
') }}
{{ markdown(title="🦺 safety vest" type="markdown", code='

<!--
# 🦺 safety vest
#
# {
#     "emoji": "\ud83e\uddba",
#     "description": "safety vest",
#     "category": "Objects",
#     "aliases": [
#         "safety_vest"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:safety_vest: `:safety_vest:`
') }}
{{ markdown(title="👔 necktie" type="markdown", code='

<!--
# 👔 necktie
#
# {
#     "emoji": "\ud83d\udc54",
#     "description": "necktie",
#     "category": "Objects",
#     "aliases": [
#         "necktie"
#     ],
#     "tags": [
#         "shirt",
#         "formal"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:necktie: `:necktie:`
') }}
{{ markdown(title="👕 t-shirt" type="markdown", code='

<!--
# 👕 t-shirt
#
# {
#     "emoji": "\ud83d\udc55",
#     "description": "t-shirt",
#     "category": "Objects",
#     "aliases": [
#         "shirt",
#         "tshirt"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:shirt: `:shirt:`

:tshirt: `:tshirt:`
') }}
{{ markdown(title="👖 jeans" type="markdown", code='

<!--
# 👖 jeans
#
# {
#     "emoji": "\ud83d\udc56",
#     "description": "jeans",
#     "category": "Objects",
#     "aliases": [
#         "jeans"
#     ],
#     "tags": [
#         "pants"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:jeans: `:jeans:`
') }}
{{ markdown(title="🧣 scarf" type="markdown", code='

<!--
# 🧣 scarf
#
# {
#     "emoji": "\ud83e\udde3",
#     "description": "scarf",
#     "category": "Objects",
#     "aliases": [
#         "scarf"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:scarf: `:scarf:`
') }}
{{ markdown(title="🧤 gloves" type="markdown", code='

<!--
# 🧤 gloves
#
# {
#     "emoji": "\ud83e\udde4",
#     "description": "gloves",
#     "category": "Objects",
#     "aliases": [
#         "gloves"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:gloves: `:gloves:`
') }}
{{ markdown(title="🧥 coat" type="markdown", code='

<!--
# 🧥 coat
#
# {
#     "emoji": "\ud83e\udde5",
#     "description": "coat",
#     "category": "Objects",
#     "aliases": [
#         "coat"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:coat: `:coat:`
') }}
{{ markdown(title="🧦 socks" type="markdown", code='

<!--
# 🧦 socks
#
# {
#     "emoji": "\ud83e\udde6",
#     "description": "socks",
#     "category": "Objects",
#     "aliases": [
#         "socks"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:socks: `:socks:`
') }}
{{ markdown(title="👗 dress" type="markdown", code='

<!--
# 👗 dress
#
# {
#     "emoji": "\ud83d\udc57",
#     "description": "dress",
#     "category": "Objects",
#     "aliases": [
#         "dress"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:dress: `:dress:`
') }}
{{ markdown(title="👘 kimono" type="markdown", code='

<!--
# 👘 kimono
#
# {
#     "emoji": "\ud83d\udc58",
#     "description": "kimono",
#     "category": "Objects",
#     "aliases": [
#         "kimono"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:kimono: `:kimono:`
') }}
{{ markdown(title="🥻 sari" type="markdown", code='

<!--
# 🥻 sari
#
# {
#     "emoji": "\ud83e\udd7b",
#     "description": "sari",
#     "category": "Objects",
#     "aliases": [
#         "sari"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:sari: `:sari:`
') }}
{{ markdown(title="🩱 one-piece swimsuit" type="markdown", code='

<!--
# 🩱 one-piece swimsuit
#
# {
#     "emoji": "\ud83e\ude71",
#     "description": "one-piece swimsuit",
#     "category": "Objects",
#     "aliases": [
#         "one_piece_swimsuit"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:one_piece_swimsuit: `:one_piece_swimsuit:`
') }}
{{ markdown(title="🩲 briefs" type="markdown", code='

<!--
# 🩲 briefs
#
# {
#     "emoji": "\ud83e\ude72",
#     "description": "briefs",
#     "category": "Objects",
#     "aliases": [
#         "swim_brief"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:swim_brief: `:swim_brief:`
') }}
{{ markdown(title="🩳 shorts" type="markdown", code='

<!--
# 🩳 shorts
#
# {
#     "emoji": "\ud83e\ude73",
#     "description": "shorts",
#     "category": "Objects",
#     "aliases": [
#         "shorts"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:shorts: `:shorts:`
') }}
{{ markdown(title="👙 bikini" type="markdown", code='

<!--
# 👙 bikini
#
# {
#     "emoji": "\ud83d\udc59",
#     "description": "bikini",
#     "category": "Objects",
#     "aliases": [
#         "bikini"
#     ],
#     "tags": [
#         "beach"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:bikini: `:bikini:`
') }}
{{ markdown(title="👚 woman’s clothes" type="markdown", code='

<!--
# 👚 woman’s clothes
#
# {
#     "emoji": "\ud83d\udc5a",
#     "description": "woman\u2019s clothes",
#     "category": "Objects",
#     "aliases": [
#         "womans_clothes"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:womans_clothes: `:womans_clothes:`
') }}
{{ markdown(title="🪭 folding hand fan" type="markdown", code='

<!--
# 🪭 folding hand fan
#
# {
#     "emoji": "\ud83e\udead",
#     "description": "folding hand fan",
#     "category": "Objects",
#     "aliases": [
#         "folding_hand_fan"
#     ],
#     "tags": [
#         "sensu"
#     ],
#     "unicode_version": "15.0",
#     "ios_version": "16.4"
# }
-->

:folding_hand_fan: `:folding_hand_fan:`
') }}
{{ markdown(title="👛 purse" type="markdown", code='

<!--
# 👛 purse
#
# {
#     "emoji": "\ud83d\udc5b",
#     "description": "purse",
#     "category": "Objects",
#     "aliases": [
#         "purse"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:purse: `:purse:`
') }}
{{ markdown(title="👜 handbag" type="markdown", code='

<!--
# 👜 handbag
#
# {
#     "emoji": "\ud83d\udc5c",
#     "description": "handbag",
#     "category": "Objects",
#     "aliases": [
#         "handbag"
#     ],
#     "tags": [
#         "bag"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:handbag: `:handbag:`
') }}
{{ markdown(title="👝 clutch bag" type="markdown", code='

<!--
# 👝 clutch bag
#
# {
#     "emoji": "\ud83d\udc5d",
#     "description": "clutch bag",
#     "category": "Objects",
#     "aliases": [
#         "pouch"
#     ],
#     "tags": [
#         "bag"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:pouch: `:pouch:`
') }}
{{ markdown(title="🛍️ shopping bags" type="markdown", code='

<!--
# 🛍️ shopping bags
#
# {
#     "emoji": "\ud83d\udecd\ufe0f",
#     "description": "shopping bags",
#     "category": "Objects",
#     "aliases": [
#         "shopping"
#     ],
#     "tags": [
#         "bags"
#     ],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:shopping: `:shopping:`
') }}
{{ markdown(title="🎒 backpack" type="markdown", code='

<!--
# 🎒 backpack
#
# {
#     "emoji": "\ud83c\udf92",
#     "description": "backpack",
#     "category": "Objects",
#     "aliases": [
#         "school_satchel"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:school_satchel: `:school_satchel:`
') }}
{{ markdown(title="🩴 thong sandal" type="markdown", code='

<!--
# 🩴 thong sandal
#
# {
#     "emoji": "\ud83e\ude74",
#     "description": "thong sandal",
#     "category": "Objects",
#     "aliases": [
#         "thong_sandal"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:thong_sandal: `:thong_sandal:`
') }}
{{ markdown(title="👞 man’s shoe" type="markdown", code='

<!--
# 👞 man’s shoe
#
# {
#     "emoji": "\ud83d\udc5e",
#     "description": "man\u2019s shoe",
#     "category": "Objects",
#     "aliases": [
#         "mans_shoe",
#         "shoe"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:mans_shoe: `:mans_shoe:`

:shoe: `:shoe:`
') }}
{{ markdown(title="👟 running shoe" type="markdown", code='

<!--
# 👟 running shoe
#
# {
#     "emoji": "\ud83d\udc5f",
#     "description": "running shoe",
#     "category": "Objects",
#     "aliases": [
#         "athletic_shoe"
#     ],
#     "tags": [
#         "sneaker",
#         "sport",
#         "running"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:athletic_shoe: `:athletic_shoe:`
') }}
{{ markdown(title="🥾 hiking boot" type="markdown", code='

<!--
# 🥾 hiking boot
#
# {
#     "emoji": "\ud83e\udd7e",
#     "description": "hiking boot",
#     "category": "Objects",
#     "aliases": [
#         "hiking_boot"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:hiking_boot: `:hiking_boot:`
') }}
{{ markdown(title="🥿 flat shoe" type="markdown", code='

<!--
# 🥿 flat shoe
#
# {
#     "emoji": "\ud83e\udd7f",
#     "description": "flat shoe",
#     "category": "Objects",
#     "aliases": [
#         "flat_shoe"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:flat_shoe: `:flat_shoe:`
') }}
{{ markdown(title="👠 high-heeled shoe" type="markdown", code='

<!--
# 👠 high-heeled shoe
#
# {
#     "emoji": "\ud83d\udc60",
#     "description": "high-heeled shoe",
#     "category": "Objects",
#     "aliases": [
#         "high_heel"
#     ],
#     "tags": [
#         "shoe"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:high_heel: `:high_heel:`
') }}
{{ markdown(title="👡 woman’s sandal" type="markdown", code='

<!--
# 👡 woman’s sandal
#
# {
#     "emoji": "\ud83d\udc61",
#     "description": "woman\u2019s sandal",
#     "category": "Objects",
#     "aliases": [
#         "sandal"
#     ],
#     "tags": [
#         "shoe"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:sandal: `:sandal:`
') }}
{{ markdown(title="🩰 ballet shoes" type="markdown", code='

<!--
# 🩰 ballet shoes
#
# {
#     "emoji": "\ud83e\ude70",
#     "description": "ballet shoes",
#     "category": "Objects",
#     "aliases": [
#         "ballet_shoes"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:ballet_shoes: `:ballet_shoes:`
') }}
{{ markdown(title="👢 woman’s boot" type="markdown", code='

<!--
# 👢 woman’s boot
#
# {
#     "emoji": "\ud83d\udc62",
#     "description": "woman\u2019s boot",
#     "category": "Objects",
#     "aliases": [
#         "boot"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:boot: `:boot:`
') }}
{{ markdown(title="🪮 hair pick" type="markdown", code='

<!--
# 🪮 hair pick
#
# {
#     "emoji": "\ud83e\udeae",
#     "description": "hair pick",
#     "category": "Objects",
#     "aliases": [
#         "hair_pick"
#     ],
#     "tags": [],
#     "unicode_version": "15.0",
#     "ios_version": "16.4"
# }
-->

:hair_pick: `:hair_pick:`
') }}
{{ markdown(title="👑 crown" type="markdown", code='

<!--
# 👑 crown
#
# {
#     "emoji": "\ud83d\udc51",
#     "description": "crown",
#     "category": "Objects",
#     "aliases": [
#         "crown"
#     ],
#     "tags": [
#         "king",
#         "queen",
#         "royal"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:crown: `:crown:`
') }}
{{ markdown(title="👒 woman’s hat" type="markdown", code='

<!--
# 👒 woman’s hat
#
# {
#     "emoji": "\ud83d\udc52",
#     "description": "woman\u2019s hat",
#     "category": "Objects",
#     "aliases": [
#         "womans_hat"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:womans_hat: `:womans_hat:`
') }}
{{ markdown(title="🎩 top hat" type="markdown", code='

<!--
# 🎩 top hat
#
# {
#     "emoji": "\ud83c\udfa9",
#     "description": "top hat",
#     "category": "Objects",
#     "aliases": [
#         "tophat"
#     ],
#     "tags": [
#         "hat",
#         "classy"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:tophat: `:tophat:`
') }}
{{ markdown(title="🎓 graduation cap" type="markdown", code='

<!--
# 🎓 graduation cap
#
# {
#     "emoji": "\ud83c\udf93",
#     "description": "graduation cap",
#     "category": "Objects",
#     "aliases": [
#         "mortar_board"
#     ],
#     "tags": [
#         "education",
#         "college",
#         "university",
#         "graduation"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:mortar_board: `:mortar_board:`
') }}
{{ markdown(title="🧢 billed cap" type="markdown", code='

<!--
# 🧢 billed cap
#
# {
#     "emoji": "\ud83e\udde2",
#     "description": "billed cap",
#     "category": "Objects",
#     "aliases": [
#         "billed_cap"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:billed_cap: `:billed_cap:`
') }}
{{ markdown(title="🪖 military helmet" type="markdown", code='

<!--
# 🪖 military helmet
#
# {
#     "emoji": "\ud83e\ude96",
#     "description": "military helmet",
#     "category": "Objects",
#     "aliases": [
#         "military_helmet"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:military_helmet: `:military_helmet:`
') }}
{{ markdown(title="⛑️ rescue worker’s helmet" type="markdown", code='

<!--
# ⛑️ rescue worker’s helmet
#
# {
#     "emoji": "\u26d1\ufe0f",
#     "description": "rescue worker\u2019s helmet",
#     "category": "Objects",
#     "aliases": [
#         "rescue_worker_helmet"
#     ],
#     "tags": [],
#     "unicode_version": "5.2",
#     "ios_version": "9.1"
# }
-->

:rescue_worker_helmet: `:rescue_worker_helmet:`
') }}
{{ markdown(title="📿 prayer beads" type="markdown", code='

<!--
# 📿 prayer beads
#
# {
#     "emoji": "\ud83d\udcff",
#     "description": "prayer beads",
#     "category": "Objects",
#     "aliases": [
#         "prayer_beads"
#     ],
#     "tags": [],
#     "unicode_version": "8.0",
#     "ios_version": "9.1"
# }
-->

:prayer_beads: `:prayer_beads:`
') }}
{{ markdown(title="💄 lipstick" type="markdown", code='

<!--
# 💄 lipstick
#
# {
#     "emoji": "\ud83d\udc84",
#     "description": "lipstick",
#     "category": "Objects",
#     "aliases": [
#         "lipstick"
#     ],
#     "tags": [
#         "makeup"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:lipstick: `:lipstick:`
') }}
{{ markdown(title="💍 ring" type="markdown", code='

<!--
# 💍 ring
#
# {
#     "emoji": "\ud83d\udc8d",
#     "description": "ring",
#     "category": "Objects",
#     "aliases": [
#         "ring"
#     ],
#     "tags": [
#         "wedding",
#         "marriage",
#         "engaged"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:ring: `:ring:`
') }}
{{ markdown(title="💎 gem stone" type="markdown", code='

<!--
# 💎 gem stone
#
# {
#     "emoji": "\ud83d\udc8e",
#     "description": "gem stone",
#     "category": "Objects",
#     "aliases": [
#         "gem"
#     ],
#     "tags": [
#         "diamond"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:gem: `:gem:`
') }}
{{ markdown(title="🔇 muted speaker" type="markdown", code='

<!--
# 🔇 muted speaker
#
# {
#     "emoji": "\ud83d\udd07",
#     "description": "muted speaker",
#     "category": "Objects",
#     "aliases": [
#         "mute"
#     ],
#     "tags": [
#         "sound",
#         "volume"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:mute: `:mute:`
') }}
{{ markdown(title="🔈 speaker low volume" type="markdown", code='

<!--
# 🔈 speaker low volume
#
# {
#     "emoji": "\ud83d\udd08",
#     "description": "speaker low volume",
#     "category": "Objects",
#     "aliases": [
#         "speaker"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:speaker: `:speaker:`
') }}
{{ markdown(title="🔉 speaker medium volume" type="markdown", code='

<!--
# 🔉 speaker medium volume
#
# {
#     "emoji": "\ud83d\udd09",
#     "description": "speaker medium volume",
#     "category": "Objects",
#     "aliases": [
#         "sound"
#     ],
#     "tags": [
#         "volume"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:sound: `:sound:`
') }}
{{ markdown(title="🔊 speaker high volume" type="markdown", code='

<!--
# 🔊 speaker high volume
#
# {
#     "emoji": "\ud83d\udd0a",
#     "description": "speaker high volume",
#     "category": "Objects",
#     "aliases": [
#         "loud_sound"
#     ],
#     "tags": [
#         "volume"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:loud_sound: `:loud_sound:`
') }}
{{ markdown(title="📢 loudspeaker" type="markdown", code='

<!--
# 📢 loudspeaker
#
# {
#     "emoji": "\ud83d\udce2",
#     "description": "loudspeaker",
#     "category": "Objects",
#     "aliases": [
#         "loudspeaker"
#     ],
#     "tags": [
#         "announcement"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:loudspeaker: `:loudspeaker:`
') }}
{{ markdown(title="📣 megaphone" type="markdown", code='

<!--
# 📣 megaphone
#
# {
#     "emoji": "\ud83d\udce3",
#     "description": "megaphone",
#     "category": "Objects",
#     "aliases": [
#         "mega"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:mega: `:mega:`
') }}
{{ markdown(title="📯 postal horn" type="markdown", code='

<!--
# 📯 postal horn
#
# {
#     "emoji": "\ud83d\udcef",
#     "description": "postal horn",
#     "category": "Objects",
#     "aliases": [
#         "postal_horn"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:postal_horn: `:postal_horn:`
') }}
{{ markdown(title="🔔 bell" type="markdown", code='

<!--
# 🔔 bell
#
# {
#     "emoji": "\ud83d\udd14",
#     "description": "bell",
#     "category": "Objects",
#     "aliases": [
#         "bell"
#     ],
#     "tags": [
#         "sound",
#         "notification"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:bell: `:bell:`
') }}
{{ markdown(title="🔕 bell with slash" type="markdown", code='

<!--
# 🔕 bell with slash
#
# {
#     "emoji": "\ud83d\udd15",
#     "description": "bell with slash",
#     "category": "Objects",
#     "aliases": [
#         "no_bell"
#     ],
#     "tags": [
#         "volume",
#         "off"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:no_bell: `:no_bell:`
') }}
{{ markdown(title="🎼 musical score" type="markdown", code='

<!--
# 🎼 musical score
#
# {
#     "emoji": "\ud83c\udfbc",
#     "description": "musical score",
#     "category": "Objects",
#     "aliases": [
#         "musical_score"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:musical_score: `:musical_score:`
') }}
{{ markdown(title="🎵 musical note" type="markdown", code='

<!--
# 🎵 musical note
#
# {
#     "emoji": "\ud83c\udfb5",
#     "description": "musical note",
#     "category": "Objects",
#     "aliases": [
#         "musical_note"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:musical_note: `:musical_note:`
') }}
{{ markdown(title="🎶 musical notes" type="markdown", code='

<!--
# 🎶 musical notes
#
# {
#     "emoji": "\ud83c\udfb6",
#     "description": "musical notes",
#     "category": "Objects",
#     "aliases": [
#         "notes"
#     ],
#     "tags": [
#         "music"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:notes: `:notes:`
') }}
{{ markdown(title="🎙️ studio microphone" type="markdown", code='

<!--
# 🎙️ studio microphone
#
# {
#     "emoji": "\ud83c\udf99\ufe0f",
#     "description": "studio microphone",
#     "category": "Objects",
#     "aliases": [
#         "studio_microphone"
#     ],
#     "tags": [
#         "podcast"
#     ],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:studio_microphone: `:studio_microphone:`
') }}
{{ markdown(title="🎚️ level slider" type="markdown", code='

<!--
# 🎚️ level slider
#
# {
#     "emoji": "\ud83c\udf9a\ufe0f",
#     "description": "level slider",
#     "category": "Objects",
#     "aliases": [
#         "level_slider"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:level_slider: `:level_slider:`
') }}
{{ markdown(title="🎛️ control knobs" type="markdown", code='

<!--
# 🎛️ control knobs
#
# {
#     "emoji": "\ud83c\udf9b\ufe0f",
#     "description": "control knobs",
#     "category": "Objects",
#     "aliases": [
#         "control_knobs"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:control_knobs: `:control_knobs:`
') }}
{{ markdown(title="🎤 microphone" type="markdown", code='

<!--
# 🎤 microphone
#
# {
#     "emoji": "\ud83c\udfa4",
#     "description": "microphone",
#     "category": "Objects",
#     "aliases": [
#         "microphone"
#     ],
#     "tags": [
#         "sing"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:microphone: `:microphone:`
') }}
{{ markdown(title="🎧 headphone" type="markdown", code='

<!--
# 🎧 headphone
#
# {
#     "emoji": "\ud83c\udfa7",
#     "description": "headphone",
#     "category": "Objects",
#     "aliases": [
#         "headphones"
#     ],
#     "tags": [
#         "music",
#         "earphones"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:headphones: `:headphones:`
') }}
{{ markdown(title="📻 radio" type="markdown", code='

<!--
# 📻 radio
#
# {
#     "emoji": "\ud83d\udcfb",
#     "description": "radio",
#     "category": "Objects",
#     "aliases": [
#         "radio"
#     ],
#     "tags": [
#         "podcast"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:radio: `:radio:`
') }}
{{ markdown(title="🎷 saxophone" type="markdown", code='

<!--
# 🎷 saxophone
#
# {
#     "emoji": "\ud83c\udfb7",
#     "description": "saxophone",
#     "category": "Objects",
#     "aliases": [
#         "saxophone"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:saxophone: `:saxophone:`
') }}
{{ markdown(title="🪗 accordion" type="markdown", code='

<!--
# 🪗 accordion
#
# {
#     "emoji": "\ud83e\ude97",
#     "description": "accordion",
#     "category": "Objects",
#     "aliases": [
#         "accordion"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:accordion: `:accordion:`
') }}
{{ markdown(title="🎸 guitar" type="markdown", code='

<!--
# 🎸 guitar
#
# {
#     "emoji": "\ud83c\udfb8",
#     "description": "guitar",
#     "category": "Objects",
#     "aliases": [
#         "guitar"
#     ],
#     "tags": [
#         "rock"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:guitar: `:guitar:`
') }}
{{ markdown(title="🎹 musical keyboard" type="markdown", code='

<!--
# 🎹 musical keyboard
#
# {
#     "emoji": "\ud83c\udfb9",
#     "description": "musical keyboard",
#     "category": "Objects",
#     "aliases": [
#         "musical_keyboard"
#     ],
#     "tags": [
#         "piano"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:musical_keyboard: `:musical_keyboard:`
') }}
{{ markdown(title="🎺 trumpet" type="markdown", code='

<!--
# 🎺 trumpet
#
# {
#     "emoji": "\ud83c\udfba",
#     "description": "trumpet",
#     "category": "Objects",
#     "aliases": [
#         "trumpet"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:trumpet: `:trumpet:`
') }}
{{ markdown(title="🎻 violin" type="markdown", code='

<!--
# 🎻 violin
#
# {
#     "emoji": "\ud83c\udfbb",
#     "description": "violin",
#     "category": "Objects",
#     "aliases": [
#         "violin"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:violin: `:violin:`
') }}
{{ markdown(title="🪕 banjo" type="markdown", code='

<!--
# 🪕 banjo
#
# {
#     "emoji": "\ud83e\ude95",
#     "description": "banjo",
#     "category": "Objects",
#     "aliases": [
#         "banjo"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:banjo: `:banjo:`
') }}
{{ markdown(title="🥁 drum" type="markdown", code='

<!--
# 🥁 drum
#
# {
#     "emoji": "\ud83e\udd41",
#     "description": "drum",
#     "category": "Objects",
#     "aliases": [
#         "drum"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "10.2"
# }
-->

:drum: `:drum:`
') }}
{{ markdown(title="🪘 long drum" type="markdown", code='

<!--
# 🪘 long drum
#
# {
#     "emoji": "\ud83e\ude98",
#     "description": "long drum",
#     "category": "Objects",
#     "aliases": [
#         "long_drum"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:long_drum: `:long_drum:`
') }}
{{ markdown(title="🪇 maracas" type="markdown", code='

<!--
# 🪇 maracas
#
# {
#     "emoji": "\ud83e\ude87",
#     "description": "maracas",
#     "category": "Objects",
#     "aliases": [
#         "maracas"
#     ],
#     "tags": [
#         "shaker"
#     ],
#     "unicode_version": "15.0",
#     "ios_version": "16.4"
# }
-->

:maracas: `:maracas:`
') }}
{{ markdown(title="🪈 flute" type="markdown", code='

<!--
# 🪈 flute
#
# {
#     "emoji": "\ud83e\ude88",
#     "description": "flute",
#     "category": "Objects",
#     "aliases": [
#         "flute"
#     ],
#     "tags": [
#         "recorder"
#     ],
#     "unicode_version": "15.0",
#     "ios_version": "16.4"
# }
-->

:flute: `:flute:`
') }}
{{ markdown(title="📱 mobile phone" type="markdown", code='

<!--
# 📱 mobile phone
#
# {
#     "emoji": "\ud83d\udcf1",
#     "description": "mobile phone",
#     "category": "Objects",
#     "aliases": [
#         "iphone"
#     ],
#     "tags": [
#         "smartphone",
#         "mobile"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:iphone: `:iphone:`
') }}
{{ markdown(title="📲 mobile phone with arrow" type="markdown", code='

<!--
# 📲 mobile phone with arrow
#
# {
#     "emoji": "\ud83d\udcf2",
#     "description": "mobile phone with arrow",
#     "category": "Objects",
#     "aliases": [
#         "calling"
#     ],
#     "tags": [
#         "call",
#         "incoming"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:calling: `:calling:`
') }}
{{ markdown(title="☎️ telephone" type="markdown", code='

<!--
# ☎️ telephone
#
# {
#     "emoji": "\u260e\ufe0f",
#     "description": "telephone",
#     "category": "Objects",
#     "aliases": [
#         "phone",
#         "telephone"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:phone: `:phone:`

:telephone: `:telephone:`
') }}
{{ markdown(title="📞 telephone receiver" type="markdown", code='

<!--
# 📞 telephone receiver
#
# {
#     "emoji": "\ud83d\udcde",
#     "description": "telephone receiver",
#     "category": "Objects",
#     "aliases": [
#         "telephone_receiver"
#     ],
#     "tags": [
#         "phone",
#         "call"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:telephone_receiver: `:telephone_receiver:`
') }}
{{ markdown(title="📟 pager" type="markdown", code='

<!--
# 📟 pager
#
# {
#     "emoji": "\ud83d\udcdf",
#     "description": "pager",
#     "category": "Objects",
#     "aliases": [
#         "pager"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:pager: `:pager:`
') }}
{{ markdown(title="📠 fax machine" type="markdown", code='

<!--
# 📠 fax machine
#
# {
#     "emoji": "\ud83d\udce0",
#     "description": "fax machine",
#     "category": "Objects",
#     "aliases": [
#         "fax"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:fax: `:fax:`
') }}
{{ markdown(title="🔋 battery" type="markdown", code='

<!--
# 🔋 battery
#
# {
#     "emoji": "\ud83d\udd0b",
#     "description": "battery",
#     "category": "Objects",
#     "aliases": [
#         "battery"
#     ],
#     "tags": [
#         "power"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:battery: `:battery:`
') }}
{{ markdown(title="🪫 low battery" type="markdown", code='

<!--
# 🪫 low battery
#
# {
#     "emoji": "\ud83e\udeab",
#     "description": "low battery",
#     "category": "Objects",
#     "aliases": [
#         "low_battery"
#     ],
#     "tags": [],
#     "unicode_version": "14.0",
#     "ios_version": "15.4"
# }
-->

:low_battery: `:low_battery:`
') }}
{{ markdown(title="🔌 electric plug" type="markdown", code='

<!--
# 🔌 electric plug
#
# {
#     "emoji": "\ud83d\udd0c",
#     "description": "electric plug",
#     "category": "Objects",
#     "aliases": [
#         "electric_plug"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:electric_plug: `:electric_plug:`
') }}
{{ markdown(title="💻 laptop" type="markdown", code='

<!--
# 💻 laptop
#
# {
#     "emoji": "\ud83d\udcbb",
#     "description": "laptop",
#     "category": "Objects",
#     "aliases": [
#         "computer"
#     ],
#     "tags": [
#         "desktop",
#         "screen"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:computer: `:computer:`
') }}
{{ markdown(title="🖥️ desktop computer" type="markdown", code='

<!--
# 🖥️ desktop computer
#
# {
#     "emoji": "\ud83d\udda5\ufe0f",
#     "description": "desktop computer",
#     "category": "Objects",
#     "aliases": [
#         "desktop_computer"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:desktop_computer: `:desktop_computer:`
') }}
{{ markdown(title="🖨️ printer" type="markdown", code='

<!--
# 🖨️ printer
#
# {
#     "emoji": "\ud83d\udda8\ufe0f",
#     "description": "printer",
#     "category": "Objects",
#     "aliases": [
#         "printer"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:printer: `:printer:`
') }}
{{ markdown(title="⌨️ keyboard" type="markdown", code='

<!--
# ⌨️ keyboard
#
# {
#     "emoji": "\u2328\ufe0f",
#     "description": "keyboard",
#     "category": "Objects",
#     "aliases": [
#         "keyboard"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "9.1"
# }
-->

:keyboard: `:keyboard:`
') }}
{{ markdown(title="🖱️ computer mouse" type="markdown", code='

<!--
# 🖱️ computer mouse
#
# {
#     "emoji": "\ud83d\uddb1\ufe0f",
#     "description": "computer mouse",
#     "category": "Objects",
#     "aliases": [
#         "computer_mouse"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:computer_mouse: `:computer_mouse:`
') }}
{{ markdown(title="🖲️ trackball" type="markdown", code='

<!--
# 🖲️ trackball
#
# {
#     "emoji": "\ud83d\uddb2\ufe0f",
#     "description": "trackball",
#     "category": "Objects",
#     "aliases": [
#         "trackball"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:trackball: `:trackball:`
') }}
{{ markdown(title="💽 computer disk" type="markdown", code='

<!--
# 💽 computer disk
#
# {
#     "emoji": "\ud83d\udcbd",
#     "description": "computer disk",
#     "category": "Objects",
#     "aliases": [
#         "minidisc"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:minidisc: `:minidisc:`
') }}
{{ markdown(title="💾 floppy disk" type="markdown", code='

<!--
# 💾 floppy disk
#
# {
#     "emoji": "\ud83d\udcbe",
#     "description": "floppy disk",
#     "category": "Objects",
#     "aliases": [
#         "floppy_disk"
#     ],
#     "tags": [
#         "save"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:floppy_disk: `:floppy_disk:`
') }}
{{ markdown(title="💿 optical disk" type="markdown", code='

<!--
# 💿 optical disk
#
# {
#     "emoji": "\ud83d\udcbf",
#     "description": "optical disk",
#     "category": "Objects",
#     "aliases": [
#         "cd"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:cd: `:cd:`
') }}
{{ markdown(title="📀 dvd" type="markdown", code='

<!--
# 📀 dvd
#
# {
#     "emoji": "\ud83d\udcc0",
#     "description": "dvd",
#     "category": "Objects",
#     "aliases": [
#         "dvd"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:dvd: `:dvd:`
') }}
{{ markdown(title="🧮 abacus" type="markdown", code='

<!--
# 🧮 abacus
#
# {
#     "emoji": "\ud83e\uddee",
#     "description": "abacus",
#     "category": "Objects",
#     "aliases": [
#         "abacus"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:abacus: `:abacus:`
') }}
{{ markdown(title="🎥 movie camera" type="markdown", code='

<!--
# 🎥 movie camera
#
# {
#     "emoji": "\ud83c\udfa5",
#     "description": "movie camera",
#     "category": "Objects",
#     "aliases": [
#         "movie_camera"
#     ],
#     "tags": [
#         "film",
#         "video"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:movie_camera: `:movie_camera:`
') }}
{{ markdown(title="🎞️ film frames" type="markdown", code='

<!--
# 🎞️ film frames
#
# {
#     "emoji": "\ud83c\udf9e\ufe0f",
#     "description": "film frames",
#     "category": "Objects",
#     "aliases": [
#         "film_strip"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:film_strip: `:film_strip:`
') }}
{{ markdown(title="📽️ film projector" type="markdown", code='

<!--
# 📽️ film projector
#
# {
#     "emoji": "\ud83d\udcfd\ufe0f",
#     "description": "film projector",
#     "category": "Objects",
#     "aliases": [
#         "film_projector"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:film_projector: `:film_projector:`
') }}
{{ markdown(title="🎬 clapper board" type="markdown", code='

<!--
# 🎬 clapper board
#
# {
#     "emoji": "\ud83c\udfac",
#     "description": "clapper board",
#     "category": "Objects",
#     "aliases": [
#         "clapper"
#     ],
#     "tags": [
#         "film"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:clapper: `:clapper:`
') }}
{{ markdown(title="📺 television" type="markdown", code='

<!--
# 📺 television
#
# {
#     "emoji": "\ud83d\udcfa",
#     "description": "television",
#     "category": "Objects",
#     "aliases": [
#         "tv"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:tv: `:tv:`
') }}
{{ markdown(title="📷 camera" type="markdown", code='

<!--
# 📷 camera
#
# {
#     "emoji": "\ud83d\udcf7",
#     "description": "camera",
#     "category": "Objects",
#     "aliases": [
#         "camera"
#     ],
#     "tags": [
#         "photo"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:camera: `:camera:`
') }}
{{ markdown(title="📸 camera with flash" type="markdown", code='

<!--
# 📸 camera with flash
#
# {
#     "emoji": "\ud83d\udcf8",
#     "description": "camera with flash",
#     "category": "Objects",
#     "aliases": [
#         "camera_flash"
#     ],
#     "tags": [
#         "photo"
#     ],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:camera_flash: `:camera_flash:`
') }}
{{ markdown(title="📹 video camera" type="markdown", code='

<!--
# 📹 video camera
#
# {
#     "emoji": "\ud83d\udcf9",
#     "description": "video camera",
#     "category": "Objects",
#     "aliases": [
#         "video_camera"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:video_camera: `:video_camera:`
') }}
{{ markdown(title="📼 videocassette" type="markdown", code='

<!--
# 📼 videocassette
#
# {
#     "emoji": "\ud83d\udcfc",
#     "description": "videocassette",
#     "category": "Objects",
#     "aliases": [
#         "vhs"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:vhs: `:vhs:`
') }}
{{ markdown(title="🔍 magnifying glass tilted left" type="markdown", code='

<!--
# 🔍 magnifying glass tilted left
#
# {
#     "emoji": "\ud83d\udd0d",
#     "description": "magnifying glass tilted left",
#     "category": "Objects",
#     "aliases": [
#         "mag"
#     ],
#     "tags": [
#         "search",
#         "zoom"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:mag: `:mag:`
') }}
{{ markdown(title="🔎 magnifying glass tilted right" type="markdown", code='

<!--
# 🔎 magnifying glass tilted right
#
# {
#     "emoji": "\ud83d\udd0e",
#     "description": "magnifying glass tilted right",
#     "category": "Objects",
#     "aliases": [
#         "mag_right"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:mag_right: `:mag_right:`
') }}
{{ markdown(title="🕯️ candle" type="markdown", code='

<!--
# 🕯️ candle
#
# {
#     "emoji": "\ud83d\udd6f\ufe0f",
#     "description": "candle",
#     "category": "Objects",
#     "aliases": [
#         "candle"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:candle: `:candle:`
') }}
{{ markdown(title="💡 light bulb" type="markdown", code='

<!--
# 💡 light bulb
#
# {
#     "emoji": "\ud83d\udca1",
#     "description": "light bulb",
#     "category": "Objects",
#     "aliases": [
#         "bulb"
#     ],
#     "tags": [
#         "idea",
#         "light"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:bulb: `:bulb:`
') }}
{{ markdown(title="🔦 flashlight" type="markdown", code='

<!--
# 🔦 flashlight
#
# {
#     "emoji": "\ud83d\udd26",
#     "description": "flashlight",
#     "category": "Objects",
#     "aliases": [
#         "flashlight"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:flashlight: `:flashlight:`
') }}
{{ markdown(title="🏮 red paper lantern" type="markdown", code='

<!--
# 🏮 red paper lantern
#
# {
#     "emoji": "\ud83c\udfee",
#     "description": "red paper lantern",
#     "category": "Objects",
#     "aliases": [
#         "izakaya_lantern",
#         "lantern"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:izakaya_lantern: `:izakaya_lantern:`

:lantern: `:lantern:`
') }}
{{ markdown(title="🪔 diya lamp" type="markdown", code='

<!--
# 🪔 diya lamp
#
# {
#     "emoji": "\ud83e\ude94",
#     "description": "diya lamp",
#     "category": "Objects",
#     "aliases": [
#         "diya_lamp"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:diya_lamp: `:diya_lamp:`
') }}
{{ markdown(title="📔 notebook with decorative cover" type="markdown", code='

<!--
# 📔 notebook with decorative cover
#
# {
#     "emoji": "\ud83d\udcd4",
#     "description": "notebook with decorative cover",
#     "category": "Objects",
#     "aliases": [
#         "notebook_with_decorative_cover"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:notebook_with_decorative_cover: `:notebook_with_decorative_cover:`
') }}
{{ markdown(title="📕 closed book" type="markdown", code='

<!--
# 📕 closed book
#
# {
#     "emoji": "\ud83d\udcd5",
#     "description": "closed book",
#     "category": "Objects",
#     "aliases": [
#         "closed_book"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:closed_book: `:closed_book:`
') }}
{{ markdown(title="📖 open book" type="markdown", code='

<!--
# 📖 open book
#
# {
#     "emoji": "\ud83d\udcd6",
#     "description": "open book",
#     "category": "Objects",
#     "aliases": [
#         "book",
#         "open_book"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:book: `:book:`

:open_book: `:open_book:`
') }}
{{ markdown(title="📗 green book" type="markdown", code='

<!--
# 📗 green book
#
# {
#     "emoji": "\ud83d\udcd7",
#     "description": "green book",
#     "category": "Objects",
#     "aliases": [
#         "green_book"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:green_book: `:green_book:`
') }}
{{ markdown(title="📘 blue book" type="markdown", code='

<!--
# 📘 blue book
#
# {
#     "emoji": "\ud83d\udcd8",
#     "description": "blue book",
#     "category": "Objects",
#     "aliases": [
#         "blue_book"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:blue_book: `:blue_book:`
') }}
{{ markdown(title="📙 orange book" type="markdown", code='

<!--
# 📙 orange book
#
# {
#     "emoji": "\ud83d\udcd9",
#     "description": "orange book",
#     "category": "Objects",
#     "aliases": [
#         "orange_book"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:orange_book: `:orange_book:`
') }}
{{ markdown(title="📚 books" type="markdown", code='

<!--
# 📚 books
#
# {
#     "emoji": "\ud83d\udcda",
#     "description": "books",
#     "category": "Objects",
#     "aliases": [
#         "books"
#     ],
#     "tags": [
#         "library"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:books: `:books:`
') }}
{{ markdown(title="📓 notebook" type="markdown", code='

<!--
# 📓 notebook
#
# {
#     "emoji": "\ud83d\udcd3",
#     "description": "notebook",
#     "category": "Objects",
#     "aliases": [
#         "notebook"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:notebook: `:notebook:`
') }}
{{ markdown(title="📒 ledger" type="markdown", code='

<!--
# 📒 ledger
#
# {
#     "emoji": "\ud83d\udcd2",
#     "description": "ledger",
#     "category": "Objects",
#     "aliases": [
#         "ledger"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:ledger: `:ledger:`
') }}
{{ markdown(title="📃 page with curl" type="markdown", code='

<!--
# 📃 page with curl
#
# {
#     "emoji": "\ud83d\udcc3",
#     "description": "page with curl",
#     "category": "Objects",
#     "aliases": [
#         "page_with_curl"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:page_with_curl: `:page_with_curl:`
') }}
{{ markdown(title="📜 scroll" type="markdown", code='

<!--
# 📜 scroll
#
# {
#     "emoji": "\ud83d\udcdc",
#     "description": "scroll",
#     "category": "Objects",
#     "aliases": [
#         "scroll"
#     ],
#     "tags": [
#         "document"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:scroll: `:scroll:`
') }}
{{ markdown(title="📄 page facing up" type="markdown", code='

<!--
# 📄 page facing up
#
# {
#     "emoji": "\ud83d\udcc4",
#     "description": "page facing up",
#     "category": "Objects",
#     "aliases": [
#         "page_facing_up"
#     ],
#     "tags": [
#         "document"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:page_facing_up: `:page_facing_up:`
') }}
{{ markdown(title="📰 newspaper" type="markdown", code='

<!--
# 📰 newspaper
#
# {
#     "emoji": "\ud83d\udcf0",
#     "description": "newspaper",
#     "category": "Objects",
#     "aliases": [
#         "newspaper"
#     ],
#     "tags": [
#         "press"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:newspaper: `:newspaper:`
') }}
{{ markdown(title="🗞️ rolled-up newspaper" type="markdown", code='

<!--
# 🗞️ rolled-up newspaper
#
# {
#     "emoji": "\ud83d\uddde\ufe0f",
#     "description": "rolled-up newspaper",
#     "category": "Objects",
#     "aliases": [
#         "newspaper_roll"
#     ],
#     "tags": [
#         "press"
#     ],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:newspaper_roll: `:newspaper_roll:`
') }}
{{ markdown(title="📑 bookmark tabs" type="markdown", code='

<!--
# 📑 bookmark tabs
#
# {
#     "emoji": "\ud83d\udcd1",
#     "description": "bookmark tabs",
#     "category": "Objects",
#     "aliases": [
#         "bookmark_tabs"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:bookmark_tabs: `:bookmark_tabs:`
') }}
{{ markdown(title="🔖 bookmark" type="markdown", code='

<!--
# 🔖 bookmark
#
# {
#     "emoji": "\ud83d\udd16",
#     "description": "bookmark",
#     "category": "Objects",
#     "aliases": [
#         "bookmark"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:bookmark: `:bookmark:`
') }}
{{ markdown(title="🏷️ label" type="markdown", code='

<!--
# 🏷️ label
#
# {
#     "emoji": "\ud83c\udff7\ufe0f",
#     "description": "label",
#     "category": "Objects",
#     "aliases": [
#         "label"
#     ],
#     "tags": [
#         "tag"
#     ],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:label: `:label:`
') }}
{{ markdown(title="💰 money bag" type="markdown", code='

<!--
# 💰 money bag
#
# {
#     "emoji": "\ud83d\udcb0",
#     "description": "money bag",
#     "category": "Objects",
#     "aliases": [
#         "moneybag"
#     ],
#     "tags": [
#         "dollar",
#         "cream"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:moneybag: `:moneybag:`
') }}
{{ markdown(title="🪙 coin" type="markdown", code='

<!--
# 🪙 coin
#
# {
#     "emoji": "\ud83e\ude99",
#     "description": "coin",
#     "category": "Objects",
#     "aliases": [
#         "coin"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:coin: `:coin:`
') }}
{{ markdown(title="💴 yen banknote" type="markdown", code='

<!--
# 💴 yen banknote
#
# {
#     "emoji": "\ud83d\udcb4",
#     "description": "yen banknote",
#     "category": "Objects",
#     "aliases": [
#         "yen"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:yen: `:yen:`
') }}
{{ markdown(title="💵 dollar banknote" type="markdown", code='

<!--
# 💵 dollar banknote
#
# {
#     "emoji": "\ud83d\udcb5",
#     "description": "dollar banknote",
#     "category": "Objects",
#     "aliases": [
#         "dollar"
#     ],
#     "tags": [
#         "money"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:dollar: `:dollar:`
') }}
{{ markdown(title="💶 euro banknote" type="markdown", code='

<!--
# 💶 euro banknote
#
# {
#     "emoji": "\ud83d\udcb6",
#     "description": "euro banknote",
#     "category": "Objects",
#     "aliases": [
#         "euro"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:euro: `:euro:`
') }}
{{ markdown(title="💷 pound banknote" type="markdown", code='

<!--
# 💷 pound banknote
#
# {
#     "emoji": "\ud83d\udcb7",
#     "description": "pound banknote",
#     "category": "Objects",
#     "aliases": [
#         "pound"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:pound: `:pound:`
') }}
{{ markdown(title="💸 money with wings" type="markdown", code='

<!--
# 💸 money with wings
#
# {
#     "emoji": "\ud83d\udcb8",
#     "description": "money with wings",
#     "category": "Objects",
#     "aliases": [
#         "money_with_wings"
#     ],
#     "tags": [
#         "dollar"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:money_with_wings: `:money_with_wings:`
') }}
{{ markdown(title="💳 credit card" type="markdown", code='

<!--
# 💳 credit card
#
# {
#     "emoji": "\ud83d\udcb3",
#     "description": "credit card",
#     "category": "Objects",
#     "aliases": [
#         "credit_card"
#     ],
#     "tags": [
#         "subscription"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:credit_card: `:credit_card:`
') }}
{{ markdown(title="🧾 receipt" type="markdown", code='

<!--
# 🧾 receipt
#
# {
#     "emoji": "\ud83e\uddfe",
#     "description": "receipt",
#     "category": "Objects",
#     "aliases": [
#         "receipt"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:receipt: `:receipt:`
') }}
{{ markdown(title="💹 chart increasing with yen" type="markdown", code='

<!--
# 💹 chart increasing with yen
#
# {
#     "emoji": "\ud83d\udcb9",
#     "description": "chart increasing with yen",
#     "category": "Objects",
#     "aliases": [
#         "chart"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:chart: `:chart:`
') }}
{{ markdown(title="✉️ envelope" type="markdown", code='

<!--
# ✉️ envelope
#
# {
#     "emoji": "\u2709\ufe0f",
#     "description": "envelope",
#     "category": "Objects",
#     "aliases": [
#         "envelope"
#     ],
#     "tags": [
#         "letter",
#         "email"
#     ],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:envelope: `:envelope:`
') }}
{{ markdown(title="📧 e-mail" type="markdown", code='

<!--
# 📧 e-mail
#
# {
#     "emoji": "\ud83d\udce7",
#     "description": "e-mail",
#     "category": "Objects",
#     "aliases": [
#         "email",
#         "e-mail"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:email: `:email:`

:e-mail: `:e-mail:`
') }}
{{ markdown(title="📨 incoming envelope" type="markdown", code='

<!--
# 📨 incoming envelope
#
# {
#     "emoji": "\ud83d\udce8",
#     "description": "incoming envelope",
#     "category": "Objects",
#     "aliases": [
#         "incoming_envelope"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:incoming_envelope: `:incoming_envelope:`
') }}
{{ markdown(title="📩 envelope with arrow" type="markdown", code='

<!--
# 📩 envelope with arrow
#
# {
#     "emoji": "\ud83d\udce9",
#     "description": "envelope with arrow",
#     "category": "Objects",
#     "aliases": [
#         "envelope_with_arrow"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:envelope_with_arrow: `:envelope_with_arrow:`
') }}
{{ markdown(title="📤 outbox tray" type="markdown", code='

<!--
# 📤 outbox tray
#
# {
#     "emoji": "\ud83d\udce4",
#     "description": "outbox tray",
#     "category": "Objects",
#     "aliases": [
#         "outbox_tray"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:outbox_tray: `:outbox_tray:`
') }}
{{ markdown(title="📥 inbox tray" type="markdown", code='

<!--
# 📥 inbox tray
#
# {
#     "emoji": "\ud83d\udce5",
#     "description": "inbox tray",
#     "category": "Objects",
#     "aliases": [
#         "inbox_tray"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:inbox_tray: `:inbox_tray:`
') }}
{{ markdown(title="📦 package" type="markdown", code='

<!--
# 📦 package
#
# {
#     "emoji": "\ud83d\udce6",
#     "description": "package",
#     "category": "Objects",
#     "aliases": [
#         "package"
#     ],
#     "tags": [
#         "shipping"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:package: `:package:`
') }}
{{ markdown(title="📫 closed mailbox with raised flag" type="markdown", code='

<!--
# 📫 closed mailbox with raised flag
#
# {
#     "emoji": "\ud83d\udceb",
#     "description": "closed mailbox with raised flag",
#     "category": "Objects",
#     "aliases": [
#         "mailbox"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:mailbox: `:mailbox:`
') }}
{{ markdown(title="📪 closed mailbox with lowered flag" type="markdown", code='

<!--
# 📪 closed mailbox with lowered flag
#
# {
#     "emoji": "\ud83d\udcea",
#     "description": "closed mailbox with lowered flag",
#     "category": "Objects",
#     "aliases": [
#         "mailbox_closed"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:mailbox_closed: `:mailbox_closed:`
') }}
{{ markdown(title="📬 open mailbox with raised flag" type="markdown", code='

<!--
# 📬 open mailbox with raised flag
#
# {
#     "emoji": "\ud83d\udcec",
#     "description": "open mailbox with raised flag",
#     "category": "Objects",
#     "aliases": [
#         "mailbox_with_mail"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:mailbox_with_mail: `:mailbox_with_mail:`
') }}
{{ markdown(title="📭 open mailbox with lowered flag" type="markdown", code='

<!--
# 📭 open mailbox with lowered flag
#
# {
#     "emoji": "\ud83d\udced",
#     "description": "open mailbox with lowered flag",
#     "category": "Objects",
#     "aliases": [
#         "mailbox_with_no_mail"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:mailbox_with_no_mail: `:mailbox_with_no_mail:`
') }}
{{ markdown(title="📮 postbox" type="markdown", code='

<!--
# 📮 postbox
#
# {
#     "emoji": "\ud83d\udcee",
#     "description": "postbox",
#     "category": "Objects",
#     "aliases": [
#         "postbox"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:postbox: `:postbox:`
') }}
{{ markdown(title="🗳️ ballot box with ballot" type="markdown", code='

<!--
# 🗳️ ballot box with ballot
#
# {
#     "emoji": "\ud83d\uddf3\ufe0f",
#     "description": "ballot box with ballot",
#     "category": "Objects",
#     "aliases": [
#         "ballot_box"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:ballot_box: `:ballot_box:`
') }}
{{ markdown(title="✏️ pencil" type="markdown", code='

<!--
# ✏️ pencil
#
# {
#     "emoji": "\u270f\ufe0f",
#     "description": "pencil",
#     "category": "Objects",
#     "aliases": [
#         "pencil2"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:pencil2: `:pencil2:`
') }}
{{ markdown(title="✒️ black nib" type="markdown", code='

<!--
# ✒️ black nib
#
# {
#     "emoji": "\u2712\ufe0f",
#     "description": "black nib",
#     "category": "Objects",
#     "aliases": [
#         "black_nib"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:black_nib: `:black_nib:`
') }}
{{ markdown(title="🖋️ fountain pen" type="markdown", code='

<!--
# 🖋️ fountain pen
#
# {
#     "emoji": "\ud83d\udd8b\ufe0f",
#     "description": "fountain pen",
#     "category": "Objects",
#     "aliases": [
#         "fountain_pen"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:fountain_pen: `:fountain_pen:`
') }}
{{ markdown(title="🖊️ pen" type="markdown", code='

<!--
# 🖊️ pen
#
# {
#     "emoji": "\ud83d\udd8a\ufe0f",
#     "description": "pen",
#     "category": "Objects",
#     "aliases": [
#         "pen"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:pen: `:pen:`
') }}
{{ markdown(title="🖌️ paintbrush" type="markdown", code='

<!--
# 🖌️ paintbrush
#
# {
#     "emoji": "\ud83d\udd8c\ufe0f",
#     "description": "paintbrush",
#     "category": "Objects",
#     "aliases": [
#         "paintbrush"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:paintbrush: `:paintbrush:`
') }}
{{ markdown(title="🖍️ crayon" type="markdown", code='

<!--
# 🖍️ crayon
#
# {
#     "emoji": "\ud83d\udd8d\ufe0f",
#     "description": "crayon",
#     "category": "Objects",
#     "aliases": [
#         "crayon"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:crayon: `:crayon:`
') }}
{{ markdown(title="📝 memo" type="markdown", code='

<!--
# 📝 memo
#
# {
#     "emoji": "\ud83d\udcdd",
#     "description": "memo",
#     "category": "Objects",
#     "aliases": [
#         "memo",
#         "pencil"
#     ],
#     "tags": [
#         "document",
#         "note"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:memo: `:memo:`

:pencil: `:pencil:`
') }}
{{ markdown(title="💼 briefcase" type="markdown", code='

<!--
# 💼 briefcase
#
# {
#     "emoji": "\ud83d\udcbc",
#     "description": "briefcase",
#     "category": "Objects",
#     "aliases": [
#         "briefcase"
#     ],
#     "tags": [
#         "business"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:briefcase: `:briefcase:`
') }}
{{ markdown(title="📁 file folder" type="markdown", code='

<!--
# 📁 file folder
#
# {
#     "emoji": "\ud83d\udcc1",
#     "description": "file folder",
#     "category": "Objects",
#     "aliases": [
#         "file_folder"
#     ],
#     "tags": [
#         "directory"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:file_folder: `:file_folder:`
') }}
{{ markdown(title="📂 open file folder" type="markdown", code='

<!--
# 📂 open file folder
#
# {
#     "emoji": "\ud83d\udcc2",
#     "description": "open file folder",
#     "category": "Objects",
#     "aliases": [
#         "open_file_folder"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:open_file_folder: `:open_file_folder:`
') }}
{{ markdown(title="🗂️ card index dividers" type="markdown", code='

<!--
# 🗂️ card index dividers
#
# {
#     "emoji": "\ud83d\uddc2\ufe0f",
#     "description": "card index dividers",
#     "category": "Objects",
#     "aliases": [
#         "card_index_dividers"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:card_index_dividers: `:card_index_dividers:`
') }}
{{ markdown(title="📅 calendar" type="markdown", code='

<!--
# 📅 calendar
#
# {
#     "emoji": "\ud83d\udcc5",
#     "description": "calendar",
#     "category": "Objects",
#     "aliases": [
#         "date"
#     ],
#     "tags": [
#         "calendar",
#         "schedule"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:date: `:date:`
') }}
{{ markdown(title="📆 tear-off calendar" type="markdown", code='

<!--
# 📆 tear-off calendar
#
# {
#     "emoji": "\ud83d\udcc6",
#     "description": "tear-off calendar",
#     "category": "Objects",
#     "aliases": [
#         "calendar"
#     ],
#     "tags": [
#         "schedule"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:calendar: `:calendar:`
') }}
{{ markdown(title="🗒️ spiral notepad" type="markdown", code='

<!--
# 🗒️ spiral notepad
#
# {
#     "emoji": "\ud83d\uddd2\ufe0f",
#     "description": "spiral notepad",
#     "category": "Objects",
#     "aliases": [
#         "spiral_notepad"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:spiral_notepad: `:spiral_notepad:`
') }}
{{ markdown(title="🗓️ spiral calendar" type="markdown", code='

<!--
# 🗓️ spiral calendar
#
# {
#     "emoji": "\ud83d\uddd3\ufe0f",
#     "description": "spiral calendar",
#     "category": "Objects",
#     "aliases": [
#         "spiral_calendar"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:spiral_calendar: `:spiral_calendar:`
') }}
{{ markdown(title="📇 card index" type="markdown", code='

<!--
# 📇 card index
#
# {
#     "emoji": "\ud83d\udcc7",
#     "description": "card index",
#     "category": "Objects",
#     "aliases": [
#         "card_index"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:card_index: `:card_index:`
') }}
{{ markdown(title="📈 chart increasing" type="markdown", code='

<!--
# 📈 chart increasing
#
# {
#     "emoji": "\ud83d\udcc8",
#     "description": "chart increasing",
#     "category": "Objects",
#     "aliases": [
#         "chart_with_upwards_trend"
#     ],
#     "tags": [
#         "graph",
#         "metrics"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:chart_with_upwards_trend: `:chart_with_upwards_trend:`
') }}
{{ markdown(title="📉 chart decreasing" type="markdown", code='

<!--
# 📉 chart decreasing
#
# {
#     "emoji": "\ud83d\udcc9",
#     "description": "chart decreasing",
#     "category": "Objects",
#     "aliases": [
#         "chart_with_downwards_trend"
#     ],
#     "tags": [
#         "graph",
#         "metrics"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:chart_with_downwards_trend: `:chart_with_downwards_trend:`
') }}
{{ markdown(title="📊 bar chart" type="markdown", code='

<!--
# 📊 bar chart
#
# {
#     "emoji": "\ud83d\udcca",
#     "description": "bar chart",
#     "category": "Objects",
#     "aliases": [
#         "bar_chart"
#     ],
#     "tags": [
#         "stats",
#         "metrics"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:bar_chart: `:bar_chart:`
') }}
{{ markdown(title="📋 clipboard" type="markdown", code='

<!--
# 📋 clipboard
#
# {
#     "emoji": "\ud83d\udccb",
#     "description": "clipboard",
#     "category": "Objects",
#     "aliases": [
#         "clipboard"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:clipboard: `:clipboard:`
') }}
{{ markdown(title="📌 pushpin" type="markdown", code='

<!--
# 📌 pushpin
#
# {
#     "emoji": "\ud83d\udccc",
#     "description": "pushpin",
#     "category": "Objects",
#     "aliases": [
#         "pushpin"
#     ],
#     "tags": [
#         "location"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:pushpin: `:pushpin:`
') }}
{{ markdown(title="📍 round pushpin" type="markdown", code='

<!--
# 📍 round pushpin
#
# {
#     "emoji": "\ud83d\udccd",
#     "description": "round pushpin",
#     "category": "Objects",
#     "aliases": [
#         "round_pushpin"
#     ],
#     "tags": [
#         "location"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:round_pushpin: `:round_pushpin:`
') }}
{{ markdown(title="📎 paperclip" type="markdown", code='

<!--
# 📎 paperclip
#
# {
#     "emoji": "\ud83d\udcce",
#     "description": "paperclip",
#     "category": "Objects",
#     "aliases": [
#         "paperclip"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:paperclip: `:paperclip:`
') }}
{{ markdown(title="🖇️ linked paperclips" type="markdown", code='

<!--
# 🖇️ linked paperclips
#
# {
#     "emoji": "\ud83d\udd87\ufe0f",
#     "description": "linked paperclips",
#     "category": "Objects",
#     "aliases": [
#         "paperclips"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:paperclips: `:paperclips:`
') }}
{{ markdown(title="📏 straight ruler" type="markdown", code='

<!--
# 📏 straight ruler
#
# {
#     "emoji": "\ud83d\udccf",
#     "description": "straight ruler",
#     "category": "Objects",
#     "aliases": [
#         "straight_ruler"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:straight_ruler: `:straight_ruler:`
') }}
{{ markdown(title="📐 triangular ruler" type="markdown", code='

<!--
# 📐 triangular ruler
#
# {
#     "emoji": "\ud83d\udcd0",
#     "description": "triangular ruler",
#     "category": "Objects",
#     "aliases": [
#         "triangular_ruler"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:triangular_ruler: `:triangular_ruler:`
') }}
{{ markdown(title="✂️ scissors" type="markdown", code='

<!--
# ✂️ scissors
#
# {
#     "emoji": "\u2702\ufe0f",
#     "description": "scissors",
#     "category": "Objects",
#     "aliases": [
#         "scissors"
#     ],
#     "tags": [
#         "cut"
#     ],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:scissors: `:scissors:`
') }}
{{ markdown(title="🗃️ card file box" type="markdown", code='

<!--
# 🗃️ card file box
#
# {
#     "emoji": "\ud83d\uddc3\ufe0f",
#     "description": "card file box",
#     "category": "Objects",
#     "aliases": [
#         "card_file_box"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:card_file_box: `:card_file_box:`
') }}
{{ markdown(title="🗄️ file cabinet" type="markdown", code='

<!--
# 🗄️ file cabinet
#
# {
#     "emoji": "\ud83d\uddc4\ufe0f",
#     "description": "file cabinet",
#     "category": "Objects",
#     "aliases": [
#         "file_cabinet"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:file_cabinet: `:file_cabinet:`
') }}
{{ markdown(title="🗑️ wastebasket" type="markdown", code='

<!--
# 🗑️ wastebasket
#
# {
#     "emoji": "\ud83d\uddd1\ufe0f",
#     "description": "wastebasket",
#     "category": "Objects",
#     "aliases": [
#         "wastebasket"
#     ],
#     "tags": [
#         "trash"
#     ],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:wastebasket: `:wastebasket:`
') }}
{{ markdown(title="🔒 locked" type="markdown", code='

<!--
# 🔒 locked
#
# {
#     "emoji": "\ud83d\udd12",
#     "description": "locked",
#     "category": "Objects",
#     "aliases": [
#         "lock"
#     ],
#     "tags": [
#         "security",
#         "private"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:lock: `:lock:`
') }}
{{ markdown(title="🔓 unlocked" type="markdown", code='

<!--
# 🔓 unlocked
#
# {
#     "emoji": "\ud83d\udd13",
#     "description": "unlocked",
#     "category": "Objects",
#     "aliases": [
#         "unlock"
#     ],
#     "tags": [
#         "security"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:unlock: `:unlock:`
') }}
{{ markdown(title="🔏 locked with pen" type="markdown", code='

<!--
# 🔏 locked with pen
#
# {
#     "emoji": "\ud83d\udd0f",
#     "description": "locked with pen",
#     "category": "Objects",
#     "aliases": [
#         "lock_with_ink_pen"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:lock_with_ink_pen: `:lock_with_ink_pen:`
') }}
{{ markdown(title="🔐 locked with key" type="markdown", code='

<!--
# 🔐 locked with key
#
# {
#     "emoji": "\ud83d\udd10",
#     "description": "locked with key",
#     "category": "Objects",
#     "aliases": [
#         "closed_lock_with_key"
#     ],
#     "tags": [
#         "security"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:closed_lock_with_key: `:closed_lock_with_key:`
') }}
{{ markdown(title="🔑 key" type="markdown", code='

<!--
# 🔑 key
#
# {
#     "emoji": "\ud83d\udd11",
#     "description": "key",
#     "category": "Objects",
#     "aliases": [
#         "key"
#     ],
#     "tags": [
#         "lock",
#         "password"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:key: `:key:`
') }}
{{ markdown(title="🗝️ old key" type="markdown", code='

<!--
# 🗝️ old key
#
# {
#     "emoji": "\ud83d\udddd\ufe0f",
#     "description": "old key",
#     "category": "Objects",
#     "aliases": [
#         "old_key"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:old_key: `:old_key:`
') }}
{{ markdown(title="🔨 hammer" type="markdown", code='

<!--
# 🔨 hammer
#
# {
#     "emoji": "\ud83d\udd28",
#     "description": "hammer",
#     "category": "Objects",
#     "aliases": [
#         "hammer"
#     ],
#     "tags": [
#         "tool"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:hammer: `:hammer:`
') }}
{{ markdown(title="🪓 axe" type="markdown", code='

<!--
# 🪓 axe
#
# {
#     "emoji": "\ud83e\ude93",
#     "description": "axe",
#     "category": "Objects",
#     "aliases": [
#         "axe"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:axe: `:axe:`
') }}
{{ markdown(title="⛏️ pick" type="markdown", code='

<!--
# ⛏️ pick
#
# {
#     "emoji": "\u26cf\ufe0f",
#     "description": "pick",
#     "category": "Objects",
#     "aliases": [
#         "pick"
#     ],
#     "tags": [],
#     "unicode_version": "5.2",
#     "ios_version": "9.1"
# }
-->

:pick: `:pick:`
') }}
{{ markdown(title="⚒️ hammer and pick" type="markdown", code='

<!--
# ⚒️ hammer and pick
#
# {
#     "emoji": "\u2692\ufe0f",
#     "description": "hammer and pick",
#     "category": "Objects",
#     "aliases": [
#         "hammer_and_pick"
#     ],
#     "tags": [],
#     "unicode_version": "4.1",
#     "ios_version": "9.1"
# }
-->

:hammer_and_pick: `:hammer_and_pick:`
') }}
{{ markdown(title="🛠️ hammer and wrench" type="markdown", code='

<!--
# 🛠️ hammer and wrench
#
# {
#     "emoji": "\ud83d\udee0\ufe0f",
#     "description": "hammer and wrench",
#     "category": "Objects",
#     "aliases": [
#         "hammer_and_wrench"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:hammer_and_wrench: `:hammer_and_wrench:`
') }}
{{ markdown(title="🗡️ dagger" type="markdown", code='

<!--
# 🗡️ dagger
#
# {
#     "emoji": "\ud83d\udde1\ufe0f",
#     "description": "dagger",
#     "category": "Objects",
#     "aliases": [
#         "dagger"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:dagger: `:dagger:`
') }}
{{ markdown(title="⚔️ crossed swords" type="markdown", code='

<!--
# ⚔️ crossed swords
#
# {
#     "emoji": "\u2694\ufe0f",
#     "description": "crossed swords",
#     "category": "Objects",
#     "aliases": [
#         "crossed_swords"
#     ],
#     "tags": [],
#     "unicode_version": "4.1",
#     "ios_version": "9.1"
# }
-->

:crossed_swords: `:crossed_swords:`
') }}
{{ markdown(title="💣 bomb" type="markdown", code='

<!--
# 💣 bomb
#
# {
#     "emoji": "\ud83d\udca3",
#     "description": "bomb",
#     "category": "Objects",
#     "aliases": [
#         "bomb"
#     ],
#     "tags": [
#         "boom"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:bomb: `:bomb:`
') }}
{{ markdown(title="🪃 boomerang" type="markdown", code='

<!--
# 🪃 boomerang
#
# {
#     "emoji": "\ud83e\ude83",
#     "description": "boomerang",
#     "category": "Objects",
#     "aliases": [
#         "boomerang"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:boomerang: `:boomerang:`
') }}
{{ markdown(title="🏹 bow and arrow" type="markdown", code='

<!--
# 🏹 bow and arrow
#
# {
#     "emoji": "\ud83c\udff9",
#     "description": "bow and arrow",
#     "category": "Objects",
#     "aliases": [
#         "bow_and_arrow"
#     ],
#     "tags": [
#         "archery"
#     ],
#     "unicode_version": "8.0",
#     "ios_version": "9.1"
# }
-->

:bow_and_arrow: `:bow_and_arrow:`
') }}
{{ markdown(title="🛡️ shield" type="markdown", code='

<!--
# 🛡️ shield
#
# {
#     "emoji": "\ud83d\udee1\ufe0f",
#     "description": "shield",
#     "category": "Objects",
#     "aliases": [
#         "shield"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:shield: `:shield:`
') }}
{{ markdown(title="🪚 carpentry saw" type="markdown", code='

<!--
# 🪚 carpentry saw
#
# {
#     "emoji": "\ud83e\ude9a",
#     "description": "carpentry saw",
#     "category": "Objects",
#     "aliases": [
#         "carpentry_saw"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:carpentry_saw: `:carpentry_saw:`
') }}
{{ markdown(title="🔧 wrench" type="markdown", code='

<!--
# 🔧 wrench
#
# {
#     "emoji": "\ud83d\udd27",
#     "description": "wrench",
#     "category": "Objects",
#     "aliases": [
#         "wrench"
#     ],
#     "tags": [
#         "tool"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:wrench: `:wrench:`
') }}
{{ markdown(title="🪛 screwdriver" type="markdown", code='

<!--
# 🪛 screwdriver
#
# {
#     "emoji": "\ud83e\ude9b",
#     "description": "screwdriver",
#     "category": "Objects",
#     "aliases": [
#         "screwdriver"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:screwdriver: `:screwdriver:`
') }}
{{ markdown(title="🔩 nut and bolt" type="markdown", code='

<!--
# 🔩 nut and bolt
#
# {
#     "emoji": "\ud83d\udd29",
#     "description": "nut and bolt",
#     "category": "Objects",
#     "aliases": [
#         "nut_and_bolt"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:nut_and_bolt: `:nut_and_bolt:`
') }}
{{ markdown(title="⚙️ gear" type="markdown", code='

<!--
# ⚙️ gear
#
# {
#     "emoji": "\u2699\ufe0f",
#     "description": "gear",
#     "category": "Objects",
#     "aliases": [
#         "gear"
#     ],
#     "tags": [],
#     "unicode_version": "4.1",
#     "ios_version": "9.1"
# }
-->

:gear: `:gear:`
') }}
{{ markdown(title="🗜️ clamp" type="markdown", code='

<!--
# 🗜️ clamp
#
# {
#     "emoji": "\ud83d\udddc\ufe0f",
#     "description": "clamp",
#     "category": "Objects",
#     "aliases": [
#         "clamp"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:clamp: `:clamp:`
') }}
{{ markdown(title="⚖️ balance scale" type="markdown", code='

<!--
# ⚖️ balance scale
#
# {
#     "emoji": "\u2696\ufe0f",
#     "description": "balance scale",
#     "category": "Objects",
#     "aliases": [
#         "balance_scale"
#     ],
#     "tags": [],
#     "unicode_version": "4.1",
#     "ios_version": "9.1"
# }
-->

:balance_scale: `:balance_scale:`
') }}
{{ markdown(title="🦯 white cane" type="markdown", code='

<!--
# 🦯 white cane
#
# {
#     "emoji": "\ud83e\uddaf",
#     "description": "white cane",
#     "category": "Objects",
#     "aliases": [
#         "probing_cane"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:probing_cane: `:probing_cane:`
') }}
{{ markdown(title="🔗 link" type="markdown", code='

<!--
# 🔗 link
#
# {
#     "emoji": "\ud83d\udd17",
#     "description": "link",
#     "category": "Objects",
#     "aliases": [
#         "link"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:link: `:link:`
') }}
{{ markdown(title="⛓️ chains" type="markdown", code='

<!--
# ⛓️ chains
#
# {
#     "emoji": "\u26d3\ufe0f",
#     "description": "chains",
#     "category": "Objects",
#     "aliases": [
#         "chains"
#     ],
#     "tags": [],
#     "unicode_version": "5.2",
#     "ios_version": "9.1"
# }
-->

:chains: `:chains:`
') }}
{{ markdown(title="🪝 hook" type="markdown", code='

<!--
# 🪝 hook
#
# {
#     "emoji": "\ud83e\ude9d",
#     "description": "hook",
#     "category": "Objects",
#     "aliases": [
#         "hook"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:hook: `:hook:`
') }}
{{ markdown(title="🧰 toolbox" type="markdown", code='

<!--
# 🧰 toolbox
#
# {
#     "emoji": "\ud83e\uddf0",
#     "description": "toolbox",
#     "category": "Objects",
#     "aliases": [
#         "toolbox"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:toolbox: `:toolbox:`
') }}
{{ markdown(title="🧲 magnet" type="markdown", code='

<!--
# 🧲 magnet
#
# {
#     "emoji": "\ud83e\uddf2",
#     "description": "magnet",
#     "category": "Objects",
#     "aliases": [
#         "magnet"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:magnet: `:magnet:`
') }}
{{ markdown(title="🪜 ladder" type="markdown", code='

<!--
# 🪜 ladder
#
# {
#     "emoji": "\ud83e\ude9c",
#     "description": "ladder",
#     "category": "Objects",
#     "aliases": [
#         "ladder"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:ladder: `:ladder:`
') }}
{{ markdown(title="⚗️ alembic" type="markdown", code='

<!--
# ⚗️ alembic
#
# {
#     "emoji": "\u2697\ufe0f",
#     "description": "alembic",
#     "category": "Objects",
#     "aliases": [
#         "alembic"
#     ],
#     "tags": [],
#     "unicode_version": "4.1",
#     "ios_version": "9.1"
# }
-->

:alembic: `:alembic:`
') }}
{{ markdown(title="🧪 test tube" type="markdown", code='

<!--
# 🧪 test tube
#
# {
#     "emoji": "\ud83e\uddea",
#     "description": "test tube",
#     "category": "Objects",
#     "aliases": [
#         "test_tube"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:test_tube: `:test_tube:`
') }}
{{ markdown(title="🧫 petri dish" type="markdown", code='

<!--
# 🧫 petri dish
#
# {
#     "emoji": "\ud83e\uddeb",
#     "description": "petri dish",
#     "category": "Objects",
#     "aliases": [
#         "petri_dish"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:petri_dish: `:petri_dish:`
') }}
{{ markdown(title="🧬 dna" type="markdown", code='

<!--
# 🧬 dna
#
# {
#     "emoji": "\ud83e\uddec",
#     "description": "dna",
#     "category": "Objects",
#     "aliases": [
#         "dna"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:dna: `:dna:`
') }}
{{ markdown(title="🔬 microscope" type="markdown", code='

<!--
# 🔬 microscope
#
# {
#     "emoji": "\ud83d\udd2c",
#     "description": "microscope",
#     "category": "Objects",
#     "aliases": [
#         "microscope"
#     ],
#     "tags": [
#         "science",
#         "laboratory",
#         "investigate"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:microscope: `:microscope:`
') }}
{{ markdown(title="🔭 telescope" type="markdown", code='

<!--
# 🔭 telescope
#
# {
#     "emoji": "\ud83d\udd2d",
#     "description": "telescope",
#     "category": "Objects",
#     "aliases": [
#         "telescope"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:telescope: `:telescope:`
') }}
{{ markdown(title="📡 satellite antenna" type="markdown", code='

<!--
# 📡 satellite antenna
#
# {
#     "emoji": "\ud83d\udce1",
#     "description": "satellite antenna",
#     "category": "Objects",
#     "aliases": [
#         "satellite"
#     ],
#     "tags": [
#         "signal"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:satellite: `:satellite:`
') }}
{{ markdown(title="💉 syringe" type="markdown", code='

<!--
# 💉 syringe
#
# {
#     "emoji": "\ud83d\udc89",
#     "description": "syringe",
#     "category": "Objects",
#     "aliases": [
#         "syringe"
#     ],
#     "tags": [
#         "health",
#         "hospital",
#         "needle"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:syringe: `:syringe:`
') }}
{{ markdown(title="🩸 drop of blood" type="markdown", code='

<!--
# 🩸 drop of blood
#
# {
#     "emoji": "\ud83e\ude78",
#     "description": "drop of blood",
#     "category": "Objects",
#     "aliases": [
#         "drop_of_blood"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:drop_of_blood: `:drop_of_blood:`
') }}
{{ markdown(title="💊 pill" type="markdown", code='

<!--
# 💊 pill
#
# {
#     "emoji": "\ud83d\udc8a",
#     "description": "pill",
#     "category": "Objects",
#     "aliases": [
#         "pill"
#     ],
#     "tags": [
#         "health",
#         "medicine"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:pill: `:pill:`
') }}
{{ markdown(title="🩹 adhesive bandage" type="markdown", code='

<!--
# 🩹 adhesive bandage
#
# {
#     "emoji": "\ud83e\ude79",
#     "description": "adhesive bandage",
#     "category": "Objects",
#     "aliases": [
#         "adhesive_bandage"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:adhesive_bandage: `:adhesive_bandage:`
') }}
{{ markdown(title="🩼 crutch" type="markdown", code='

<!--
# 🩼 crutch
#
# {
#     "emoji": "\ud83e\ude7c",
#     "description": "crutch",
#     "category": "Objects",
#     "aliases": [
#         "crutch"
#     ],
#     "tags": [],
#     "unicode_version": "14.0",
#     "ios_version": "15.4"
# }
-->

:crutch: `:crutch:`
') }}
{{ markdown(title="🩺 stethoscope" type="markdown", code='

<!--
# 🩺 stethoscope
#
# {
#     "emoji": "\ud83e\ude7a",
#     "description": "stethoscope",
#     "category": "Objects",
#     "aliases": [
#         "stethoscope"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:stethoscope: `:stethoscope:`
') }}
{{ markdown(title="🩻 x-ray" type="markdown", code='

<!--
# 🩻 x-ray
#
# {
#     "emoji": "\ud83e\ude7b",
#     "description": "x-ray",
#     "category": "Objects",
#     "aliases": [
#         "x_ray"
#     ],
#     "tags": [],
#     "unicode_version": "14.0",
#     "ios_version": "15.4"
# }
-->

:x_ray: `:x_ray:`
') }}
{{ markdown(title="🚪 door" type="markdown", code='

<!--
# 🚪 door
#
# {
#     "emoji": "\ud83d\udeaa",
#     "description": "door",
#     "category": "Objects",
#     "aliases": [
#         "door"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:door: `:door:`
') }}
{{ markdown(title="🛗 elevator" type="markdown", code='

<!--
# 🛗 elevator
#
# {
#     "emoji": "\ud83d\uded7",
#     "description": "elevator",
#     "category": "Objects",
#     "aliases": [
#         "elevator"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:elevator: `:elevator:`
') }}
{{ markdown(title="🪞 mirror" type="markdown", code='

<!--
# 🪞 mirror
#
# {
#     "emoji": "\ud83e\ude9e",
#     "description": "mirror",
#     "category": "Objects",
#     "aliases": [
#         "mirror"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:mirror: `:mirror:`
') }}
{{ markdown(title="🪟 window" type="markdown", code='

<!--
# 🪟 window
#
# {
#     "emoji": "\ud83e\ude9f",
#     "description": "window",
#     "category": "Objects",
#     "aliases": [
#         "window"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:window: `:window:`
') }}
{{ markdown(title="🛏️ bed" type="markdown", code='

<!--
# 🛏️ bed
#
# {
#     "emoji": "\ud83d\udecf\ufe0f",
#     "description": "bed",
#     "category": "Objects",
#     "aliases": [
#         "bed"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:bed: `:bed:`
') }}
{{ markdown(title="🛋️ couch and lamp" type="markdown", code='

<!--
# 🛋️ couch and lamp
#
# {
#     "emoji": "\ud83d\udecb\ufe0f",
#     "description": "couch and lamp",
#     "category": "Objects",
#     "aliases": [
#         "couch_and_lamp"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:couch_and_lamp: `:couch_and_lamp:`
') }}
{{ markdown(title="🪑 chair" type="markdown", code='

<!--
# 🪑 chair
#
# {
#     "emoji": "\ud83e\ude91",
#     "description": "chair",
#     "category": "Objects",
#     "aliases": [
#         "chair"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:chair: `:chair:`
') }}
{{ markdown(title="🚽 toilet" type="markdown", code='

<!--
# 🚽 toilet
#
# {
#     "emoji": "\ud83d\udebd",
#     "description": "toilet",
#     "category": "Objects",
#     "aliases": [
#         "toilet"
#     ],
#     "tags": [
#         "wc"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:toilet: `:toilet:`
') }}
{{ markdown(title="🪠 plunger" type="markdown", code='

<!--
# 🪠 plunger
#
# {
#     "emoji": "\ud83e\udea0",
#     "description": "plunger",
#     "category": "Objects",
#     "aliases": [
#         "plunger"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:plunger: `:plunger:`
') }}
{{ markdown(title="🚿 shower" type="markdown", code='

<!--
# 🚿 shower
#
# {
#     "emoji": "\ud83d\udebf",
#     "description": "shower",
#     "category": "Objects",
#     "aliases": [
#         "shower"
#     ],
#     "tags": [
#         "bath"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:shower: `:shower:`
') }}
{{ markdown(title="🛁 bathtub" type="markdown", code='

<!--
# 🛁 bathtub
#
# {
#     "emoji": "\ud83d\udec1",
#     "description": "bathtub",
#     "category": "Objects",
#     "aliases": [
#         "bathtub"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:bathtub: `:bathtub:`
') }}
{{ markdown(title="🪤 mouse trap" type="markdown", code='

<!--
# 🪤 mouse trap
#
# {
#     "emoji": "\ud83e\udea4",
#     "description": "mouse trap",
#     "category": "Objects",
#     "aliases": [
#         "mouse_trap"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:mouse_trap: `:mouse_trap:`
') }}
{{ markdown(title="🪒 razor" type="markdown", code='

<!--
# 🪒 razor
#
# {
#     "emoji": "\ud83e\ude92",
#     "description": "razor",
#     "category": "Objects",
#     "aliases": [
#         "razor"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:razor: `:razor:`
') }}
{{ markdown(title="🧴 lotion bottle" type="markdown", code='

<!--
# 🧴 lotion bottle
#
# {
#     "emoji": "\ud83e\uddf4",
#     "description": "lotion bottle",
#     "category": "Objects",
#     "aliases": [
#         "lotion_bottle"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:lotion_bottle: `:lotion_bottle:`
') }}
{{ markdown(title="🧷 safety pin" type="markdown", code='

<!--
# 🧷 safety pin
#
# {
#     "emoji": "\ud83e\uddf7",
#     "description": "safety pin",
#     "category": "Objects",
#     "aliases": [
#         "safety_pin"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:safety_pin: `:safety_pin:`
') }}
{{ markdown(title="🧹 broom" type="markdown", code='

<!--
# 🧹 broom
#
# {
#     "emoji": "\ud83e\uddf9",
#     "description": "broom",
#     "category": "Objects",
#     "aliases": [
#         "broom"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:broom: `:broom:`
') }}
{{ markdown(title="🧺 basket" type="markdown", code='

<!--
# 🧺 basket
#
# {
#     "emoji": "\ud83e\uddfa",
#     "description": "basket",
#     "category": "Objects",
#     "aliases": [
#         "basket"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:basket: `:basket:`
') }}
{{ markdown(title="🧻 roll of paper" type="markdown", code='

<!--
# 🧻 roll of paper
#
# {
#     "emoji": "\ud83e\uddfb",
#     "description": "roll of paper",
#     "category": "Objects",
#     "aliases": [
#         "roll_of_paper"
#     ],
#     "tags": [
#         "toilet"
#     ],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:roll_of_paper: `:roll_of_paper:`
') }}
{{ markdown(title="🪣 bucket" type="markdown", code='

<!--
# 🪣 bucket
#
# {
#     "emoji": "\ud83e\udea3",
#     "description": "bucket",
#     "category": "Objects",
#     "aliases": [
#         "bucket"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:bucket: `:bucket:`
') }}
{{ markdown(title="🧼 soap" type="markdown", code='

<!--
# 🧼 soap
#
# {
#     "emoji": "\ud83e\uddfc",
#     "description": "soap",
#     "category": "Objects",
#     "aliases": [
#         "soap"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:soap: `:soap:`
') }}
{{ markdown(title="🫧 bubbles" type="markdown", code='

<!--
# 🫧 bubbles
#
# {
#     "emoji": "\ud83e\udee7",
#     "description": "bubbles",
#     "category": "Objects",
#     "aliases": [
#         "bubbles"
#     ],
#     "tags": [],
#     "unicode_version": "14.0",
#     "ios_version": "15.4"
# }
-->

:bubbles: `:bubbles:`
') }}
{{ markdown(title="🪥 toothbrush" type="markdown", code='

<!--
# 🪥 toothbrush
#
# {
#     "emoji": "\ud83e\udea5",
#     "description": "toothbrush",
#     "category": "Objects",
#     "aliases": [
#         "toothbrush"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:toothbrush: `:toothbrush:`
') }}
{{ markdown(title="🧽 sponge" type="markdown", code='

<!--
# 🧽 sponge
#
# {
#     "emoji": "\ud83e\uddfd",
#     "description": "sponge",
#     "category": "Objects",
#     "aliases": [
#         "sponge"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:sponge: `:sponge:`
') }}
{{ markdown(title="🧯 fire extinguisher" type="markdown", code='

<!--
# 🧯 fire extinguisher
#
# {
#     "emoji": "\ud83e\uddef",
#     "description": "fire extinguisher",
#     "category": "Objects",
#     "aliases": [
#         "fire_extinguisher"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:fire_extinguisher: `:fire_extinguisher:`
') }}
{{ markdown(title="🛒 shopping cart" type="markdown", code='

<!--
# 🛒 shopping cart
#
# {
#     "emoji": "\ud83d\uded2",
#     "description": "shopping cart",
#     "category": "Objects",
#     "aliases": [
#         "shopping_cart"
#     ],
#     "tags": [],
#     "unicode_version": "9.0",
#     "ios_version": "10.2"
# }
-->

:shopping_cart: `:shopping_cart:`
') }}
{{ markdown(title="🚬 cigarette" type="markdown", code='

<!--
# 🚬 cigarette
#
# {
#     "emoji": "\ud83d\udeac",
#     "description": "cigarette",
#     "category": "Objects",
#     "aliases": [
#         "smoking"
#     ],
#     "tags": [
#         "cigarette"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:smoking: `:smoking:`
') }}
{{ markdown(title="⚰️ coffin" type="markdown", code='

<!--
# ⚰️ coffin
#
# {
#     "emoji": "\u26b0\ufe0f",
#     "description": "coffin",
#     "category": "Objects",
#     "aliases": [
#         "coffin"
#     ],
#     "tags": [
#         "funeral"
#     ],
#     "unicode_version": "4.1",
#     "ios_version": "9.1"
# }
-->

:coffin: `:coffin:`
') }}
{{ markdown(title="🪦 headstone" type="markdown", code='

<!--
# 🪦 headstone
#
# {
#     "emoji": "\ud83e\udea6",
#     "description": "headstone",
#     "category": "Objects",
#     "aliases": [
#         "headstone"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:headstone: `:headstone:`
') }}
{{ markdown(title="⚱️ funeral urn" type="markdown", code='

<!--
# ⚱️ funeral urn
#
# {
#     "emoji": "\u26b1\ufe0f",
#     "description": "funeral urn",
#     "category": "Objects",
#     "aliases": [
#         "funeral_urn"
#     ],
#     "tags": [],
#     "unicode_version": "4.1",
#     "ios_version": "9.1"
# }
-->

:funeral_urn: `:funeral_urn:`
') }}
{{ markdown(title="🧿 nazar amulet" type="markdown", code='

<!--
# 🧿 nazar amulet
#
# {
#     "emoji": "\ud83e\uddff",
#     "description": "nazar amulet",
#     "category": "Objects",
#     "aliases": [
#         "nazar_amulet"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:nazar_amulet: `:nazar_amulet:`
') }}
{{ markdown(title="🪬 hamsa" type="markdown", code='

<!--
# 🪬 hamsa
#
# {
#     "emoji": "\ud83e\udeac",
#     "description": "hamsa",
#     "category": "Objects",
#     "aliases": [
#         "hamsa"
#     ],
#     "tags": [],
#     "unicode_version": "14.0",
#     "ios_version": "15.4"
# }
-->

:hamsa: `:hamsa:`
') }}
{{ markdown(title="🗿 moai" type="markdown", code='

<!--
# 🗿 moai
#
# {
#     "emoji": "\ud83d\uddff",
#     "description": "moai",
#     "category": "Objects",
#     "aliases": [
#         "moyai"
#     ],
#     "tags": [
#         "stone"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:moyai: `:moyai:`
') }}
{{ markdown(title="🪧 placard" type="markdown", code='

<!--
# 🪧 placard
#
# {
#     "emoji": "\ud83e\udea7",
#     "description": "placard",
#     "category": "Objects",
#     "aliases": [
#         "placard"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:placard: `:placard:`
') }}
{{ markdown(title="🪪 identification card" type="markdown", code='

<!--
# 🪪 identification card
#
# {
#     "emoji": "\ud83e\udeaa",
#     "description": "identification card",
#     "category": "Objects",
#     "aliases": [
#         "identification_card"
#     ],
#     "tags": [],
#     "unicode_version": "14.0",
#     "ios_version": "15.4"
# }
-->

:identification_card: `:identification_card:`
') }}
{{ markdown(title="🏧 ATM sign" type="markdown", code='

<!--
# 🏧 ATM sign
#
# {
#     "emoji": "\ud83c\udfe7",
#     "description": "ATM sign",
#     "category": "Symbols",
#     "aliases": [
#         "atm"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:atm: `:atm:`
') }}
{{ markdown(title="🚮 litter in bin sign" type="markdown", code='

<!--
# 🚮 litter in bin sign
#
# {
#     "emoji": "\ud83d\udeae",
#     "description": "litter in bin sign",
#     "category": "Symbols",
#     "aliases": [
#         "put_litter_in_its_place"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:put_litter_in_its_place: `:put_litter_in_its_place:`
') }}
{{ markdown(title="🚰 potable water" type="markdown", code='

<!--
# 🚰 potable water
#
# {
#     "emoji": "\ud83d\udeb0",
#     "description": "potable water",
#     "category": "Symbols",
#     "aliases": [
#         "potable_water"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:potable_water: `:potable_water:`
') }}
{{ markdown(title="♿ wheelchair symbol" type="markdown", code='

<!--
# ♿ wheelchair symbol
#
# {
#     "emoji": "\u267f",
#     "description": "wheelchair symbol",
#     "category": "Symbols",
#     "aliases": [
#         "wheelchair"
#     ],
#     "tags": [
#         "accessibility"
#     ],
#     "unicode_version": "4.1",
#     "ios_version": "6.0"
# }
-->

:wheelchair: `:wheelchair:`
') }}
{{ markdown(title="🚹 men’s room" type="markdown", code='

<!--
# 🚹 men’s room
#
# {
#     "emoji": "\ud83d\udeb9",
#     "description": "men\u2019s room",
#     "category": "Symbols",
#     "aliases": [
#         "mens"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:mens: `:mens:`
') }}
{{ markdown(title="🚺 women’s room" type="markdown", code='

<!--
# 🚺 women’s room
#
# {
#     "emoji": "\ud83d\udeba",
#     "description": "women\u2019s room",
#     "category": "Symbols",
#     "aliases": [
#         "womens"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:womens: `:womens:`
') }}
{{ markdown(title="🚻 restroom" type="markdown", code='

<!--
# 🚻 restroom
#
# {
#     "emoji": "\ud83d\udebb",
#     "description": "restroom",
#     "category": "Symbols",
#     "aliases": [
#         "restroom"
#     ],
#     "tags": [
#         "toilet"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:restroom: `:restroom:`
') }}
{{ markdown(title="🚼 baby symbol" type="markdown", code='

<!--
# 🚼 baby symbol
#
# {
#     "emoji": "\ud83d\udebc",
#     "description": "baby symbol",
#     "category": "Symbols",
#     "aliases": [
#         "baby_symbol"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:baby_symbol: `:baby_symbol:`
') }}
{{ markdown(title="🚾 water closet" type="markdown", code='

<!--
# 🚾 water closet
#
# {
#     "emoji": "\ud83d\udebe",
#     "description": "water closet",
#     "category": "Symbols",
#     "aliases": [
#         "wc"
#     ],
#     "tags": [
#         "toilet",
#         "restroom"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:wc: `:wc:`
') }}
{{ markdown(title="🛂 passport control" type="markdown", code='

<!--
# 🛂 passport control
#
# {
#     "emoji": "\ud83d\udec2",
#     "description": "passport control",
#     "category": "Symbols",
#     "aliases": [
#         "passport_control"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:passport_control: `:passport_control:`
') }}
{{ markdown(title="🛃 customs" type="markdown", code='

<!--
# 🛃 customs
#
# {
#     "emoji": "\ud83d\udec3",
#     "description": "customs",
#     "category": "Symbols",
#     "aliases": [
#         "customs"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:customs: `:customs:`
') }}
{{ markdown(title="🛄 baggage claim" type="markdown", code='

<!--
# 🛄 baggage claim
#
# {
#     "emoji": "\ud83d\udec4",
#     "description": "baggage claim",
#     "category": "Symbols",
#     "aliases": [
#         "baggage_claim"
#     ],
#     "tags": [
#         "airport"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:baggage_claim: `:baggage_claim:`
') }}
{{ markdown(title="🛅 left luggage" type="markdown", code='

<!--
# 🛅 left luggage
#
# {
#     "emoji": "\ud83d\udec5",
#     "description": "left luggage",
#     "category": "Symbols",
#     "aliases": [
#         "left_luggage"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:left_luggage: `:left_luggage:`
') }}
{{ markdown(title="⚠️ warning" type="markdown", code='

<!--
# ⚠️ warning
#
# {
#     "emoji": "\u26a0\ufe0f",
#     "description": "warning",
#     "category": "Symbols",
#     "aliases": [
#         "warning"
#     ],
#     "tags": [
#         "wip"
#     ],
#     "unicode_version": "4.0",
#     "ios_version": "6.0"
# }
-->

:warning: `:warning:`
') }}
{{ markdown(title="🚸 children crossing" type="markdown", code='

<!--
# 🚸 children crossing
#
# {
#     "emoji": "\ud83d\udeb8",
#     "description": "children crossing",
#     "category": "Symbols",
#     "aliases": [
#         "children_crossing"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:children_crossing: `:children_crossing:`
') }}
{{ markdown(title="⛔ no entry" type="markdown", code='

<!--
# ⛔ no entry
#
# {
#     "emoji": "\u26d4",
#     "description": "no entry",
#     "category": "Symbols",
#     "aliases": [
#         "no_entry"
#     ],
#     "tags": [
#         "limit"
#     ],
#     "unicode_version": "5.2",
#     "ios_version": "6.0"
# }
-->

:no_entry: `:no_entry:`
') }}
{{ markdown(title="🚫 prohibited" type="markdown", code='

<!--
# 🚫 prohibited
#
# {
#     "emoji": "\ud83d\udeab",
#     "description": "prohibited",
#     "category": "Symbols",
#     "aliases": [
#         "no_entry_sign"
#     ],
#     "tags": [
#         "block",
#         "forbidden"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:no_entry_sign: `:no_entry_sign:`
') }}
{{ markdown(title="🚳 no bicycles" type="markdown", code='

<!--
# 🚳 no bicycles
#
# {
#     "emoji": "\ud83d\udeb3",
#     "description": "no bicycles",
#     "category": "Symbols",
#     "aliases": [
#         "no_bicycles"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:no_bicycles: `:no_bicycles:`
') }}
{{ markdown(title="🚭 no smoking" type="markdown", code='

<!--
# 🚭 no smoking
#
# {
#     "emoji": "\ud83d\udead",
#     "description": "no smoking",
#     "category": "Symbols",
#     "aliases": [
#         "no_smoking"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:no_smoking: `:no_smoking:`
') }}
{{ markdown(title="🚯 no littering" type="markdown", code='

<!--
# 🚯 no littering
#
# {
#     "emoji": "\ud83d\udeaf",
#     "description": "no littering",
#     "category": "Symbols",
#     "aliases": [
#         "do_not_litter"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:do_not_litter: `:do_not_litter:`
') }}
{{ markdown(title="🚱 non-potable water" type="markdown", code='

<!--
# 🚱 non-potable water
#
# {
#     "emoji": "\ud83d\udeb1",
#     "description": "non-potable water",
#     "category": "Symbols",
#     "aliases": [
#         "non-potable_water"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:non-potable_water: `:non-potable_water:`
') }}
{{ markdown(title="🚷 no pedestrians" type="markdown", code='

<!--
# 🚷 no pedestrians
#
# {
#     "emoji": "\ud83d\udeb7",
#     "description": "no pedestrians",
#     "category": "Symbols",
#     "aliases": [
#         "no_pedestrians"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:no_pedestrians: `:no_pedestrians:`
') }}
{{ markdown(title="📵 no mobile phones" type="markdown", code='

<!--
# 📵 no mobile phones
#
# {
#     "emoji": "\ud83d\udcf5",
#     "description": "no mobile phones",
#     "category": "Symbols",
#     "aliases": [
#         "no_mobile_phones"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:no_mobile_phones: `:no_mobile_phones:`
') }}
{{ markdown(title="🔞 no one under eighteen" type="markdown", code='

<!--
# 🔞 no one under eighteen
#
# {
#     "emoji": "\ud83d\udd1e",
#     "description": "no one under eighteen",
#     "category": "Symbols",
#     "aliases": [
#         "underage"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:underage: `:underage:`
') }}
{{ markdown(title="☢️ radioactive" type="markdown", code='

<!--
# ☢️ radioactive
#
# {
#     "emoji": "\u2622\ufe0f",
#     "description": "radioactive",
#     "category": "Symbols",
#     "aliases": [
#         "radioactive"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "9.1"
# }
-->

:radioactive: `:radioactive:`
') }}
{{ markdown(title="☣️ biohazard" type="markdown", code='

<!--
# ☣️ biohazard
#
# {
#     "emoji": "\u2623\ufe0f",
#     "description": "biohazard",
#     "category": "Symbols",
#     "aliases": [
#         "biohazard"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "9.1"
# }
-->

:biohazard: `:biohazard:`
') }}
{{ markdown(title="⬆️ up arrow" type="markdown", code='

<!--
# ⬆️ up arrow
#
# {
#     "emoji": "\u2b06\ufe0f",
#     "description": "up arrow",
#     "category": "Symbols",
#     "aliases": [
#         "arrow_up"
#     ],
#     "tags": [],
#     "unicode_version": "4.0",
#     "ios_version": "6.0"
# }
-->

:arrow_up: `:arrow_up:`
') }}
{{ markdown(title="↗️ up-right arrow" type="markdown", code='

<!--
# ↗️ up-right arrow
#
# {
#     "emoji": "\u2197\ufe0f",
#     "description": "up-right arrow",
#     "category": "Symbols",
#     "aliases": [
#         "arrow_upper_right"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:arrow_upper_right: `:arrow_upper_right:`
') }}
{{ markdown(title="➡️ right arrow" type="markdown", code='

<!--
# ➡️ right arrow
#
# {
#     "emoji": "\u27a1\ufe0f",
#     "description": "right arrow",
#     "category": "Symbols",
#     "aliases": [
#         "arrow_right"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:arrow_right: `:arrow_right:`
') }}
{{ markdown(title="↘️ down-right arrow" type="markdown", code='

<!--
# ↘️ down-right arrow
#
# {
#     "emoji": "\u2198\ufe0f",
#     "description": "down-right arrow",
#     "category": "Symbols",
#     "aliases": [
#         "arrow_lower_right"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:arrow_lower_right: `:arrow_lower_right:`
') }}
{{ markdown(title="⬇️ down arrow" type="markdown", code='

<!--
# ⬇️ down arrow
#
# {
#     "emoji": "\u2b07\ufe0f",
#     "description": "down arrow",
#     "category": "Symbols",
#     "aliases": [
#         "arrow_down"
#     ],
#     "tags": [],
#     "unicode_version": "4.0",
#     "ios_version": "6.0"
# }
-->

:arrow_down: `:arrow_down:`
') }}
{{ markdown(title="↙️ down-left arrow" type="markdown", code='

<!--
# ↙️ down-left arrow
#
# {
#     "emoji": "\u2199\ufe0f",
#     "description": "down-left arrow",
#     "category": "Symbols",
#     "aliases": [
#         "arrow_lower_left"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:arrow_lower_left: `:arrow_lower_left:`
') }}
{{ markdown(title="⬅️ left arrow" type="markdown", code='

<!--
# ⬅️ left arrow
#
# {
#     "emoji": "\u2b05\ufe0f",
#     "description": "left arrow",
#     "category": "Symbols",
#     "aliases": [
#         "arrow_left"
#     ],
#     "tags": [],
#     "unicode_version": "4.0",
#     "ios_version": "6.0"
# }
-->

:arrow_left: `:arrow_left:`
') }}
{{ markdown(title="↖️ up-left arrow" type="markdown", code='

<!--
# ↖️ up-left arrow
#
# {
#     "emoji": "\u2196\ufe0f",
#     "description": "up-left arrow",
#     "category": "Symbols",
#     "aliases": [
#         "arrow_upper_left"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:arrow_upper_left: `:arrow_upper_left:`
') }}
{{ markdown(title="↕️ up-down arrow" type="markdown", code='

<!--
# ↕️ up-down arrow
#
# {
#     "emoji": "\u2195\ufe0f",
#     "description": "up-down arrow",
#     "category": "Symbols",
#     "aliases": [
#         "arrow_up_down"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:arrow_up_down: `:arrow_up_down:`
') }}
{{ markdown(title="↔️ left-right arrow" type="markdown", code='

<!--
# ↔️ left-right arrow
#
# {
#     "emoji": "\u2194\ufe0f",
#     "description": "left-right arrow",
#     "category": "Symbols",
#     "aliases": [
#         "left_right_arrow"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:left_right_arrow: `:left_right_arrow:`
') }}
{{ markdown(title="↩️ right arrow curving left" type="markdown", code='

<!--
# ↩️ right arrow curving left
#
# {
#     "emoji": "\u21a9\ufe0f",
#     "description": "right arrow curving left",
#     "category": "Symbols",
#     "aliases": [
#         "leftwards_arrow_with_hook"
#     ],
#     "tags": [
#         "return"
#     ],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:leftwards_arrow_with_hook: `:leftwards_arrow_with_hook:`
') }}
{{ markdown(title="↪️ left arrow curving right" type="markdown", code='

<!--
# ↪️ left arrow curving right
#
# {
#     "emoji": "\u21aa\ufe0f",
#     "description": "left arrow curving right",
#     "category": "Symbols",
#     "aliases": [
#         "arrow_right_hook"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:arrow_right_hook: `:arrow_right_hook:`
') }}
{{ markdown(title="⤴️ right arrow curving up" type="markdown", code='

<!--
# ⤴️ right arrow curving up
#
# {
#     "emoji": "\u2934\ufe0f",
#     "description": "right arrow curving up",
#     "category": "Symbols",
#     "aliases": [
#         "arrow_heading_up"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:arrow_heading_up: `:arrow_heading_up:`
') }}
{{ markdown(title="⤵️ right arrow curving down" type="markdown", code='

<!--
# ⤵️ right arrow curving down
#
# {
#     "emoji": "\u2935\ufe0f",
#     "description": "right arrow curving down",
#     "category": "Symbols",
#     "aliases": [
#         "arrow_heading_down"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:arrow_heading_down: `:arrow_heading_down:`
') }}
{{ markdown(title="🔃 clockwise vertical arrows" type="markdown", code='

<!--
# 🔃 clockwise vertical arrows
#
# {
#     "emoji": "\ud83d\udd03",
#     "description": "clockwise vertical arrows",
#     "category": "Symbols",
#     "aliases": [
#         "arrows_clockwise"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:arrows_clockwise: `:arrows_clockwise:`
') }}
{{ markdown(title="🔄 counterclockwise arrows button" type="markdown", code='

<!--
# 🔄 counterclockwise arrows button
#
# {
#     "emoji": "\ud83d\udd04",
#     "description": "counterclockwise arrows button",
#     "category": "Symbols",
#     "aliases": [
#         "arrows_counterclockwise"
#     ],
#     "tags": [
#         "sync"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:arrows_counterclockwise: `:arrows_counterclockwise:`
') }}
{{ markdown(title="🔙 BACK arrow" type="markdown", code='

<!--
# 🔙 BACK arrow
#
# {
#     "emoji": "\ud83d\udd19",
#     "description": "BACK arrow",
#     "category": "Symbols",
#     "aliases": [
#         "back"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:back: `:back:`
') }}
{{ markdown(title="🔚 END arrow" type="markdown", code='

<!--
# 🔚 END arrow
#
# {
#     "emoji": "\ud83d\udd1a",
#     "description": "END arrow",
#     "category": "Symbols",
#     "aliases": [
#         "end"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:end: `:end:`
') }}
{{ markdown(title="🔛 ON! arrow" type="markdown", code='

<!--
# 🔛 ON! arrow
#
# {
#     "emoji": "\ud83d\udd1b",
#     "description": "ON! arrow",
#     "category": "Symbols",
#     "aliases": [
#         "on"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:on: `:on:`
') }}
{{ markdown(title="🔜 SOON arrow" type="markdown", code='

<!--
# 🔜 SOON arrow
#
# {
#     "emoji": "\ud83d\udd1c",
#     "description": "SOON arrow",
#     "category": "Symbols",
#     "aliases": [
#         "soon"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:soon: `:soon:`
') }}
{{ markdown(title="🔝 TOP arrow" type="markdown", code='

<!--
# 🔝 TOP arrow
#
# {
#     "emoji": "\ud83d\udd1d",
#     "description": "TOP arrow",
#     "category": "Symbols",
#     "aliases": [
#         "top"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:top: `:top:`
') }}
{{ markdown(title="🛐 place of worship" type="markdown", code='

<!--
# 🛐 place of worship
#
# {
#     "emoji": "\ud83d\uded0",
#     "description": "place of worship",
#     "category": "Symbols",
#     "aliases": [
#         "place_of_worship"
#     ],
#     "tags": [],
#     "unicode_version": "8.0",
#     "ios_version": "9.1"
# }
-->

:place_of_worship: `:place_of_worship:`
') }}
{{ markdown(title="⚛️ atom symbol" type="markdown", code='

<!--
# ⚛️ atom symbol
#
# {
#     "emoji": "\u269b\ufe0f",
#     "description": "atom symbol",
#     "category": "Symbols",
#     "aliases": [
#         "atom_symbol"
#     ],
#     "tags": [],
#     "unicode_version": "4.1",
#     "ios_version": "9.1"
# }
-->

:atom_symbol: `:atom_symbol:`
') }}
{{ markdown(title="🕉️ om" type="markdown", code='

<!--
# 🕉️ om
#
# {
#     "emoji": "\ud83d\udd49\ufe0f",
#     "description": "om",
#     "category": "Symbols",
#     "aliases": [
#         "om"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:om: `:om:`
') }}
{{ markdown(title="✡️ star of David" type="markdown", code='

<!--
# ✡️ star of David
#
# {
#     "emoji": "\u2721\ufe0f",
#     "description": "star of David",
#     "category": "Symbols",
#     "aliases": [
#         "star_of_david"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "9.1"
# }
-->

:star_of_david: `:star_of_david:`
') }}
{{ markdown(title="☸️ wheel of dharma" type="markdown", code='

<!--
# ☸️ wheel of dharma
#
# {
#     "emoji": "\u2638\ufe0f",
#     "description": "wheel of dharma",
#     "category": "Symbols",
#     "aliases": [
#         "wheel_of_dharma"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "9.1"
# }
-->

:wheel_of_dharma: `:wheel_of_dharma:`
') }}
{{ markdown(title="☯️ yin yang" type="markdown", code='

<!--
# ☯️ yin yang
#
# {
#     "emoji": "\u262f\ufe0f",
#     "description": "yin yang",
#     "category": "Symbols",
#     "aliases": [
#         "yin_yang"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "9.1"
# }
-->

:yin_yang: `:yin_yang:`
') }}
{{ markdown(title="✝️ latin cross" type="markdown", code='

<!--
# ✝️ latin cross
#
# {
#     "emoji": "\u271d\ufe0f",
#     "description": "latin cross",
#     "category": "Symbols",
#     "aliases": [
#         "latin_cross"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "9.1"
# }
-->

:latin_cross: `:latin_cross:`
') }}
{{ markdown(title="☦️ orthodox cross" type="markdown", code='

<!--
# ☦️ orthodox cross
#
# {
#     "emoji": "\u2626\ufe0f",
#     "description": "orthodox cross",
#     "category": "Symbols",
#     "aliases": [
#         "orthodox_cross"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "9.1"
# }
-->

:orthodox_cross: `:orthodox_cross:`
') }}
{{ markdown(title="☪️ star and crescent" type="markdown", code='

<!--
# ☪️ star and crescent
#
# {
#     "emoji": "\u262a\ufe0f",
#     "description": "star and crescent",
#     "category": "Symbols",
#     "aliases": [
#         "star_and_crescent"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "9.1"
# }
-->

:star_and_crescent: `:star_and_crescent:`
') }}
{{ markdown(title="☮️ peace symbol" type="markdown", code='

<!--
# ☮️ peace symbol
#
# {
#     "emoji": "\u262e\ufe0f",
#     "description": "peace symbol",
#     "category": "Symbols",
#     "aliases": [
#         "peace_symbol"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "9.1"
# }
-->

:peace_symbol: `:peace_symbol:`
') }}
{{ markdown(title="🕎 menorah" type="markdown", code='

<!--
# 🕎 menorah
#
# {
#     "emoji": "\ud83d\udd4e",
#     "description": "menorah",
#     "category": "Symbols",
#     "aliases": [
#         "menorah"
#     ],
#     "tags": [],
#     "unicode_version": "8.0",
#     "ios_version": "9.1"
# }
-->

:menorah: `:menorah:`
') }}
{{ markdown(title="🔯 dotted six-pointed star" type="markdown", code='

<!--
# 🔯 dotted six-pointed star
#
# {
#     "emoji": "\ud83d\udd2f",
#     "description": "dotted six-pointed star",
#     "category": "Symbols",
#     "aliases": [
#         "six_pointed_star"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:six_pointed_star: `:six_pointed_star:`
') }}
{{ markdown(title="🪯 khanda" type="markdown", code='

<!--
# 🪯 khanda
#
# {
#     "emoji": "\ud83e\udeaf",
#     "description": "khanda",
#     "category": "Symbols",
#     "aliases": [
#         "khanda"
#     ],
#     "tags": [],
#     "unicode_version": "15.0",
#     "ios_version": "16.4"
# }
-->

:khanda: `:khanda:`
') }}
{{ markdown(title="♈ Aries" type="markdown", code='

<!--
# ♈ Aries
#
# {
#     "emoji": "\u2648",
#     "description": "Aries",
#     "category": "Symbols",
#     "aliases": [
#         "aries"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:aries: `:aries:`
') }}
{{ markdown(title="♉ Taurus" type="markdown", code='

<!--
# ♉ Taurus
#
# {
#     "emoji": "\u2649",
#     "description": "Taurus",
#     "category": "Symbols",
#     "aliases": [
#         "taurus"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:taurus: `:taurus:`
') }}
{{ markdown(title="♊ Gemini" type="markdown", code='

<!--
# ♊ Gemini
#
# {
#     "emoji": "\u264a",
#     "description": "Gemini",
#     "category": "Symbols",
#     "aliases": [
#         "gemini"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:gemini: `:gemini:`
') }}
{{ markdown(title="♋ Cancer" type="markdown", code='

<!--
# ♋ Cancer
#
# {
#     "emoji": "\u264b",
#     "description": "Cancer",
#     "category": "Symbols",
#     "aliases": [
#         "cancer"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:cancer: `:cancer:`
') }}
{{ markdown(title="♌ Leo" type="markdown", code='

<!--
# ♌ Leo
#
# {
#     "emoji": "\u264c",
#     "description": "Leo",
#     "category": "Symbols",
#     "aliases": [
#         "leo"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:leo: `:leo:`
') }}
{{ markdown(title="♍ Virgo" type="markdown", code='

<!--
# ♍ Virgo
#
# {
#     "emoji": "\u264d",
#     "description": "Virgo",
#     "category": "Symbols",
#     "aliases": [
#         "virgo"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:virgo: `:virgo:`
') }}
{{ markdown(title="♎ Libra" type="markdown", code='

<!--
# ♎ Libra
#
# {
#     "emoji": "\u264e",
#     "description": "Libra",
#     "category": "Symbols",
#     "aliases": [
#         "libra"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:libra: `:libra:`
') }}
{{ markdown(title="♏ Scorpio" type="markdown", code='

<!--
# ♏ Scorpio
#
# {
#     "emoji": "\u264f",
#     "description": "Scorpio",
#     "category": "Symbols",
#     "aliases": [
#         "scorpius"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:scorpius: `:scorpius:`
') }}
{{ markdown(title="♐ Sagittarius" type="markdown", code='

<!--
# ♐ Sagittarius
#
# {
#     "emoji": "\u2650",
#     "description": "Sagittarius",
#     "category": "Symbols",
#     "aliases": [
#         "sagittarius"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:sagittarius: `:sagittarius:`
') }}
{{ markdown(title="♑ Capricorn" type="markdown", code='

<!--
# ♑ Capricorn
#
# {
#     "emoji": "\u2651",
#     "description": "Capricorn",
#     "category": "Symbols",
#     "aliases": [
#         "capricorn"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:capricorn: `:capricorn:`
') }}
{{ markdown(title="♒ Aquarius" type="markdown", code='

<!--
# ♒ Aquarius
#
# {
#     "emoji": "\u2652",
#     "description": "Aquarius",
#     "category": "Symbols",
#     "aliases": [
#         "aquarius"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:aquarius: `:aquarius:`
') }}
{{ markdown(title="♓ Pisces" type="markdown", code='

<!--
# ♓ Pisces
#
# {
#     "emoji": "\u2653",
#     "description": "Pisces",
#     "category": "Symbols",
#     "aliases": [
#         "pisces"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:pisces: `:pisces:`
') }}
{{ markdown(title="⛎ Ophiuchus" type="markdown", code='

<!--
# ⛎ Ophiuchus
#
# {
#     "emoji": "\u26ce",
#     "description": "Ophiuchus",
#     "category": "Symbols",
#     "aliases": [
#         "ophiuchus"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:ophiuchus: `:ophiuchus:`
') }}
{{ markdown(title="🔀 shuffle tracks button" type="markdown", code='

<!--
# 🔀 shuffle tracks button
#
# {
#     "emoji": "\ud83d\udd00",
#     "description": "shuffle tracks button",
#     "category": "Symbols",
#     "aliases": [
#         "twisted_rightwards_arrows"
#     ],
#     "tags": [
#         "shuffle"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:twisted_rightwards_arrows: `:twisted_rightwards_arrows:`
') }}
{{ markdown(title="🔁 repeat button" type="markdown", code='

<!--
# 🔁 repeat button
#
# {
#     "emoji": "\ud83d\udd01",
#     "description": "repeat button",
#     "category": "Symbols",
#     "aliases": [
#         "repeat"
#     ],
#     "tags": [
#         "loop"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:repeat: `:repeat:`
') }}
{{ markdown(title="🔂 repeat single button" type="markdown", code='

<!--
# 🔂 repeat single button
#
# {
#     "emoji": "\ud83d\udd02",
#     "description": "repeat single button",
#     "category": "Symbols",
#     "aliases": [
#         "repeat_one"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:repeat_one: `:repeat_one:`
') }}
{{ markdown(title="▶️ play button" type="markdown", code='

<!--
# ▶️ play button
#
# {
#     "emoji": "\u25b6\ufe0f",
#     "description": "play button",
#     "category": "Symbols",
#     "aliases": [
#         "arrow_forward"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:arrow_forward: `:arrow_forward:`
') }}
{{ markdown(title="⏩ fast-forward button" type="markdown", code='

<!--
# ⏩ fast-forward button
#
# {
#     "emoji": "\u23e9",
#     "description": "fast-forward button",
#     "category": "Symbols",
#     "aliases": [
#         "fast_forward"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:fast_forward: `:fast_forward:`
') }}
{{ markdown(title="⏭️ next track button" type="markdown", code='

<!--
# ⏭️ next track button
#
# {
#     "emoji": "\u23ed\ufe0f",
#     "description": "next track button",
#     "category": "Symbols",
#     "aliases": [
#         "next_track_button"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.1"
# }
-->

:next_track_button: `:next_track_button:`
') }}
{{ markdown(title="⏯️ play or pause button" type="markdown", code='

<!--
# ⏯️ play or pause button
#
# {
#     "emoji": "\u23ef\ufe0f",
#     "description": "play or pause button",
#     "category": "Symbols",
#     "aliases": [
#         "play_or_pause_button"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.1"
# }
-->

:play_or_pause_button: `:play_or_pause_button:`
') }}
{{ markdown(title="◀️ reverse button" type="markdown", code='

<!--
# ◀️ reverse button
#
# {
#     "emoji": "\u25c0\ufe0f",
#     "description": "reverse button",
#     "category": "Symbols",
#     "aliases": [
#         "arrow_backward"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:arrow_backward: `:arrow_backward:`
') }}
{{ markdown(title="⏪ fast reverse button" type="markdown", code='

<!--
# ⏪ fast reverse button
#
# {
#     "emoji": "\u23ea",
#     "description": "fast reverse button",
#     "category": "Symbols",
#     "aliases": [
#         "rewind"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:rewind: `:rewind:`
') }}
{{ markdown(title="⏮️ last track button" type="markdown", code='

<!--
# ⏮️ last track button
#
# {
#     "emoji": "\u23ee\ufe0f",
#     "description": "last track button",
#     "category": "Symbols",
#     "aliases": [
#         "previous_track_button"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.1"
# }
-->

:previous_track_button: `:previous_track_button:`
') }}
{{ markdown(title="🔼 upwards button" type="markdown", code='

<!--
# 🔼 upwards button
#
# {
#     "emoji": "\ud83d\udd3c",
#     "description": "upwards button",
#     "category": "Symbols",
#     "aliases": [
#         "arrow_up_small"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:arrow_up_small: `:arrow_up_small:`
') }}
{{ markdown(title="⏫ fast up button" type="markdown", code='

<!--
# ⏫ fast up button
#
# {
#     "emoji": "\u23eb",
#     "description": "fast up button",
#     "category": "Symbols",
#     "aliases": [
#         "arrow_double_up"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:arrow_double_up: `:arrow_double_up:`
') }}
{{ markdown(title="🔽 downwards button" type="markdown", code='

<!--
# 🔽 downwards button
#
# {
#     "emoji": "\ud83d\udd3d",
#     "description": "downwards button",
#     "category": "Symbols",
#     "aliases": [
#         "arrow_down_small"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:arrow_down_small: `:arrow_down_small:`
') }}
{{ markdown(title="⏬ fast down button" type="markdown", code='

<!--
# ⏬ fast down button
#
# {
#     "emoji": "\u23ec",
#     "description": "fast down button",
#     "category": "Symbols",
#     "aliases": [
#         "arrow_double_down"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:arrow_double_down: `:arrow_double_down:`
') }}
{{ markdown(title="⏸️ pause button" type="markdown", code='

<!--
# ⏸️ pause button
#
# {
#     "emoji": "\u23f8\ufe0f",
#     "description": "pause button",
#     "category": "Symbols",
#     "aliases": [
#         "pause_button"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:pause_button: `:pause_button:`
') }}
{{ markdown(title="⏹️ stop button" type="markdown", code='

<!--
# ⏹️ stop button
#
# {
#     "emoji": "\u23f9\ufe0f",
#     "description": "stop button",
#     "category": "Symbols",
#     "aliases": [
#         "stop_button"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:stop_button: `:stop_button:`
') }}
{{ markdown(title="⏺️ record button" type="markdown", code='

<!--
# ⏺️ record button
#
# {
#     "emoji": "\u23fa\ufe0f",
#     "description": "record button",
#     "category": "Symbols",
#     "aliases": [
#         "record_button"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:record_button: `:record_button:`
') }}
{{ markdown(title="⏏️ eject button" type="markdown", code='

<!--
# ⏏️ eject button
#
# {
#     "emoji": "\u23cf\ufe0f",
#     "description": "eject button",
#     "category": "Symbols",
#     "aliases": [
#         "eject_button"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:eject_button: `:eject_button:`
') }}
{{ markdown(title="🎦 cinema" type="markdown", code='

<!--
# 🎦 cinema
#
# {
#     "emoji": "\ud83c\udfa6",
#     "description": "cinema",
#     "category": "Symbols",
#     "aliases": [
#         "cinema"
#     ],
#     "tags": [
#         "film",
#         "movie"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:cinema: `:cinema:`
') }}
{{ markdown(title="🔅 dim button" type="markdown", code='

<!--
# 🔅 dim button
#
# {
#     "emoji": "\ud83d\udd05",
#     "description": "dim button",
#     "category": "Symbols",
#     "aliases": [
#         "low_brightness"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:low_brightness: `:low_brightness:`
') }}
{{ markdown(title="🔆 bright button" type="markdown", code='

<!--
# 🔆 bright button
#
# {
#     "emoji": "\ud83d\udd06",
#     "description": "bright button",
#     "category": "Symbols",
#     "aliases": [
#         "high_brightness"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:high_brightness: `:high_brightness:`
') }}
{{ markdown(title="📶 antenna bars" type="markdown", code='

<!--
# 📶 antenna bars
#
# {
#     "emoji": "\ud83d\udcf6",
#     "description": "antenna bars",
#     "category": "Symbols",
#     "aliases": [
#         "signal_strength"
#     ],
#     "tags": [
#         "wifi"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:signal_strength: `:signal_strength:`
') }}
{{ markdown(title="🛜 wireless" type="markdown", code='

<!--
# 🛜 wireless
#
# {
#     "emoji": "\ud83d\udedc",
#     "description": "wireless",
#     "category": "Symbols",
#     "aliases": [
#         "wireless"
#     ],
#     "tags": [
#         "wifi"
#     ],
#     "unicode_version": "15.0",
#     "ios_version": "16.4"
# }
-->

:wireless: `:wireless:`
') }}
{{ markdown(title="📳 vibration mode" type="markdown", code='

<!--
# 📳 vibration mode
#
# {
#     "emoji": "\ud83d\udcf3",
#     "description": "vibration mode",
#     "category": "Symbols",
#     "aliases": [
#         "vibration_mode"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:vibration_mode: `:vibration_mode:`
') }}
{{ markdown(title="📴 mobile phone off" type="markdown", code='

<!--
# 📴 mobile phone off
#
# {
#     "emoji": "\ud83d\udcf4",
#     "description": "mobile phone off",
#     "category": "Symbols",
#     "aliases": [
#         "mobile_phone_off"
#     ],
#     "tags": [
#         "mute",
#         "off"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:mobile_phone_off: `:mobile_phone_off:`
') }}
{{ markdown(title="♀️ female sign" type="markdown", code='

<!--
# ♀️ female sign
#
# {
#     "emoji": "\u2640\ufe0f",
#     "description": "female sign",
#     "category": "Symbols",
#     "aliases": [
#         "female_sign"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:female_sign: `:female_sign:`
') }}
{{ markdown(title="♂️ male sign" type="markdown", code='

<!--
# ♂️ male sign
#
# {
#     "emoji": "\u2642\ufe0f",
#     "description": "male sign",
#     "category": "Symbols",
#     "aliases": [
#         "male_sign"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:male_sign: `:male_sign:`
') }}
{{ markdown(title="⚧️ transgender symbol" type="markdown", code='

<!--
# ⚧️ transgender symbol
#
# {
#     "emoji": "\u26a7\ufe0f",
#     "description": "transgender symbol",
#     "category": "Symbols",
#     "aliases": [
#         "transgender_symbol"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:transgender_symbol: `:transgender_symbol:`
') }}
{{ markdown(title="✖️ multiply" type="markdown", code='

<!--
# ✖️ multiply
#
# {
#     "emoji": "\u2716\ufe0f",
#     "description": "multiply",
#     "category": "Symbols",
#     "aliases": [
#         "heavy_multiplication_x"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:heavy_multiplication_x: `:heavy_multiplication_x:`
') }}
{{ markdown(title="➕ plus" type="markdown", code='

<!--
# ➕ plus
#
# {
#     "emoji": "\u2795",
#     "description": "plus",
#     "category": "Symbols",
#     "aliases": [
#         "heavy_plus_sign"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:heavy_plus_sign: `:heavy_plus_sign:`
') }}
{{ markdown(title="➖ minus" type="markdown", code='

<!--
# ➖ minus
#
# {
#     "emoji": "\u2796",
#     "description": "minus",
#     "category": "Symbols",
#     "aliases": [
#         "heavy_minus_sign"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:heavy_minus_sign: `:heavy_minus_sign:`
') }}
{{ markdown(title="➗ divide" type="markdown", code='

<!--
# ➗ divide
#
# {
#     "emoji": "\u2797",
#     "description": "divide",
#     "category": "Symbols",
#     "aliases": [
#         "heavy_division_sign"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:heavy_division_sign: `:heavy_division_sign:`
') }}
{{ markdown(title="🟰 heavy equals sign" type="markdown", code='

<!--
# 🟰 heavy equals sign
#
# {
#     "emoji": "\ud83d\udff0",
#     "description": "heavy equals sign",
#     "category": "Symbols",
#     "aliases": [
#         "heavy_equals_sign"
#     ],
#     "tags": [],
#     "unicode_version": "14.0",
#     "ios_version": "15.4"
# }
-->

:heavy_equals_sign: `:heavy_equals_sign:`
') }}
{{ markdown(title="♾️ infinity" type="markdown", code='

<!--
# ♾️ infinity
#
# {
#     "emoji": "\u267e\ufe0f",
#     "description": "infinity",
#     "category": "Symbols",
#     "aliases": [
#         "infinity"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:infinity: `:infinity:`
') }}
{{ markdown(title="‼️ double exclamation mark" type="markdown", code='

<!--
# ‼️ double exclamation mark
#
# {
#     "emoji": "\u203c\ufe0f",
#     "description": "double exclamation mark",
#     "category": "Symbols",
#     "aliases": [
#         "bangbang"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:bangbang: `:bangbang:`
') }}
{{ markdown(title="⁉️ exclamation question mark" type="markdown", code='

<!--
# ⁉️ exclamation question mark
#
# {
#     "emoji": "\u2049\ufe0f",
#     "description": "exclamation question mark",
#     "category": "Symbols",
#     "aliases": [
#         "interrobang"
#     ],
#     "tags": [],
#     "unicode_version": "3.0",
#     "ios_version": "6.0"
# }
-->

:interrobang: `:interrobang:`
') }}
{{ markdown(title="❓ red question mark" type="markdown", code='

<!--
# ❓ red question mark
#
# {
#     "emoji": "\u2753",
#     "description": "red question mark",
#     "category": "Symbols",
#     "aliases": [
#         "question"
#     ],
#     "tags": [
#         "confused"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:question: `:question:`
') }}
{{ markdown(title="❔ white question mark" type="markdown", code='

<!--
# ❔ white question mark
#
# {
#     "emoji": "\u2754",
#     "description": "white question mark",
#     "category": "Symbols",
#     "aliases": [
#         "grey_question"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:grey_question: `:grey_question:`
') }}
{{ markdown(title="❕ white exclamation mark" type="markdown", code='

<!--
# ❕ white exclamation mark
#
# {
#     "emoji": "\u2755",
#     "description": "white exclamation mark",
#     "category": "Symbols",
#     "aliases": [
#         "grey_exclamation"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:grey_exclamation: `:grey_exclamation:`
') }}
{{ markdown(title="❗ red exclamation mark" type="markdown", code='

<!--
# ❗ red exclamation mark
#
# {
#     "emoji": "\u2757",
#     "description": "red exclamation mark",
#     "category": "Symbols",
#     "aliases": [
#         "exclamation",
#         "heavy_exclamation_mark"
#     ],
#     "tags": [
#         "bang"
#     ],
#     "unicode_version": "5.2",
#     "ios_version": "6.0"
# }
-->

:exclamation: `:exclamation:`

:heavy_exclamation_mark: `:heavy_exclamation_mark:`
') }}
{{ markdown(title="〰️ wavy dash" type="markdown", code='

<!--
# 〰️ wavy dash
#
# {
#     "emoji": "\u3030\ufe0f",
#     "description": "wavy dash",
#     "category": "Symbols",
#     "aliases": [
#         "wavy_dash"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:wavy_dash: `:wavy_dash:`
') }}
{{ markdown(title="💱 currency exchange" type="markdown", code='

<!--
# 💱 currency exchange
#
# {
#     "emoji": "\ud83d\udcb1",
#     "description": "currency exchange",
#     "category": "Symbols",
#     "aliases": [
#         "currency_exchange"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:currency_exchange: `:currency_exchange:`
') }}
{{ markdown(title="💲 heavy dollar sign" type="markdown", code='

<!--
# 💲 heavy dollar sign
#
# {
#     "emoji": "\ud83d\udcb2",
#     "description": "heavy dollar sign",
#     "category": "Symbols",
#     "aliases": [
#         "heavy_dollar_sign"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:heavy_dollar_sign: `:heavy_dollar_sign:`
') }}
{{ markdown(title="⚕️ medical symbol" type="markdown", code='

<!--
# ⚕️ medical symbol
#
# {
#     "emoji": "\u2695\ufe0f",
#     "description": "medical symbol",
#     "category": "Symbols",
#     "aliases": [
#         "medical_symbol"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:medical_symbol: `:medical_symbol:`
') }}
{{ markdown(title="♻️ recycling symbol" type="markdown", code='

<!--
# ♻️ recycling symbol
#
# {
#     "emoji": "\u267b\ufe0f",
#     "description": "recycling symbol",
#     "category": "Symbols",
#     "aliases": [
#         "recycle"
#     ],
#     "tags": [
#         "environment",
#         "green"
#     ],
#     "unicode_version": "3.2",
#     "ios_version": "6.0"
# }
-->

:recycle: `:recycle:`
') }}
{{ markdown(title="⚜️ fleur-de-lis" type="markdown", code='

<!--
# ⚜️ fleur-de-lis
#
# {
#     "emoji": "\u269c\ufe0f",
#     "description": "fleur-de-lis",
#     "category": "Symbols",
#     "aliases": [
#         "fleur_de_lis"
#     ],
#     "tags": [],
#     "unicode_version": "4.1",
#     "ios_version": "9.1"
# }
-->

:fleur_de_lis: `:fleur_de_lis:`
') }}
{{ markdown(title="🔱 trident emblem" type="markdown", code='

<!--
# 🔱 trident emblem
#
# {
#     "emoji": "\ud83d\udd31",
#     "description": "trident emblem",
#     "category": "Symbols",
#     "aliases": [
#         "trident"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:trident: `:trident:`
') }}
{{ markdown(title="📛 name badge" type="markdown", code='

<!--
# 📛 name badge
#
# {
#     "emoji": "\ud83d\udcdb",
#     "description": "name badge",
#     "category": "Symbols",
#     "aliases": [
#         "name_badge"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:name_badge: `:name_badge:`
') }}
{{ markdown(title="🔰 Japanese symbol for beginner" type="markdown", code='

<!--
# 🔰 Japanese symbol for beginner
#
# {
#     "emoji": "\ud83d\udd30",
#     "description": "Japanese symbol for beginner",
#     "category": "Symbols",
#     "aliases": [
#         "beginner"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:beginner: `:beginner:`
') }}
{{ markdown(title="⭕ hollow red circle" type="markdown", code='

<!--
# ⭕ hollow red circle
#
# {
#     "emoji": "\u2b55",
#     "description": "hollow red circle",
#     "category": "Symbols",
#     "aliases": [
#         "o"
#     ],
#     "tags": [],
#     "unicode_version": "5.2",
#     "ios_version": "6.0"
# }
-->

:o: `:o:`
') }}
{{ markdown(title="✅ check mark button" type="markdown", code='

<!--
# ✅ check mark button
#
# {
#     "emoji": "\u2705",
#     "description": "check mark button",
#     "category": "Symbols",
#     "aliases": [
#         "white_check_mark"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:white_check_mark: `:white_check_mark:`
') }}
{{ markdown(title="☑️ check box with check" type="markdown", code='

<!--
# ☑️ check box with check
#
# {
#     "emoji": "\u2611\ufe0f",
#     "description": "check box with check",
#     "category": "Symbols",
#     "aliases": [
#         "ballot_box_with_check"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:ballot_box_with_check: `:ballot_box_with_check:`
') }}
{{ markdown(title="✔️ check mark" type="markdown", code='

<!--
# ✔️ check mark
#
# {
#     "emoji": "\u2714\ufe0f",
#     "description": "check mark",
#     "category": "Symbols",
#     "aliases": [
#         "heavy_check_mark"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:heavy_check_mark: `:heavy_check_mark:`
') }}
{{ markdown(title="❌ cross mark" type="markdown", code='

<!--
# ❌ cross mark
#
# {
#     "emoji": "\u274c",
#     "description": "cross mark",
#     "category": "Symbols",
#     "aliases": [
#         "x"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:x: `:x:`
') }}
{{ markdown(title="❎ cross mark button" type="markdown", code='

<!--
# ❎ cross mark button
#
# {
#     "emoji": "\u274e",
#     "description": "cross mark button",
#     "category": "Symbols",
#     "aliases": [
#         "negative_squared_cross_mark"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:negative_squared_cross_mark: `:negative_squared_cross_mark:`
') }}
{{ markdown(title="➰ curly loop" type="markdown", code='

<!--
# ➰ curly loop
#
# {
#     "emoji": "\u27b0",
#     "description": "curly loop",
#     "category": "Symbols",
#     "aliases": [
#         "curly_loop"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:curly_loop: `:curly_loop:`
') }}
{{ markdown(title="➿ double curly loop" type="markdown", code='

<!--
# ➿ double curly loop
#
# {
#     "emoji": "\u27bf",
#     "description": "double curly loop",
#     "category": "Symbols",
#     "aliases": [
#         "loop"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:loop: `:loop:`
') }}
{{ markdown(title="〽️ part alternation mark" type="markdown", code='

<!--
# 〽️ part alternation mark
#
# {
#     "emoji": "\u303d\ufe0f",
#     "description": "part alternation mark",
#     "category": "Symbols",
#     "aliases": [
#         "part_alternation_mark"
#     ],
#     "tags": [],
#     "unicode_version": "3.2",
#     "ios_version": "6.0"
# }
-->

:part_alternation_mark: `:part_alternation_mark:`
') }}
{{ markdown(title="✳️ eight-spoked asterisk" type="markdown", code='

<!--
# ✳️ eight-spoked asterisk
#
# {
#     "emoji": "\u2733\ufe0f",
#     "description": "eight-spoked asterisk",
#     "category": "Symbols",
#     "aliases": [
#         "eight_spoked_asterisk"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:eight_spoked_asterisk: `:eight_spoked_asterisk:`
') }}
{{ markdown(title="✴️ eight-pointed star" type="markdown", code='

<!--
# ✴️ eight-pointed star
#
# {
#     "emoji": "\u2734\ufe0f",
#     "description": "eight-pointed star",
#     "category": "Symbols",
#     "aliases": [
#         "eight_pointed_black_star"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:eight_pointed_black_star: `:eight_pointed_black_star:`
') }}
{{ markdown(title="❇️ sparkle" type="markdown", code='

<!--
# ❇️ sparkle
#
# {
#     "emoji": "\u2747\ufe0f",
#     "description": "sparkle",
#     "category": "Symbols",
#     "aliases": [
#         "sparkle"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:sparkle: `:sparkle:`
') }}
{{ markdown(title="©️ copyright" type="markdown", code='

<!--
# ©️ copyright
#
# {
#     "emoji": "\u00a9\ufe0f",
#     "description": "copyright",
#     "category": "Symbols",
#     "aliases": [
#         "copyright"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:copyright: `:copyright:`
') }}
{{ markdown(title="®️ registered" type="markdown", code='

<!--
# ®️ registered
#
# {
#     "emoji": "\u00ae\ufe0f",
#     "description": "registered",
#     "category": "Symbols",
#     "aliases": [
#         "registered"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:registered: `:registered:`
') }}
{{ markdown(title="™️ trade mark" type="markdown", code='

<!--
# ™️ trade mark
#
# {
#     "emoji": "\u2122\ufe0f",
#     "description": "trade mark",
#     "category": "Symbols",
#     "aliases": [
#         "tm"
#     ],
#     "tags": [
#         "trademark"
#     ],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:tm: `:tm:`
') }}
{{ markdown(title="#️⃣ keycap: #" type="markdown", code='

<!--
# #️⃣ keycap: #
#
# {
#     "emoji": "#\ufe0f\u20e3",
#     "description": "keycap: #",
#     "category": "Symbols",
#     "aliases": [
#         "hash"
#     ],
#     "tags": [
#         "number"
#     ],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:hash: `:hash:`
') }}
{{ markdown(title="_️⃣ keycap:_" type="markdown", code='

<!--
# *️⃣ keycap: *
#
# {
#     "emoji": "*\ufe0f\u20e3",
#     "description": "keycap: *",
#     "category": "Symbols",
#     "aliases": [
#         "asterisk"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "9.1"
# }
-->

:asterisk: `:asterisk:`
') }}
{{ markdown(title="0️⃣ keycap: 0" type="markdown", code='

<!--
# 0️⃣ keycap: 0
#
# {
#     "emoji": "0\ufe0f\u20e3",
#     "description": "keycap: 0",
#     "category": "Symbols",
#     "aliases": [
#         "zero"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:zero: `:zero:`
') }}
{{ markdown(title="1️⃣ keycap: 1" type="markdown", code='

<!--
# 1️⃣ keycap: 1
#
# {
#     "emoji": "1\ufe0f\u20e3",
#     "description": "keycap: 1",
#     "category": "Symbols",
#     "aliases": [
#         "one"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:one: `:one:`
') }}
{{ markdown(title="2️⃣ keycap: 2" type="markdown", code='

<!--
# 2️⃣ keycap: 2
#
# {
#     "emoji": "2\ufe0f\u20e3",
#     "description": "keycap: 2",
#     "category": "Symbols",
#     "aliases": [
#         "two"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:two: `:two:`
') }}
{{ markdown(title="3️⃣ keycap: 3" type="markdown", code='

<!--
# 3️⃣ keycap: 3
#
# {
#     "emoji": "3\ufe0f\u20e3",
#     "description": "keycap: 3",
#     "category": "Symbols",
#     "aliases": [
#         "three"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:three: `:three:`
') }}
{{ markdown(title="4️⃣ keycap: 4" type="markdown", code='

<!--
# 4️⃣ keycap: 4
#
# {
#     "emoji": "4\ufe0f\u20e3",
#     "description": "keycap: 4",
#     "category": "Symbols",
#     "aliases": [
#         "four"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:four: `:four:`
') }}
{{ markdown(title="5️⃣ keycap: 5" type="markdown", code='

<!--
# 5️⃣ keycap: 5
#
# {
#     "emoji": "5\ufe0f\u20e3",
#     "description": "keycap: 5",
#     "category": "Symbols",
#     "aliases": [
#         "five"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:five: `:five:`
') }}
{{ markdown(title="6️⃣ keycap: 6" type="markdown", code='

<!--
# 6️⃣ keycap: 6
#
# {
#     "emoji": "6\ufe0f\u20e3",
#     "description": "keycap: 6",
#     "category": "Symbols",
#     "aliases": [
#         "six"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:six: `:six:`
') }}
{{ markdown(title="7️⃣ keycap: 7" type="markdown", code='

<!--
# 7️⃣ keycap: 7
#
# {
#     "emoji": "7\ufe0f\u20e3",
#     "description": "keycap: 7",
#     "category": "Symbols",
#     "aliases": [
#         "seven"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:seven: `:seven:`
') }}
{{ markdown(title="8️⃣ keycap: 8" type="markdown", code='

<!--
# 8️⃣ keycap: 8
#
# {
#     "emoji": "8\ufe0f\u20e3",
#     "description": "keycap: 8",
#     "category": "Symbols",
#     "aliases": [
#         "eight"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:eight: `:eight:`
') }}
{{ markdown(title="9️⃣ keycap: 9" type="markdown", code='

<!--
# 9️⃣ keycap: 9
#
# {
#     "emoji": "9\ufe0f\u20e3",
#     "description": "keycap: 9",
#     "category": "Symbols",
#     "aliases": [
#         "nine"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:nine: `:nine:`
') }}
{{ markdown(title="🔟 keycap: 10" type="markdown", code='

<!--
# 🔟 keycap: 10
#
# {
#     "emoji": "\ud83d\udd1f",
#     "description": "keycap: 10",
#     "category": "Symbols",
#     "aliases": [
#         "keycap_ten"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:keycap_ten: `:keycap_ten:`
') }}
{{ markdown(title="🔠 input latin uppercase" type="markdown", code='

<!--
# 🔠 input latin uppercase
#
# {
#     "emoji": "\ud83d\udd20",
#     "description": "input latin uppercase",
#     "category": "Symbols",
#     "aliases": [
#         "capital_abcd"
#     ],
#     "tags": [
#         "letters"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:capital_abcd: `:capital_abcd:`
') }}
{{ markdown(title="🔡 input latin lowercase" type="markdown", code='

<!--
# 🔡 input latin lowercase
#
# {
#     "emoji": "\ud83d\udd21",
#     "description": "input latin lowercase",
#     "category": "Symbols",
#     "aliases": [
#         "abcd"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:abcd: `:abcd:`
') }}
{{ markdown(title="🔢 input numbers" type="markdown", code='

<!--
# 🔢 input numbers
#
# {
#     "emoji": "\ud83d\udd22",
#     "description": "input numbers",
#     "category": "Symbols",
#     "aliases": [
#         "1234"
#     ],
#     "tags": [
#         "numbers"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:1234: `:1234:`
') }}
{{ markdown(title="🔣 input symbols" type="markdown", code='

<!--
# 🔣 input symbols
#
# {
#     "emoji": "\ud83d\udd23",
#     "description": "input symbols",
#     "category": "Symbols",
#     "aliases": [
#         "symbols"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:symbols: `:symbols:`
') }}
{{ markdown(title="🔤 input latin letters" type="markdown", code='

<!--
# 🔤 input latin letters
#
# {
#     "emoji": "\ud83d\udd24",
#     "description": "input latin letters",
#     "category": "Symbols",
#     "aliases": [
#         "abc"
#     ],
#     "tags": [
#         "alphabet"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:abc: `:abc:`
') }}
{{ markdown(title="🅰️ A button (blood type)" type="markdown", code='

<!--
# 🅰️ A button (blood type)
#
# {
#     "emoji": "\ud83c\udd70\ufe0f",
#     "description": "A button (blood type)",
#     "category": "Symbols",
#     "aliases": [
#         "a"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:a: `:a:`
') }}
{{ markdown(title="🆎 AB button (blood type)" type="markdown", code='

<!--
# 🆎 AB button (blood type)
#
# {
#     "emoji": "\ud83c\udd8e",
#     "description": "AB button (blood type)",
#     "category": "Symbols",
#     "aliases": [
#         "ab"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:ab: `:ab:`
') }}
{{ markdown(title="🅱️ B button (blood type)" type="markdown", code='

<!--
# 🅱️ B button (blood type)
#
# {
#     "emoji": "\ud83c\udd71\ufe0f",
#     "description": "B button (blood type)",
#     "category": "Symbols",
#     "aliases": [
#         "b"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:b: `:b:`
') }}
{{ markdown(title="🆑 CL button" type="markdown", code='

<!--
# 🆑 CL button
#
# {
#     "emoji": "\ud83c\udd91",
#     "description": "CL button",
#     "category": "Symbols",
#     "aliases": [
#         "cl"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:cl: `:cl:`
') }}
{{ markdown(title="🆒 COOL button" type="markdown", code='

<!--
# 🆒 COOL button
#
# {
#     "emoji": "\ud83c\udd92",
#     "description": "COOL button",
#     "category": "Symbols",
#     "aliases": [
#         "cool"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:cool: `:cool:`
') }}
{{ markdown(title="🆓 FREE button" type="markdown", code='

<!--
# 🆓 FREE button
#
# {
#     "emoji": "\ud83c\udd93",
#     "description": "FREE button",
#     "category": "Symbols",
#     "aliases": [
#         "free"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:free: `:free:`
') }}
{{ markdown(title="ℹ️ information" type="markdown", code='

<!--
# ℹ️ information
#
# {
#     "emoji": "\u2139\ufe0f",
#     "description": "information",
#     "category": "Symbols",
#     "aliases": [
#         "information_source"
#     ],
#     "tags": [],
#     "unicode_version": "3.0",
#     "ios_version": "6.0"
# }
-->

:information_source: `:information_source:`
') }}
{{ markdown(title="🆔 ID button" type="markdown", code='

<!--
# 🆔 ID button
#
# {
#     "emoji": "\ud83c\udd94",
#     "description": "ID button",
#     "category": "Symbols",
#     "aliases": [
#         "id"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:id: `:id:`
') }}
{{ markdown(title="Ⓜ️ circled M" type="markdown", code='

<!--
# Ⓜ️ circled M
#
# {
#     "emoji": "\u24c2\ufe0f",
#     "description": "circled M",
#     "category": "Symbols",
#     "aliases": [
#         "m"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:m: `:m:`
') }}
{{ markdown(title="🆕 NEW button" type="markdown", code='

<!--
# 🆕 NEW button
#
# {
#     "emoji": "\ud83c\udd95",
#     "description": "NEW button",
#     "category": "Symbols",
#     "aliases": [
#         "new"
#     ],
#     "tags": [
#         "fresh"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:new: `:new:`
') }}
{{ markdown(title="🆖 NG button" type="markdown", code='

<!--
# 🆖 NG button
#
# {
#     "emoji": "\ud83c\udd96",
#     "description": "NG button",
#     "category": "Symbols",
#     "aliases": [
#         "ng"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:ng: `:ng:`
') }}
{{ markdown(title="🅾️ O button (blood type)" type="markdown", code='

<!--
# 🅾️ O button (blood type)
#
# {
#     "emoji": "\ud83c\udd7e\ufe0f",
#     "description": "O button (blood type)",
#     "category": "Symbols",
#     "aliases": [
#         "o2"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:o2: `:o2:`
') }}
{{ markdown(title="🆗 OK button" type="markdown", code='

<!--
# 🆗 OK button
#
# {
#     "emoji": "\ud83c\udd97",
#     "description": "OK button",
#     "category": "Symbols",
#     "aliases": [
#         "ok"
#     ],
#     "tags": [
#         "yes"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:ok: `:ok:`
') }}
{{ markdown(title="🅿️ P button" type="markdown", code='

<!--
# 🅿️ P button
#
# {
#     "emoji": "\ud83c\udd7f\ufe0f",
#     "description": "P button",
#     "category": "Symbols",
#     "aliases": [
#         "parking"
#     ],
#     "tags": [],
#     "unicode_version": "5.2",
#     "ios_version": "6.0"
# }
-->

:parking: `:parking:`
') }}
{{ markdown(title="🆘 SOS button" type="markdown", code='

<!--
# 🆘 SOS button
#
# {
#     "emoji": "\ud83c\udd98",
#     "description": "SOS button",
#     "category": "Symbols",
#     "aliases": [
#         "sos"
#     ],
#     "tags": [
#         "help",
#         "emergency"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:sos: `:sos:`
') }}
{{ markdown(title="🆙 UP! button" type="markdown", code='

<!--
# 🆙 UP! button
#
# {
#     "emoji": "\ud83c\udd99",
#     "description": "UP! button",
#     "category": "Symbols",
#     "aliases": [
#         "up"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:up: `:up:`
') }}
{{ markdown(title="🆚 VS button" type="markdown", code='

<!--
# 🆚 VS button
#
# {
#     "emoji": "\ud83c\udd9a",
#     "description": "VS button",
#     "category": "Symbols",
#     "aliases": [
#         "vs"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:vs: `:vs:`
') }}
{{ markdown(title="🈁 Japanese “here” button" type="markdown", code='

<!--
# 🈁 Japanese “here” button
#
# {
#     "emoji": "\ud83c\ude01",
#     "description": "Japanese \u201chere\u201d button",
#     "category": "Symbols",
#     "aliases": [
#         "koko"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:koko: `:koko:`
') }}
{{ markdown(title="🈂️ Japanese “service charge” button" type="markdown", code='

<!--
# 🈂️ Japanese “service charge” button
#
# {
#     "emoji": "\ud83c\ude02\ufe0f",
#     "description": "Japanese \u201cservice charge\u201d button",
#     "category": "Symbols",
#     "aliases": [
#         "sa"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:sa: `:sa:`
') }}
{{ markdown(title="🈷️ Japanese “monthly amount” button" type="markdown", code='

<!--
# 🈷️ Japanese “monthly amount” button
#
# {
#     "emoji": "\ud83c\ude37\ufe0f",
#     "description": "Japanese \u201cmonthly amount\u201d button",
#     "category": "Symbols",
#     "aliases": [
#         "u6708"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:u6708: `:u6708:`
') }}
{{ markdown(title="🈶 Japanese “not free of charge” button" type="markdown", code='

<!--
# 🈶 Japanese “not free of charge” button
#
# {
#     "emoji": "\ud83c\ude36",
#     "description": "Japanese \u201cnot free of charge\u201d button",
#     "category": "Symbols",
#     "aliases": [
#         "u6709"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:u6709: `:u6709:`
') }}
{{ markdown(title="🈯 Japanese “reserved” button" type="markdown", code='

<!--
# 🈯 Japanese “reserved” button
#
# {
#     "emoji": "\ud83c\ude2f",
#     "description": "Japanese \u201creserved\u201d button",
#     "category": "Symbols",
#     "aliases": [
#         "u6307"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:u6307: `:u6307:`
') }}
{{ markdown(title="🉐 Japanese “bargain” button" type="markdown", code='

<!--
# 🉐 Japanese “bargain” button
#
# {
#     "emoji": "\ud83c\ude50",
#     "description": "Japanese \u201cbargain\u201d button",
#     "category": "Symbols",
#     "aliases": [
#         "ideograph_advantage"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:ideograph_advantage: `:ideograph_advantage:`
') }}
{{ markdown(title="🈹 Japanese “discount” button" type="markdown", code='

<!--
# 🈹 Japanese “discount” button
#
# {
#     "emoji": "\ud83c\ude39",
#     "description": "Japanese \u201cdiscount\u201d button",
#     "category": "Symbols",
#     "aliases": [
#         "u5272"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:u5272: `:u5272:`
') }}
{{ markdown(title="🈚 Japanese “free of charge” button" type="markdown", code='

<!--
# 🈚 Japanese “free of charge” button
#
# {
#     "emoji": "\ud83c\ude1a",
#     "description": "Japanese \u201cfree of charge\u201d button",
#     "category": "Symbols",
#     "aliases": [
#         "u7121"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:u7121: `:u7121:`
') }}
{{ markdown(title="🈲 Japanese “prohibited” button" type="markdown", code='

<!--
# 🈲 Japanese “prohibited” button
#
# {
#     "emoji": "\ud83c\ude32",
#     "description": "Japanese \u201cprohibited\u201d button",
#     "category": "Symbols",
#     "aliases": [
#         "u7981"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:u7981: `:u7981:`
') }}
{{ markdown(title="🉑 Japanese “acceptable” button" type="markdown", code='

<!--
# 🉑 Japanese “acceptable” button
#
# {
#     "emoji": "\ud83c\ude51",
#     "description": "Japanese \u201cacceptable\u201d button",
#     "category": "Symbols",
#     "aliases": [
#         "accept"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:accept: `:accept:`
') }}
{{ markdown(title="🈸 Japanese “application” button" type="markdown", code='

<!--
# 🈸 Japanese “application” button
#
# {
#     "emoji": "\ud83c\ude38",
#     "description": "Japanese \u201capplication\u201d button",
#     "category": "Symbols",
#     "aliases": [
#         "u7533"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:u7533: `:u7533:`
') }}
{{ markdown(title="🈴 Japanese “passing grade” button" type="markdown", code='

<!--
# 🈴 Japanese “passing grade” button
#
# {
#     "emoji": "\ud83c\ude34",
#     "description": "Japanese \u201cpassing grade\u201d button",
#     "category": "Symbols",
#     "aliases": [
#         "u5408"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:u5408: `:u5408:`
') }}
{{ markdown(title="🈳 Japanese “vacancy” button" type="markdown", code='

<!--
# 🈳 Japanese “vacancy” button
#
# {
#     "emoji": "\ud83c\ude33",
#     "description": "Japanese \u201cvacancy\u201d button",
#     "category": "Symbols",
#     "aliases": [
#         "u7a7a"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:u7a7a: `:u7a7a:`
') }}
{{ markdown(title="㊗️ Japanese “congratulations” button" type="markdown", code='

<!--
# ㊗️ Japanese “congratulations” button
#
# {
#     "emoji": "\u3297\ufe0f",
#     "description": "Japanese \u201ccongratulations\u201d button",
#     "category": "Symbols",
#     "aliases": [
#         "congratulations"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:congratulations: `:congratulations:`
') }}
{{ markdown(title="㊙️ Japanese “secret” button" type="markdown", code='

<!--
# ㊙️ Japanese “secret” button
#
# {
#     "emoji": "\u3299\ufe0f",
#     "description": "Japanese \u201csecret\u201d button",
#     "category": "Symbols",
#     "aliases": [
#         "secret"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:secret: `:secret:`
') }}
{{ markdown(title="🈺 Japanese “open for business” button" type="markdown", code='

<!--
# 🈺 Japanese “open for business” button
#
# {
#     "emoji": "\ud83c\ude3a",
#     "description": "Japanese \u201copen for business\u201d button",
#     "category": "Symbols",
#     "aliases": [
#         "u55b6"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:u55b6: `:u55b6:`
') }}
{{ markdown(title="🈵 Japanese “no vacancy” button" type="markdown", code='

<!--
# 🈵 Japanese “no vacancy” button
#
# {
#     "emoji": "\ud83c\ude35",
#     "description": "Japanese \u201cno vacancy\u201d button",
#     "category": "Symbols",
#     "aliases": [
#         "u6e80"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:u6e80: `:u6e80:`
') }}
{{ markdown(title="🔴 red circle" type="markdown", code='

<!--
# 🔴 red circle
#
# {
#     "emoji": "\ud83d\udd34",
#     "description": "red circle",
#     "category": "Symbols",
#     "aliases": [
#         "red_circle"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:red_circle: `:red_circle:`
') }}
{{ markdown(title="🟠 orange circle" type="markdown", code='

<!--
# 🟠 orange circle
#
# {
#     "emoji": "\ud83d\udfe0",
#     "description": "orange circle",
#     "category": "Symbols",
#     "aliases": [
#         "orange_circle"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:orange_circle: `:orange_circle:`
') }}
{{ markdown(title="🟡 yellow circle" type="markdown", code='

<!--
# 🟡 yellow circle
#
# {
#     "emoji": "\ud83d\udfe1",
#     "description": "yellow circle",
#     "category": "Symbols",
#     "aliases": [
#         "yellow_circle"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:yellow_circle: `:yellow_circle:`
') }}
{{ markdown(title="🟢 green circle" type="markdown", code='

<!--
# 🟢 green circle
#
# {
#     "emoji": "\ud83d\udfe2",
#     "description": "green circle",
#     "category": "Symbols",
#     "aliases": [
#         "green_circle"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:green_circle: `:green_circle:`
') }}
{{ markdown(title="🔵 blue circle" type="markdown", code='

<!--
# 🔵 blue circle
#
# {
#     "emoji": "\ud83d\udd35",
#     "description": "blue circle",
#     "category": "Symbols",
#     "aliases": [
#         "large_blue_circle"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:large_blue_circle: `:large_blue_circle:`
') }}
{{ markdown(title="🟣 purple circle" type="markdown", code='

<!--
# 🟣 purple circle
#
# {
#     "emoji": "\ud83d\udfe3",
#     "description": "purple circle",
#     "category": "Symbols",
#     "aliases": [
#         "purple_circle"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:purple_circle: `:purple_circle:`
') }}
{{ markdown(title="🟤 brown circle" type="markdown", code='

<!--
# 🟤 brown circle
#
# {
#     "emoji": "\ud83d\udfe4",
#     "description": "brown circle",
#     "category": "Symbols",
#     "aliases": [
#         "brown_circle"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:brown_circle: `:brown_circle:`
') }}
{{ markdown(title="⚫ black circle" type="markdown", code='

<!--
# ⚫ black circle
#
# {
#     "emoji": "\u26ab",
#     "description": "black circle",
#     "category": "Symbols",
#     "aliases": [
#         "black_circle"
#     ],
#     "tags": [],
#     "unicode_version": "4.1",
#     "ios_version": "6.0"
# }
-->

:black_circle: `:black_circle:`
') }}
{{ markdown(title="⚪ white circle" type="markdown", code='

<!--
# ⚪ white circle
#
# {
#     "emoji": "\u26aa",
#     "description": "white circle",
#     "category": "Symbols",
#     "aliases": [
#         "white_circle"
#     ],
#     "tags": [],
#     "unicode_version": "4.1",
#     "ios_version": "6.0"
# }
-->

:white_circle: `:white_circle:`
') }}
{{ markdown(title="🟥 red square" type="markdown", code='

<!--
# 🟥 red square
#
# {
#     "emoji": "\ud83d\udfe5",
#     "description": "red square",
#     "category": "Symbols",
#     "aliases": [
#         "red_square"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:red_square: `:red_square:`
') }}
{{ markdown(title="🟧 orange square" type="markdown", code='

<!--
# 🟧 orange square
#
# {
#     "emoji": "\ud83d\udfe7",
#     "description": "orange square",
#     "category": "Symbols",
#     "aliases": [
#         "orange_square"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:orange_square: `:orange_square:`
') }}
{{ markdown(title="🟨 yellow square" type="markdown", code='

<!--
# 🟨 yellow square
#
# {
#     "emoji": "\ud83d\udfe8",
#     "description": "yellow square",
#     "category": "Symbols",
#     "aliases": [
#         "yellow_square"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:yellow_square: `:yellow_square:`
') }}
{{ markdown(title="🟩 green square" type="markdown", code='

<!--
# 🟩 green square
#
# {
#     "emoji": "\ud83d\udfe9",
#     "description": "green square",
#     "category": "Symbols",
#     "aliases": [
#         "green_square"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:green_square: `:green_square:`
') }}
{{ markdown(title="🟦 blue square" type="markdown", code='

<!--
# 🟦 blue square
#
# {
#     "emoji": "\ud83d\udfe6",
#     "description": "blue square",
#     "category": "Symbols",
#     "aliases": [
#         "blue_square"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:blue_square: `:blue_square:`
') }}
{{ markdown(title="🟪 purple square" type="markdown", code='

<!--
# 🟪 purple square
#
# {
#     "emoji": "\ud83d\udfea",
#     "description": "purple square",
#     "category": "Symbols",
#     "aliases": [
#         "purple_square"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:purple_square: `:purple_square:`
') }}
{{ markdown(title="🟫 brown square" type="markdown", code='

<!--
# 🟫 brown square
#
# {
#     "emoji": "\ud83d\udfeb",
#     "description": "brown square",
#     "category": "Symbols",
#     "aliases": [
#         "brown_square"
#     ],
#     "tags": [],
#     "unicode_version": "12.0",
#     "ios_version": "13.0"
# }
-->

:brown_square: `:brown_square:`
') }}
{{ markdown(title="⬛ black large square" type="markdown", code='

<!--
# ⬛ black large square
#
# {
#     "emoji": "\u2b1b",
#     "description": "black large square",
#     "category": "Symbols",
#     "aliases": [
#         "black_large_square"
#     ],
#     "tags": [],
#     "unicode_version": "5.1",
#     "ios_version": "6.0"
# }
-->

:black_large_square: `:black_large_square:`
') }}
{{ markdown(title="⬜ white large square" type="markdown", code='

<!--
# ⬜ white large square
#
# {
#     "emoji": "\u2b1c",
#     "description": "white large square",
#     "category": "Symbols",
#     "aliases": [
#         "white_large_square"
#     ],
#     "tags": [],
#     "unicode_version": "5.1",
#     "ios_version": "6.0"
# }
-->

:white_large_square: `:white_large_square:`
') }}
{{ markdown(title="◼️ black medium square" type="markdown", code='

<!--
# ◼️ black medium square
#
# {
#     "emoji": "\u25fc\ufe0f",
#     "description": "black medium square",
#     "category": "Symbols",
#     "aliases": [
#         "black_medium_square"
#     ],
#     "tags": [],
#     "unicode_version": "3.2",
#     "ios_version": "6.0"
# }
-->

:black_medium_square: `:black_medium_square:`
') }}
{{ markdown(title="◻️ white medium square" type="markdown", code='

<!--
# ◻️ white medium square
#
# {
#     "emoji": "\u25fb\ufe0f",
#     "description": "white medium square",
#     "category": "Symbols",
#     "aliases": [
#         "white_medium_square"
#     ],
#     "tags": [],
#     "unicode_version": "3.2",
#     "ios_version": "6.0"
# }
-->

:white_medium_square: `:white_medium_square:`
') }}
{{ markdown(title="◾ black medium-small square" type="markdown", code='

<!--
# ◾ black medium-small square
#
# {
#     "emoji": "\u25fe",
#     "description": "black medium-small square",
#     "category": "Symbols",
#     "aliases": [
#         "black_medium_small_square"
#     ],
#     "tags": [],
#     "unicode_version": "3.2",
#     "ios_version": "6.0"
# }
-->

:black_medium_small_square: `:black_medium_small_square:`
') }}
{{ markdown(title="◽ white medium-small square" type="markdown", code='

<!--
# ◽ white medium-small square
#
# {
#     "emoji": "\u25fd",
#     "description": "white medium-small square",
#     "category": "Symbols",
#     "aliases": [
#         "white_medium_small_square"
#     ],
#     "tags": [],
#     "unicode_version": "3.2",
#     "ios_version": "6.0"
# }
-->

:white_medium_small_square: `:white_medium_small_square:`
') }}
{{ markdown(title="▪️ black small square" type="markdown", code='

<!--
# ▪️ black small square
#
# {
#     "emoji": "\u25aa\ufe0f",
#     "description": "black small square",
#     "category": "Symbols",
#     "aliases": [
#         "black_small_square"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:black_small_square: `:black_small_square:`
') }}
{{ markdown(title="▫️ white small square" type="markdown", code='

<!--
# ▫️ white small square
#
# {
#     "emoji": "\u25ab\ufe0f",
#     "description": "white small square",
#     "category": "Symbols",
#     "aliases": [
#         "white_small_square"
#     ],
#     "tags": [],
#     "unicode_version": "",
#     "ios_version": "6.0"
# }
-->

:white_small_square: `:white_small_square:`
') }}
{{ markdown(title="🔶 large orange diamond" type="markdown", code='

<!--
# 🔶 large orange diamond
#
# {
#     "emoji": "\ud83d\udd36",
#     "description": "large orange diamond",
#     "category": "Symbols",
#     "aliases": [
#         "large_orange_diamond"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:large_orange_diamond: `:large_orange_diamond:`
') }}
{{ markdown(title="🔷 large blue diamond" type="markdown", code='

<!--
# 🔷 large blue diamond
#
# {
#     "emoji": "\ud83d\udd37",
#     "description": "large blue diamond",
#     "category": "Symbols",
#     "aliases": [
#         "large_blue_diamond"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:large_blue_diamond: `:large_blue_diamond:`
') }}
{{ markdown(title="🔸 small orange diamond" type="markdown", code='

<!--
# 🔸 small orange diamond
#
# {
#     "emoji": "\ud83d\udd38",
#     "description": "small orange diamond",
#     "category": "Symbols",
#     "aliases": [
#         "small_orange_diamond"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:small_orange_diamond: `:small_orange_diamond:`
') }}
{{ markdown(title="🔹 small blue diamond" type="markdown", code='

<!--
# 🔹 small blue diamond
#
# {
#     "emoji": "\ud83d\udd39",
#     "description": "small blue diamond",
#     "category": "Symbols",
#     "aliases": [
#         "small_blue_diamond"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:small_blue_diamond: `:small_blue_diamond:`
') }}
{{ markdown(title="🔺 red triangle pointed up" type="markdown", code='

<!--
# 🔺 red triangle pointed up
#
# {
#     "emoji": "\ud83d\udd3a",
#     "description": "red triangle pointed up",
#     "category": "Symbols",
#     "aliases": [
#         "small_red_triangle"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:small_red_triangle: `:small_red_triangle:`
') }}
{{ markdown(title="🔻 red triangle pointed down" type="markdown", code='

<!--
# 🔻 red triangle pointed down
#
# {
#     "emoji": "\ud83d\udd3b",
#     "description": "red triangle pointed down",
#     "category": "Symbols",
#     "aliases": [
#         "small_red_triangle_down"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:small_red_triangle_down: `:small_red_triangle_down:`
') }}
{{ markdown(title="💠 diamond with a dot" type="markdown", code='

<!--
# 💠 diamond with a dot
#
# {
#     "emoji": "\ud83d\udca0",
#     "description": "diamond with a dot",
#     "category": "Symbols",
#     "aliases": [
#         "diamond_shape_with_a_dot_inside"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:diamond_shape_with_a_dot_inside: `:diamond_shape_with_a_dot_inside:`
') }}
{{ markdown(title="🔘 radio button" type="markdown", code='

<!--
# 🔘 radio button
#
# {
#     "emoji": "\ud83d\udd18",
#     "description": "radio button",
#     "category": "Symbols",
#     "aliases": [
#         "radio_button"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:radio_button: `:radio_button:`
') }}
{{ markdown(title="🔳 white square button" type="markdown", code='

<!--
# 🔳 white square button
#
# {
#     "emoji": "\ud83d\udd33",
#     "description": "white square button",
#     "category": "Symbols",
#     "aliases": [
#         "white_square_button"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:white_square_button: `:white_square_button:`
') }}
{{ markdown(title="🔲 black square button" type="markdown", code='

<!--
# 🔲 black square button
#
# {
#     "emoji": "\ud83d\udd32",
#     "description": "black square button",
#     "category": "Symbols",
#     "aliases": [
#         "black_square_button"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:black_square_button: `:black_square_button:`
') }}
{{ markdown(title="🏁 chequered flag" type="markdown", code='

<!--
# 🏁 chequered flag
#
# {
#     "emoji": "\ud83c\udfc1",
#     "description": "chequered flag",
#     "category": "Flags",
#     "aliases": [
#         "checkered_flag"
#     ],
#     "tags": [
#         "milestone",
#         "finish"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:checkered_flag: `:checkered_flag:`
') }}
{{ markdown(title="🚩 triangular flag" type="markdown", code='

<!--
# 🚩 triangular flag
#
# {
#     "emoji": "\ud83d\udea9",
#     "description": "triangular flag",
#     "category": "Flags",
#     "aliases": [
#         "triangular_flag_on_post"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:triangular_flag_on_post: `:triangular_flag_on_post:`
') }}
{{ markdown(title="🎌 crossed flags" type="markdown", code='

<!--
# 🎌 crossed flags
#
# {
#     "emoji": "\ud83c\udf8c",
#     "description": "crossed flags",
#     "category": "Flags",
#     "aliases": [
#         "crossed_flags"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:crossed_flags: `:crossed_flags:`
') }}
{{ markdown(title="🏴 black flag" type="markdown", code='

<!--
# 🏴 black flag
#
# {
#     "emoji": "\ud83c\udff4",
#     "description": "black flag",
#     "category": "Flags",
#     "aliases": [
#         "black_flag"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:black_flag: `:black_flag:`
') }}
{{ markdown(title="🏳️ white flag" type="markdown", code='

<!--
# 🏳️ white flag
#
# {
#     "emoji": "\ud83c\udff3\ufe0f",
#     "description": "white flag",
#     "category": "Flags",
#     "aliases": [
#         "white_flag"
#     ],
#     "tags": [],
#     "unicode_version": "7.0",
#     "ios_version": "9.1"
# }
-->

:white_flag: `:white_flag:`
') }}
{{ markdown(title="🏳️‍🌈 rainbow flag" type="markdown", code='

<!--
# 🏳️‍🌈 rainbow flag
#
# {
#     "emoji": "\ud83c\udff3\ufe0f\u200d\ud83c\udf08",
#     "description": "rainbow flag",
#     "category": "Flags",
#     "aliases": [
#         "rainbow_flag"
#     ],
#     "tags": [
#         "pride"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "10.0"
# }
-->

:rainbow_flag: `:rainbow_flag:`
') }}
{{ markdown(title="🏳️‍⚧️ transgender flag" type="markdown", code='

<!--
# 🏳️‍⚧️ transgender flag
#
# {
#     "emoji": "\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f",
#     "description": "transgender flag",
#     "category": "Flags",
#     "aliases": [
#         "transgender_flag"
#     ],
#     "tags": [],
#     "unicode_version": "13.0",
#     "ios_version": "14.0"
# }
-->

:transgender_flag: `:transgender_flag:`
') }}
{{ markdown(title="🏴‍☠️ pirate flag" type="markdown", code='

<!--
# 🏴‍☠️ pirate flag
#
# {
#     "emoji": "\ud83c\udff4\u200d\u2620\ufe0f",
#     "description": "pirate flag",
#     "category": "Flags",
#     "aliases": [
#         "pirate_flag"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:pirate_flag: `:pirate_flag:`
') }}
{{ markdown(title="🇦🇨 flag: Ascension Island" type="markdown", code='

<!--
# 🇦🇨 flag: Ascension Island
#
# {
#     "emoji": "\ud83c\udde6\ud83c\udde8",
#     "description": "flag: Ascension Island",
#     "category": "Flags",
#     "aliases": [
#         "ascension_island"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:ascension_island: `:ascension_island:`
') }}
{{ markdown(title="🇦🇩 flag: Andorra" type="markdown", code='

<!--
# 🇦🇩 flag: Andorra
#
# {
#     "emoji": "\ud83c\udde6\ud83c\udde9",
#     "description": "flag: Andorra",
#     "category": "Flags",
#     "aliases": [
#         "andorra"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:andorra: `:andorra:`
') }}
{{ markdown(title="🇦🇪 flag: United Arab Emirates" type="markdown", code='

<!--
# 🇦🇪 flag: United Arab Emirates
#
# {
#     "emoji": "\ud83c\udde6\ud83c\uddea",
#     "description": "flag: United Arab Emirates",
#     "category": "Flags",
#     "aliases": [
#         "united_arab_emirates"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:united_arab_emirates: `:united_arab_emirates:`
') }}
{{ markdown(title="🇦🇫 flag: Afghanistan" type="markdown", code='

<!--
# 🇦🇫 flag: Afghanistan
#
# {
#     "emoji": "\ud83c\udde6\ud83c\uddeb",
#     "description": "flag: Afghanistan",
#     "category": "Flags",
#     "aliases": [
#         "afghanistan"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:afghanistan: `:afghanistan:`
') }}
{{ markdown(title="🇦🇬 flag: Antigua & Barbuda" type="markdown", code='

<!--
# 🇦🇬 flag: Antigua & Barbuda
#
# {
#     "emoji": "\ud83c\udde6\ud83c\uddec",
#     "description": "flag: Antigua & Barbuda",
#     "category": "Flags",
#     "aliases": [
#         "antigua_barbuda"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:antigua_barbuda: `:antigua_barbuda:`
') }}
{{ markdown(title="🇦🇮 flag: Anguilla" type="markdown", code='

<!--
# 🇦🇮 flag: Anguilla
#
# {
#     "emoji": "\ud83c\udde6\ud83c\uddee",
#     "description": "flag: Anguilla",
#     "category": "Flags",
#     "aliases": [
#         "anguilla"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:anguilla: `:anguilla:`
') }}
{{ markdown(title="🇦🇱 flag: Albania" type="markdown", code='

<!--
# 🇦🇱 flag: Albania
#
# {
#     "emoji": "\ud83c\udde6\ud83c\uddf1",
#     "description": "flag: Albania",
#     "category": "Flags",
#     "aliases": [
#         "albania"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:albania: `:albania:`
') }}
{{ markdown(title="🇦🇲 flag: Armenia" type="markdown", code='

<!--
# 🇦🇲 flag: Armenia
#
# {
#     "emoji": "\ud83c\udde6\ud83c\uddf2",
#     "description": "flag: Armenia",
#     "category": "Flags",
#     "aliases": [
#         "armenia"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:armenia: `:armenia:`
') }}
{{ markdown(title="🇦🇴 flag: Angola" type="markdown", code='

<!--
# 🇦🇴 flag: Angola
#
# {
#     "emoji": "\ud83c\udde6\ud83c\uddf4",
#     "description": "flag: Angola",
#     "category": "Flags",
#     "aliases": [
#         "angola"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:angola: `:angola:`
') }}
{{ markdown(title="🇦🇶 flag: Antarctica" type="markdown", code='

<!--
# 🇦🇶 flag: Antarctica
#
# {
#     "emoji": "\ud83c\udde6\ud83c\uddf6",
#     "description": "flag: Antarctica",
#     "category": "Flags",
#     "aliases": [
#         "antarctica"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.0"
# }
-->

:antarctica: `:antarctica:`
') }}
{{ markdown(title="🇦🇷 flag: Argentina" type="markdown", code='

<!--
# 🇦🇷 flag: Argentina
#
# {
#     "emoji": "\ud83c\udde6\ud83c\uddf7",
#     "description": "flag: Argentina",
#     "category": "Flags",
#     "aliases": [
#         "argentina"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:argentina: `:argentina:`
') }}
{{ markdown(title="🇦🇸 flag: American Samoa" type="markdown", code='

<!--
# 🇦🇸 flag: American Samoa
#
# {
#     "emoji": "\ud83c\udde6\ud83c\uddf8",
#     "description": "flag: American Samoa",
#     "category": "Flags",
#     "aliases": [
#         "american_samoa"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:american_samoa: `:american_samoa:`
') }}
{{ markdown(title="🇦🇹 flag: Austria" type="markdown", code='

<!--
# 🇦🇹 flag: Austria
#
# {
#     "emoji": "\ud83c\udde6\ud83c\uddf9",
#     "description": "flag: Austria",
#     "category": "Flags",
#     "aliases": [
#         "austria"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:austria: `:austria:`
') }}
{{ markdown(title="🇦🇺 flag: Australia" type="markdown", code='

<!--
# 🇦🇺 flag: Australia
#
# {
#     "emoji": "\ud83c\udde6\ud83c\uddfa",
#     "description": "flag: Australia",
#     "category": "Flags",
#     "aliases": [
#         "australia"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:australia: `:australia:`
') }}
{{ markdown(title="🇦🇼 flag: Aruba" type="markdown", code='

<!--
# 🇦🇼 flag: Aruba
#
# {
#     "emoji": "\ud83c\udde6\ud83c\uddfc",
#     "description": "flag: Aruba",
#     "category": "Flags",
#     "aliases": [
#         "aruba"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:aruba: `:aruba:`
') }}
{{ markdown(title="🇦🇽 flag: Åland Islands" type="markdown", code='

<!--
# 🇦🇽 flag: Åland Islands
#
# {
#     "emoji": "\ud83c\udde6\ud83c\uddfd",
#     "description": "flag: \u00c5land Islands",
#     "category": "Flags",
#     "aliases": [
#         "aland_islands"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.0"
# }
-->

:aland_islands: `:aland_islands:`
') }}
{{ markdown(title="🇦🇿 flag: Azerbaijan" type="markdown", code='

<!--
# 🇦🇿 flag: Azerbaijan
#
# {
#     "emoji": "\ud83c\udde6\ud83c\uddff",
#     "description": "flag: Azerbaijan",
#     "category": "Flags",
#     "aliases": [
#         "azerbaijan"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:azerbaijan: `:azerbaijan:`
') }}
{{ markdown(title="🇧🇦 flag: Bosnia & Herzegovina" type="markdown", code='

<!--
# 🇧🇦 flag: Bosnia & Herzegovina
#
# {
#     "emoji": "\ud83c\udde7\ud83c\udde6",
#     "description": "flag: Bosnia & Herzegovina",
#     "category": "Flags",
#     "aliases": [
#         "bosnia_herzegovina"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:bosnia_herzegovina: `:bosnia_herzegovina:`
') }}
{{ markdown(title="🇧🇧 flag: Barbados" type="markdown", code='

<!--
# 🇧🇧 flag: Barbados
#
# {
#     "emoji": "\ud83c\udde7\ud83c\udde7",
#     "description": "flag: Barbados",
#     "category": "Flags",
#     "aliases": [
#         "barbados"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:barbados: `:barbados:`
') }}
{{ markdown(title="🇧🇩 flag: Bangladesh" type="markdown", code='

<!--
# 🇧🇩 flag: Bangladesh
#
# {
#     "emoji": "\ud83c\udde7\ud83c\udde9",
#     "description": "flag: Bangladesh",
#     "category": "Flags",
#     "aliases": [
#         "bangladesh"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:bangladesh: `:bangladesh:`
') }}
{{ markdown(title="🇧🇪 flag: Belgium" type="markdown", code='

<!--
# 🇧🇪 flag: Belgium
#
# {
#     "emoji": "\ud83c\udde7\ud83c\uddea",
#     "description": "flag: Belgium",
#     "category": "Flags",
#     "aliases": [
#         "belgium"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:belgium: `:belgium:`
') }}
{{ markdown(title="🇧🇫 flag: Burkina Faso" type="markdown", code='

<!--
# 🇧🇫 flag: Burkina Faso
#
# {
#     "emoji": "\ud83c\udde7\ud83c\uddeb",
#     "description": "flag: Burkina Faso",
#     "category": "Flags",
#     "aliases": [
#         "burkina_faso"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:burkina_faso: `:burkina_faso:`
') }}
{{ markdown(title="🇧🇬 flag: Bulgaria" type="markdown", code='

<!--
# 🇧🇬 flag: Bulgaria
#
# {
#     "emoji": "\ud83c\udde7\ud83c\uddec",
#     "description": "flag: Bulgaria",
#     "category": "Flags",
#     "aliases": [
#         "bulgaria"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:bulgaria: `:bulgaria:`
') }}
{{ markdown(title="🇧🇭 flag: Bahrain" type="markdown", code='

<!--
# 🇧🇭 flag: Bahrain
#
# {
#     "emoji": "\ud83c\udde7\ud83c\udded",
#     "description": "flag: Bahrain",
#     "category": "Flags",
#     "aliases": [
#         "bahrain"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:bahrain: `:bahrain:`
') }}
{{ markdown(title="🇧🇮 flag: Burundi" type="markdown", code='

<!--
# 🇧🇮 flag: Burundi
#
# {
#     "emoji": "\ud83c\udde7\ud83c\uddee",
#     "description": "flag: Burundi",
#     "category": "Flags",
#     "aliases": [
#         "burundi"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:burundi: `:burundi:`
') }}
{{ markdown(title="🇧🇯 flag: Benin" type="markdown", code='

<!--
# 🇧🇯 flag: Benin
#
# {
#     "emoji": "\ud83c\udde7\ud83c\uddef",
#     "description": "flag: Benin",
#     "category": "Flags",
#     "aliases": [
#         "benin"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:benin: `:benin:`
') }}
{{ markdown(title="🇧🇱 flag: St. Barthélemy" type="markdown", code='

<!--
# 🇧🇱 flag: St. Barthélemy
#
# {
#     "emoji": "\ud83c\udde7\ud83c\uddf1",
#     "description": "flag: St. Barth\u00e9lemy",
#     "category": "Flags",
#     "aliases": [
#         "st_barthelemy"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.0"
# }
-->

:st_barthelemy: `:st_barthelemy:`
') }}
{{ markdown(title="🇧🇲 flag: Bermuda" type="markdown", code='

<!--
# 🇧🇲 flag: Bermuda
#
# {
#     "emoji": "\ud83c\udde7\ud83c\uddf2",
#     "description": "flag: Bermuda",
#     "category": "Flags",
#     "aliases": [
#         "bermuda"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:bermuda: `:bermuda:`
') }}
{{ markdown(title="🇧🇳 flag: Brunei" type="markdown", code='

<!--
# 🇧🇳 flag: Brunei
#
# {
#     "emoji": "\ud83c\udde7\ud83c\uddf3",
#     "description": "flag: Brunei",
#     "category": "Flags",
#     "aliases": [
#         "brunei"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:brunei: `:brunei:`
') }}
{{ markdown(title="🇧🇴 flag: Bolivia" type="markdown", code='

<!--
# 🇧🇴 flag: Bolivia
#
# {
#     "emoji": "\ud83c\udde7\ud83c\uddf4",
#     "description": "flag: Bolivia",
#     "category": "Flags",
#     "aliases": [
#         "bolivia"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:bolivia: `:bolivia:`
') }}
{{ markdown(title="🇧🇶 flag: Caribbean Netherlands" type="markdown", code='

<!--
# 🇧🇶 flag: Caribbean Netherlands
#
# {
#     "emoji": "\ud83c\udde7\ud83c\uddf6",
#     "description": "flag: Caribbean Netherlands",
#     "category": "Flags",
#     "aliases": [
#         "caribbean_netherlands"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.0"
# }
-->

:caribbean_netherlands: `:caribbean_netherlands:`
') }}
{{ markdown(title="🇧🇷 flag: Brazil" type="markdown", code='

<!--
# 🇧🇷 flag: Brazil
#
# {
#     "emoji": "\ud83c\udde7\ud83c\uddf7",
#     "description": "flag: Brazil",
#     "category": "Flags",
#     "aliases": [
#         "brazil"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:brazil: `:brazil:`
') }}
{{ markdown(title="🇧🇸 flag: Bahamas" type="markdown", code='

<!--
# 🇧🇸 flag: Bahamas
#
# {
#     "emoji": "\ud83c\udde7\ud83c\uddf8",
#     "description": "flag: Bahamas",
#     "category": "Flags",
#     "aliases": [
#         "bahamas"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:bahamas: `:bahamas:`
') }}
{{ markdown(title="🇧🇹 flag: Bhutan" type="markdown", code='

<!--
# 🇧🇹 flag: Bhutan
#
# {
#     "emoji": "\ud83c\udde7\ud83c\uddf9",
#     "description": "flag: Bhutan",
#     "category": "Flags",
#     "aliases": [
#         "bhutan"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:bhutan: `:bhutan:`
') }}
{{ markdown(title="🇧🇻 flag: Bouvet Island" type="markdown", code='

<!--
# 🇧🇻 flag: Bouvet Island
#
# {
#     "emoji": "\ud83c\udde7\ud83c\uddfb",
#     "description": "flag: Bouvet Island",
#     "category": "Flags",
#     "aliases": [
#         "bouvet_island"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:bouvet_island: `:bouvet_island:`
') }}
{{ markdown(title="🇧🇼 flag: Botswana" type="markdown", code='

<!--
# 🇧🇼 flag: Botswana
#
# {
#     "emoji": "\ud83c\udde7\ud83c\uddfc",
#     "description": "flag: Botswana",
#     "category": "Flags",
#     "aliases": [
#         "botswana"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:botswana: `:botswana:`
') }}
{{ markdown(title="🇧🇾 flag: Belarus" type="markdown", code='

<!--
# 🇧🇾 flag: Belarus
#
# {
#     "emoji": "\ud83c\udde7\ud83c\uddfe",
#     "description": "flag: Belarus",
#     "category": "Flags",
#     "aliases": [
#         "belarus"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:belarus: `:belarus:`
') }}
{{ markdown(title="🇧🇿 flag: Belize" type="markdown", code='

<!--
# 🇧🇿 flag: Belize
#
# {
#     "emoji": "\ud83c\udde7\ud83c\uddff",
#     "description": "flag: Belize",
#     "category": "Flags",
#     "aliases": [
#         "belize"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:belize: `:belize:`
') }}
{{ markdown(title="🇨🇦 flag: Canada" type="markdown", code='

<!--
# 🇨🇦 flag: Canada
#
# {
#     "emoji": "\ud83c\udde8\ud83c\udde6",
#     "description": "flag: Canada",
#     "category": "Flags",
#     "aliases": [
#         "canada"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:canada: `:canada:`
') }}
{{ markdown(title="🇨🇨 flag: Cocos (Keeling) Islands" type="markdown", code='

<!--
# 🇨🇨 flag: Cocos (Keeling) Islands
#
# {
#     "emoji": "\ud83c\udde8\ud83c\udde8",
#     "description": "flag: Cocos (Keeling) Islands",
#     "category": "Flags",
#     "aliases": [
#         "cocos_islands"
#     ],
#     "tags": [
#         "keeling"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "9.0"
# }
-->

:cocos_islands: `:cocos_islands:`
') }}
{{ markdown(title="🇨🇩 flag: Congo - Kinshasa" type="markdown", code='

<!--
# 🇨🇩 flag: Congo - Kinshasa
#
# {
#     "emoji": "\ud83c\udde8\ud83c\udde9",
#     "description": "flag: Congo - Kinshasa",
#     "category": "Flags",
#     "aliases": [
#         "congo_kinshasa"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:congo_kinshasa: `:congo_kinshasa:`
') }}
{{ markdown(title="🇨🇫 flag: Central African Republic" type="markdown", code='

<!--
# 🇨🇫 flag: Central African Republic
#
# {
#     "emoji": "\ud83c\udde8\ud83c\uddeb",
#     "description": "flag: Central African Republic",
#     "category": "Flags",
#     "aliases": [
#         "central_african_republic"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:central_african_republic: `:central_african_republic:`
') }}
{{ markdown(title="🇨🇬 flag: Congo - Brazzaville" type="markdown", code='

<!--
# 🇨🇬 flag: Congo - Brazzaville
#
# {
#     "emoji": "\ud83c\udde8\ud83c\uddec",
#     "description": "flag: Congo - Brazzaville",
#     "category": "Flags",
#     "aliases": [
#         "congo_brazzaville"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:congo_brazzaville: `:congo_brazzaville:`
') }}
{{ markdown(title="🇨🇭 flag: Switzerland" type="markdown", code='

<!--
# 🇨🇭 flag: Switzerland
#
# {
#     "emoji": "\ud83c\udde8\ud83c\udded",
#     "description": "flag: Switzerland",
#     "category": "Flags",
#     "aliases": [
#         "switzerland"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:switzerland: `:switzerland:`
') }}
{{ markdown(title="🇨🇮 flag: Côte d’Ivoire" type="markdown", code='

<!--
# 🇨🇮 flag: Côte d’Ivoire
#
# {
#     "emoji": "\ud83c\udde8\ud83c\uddee",
#     "description": "flag: C\u00f4te d\u2019Ivoire",
#     "category": "Flags",
#     "aliases": [
#         "cote_divoire"
#     ],
#     "tags": [
#         "ivory"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:cote_divoire: `:cote_divoire:`
') }}
{{ markdown(title="🇨🇰 flag: Cook Islands" type="markdown", code='

<!--
# 🇨🇰 flag: Cook Islands
#
# {
#     "emoji": "\ud83c\udde8\ud83c\uddf0",
#     "description": "flag: Cook Islands",
#     "category": "Flags",
#     "aliases": [
#         "cook_islands"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:cook_islands: `:cook_islands:`
') }}
{{ markdown(title="🇨🇱 flag: Chile" type="markdown", code='

<!--
# 🇨🇱 flag: Chile
#
# {
#     "emoji": "\ud83c\udde8\ud83c\uddf1",
#     "description": "flag: Chile",
#     "category": "Flags",
#     "aliases": [
#         "chile"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:chile: `:chile:`
') }}
{{ markdown(title="🇨🇲 flag: Cameroon" type="markdown", code='

<!--
# 🇨🇲 flag: Cameroon
#
# {
#     "emoji": "\ud83c\udde8\ud83c\uddf2",
#     "description": "flag: Cameroon",
#     "category": "Flags",
#     "aliases": [
#         "cameroon"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:cameroon: `:cameroon:`
') }}
{{ markdown(title="🇨🇳 flag: China" type="markdown", code='

<!--
# 🇨🇳 flag: China
#
# {
#     "emoji": "\ud83c\udde8\ud83c\uddf3",
#     "description": "flag: China",
#     "category": "Flags",
#     "aliases": [
#         "cn"
#     ],
#     "tags": [
#         "china"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:cn: `:cn:`
') }}
{{ markdown(title="🇨🇴 flag: Colombia" type="markdown", code='

<!--
# 🇨🇴 flag: Colombia
#
# {
#     "emoji": "\ud83c\udde8\ud83c\uddf4",
#     "description": "flag: Colombia",
#     "category": "Flags",
#     "aliases": [
#         "colombia"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:colombia: `:colombia:`
') }}
{{ markdown(title="🇨🇵 flag: Clipperton Island" type="markdown", code='

<!--
# 🇨🇵 flag: Clipperton Island
#
# {
#     "emoji": "\ud83c\udde8\ud83c\uddf5",
#     "description": "flag: Clipperton Island",
#     "category": "Flags",
#     "aliases": [
#         "clipperton_island"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:clipperton_island: `:clipperton_island:`
') }}
{{ markdown(title="🇨🇷 flag: Costa Rica" type="markdown", code='

<!--
# 🇨🇷 flag: Costa Rica
#
# {
#     "emoji": "\ud83c\udde8\ud83c\uddf7",
#     "description": "flag: Costa Rica",
#     "category": "Flags",
#     "aliases": [
#         "costa_rica"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:costa_rica: `:costa_rica:`
') }}
{{ markdown(title="🇨🇺 flag: Cuba" type="markdown", code='

<!--
# 🇨🇺 flag: Cuba
#
# {
#     "emoji": "\ud83c\udde8\ud83c\uddfa",
#     "description": "flag: Cuba",
#     "category": "Flags",
#     "aliases": [
#         "cuba"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:cuba: `:cuba:`
') }}
{{ markdown(title="🇨🇻 flag: Cape Verde" type="markdown", code='

<!--
# 🇨🇻 flag: Cape Verde
#
# {
#     "emoji": "\ud83c\udde8\ud83c\uddfb",
#     "description": "flag: Cape Verde",
#     "category": "Flags",
#     "aliases": [
#         "cape_verde"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:cape_verde: `:cape_verde:`
') }}
{{ markdown(title="🇨🇼 flag: Curaçao" type="markdown", code='

<!--
# 🇨🇼 flag: Curaçao
#
# {
#     "emoji": "\ud83c\udde8\ud83c\uddfc",
#     "description": "flag: Cura\u00e7ao",
#     "category": "Flags",
#     "aliases": [
#         "curacao"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:curacao: `:curacao:`
') }}
{{ markdown(title="🇨🇽 flag: Christmas Island" type="markdown", code='

<!--
# 🇨🇽 flag: Christmas Island
#
# {
#     "emoji": "\ud83c\udde8\ud83c\uddfd",
#     "description": "flag: Christmas Island",
#     "category": "Flags",
#     "aliases": [
#         "christmas_island"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.0"
# }
-->

:christmas_island: `:christmas_island:`
') }}
{{ markdown(title="🇨🇾 flag: Cyprus" type="markdown", code='

<!--
# 🇨🇾 flag: Cyprus
#
# {
#     "emoji": "\ud83c\udde8\ud83c\uddfe",
#     "description": "flag: Cyprus",
#     "category": "Flags",
#     "aliases": [
#         "cyprus"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:cyprus: `:cyprus:`
') }}
{{ markdown(title="🇨🇿 flag: Czechia" type="markdown", code='

<!--
# 🇨🇿 flag: Czechia
#
# {
#     "emoji": "\ud83c\udde8\ud83c\uddff",
#     "description": "flag: Czechia",
#     "category": "Flags",
#     "aliases": [
#         "czech_republic"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:czech_republic: `:czech_republic:`
') }}
{{ markdown(title="🇩🇪 flag: Germany" type="markdown", code='

<!--
# 🇩🇪 flag: Germany
#
# {
#     "emoji": "\ud83c\udde9\ud83c\uddea",
#     "description": "flag: Germany",
#     "category": "Flags",
#     "aliases": [
#         "de"
#     ],
#     "tags": [
#         "flag",
#         "germany"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:de: `:de:`
') }}
{{ markdown(title="🇩🇬 flag: Diego Garcia" type="markdown", code='

<!--
# 🇩🇬 flag: Diego Garcia
#
# {
#     "emoji": "\ud83c\udde9\ud83c\uddec",
#     "description": "flag: Diego Garcia",
#     "category": "Flags",
#     "aliases": [
#         "diego_garcia"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:diego_garcia: `:diego_garcia:`
') }}
{{ markdown(title="🇩🇯 flag: Djibouti" type="markdown", code='

<!--
# 🇩🇯 flag: Djibouti
#
# {
#     "emoji": "\ud83c\udde9\ud83c\uddef",
#     "description": "flag: Djibouti",
#     "category": "Flags",
#     "aliases": [
#         "djibouti"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:djibouti: `:djibouti:`
') }}
{{ markdown(title="🇩🇰 flag: Denmark" type="markdown", code='

<!--
# 🇩🇰 flag: Denmark
#
# {
#     "emoji": "\ud83c\udde9\ud83c\uddf0",
#     "description": "flag: Denmark",
#     "category": "Flags",
#     "aliases": [
#         "denmark"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:denmark: `:denmark:`
') }}
{{ markdown(title="🇩🇲 flag: Dominica" type="markdown", code='

<!--
# 🇩🇲 flag: Dominica
#
# {
#     "emoji": "\ud83c\udde9\ud83c\uddf2",
#     "description": "flag: Dominica",
#     "category": "Flags",
#     "aliases": [
#         "dominica"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:dominica: `:dominica:`
') }}
{{ markdown(title="🇩🇴 flag: Dominican Republic" type="markdown", code='

<!--
# 🇩🇴 flag: Dominican Republic
#
# {
#     "emoji": "\ud83c\udde9\ud83c\uddf4",
#     "description": "flag: Dominican Republic",
#     "category": "Flags",
#     "aliases": [
#         "dominican_republic"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:dominican_republic: `:dominican_republic:`
') }}
{{ markdown(title="🇩🇿 flag: Algeria" type="markdown", code='

<!--
# 🇩🇿 flag: Algeria
#
# {
#     "emoji": "\ud83c\udde9\ud83c\uddff",
#     "description": "flag: Algeria",
#     "category": "Flags",
#     "aliases": [
#         "algeria"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:algeria: `:algeria:`
') }}
{{ markdown(title="🇪🇦 flag: Ceuta & Melilla" type="markdown", code='

<!--
# 🇪🇦 flag: Ceuta & Melilla
#
# {
#     "emoji": "\ud83c\uddea\ud83c\udde6",
#     "description": "flag: Ceuta & Melilla",
#     "category": "Flags",
#     "aliases": [
#         "ceuta_melilla"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:ceuta_melilla: `:ceuta_melilla:`
') }}
{{ markdown(title="🇪🇨 flag: Ecuador" type="markdown", code='

<!--
# 🇪🇨 flag: Ecuador
#
# {
#     "emoji": "\ud83c\uddea\ud83c\udde8",
#     "description": "flag: Ecuador",
#     "category": "Flags",
#     "aliases": [
#         "ecuador"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:ecuador: `:ecuador:`
') }}
{{ markdown(title="🇪🇪 flag: Estonia" type="markdown", code='

<!--
# 🇪🇪 flag: Estonia
#
# {
#     "emoji": "\ud83c\uddea\ud83c\uddea",
#     "description": "flag: Estonia",
#     "category": "Flags",
#     "aliases": [
#         "estonia"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:estonia: `:estonia:`
') }}
{{ markdown(title="🇪🇬 flag: Egypt" type="markdown", code='

<!--
# 🇪🇬 flag: Egypt
#
# {
#     "emoji": "\ud83c\uddea\ud83c\uddec",
#     "description": "flag: Egypt",
#     "category": "Flags",
#     "aliases": [
#         "egypt"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:egypt: `:egypt:`
') }}
{{ markdown(title="🇪🇭 flag: Western Sahara" type="markdown", code='

<!--
# 🇪🇭 flag: Western Sahara
#
# {
#     "emoji": "\ud83c\uddea\ud83c\udded",
#     "description": "flag: Western Sahara",
#     "category": "Flags",
#     "aliases": [
#         "western_sahara"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.0"
# }
-->

:western_sahara: `:western_sahara:`
') }}
{{ markdown(title="🇪🇷 flag: Eritrea" type="markdown", code='

<!--
# 🇪🇷 flag: Eritrea
#
# {
#     "emoji": "\ud83c\uddea\ud83c\uddf7",
#     "description": "flag: Eritrea",
#     "category": "Flags",
#     "aliases": [
#         "eritrea"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:eritrea: `:eritrea:`
') }}
{{ markdown(title="🇪🇸 flag: Spain" type="markdown", code='

<!--
# 🇪🇸 flag: Spain
#
# {
#     "emoji": "\ud83c\uddea\ud83c\uddf8",
#     "description": "flag: Spain",
#     "category": "Flags",
#     "aliases": [
#         "es"
#     ],
#     "tags": [
#         "spain"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:es: `:es:`
') }}
{{ markdown(title="🇪🇹 flag: Ethiopia" type="markdown", code='

<!--
# 🇪🇹 flag: Ethiopia
#
# {
#     "emoji": "\ud83c\uddea\ud83c\uddf9",
#     "description": "flag: Ethiopia",
#     "category": "Flags",
#     "aliases": [
#         "ethiopia"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:ethiopia: `:ethiopia:`
') }}
{{ markdown(title="🇪🇺 flag: European Union" type="markdown", code='

<!--
# 🇪🇺 flag: European Union
#
# {
#     "emoji": "\ud83c\uddea\ud83c\uddfa",
#     "description": "flag: European Union",
#     "category": "Flags",
#     "aliases": [
#         "eu",
#         "european_union"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.0"
# }
-->

:eu: `:eu:`

:european_union: `:european_union:`
') }}
{{ markdown(title="🇫🇮 flag: Finland" type="markdown", code='

<!--
# 🇫🇮 flag: Finland
#
# {
#     "emoji": "\ud83c\uddeb\ud83c\uddee",
#     "description": "flag: Finland",
#     "category": "Flags",
#     "aliases": [
#         "finland"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:finland: `:finland:`
') }}
{{ markdown(title="🇫🇯 flag: Fiji" type="markdown", code='

<!--
# 🇫🇯 flag: Fiji
#
# {
#     "emoji": "\ud83c\uddeb\ud83c\uddef",
#     "description": "flag: Fiji",
#     "category": "Flags",
#     "aliases": [
#         "fiji"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:fiji: `:fiji:`
') }}
{{ markdown(title="🇫🇰 flag: Falkland Islands" type="markdown", code='

<!--
# 🇫🇰 flag: Falkland Islands
#
# {
#     "emoji": "\ud83c\uddeb\ud83c\uddf0",
#     "description": "flag: Falkland Islands",
#     "category": "Flags",
#     "aliases": [
#         "falkland_islands"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.0"
# }
-->

:falkland_islands: `:falkland_islands:`
') }}
{{ markdown(title="🇫🇲 flag: Micronesia" type="markdown", code='

<!--
# 🇫🇲 flag: Micronesia
#
# {
#     "emoji": "\ud83c\uddeb\ud83c\uddf2",
#     "description": "flag: Micronesia",
#     "category": "Flags",
#     "aliases": [
#         "micronesia"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.0"
# }
-->

:micronesia: `:micronesia:`
') }}
{{ markdown(title="🇫🇴 flag: Faroe Islands" type="markdown", code='

<!--
# 🇫🇴 flag: Faroe Islands
#
# {
#     "emoji": "\ud83c\uddeb\ud83c\uddf4",
#     "description": "flag: Faroe Islands",
#     "category": "Flags",
#     "aliases": [
#         "faroe_islands"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:faroe_islands: `:faroe_islands:`
') }}
{{ markdown(title="🇫🇷 flag: France" type="markdown", code='

<!--
# 🇫🇷 flag: France
#
# {
#     "emoji": "\ud83c\uddeb\ud83c\uddf7",
#     "description": "flag: France",
#     "category": "Flags",
#     "aliases": [
#         "fr"
#     ],
#     "tags": [
#         "france",
#         "french"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:fr: `:fr:`
') }}
{{ markdown(title="🇬🇦 flag: Gabon" type="markdown", code='

<!--
# 🇬🇦 flag: Gabon
#
# {
#     "emoji": "\ud83c\uddec\ud83c\udde6",
#     "description": "flag: Gabon",
#     "category": "Flags",
#     "aliases": [
#         "gabon"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:gabon: `:gabon:`
') }}
{{ markdown(title="🇬🇧 flag: United Kingdom" type="markdown", code='

<!--
# 🇬🇧 flag: United Kingdom
#
# {
#     "emoji": "\ud83c\uddec\ud83c\udde7",
#     "description": "flag: United Kingdom",
#     "category": "Flags",
#     "aliases": [
#         "gb",
#         "uk"
#     ],
#     "tags": [
#         "flag",
#         "british"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:gb: `:gb:`

:uk: `:uk:`
') }}
{{ markdown(title="🇬🇩 flag: Grenada" type="markdown", code='

<!--
# 🇬🇩 flag: Grenada
#
# {
#     "emoji": "\ud83c\uddec\ud83c\udde9",
#     "description": "flag: Grenada",
#     "category": "Flags",
#     "aliases": [
#         "grenada"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:grenada: `:grenada:`
') }}
{{ markdown(title="🇬🇪 flag: Georgia" type="markdown", code='

<!--
# 🇬🇪 flag: Georgia
#
# {
#     "emoji": "\ud83c\uddec\ud83c\uddea",
#     "description": "flag: Georgia",
#     "category": "Flags",
#     "aliases": [
#         "georgia"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:georgia: `:georgia:`
') }}
{{ markdown(title="🇬🇫 flag: French Guiana" type="markdown", code='

<!--
# 🇬🇫 flag: French Guiana
#
# {
#     "emoji": "\ud83c\uddec\ud83c\uddeb",
#     "description": "flag: French Guiana",
#     "category": "Flags",
#     "aliases": [
#         "french_guiana"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:french_guiana: `:french_guiana:`
') }}
{{ markdown(title="🇬🇬 flag: Guernsey" type="markdown", code='

<!--
# 🇬🇬 flag: Guernsey
#
# {
#     "emoji": "\ud83c\uddec\ud83c\uddec",
#     "description": "flag: Guernsey",
#     "category": "Flags",
#     "aliases": [
#         "guernsey"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.0"
# }
-->

:guernsey: `:guernsey:`
') }}
{{ markdown(title="🇬🇭 flag: Ghana" type="markdown", code='

<!--
# 🇬🇭 flag: Ghana
#
# {
#     "emoji": "\ud83c\uddec\ud83c\udded",
#     "description": "flag: Ghana",
#     "category": "Flags",
#     "aliases": [
#         "ghana"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:ghana: `:ghana:`
') }}
{{ markdown(title="🇬🇮 flag: Gibraltar" type="markdown", code='

<!--
# 🇬🇮 flag: Gibraltar
#
# {
#     "emoji": "\ud83c\uddec\ud83c\uddee",
#     "description": "flag: Gibraltar",
#     "category": "Flags",
#     "aliases": [
#         "gibraltar"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:gibraltar: `:gibraltar:`
') }}
{{ markdown(title="🇬🇱 flag: Greenland" type="markdown", code='

<!--
# 🇬🇱 flag: Greenland
#
# {
#     "emoji": "\ud83c\uddec\ud83c\uddf1",
#     "description": "flag: Greenland",
#     "category": "Flags",
#     "aliases": [
#         "greenland"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.0"
# }
-->

:greenland: `:greenland:`
') }}
{{ markdown(title="🇬🇲 flag: Gambia" type="markdown", code='

<!--
# 🇬🇲 flag: Gambia
#
# {
#     "emoji": "\ud83c\uddec\ud83c\uddf2",
#     "description": "flag: Gambia",
#     "category": "Flags",
#     "aliases": [
#         "gambia"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:gambia: `:gambia:`
') }}
{{ markdown(title="🇬🇳 flag: Guinea" type="markdown", code='

<!--
# 🇬🇳 flag: Guinea
#
# {
#     "emoji": "\ud83c\uddec\ud83c\uddf3",
#     "description": "flag: Guinea",
#     "category": "Flags",
#     "aliases": [
#         "guinea"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:guinea: `:guinea:`
') }}
{{ markdown(title="🇬🇵 flag: Guadeloupe" type="markdown", code='

<!--
# 🇬🇵 flag: Guadeloupe
#
# {
#     "emoji": "\ud83c\uddec\ud83c\uddf5",
#     "description": "flag: Guadeloupe",
#     "category": "Flags",
#     "aliases": [
#         "guadeloupe"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.0"
# }
-->

:guadeloupe: `:guadeloupe:`
') }}
{{ markdown(title="🇬🇶 flag: Equatorial Guinea" type="markdown", code='

<!--
# 🇬🇶 flag: Equatorial Guinea
#
# {
#     "emoji": "\ud83c\uddec\ud83c\uddf6",
#     "description": "flag: Equatorial Guinea",
#     "category": "Flags",
#     "aliases": [
#         "equatorial_guinea"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:equatorial_guinea: `:equatorial_guinea:`
') }}
{{ markdown(title="🇬🇷 flag: Greece" type="markdown", code='

<!--
# 🇬🇷 flag: Greece
#
# {
#     "emoji": "\ud83c\uddec\ud83c\uddf7",
#     "description": "flag: Greece",
#     "category": "Flags",
#     "aliases": [
#         "greece"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:greece: `:greece:`
') }}
{{ markdown(title="🇬🇸 flag: South Georgia & South Sandwich Islands" type="markdown", code='

<!--
# 🇬🇸 flag: South Georgia & South Sandwich Islands
#
# {
#     "emoji": "\ud83c\uddec\ud83c\uddf8",
#     "description": "flag: South Georgia & South Sandwich Islands",
#     "category": "Flags",
#     "aliases": [
#         "south_georgia_south_sandwich_islands"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.0"
# }
-->

:south_georgia_south_sandwich_islands: `:south_georgia_south_sandwich_islands:`
') }}
{{ markdown(title="🇬🇹 flag: Guatemala" type="markdown", code='

<!--
# 🇬🇹 flag: Guatemala
#
# {
#     "emoji": "\ud83c\uddec\ud83c\uddf9",
#     "description": "flag: Guatemala",
#     "category": "Flags",
#     "aliases": [
#         "guatemala"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:guatemala: `:guatemala:`
') }}
{{ markdown(title="🇬🇺 flag: Guam" type="markdown", code='

<!--
# 🇬🇺 flag: Guam
#
# {
#     "emoji": "\ud83c\uddec\ud83c\uddfa",
#     "description": "flag: Guam",
#     "category": "Flags",
#     "aliases": [
#         "guam"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:guam: `:guam:`
') }}
{{ markdown(title="🇬🇼 flag: Guinea-Bissau" type="markdown", code='

<!--
# 🇬🇼 flag: Guinea-Bissau
#
# {
#     "emoji": "\ud83c\uddec\ud83c\uddfc",
#     "description": "flag: Guinea-Bissau",
#     "category": "Flags",
#     "aliases": [
#         "guinea_bissau"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:guinea_bissau: `:guinea_bissau:`
') }}
{{ markdown(title="🇬🇾 flag: Guyana" type="markdown", code='

<!--
# 🇬🇾 flag: Guyana
#
# {
#     "emoji": "\ud83c\uddec\ud83c\uddfe",
#     "description": "flag: Guyana",
#     "category": "Flags",
#     "aliases": [
#         "guyana"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:guyana: `:guyana:`
') }}
{{ markdown(title="🇭🇰 flag: Hong Kong SAR China" type="markdown", code='

<!--
# 🇭🇰 flag: Hong Kong SAR China
#
# {
#     "emoji": "\ud83c\udded\ud83c\uddf0",
#     "description": "flag: Hong Kong SAR China",
#     "category": "Flags",
#     "aliases": [
#         "hong_kong"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:hong_kong: `:hong_kong:`
') }}
{{ markdown(title="🇭🇲 flag: Heard & McDonald Islands" type="markdown", code='

<!--
# 🇭🇲 flag: Heard & McDonald Islands
#
# {
#     "emoji": "\ud83c\udded\ud83c\uddf2",
#     "description": "flag: Heard & McDonald Islands",
#     "category": "Flags",
#     "aliases": [
#         "heard_mcdonald_islands"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:heard_mcdonald_islands: `:heard_mcdonald_islands:`
') }}
{{ markdown(title="🇭🇳 flag: Honduras" type="markdown", code='

<!--
# 🇭🇳 flag: Honduras
#
# {
#     "emoji": "\ud83c\udded\ud83c\uddf3",
#     "description": "flag: Honduras",
#     "category": "Flags",
#     "aliases": [
#         "honduras"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:honduras: `:honduras:`
') }}
{{ markdown(title="🇭🇷 flag: Croatia" type="markdown", code='

<!--
# 🇭🇷 flag: Croatia
#
# {
#     "emoji": "\ud83c\udded\ud83c\uddf7",
#     "description": "flag: Croatia",
#     "category": "Flags",
#     "aliases": [
#         "croatia"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:croatia: `:croatia:`
') }}
{{ markdown(title="🇭🇹 flag: Haiti" type="markdown", code='

<!--
# 🇭🇹 flag: Haiti
#
# {
#     "emoji": "\ud83c\udded\ud83c\uddf9",
#     "description": "flag: Haiti",
#     "category": "Flags",
#     "aliases": [
#         "haiti"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:haiti: `:haiti:`
') }}
{{ markdown(title="🇭🇺 flag: Hungary" type="markdown", code='

<!--
# 🇭🇺 flag: Hungary
#
# {
#     "emoji": "\ud83c\udded\ud83c\uddfa",
#     "description": "flag: Hungary",
#     "category": "Flags",
#     "aliases": [
#         "hungary"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:hungary: `:hungary:`
') }}
{{ markdown(title="🇮🇨 flag: Canary Islands" type="markdown", code='

<!--
# 🇮🇨 flag: Canary Islands
#
# {
#     "emoji": "\ud83c\uddee\ud83c\udde8",
#     "description": "flag: Canary Islands",
#     "category": "Flags",
#     "aliases": [
#         "canary_islands"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.0"
# }
-->

:canary_islands: `:canary_islands:`
') }}
{{ markdown(title="🇮🇩 flag: Indonesia" type="markdown", code='

<!--
# 🇮🇩 flag: Indonesia
#
# {
#     "emoji": "\ud83c\uddee\ud83c\udde9",
#     "description": "flag: Indonesia",
#     "category": "Flags",
#     "aliases": [
#         "indonesia"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:indonesia: `:indonesia:`
') }}
{{ markdown(title="🇮🇪 flag: Ireland" type="markdown", code='

<!--
# 🇮🇪 flag: Ireland
#
# {
#     "emoji": "\ud83c\uddee\ud83c\uddea",
#     "description": "flag: Ireland",
#     "category": "Flags",
#     "aliases": [
#         "ireland"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:ireland: `:ireland:`
') }}
{{ markdown(title="🇮🇱 flag: Israel" type="markdown", code='

<!--
# 🇮🇱 flag: Israel
#
# {
#     "emoji": "\ud83c\uddee\ud83c\uddf1",
#     "description": "flag: Israel",
#     "category": "Flags",
#     "aliases": [
#         "israel"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:israel: `:israel:`
') }}
{{ markdown(title="🇮🇲 flag: Isle of Man" type="markdown", code='

<!--
# 🇮🇲 flag: Isle of Man
#
# {
#     "emoji": "\ud83c\uddee\ud83c\uddf2",
#     "description": "flag: Isle of Man",
#     "category": "Flags",
#     "aliases": [
#         "isle_of_man"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.0"
# }
-->

:isle_of_man: `:isle_of_man:`
') }}
{{ markdown(title="🇮🇳 flag: India" type="markdown", code='

<!--
# 🇮🇳 flag: India
#
# {
#     "emoji": "\ud83c\uddee\ud83c\uddf3",
#     "description": "flag: India",
#     "category": "Flags",
#     "aliases": [
#         "india"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:india: `:india:`
') }}
{{ markdown(title="🇮🇴 flag: British Indian Ocean Territory" type="markdown", code='

<!--
# 🇮🇴 flag: British Indian Ocean Territory
#
# {
#     "emoji": "\ud83c\uddee\ud83c\uddf4",
#     "description": "flag: British Indian Ocean Territory",
#     "category": "Flags",
#     "aliases": [
#         "british_indian_ocean_territory"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.0"
# }
-->

:british_indian_ocean_territory: `:british_indian_ocean_territory:`
') }}
{{ markdown(title="🇮🇶 flag: Iraq" type="markdown", code='

<!--
# 🇮🇶 flag: Iraq
#
# {
#     "emoji": "\ud83c\uddee\ud83c\uddf6",
#     "description": "flag: Iraq",
#     "category": "Flags",
#     "aliases": [
#         "iraq"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:iraq: `:iraq:`
') }}
{{ markdown(title="🇮🇷 flag: Iran" type="markdown", code='

<!--
# 🇮🇷 flag: Iran
#
# {
#     "emoji": "\ud83c\uddee\ud83c\uddf7",
#     "description": "flag: Iran",
#     "category": "Flags",
#     "aliases": [
#         "iran"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:iran: `:iran:`
') }}
{{ markdown(title="🇮🇸 flag: Iceland" type="markdown", code='

<!--
# 🇮🇸 flag: Iceland
#
# {
#     "emoji": "\ud83c\uddee\ud83c\uddf8",
#     "description": "flag: Iceland",
#     "category": "Flags",
#     "aliases": [
#         "iceland"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:iceland: `:iceland:`
') }}
{{ markdown(title="🇮🇹 flag: Italy" type="markdown", code='

<!--
# 🇮🇹 flag: Italy
#
# {
#     "emoji": "\ud83c\uddee\ud83c\uddf9",
#     "description": "flag: Italy",
#     "category": "Flags",
#     "aliases": [
#         "it"
#     ],
#     "tags": [
#         "italy"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:it: `:it:`
') }}
{{ markdown(title="🇯🇪 flag: Jersey" type="markdown", code='

<!--
# 🇯🇪 flag: Jersey
#
# {
#     "emoji": "\ud83c\uddef\ud83c\uddea",
#     "description": "flag: Jersey",
#     "category": "Flags",
#     "aliases": [
#         "jersey"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.0"
# }
-->

:jersey: `:jersey:`
') }}
{{ markdown(title="🇯🇲 flag: Jamaica" type="markdown", code='

<!--
# 🇯🇲 flag: Jamaica
#
# {
#     "emoji": "\ud83c\uddef\ud83c\uddf2",
#     "description": "flag: Jamaica",
#     "category": "Flags",
#     "aliases": [
#         "jamaica"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:jamaica: `:jamaica:`
') }}
{{ markdown(title="🇯🇴 flag: Jordan" type="markdown", code='

<!--
# 🇯🇴 flag: Jordan
#
# {
#     "emoji": "\ud83c\uddef\ud83c\uddf4",
#     "description": "flag: Jordan",
#     "category": "Flags",
#     "aliases": [
#         "jordan"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:jordan: `:jordan:`
') }}
{{ markdown(title="🇯🇵 flag: Japan" type="markdown", code='

<!--
# 🇯🇵 flag: Japan
#
# {
#     "emoji": "\ud83c\uddef\ud83c\uddf5",
#     "description": "flag: Japan",
#     "category": "Flags",
#     "aliases": [
#         "jp"
#     ],
#     "tags": [
#         "japan"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:jp: `:jp:`
') }}
{{ markdown(title="🇰🇪 flag: Kenya" type="markdown", code='

<!--
# 🇰🇪 flag: Kenya
#
# {
#     "emoji": "\ud83c\uddf0\ud83c\uddea",
#     "description": "flag: Kenya",
#     "category": "Flags",
#     "aliases": [
#         "kenya"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:kenya: `:kenya:`
') }}
{{ markdown(title="🇰🇬 flag: Kyrgyzstan" type="markdown", code='

<!--
# 🇰🇬 flag: Kyrgyzstan
#
# {
#     "emoji": "\ud83c\uddf0\ud83c\uddec",
#     "description": "flag: Kyrgyzstan",
#     "category": "Flags",
#     "aliases": [
#         "kyrgyzstan"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:kyrgyzstan: `:kyrgyzstan:`
') }}
{{ markdown(title="🇰🇭 flag: Cambodia" type="markdown", code='

<!--
# 🇰🇭 flag: Cambodia
#
# {
#     "emoji": "\ud83c\uddf0\ud83c\udded",
#     "description": "flag: Cambodia",
#     "category": "Flags",
#     "aliases": [
#         "cambodia"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:cambodia: `:cambodia:`
') }}
{{ markdown(title="🇰🇮 flag: Kiribati" type="markdown", code='

<!--
# 🇰🇮 flag: Kiribati
#
# {
#     "emoji": "\ud83c\uddf0\ud83c\uddee",
#     "description": "flag: Kiribati",
#     "category": "Flags",
#     "aliases": [
#         "kiribati"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:kiribati: `:kiribati:`
') }}
{{ markdown(title="🇰🇲 flag: Comoros" type="markdown", code='

<!--
# 🇰🇲 flag: Comoros
#
# {
#     "emoji": "\ud83c\uddf0\ud83c\uddf2",
#     "description": "flag: Comoros",
#     "category": "Flags",
#     "aliases": [
#         "comoros"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:comoros: `:comoros:`
') }}
{{ markdown(title="🇰🇳 flag: St. Kitts & Nevis" type="markdown", code='

<!--
# 🇰🇳 flag: St. Kitts & Nevis
#
# {
#     "emoji": "\ud83c\uddf0\ud83c\uddf3",
#     "description": "flag: St. Kitts & Nevis",
#     "category": "Flags",
#     "aliases": [
#         "st_kitts_nevis"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:st_kitts_nevis: `:st_kitts_nevis:`
') }}
{{ markdown(title="🇰🇵 flag: North Korea" type="markdown", code='

<!--
# 🇰🇵 flag: North Korea
#
# {
#     "emoji": "\ud83c\uddf0\ud83c\uddf5",
#     "description": "flag: North Korea",
#     "category": "Flags",
#     "aliases": [
#         "north_korea"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:north_korea: `:north_korea:`
') }}
{{ markdown(title="🇰🇷 flag: South Korea" type="markdown", code='

<!--
# 🇰🇷 flag: South Korea
#
# {
#     "emoji": "\ud83c\uddf0\ud83c\uddf7",
#     "description": "flag: South Korea",
#     "category": "Flags",
#     "aliases": [
#         "kr"
#     ],
#     "tags": [
#         "korea"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:kr: `:kr:`
') }}
{{ markdown(title="🇰🇼 flag: Kuwait" type="markdown", code='

<!--
# 🇰🇼 flag: Kuwait
#
# {
#     "emoji": "\ud83c\uddf0\ud83c\uddfc",
#     "description": "flag: Kuwait",
#     "category": "Flags",
#     "aliases": [
#         "kuwait"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:kuwait: `:kuwait:`
') }}
{{ markdown(title="🇰🇾 flag: Cayman Islands" type="markdown", code='

<!--
# 🇰🇾 flag: Cayman Islands
#
# {
#     "emoji": "\ud83c\uddf0\ud83c\uddfe",
#     "description": "flag: Cayman Islands",
#     "category": "Flags",
#     "aliases": [
#         "cayman_islands"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:cayman_islands: `:cayman_islands:`
') }}
{{ markdown(title="🇰🇿 flag: Kazakhstan" type="markdown", code='

<!--
# 🇰🇿 flag: Kazakhstan
#
# {
#     "emoji": "\ud83c\uddf0\ud83c\uddff",
#     "description": "flag: Kazakhstan",
#     "category": "Flags",
#     "aliases": [
#         "kazakhstan"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:kazakhstan: `:kazakhstan:`
') }}
{{ markdown(title="🇱🇦 flag: Laos" type="markdown", code='

<!--
# 🇱🇦 flag: Laos
#
# {
#     "emoji": "\ud83c\uddf1\ud83c\udde6",
#     "description": "flag: Laos",
#     "category": "Flags",
#     "aliases": [
#         "laos"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:laos: `:laos:`
') }}
{{ markdown(title="🇱🇧 flag: Lebanon" type="markdown", code='

<!--
# 🇱🇧 flag: Lebanon
#
# {
#     "emoji": "\ud83c\uddf1\ud83c\udde7",
#     "description": "flag: Lebanon",
#     "category": "Flags",
#     "aliases": [
#         "lebanon"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:lebanon: `:lebanon:`
') }}
{{ markdown(title="🇱🇨 flag: St. Lucia" type="markdown", code='

<!--
# 🇱🇨 flag: St. Lucia
#
# {
#     "emoji": "\ud83c\uddf1\ud83c\udde8",
#     "description": "flag: St. Lucia",
#     "category": "Flags",
#     "aliases": [
#         "st_lucia"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:st_lucia: `:st_lucia:`
') }}
{{ markdown(title="🇱🇮 flag: Liechtenstein" type="markdown", code='

<!--
# 🇱🇮 flag: Liechtenstein
#
# {
#     "emoji": "\ud83c\uddf1\ud83c\uddee",
#     "description": "flag: Liechtenstein",
#     "category": "Flags",
#     "aliases": [
#         "liechtenstein"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:liechtenstein: `:liechtenstein:`
') }}
{{ markdown(title="🇱🇰 flag: Sri Lanka" type="markdown", code='

<!--
# 🇱🇰 flag: Sri Lanka
#
# {
#     "emoji": "\ud83c\uddf1\ud83c\uddf0",
#     "description": "flag: Sri Lanka",
#     "category": "Flags",
#     "aliases": [
#         "sri_lanka"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:sri_lanka: `:sri_lanka:`
') }}
{{ markdown(title="🇱🇷 flag: Liberia" type="markdown", code='

<!--
# 🇱🇷 flag: Liberia
#
# {
#     "emoji": "\ud83c\uddf1\ud83c\uddf7",
#     "description": "flag: Liberia",
#     "category": "Flags",
#     "aliases": [
#         "liberia"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:liberia: `:liberia:`
') }}
{{ markdown(title="🇱🇸 flag: Lesotho" type="markdown", code='

<!--
# 🇱🇸 flag: Lesotho
#
# {
#     "emoji": "\ud83c\uddf1\ud83c\uddf8",
#     "description": "flag: Lesotho",
#     "category": "Flags",
#     "aliases": [
#         "lesotho"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:lesotho: `:lesotho:`
') }}
{{ markdown(title="🇱🇹 flag: Lithuania" type="markdown", code='

<!--
# 🇱🇹 flag: Lithuania
#
# {
#     "emoji": "\ud83c\uddf1\ud83c\uddf9",
#     "description": "flag: Lithuania",
#     "category": "Flags",
#     "aliases": [
#         "lithuania"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:lithuania: `:lithuania:`
') }}
{{ markdown(title="🇱🇺 flag: Luxembourg" type="markdown", code='

<!--
# 🇱🇺 flag: Luxembourg
#
# {
#     "emoji": "\ud83c\uddf1\ud83c\uddfa",
#     "description": "flag: Luxembourg",
#     "category": "Flags",
#     "aliases": [
#         "luxembourg"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:luxembourg: `:luxembourg:`
') }}
{{ markdown(title="🇱🇻 flag: Latvia" type="markdown", code='

<!--
# 🇱🇻 flag: Latvia
#
# {
#     "emoji": "\ud83c\uddf1\ud83c\uddfb",
#     "description": "flag: Latvia",
#     "category": "Flags",
#     "aliases": [
#         "latvia"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:latvia: `:latvia:`
') }}
{{ markdown(title="🇱🇾 flag: Libya" type="markdown", code='

<!--
# 🇱🇾 flag: Libya
#
# {
#     "emoji": "\ud83c\uddf1\ud83c\uddfe",
#     "description": "flag: Libya",
#     "category": "Flags",
#     "aliases": [
#         "libya"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:libya: `:libya:`
') }}
{{ markdown(title="🇲🇦 flag: Morocco" type="markdown", code='

<!--
# 🇲🇦 flag: Morocco
#
# {
#     "emoji": "\ud83c\uddf2\ud83c\udde6",
#     "description": "flag: Morocco",
#     "category": "Flags",
#     "aliases": [
#         "morocco"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:morocco: `:morocco:`
') }}
{{ markdown(title="🇲🇨 flag: Monaco" type="markdown", code='

<!--
# 🇲🇨 flag: Monaco
#
# {
#     "emoji": "\ud83c\uddf2\ud83c\udde8",
#     "description": "flag: Monaco",
#     "category": "Flags",
#     "aliases": [
#         "monaco"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.0"
# }
-->

:monaco: `:monaco:`
') }}
{{ markdown(title="🇲🇩 flag: Moldova" type="markdown", code='

<!--
# 🇲🇩 flag: Moldova
#
# {
#     "emoji": "\ud83c\uddf2\ud83c\udde9",
#     "description": "flag: Moldova",
#     "category": "Flags",
#     "aliases": [
#         "moldova"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:moldova: `:moldova:`
') }}
{{ markdown(title="🇲🇪 flag: Montenegro" type="markdown", code='

<!--
# 🇲🇪 flag: Montenegro
#
# {
#     "emoji": "\ud83c\uddf2\ud83c\uddea",
#     "description": "flag: Montenegro",
#     "category": "Flags",
#     "aliases": [
#         "montenegro"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:montenegro: `:montenegro:`
') }}
{{ markdown(title="🇲🇫 flag: St. Martin" type="markdown", code='

<!--
# 🇲🇫 flag: St. Martin
#
# {
#     "emoji": "\ud83c\uddf2\ud83c\uddeb",
#     "description": "flag: St. Martin",
#     "category": "Flags",
#     "aliases": [
#         "st_martin"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:st_martin: `:st_martin:`
') }}
{{ markdown(title="🇲🇬 flag: Madagascar" type="markdown", code='

<!--
# 🇲🇬 flag: Madagascar
#
# {
#     "emoji": "\ud83c\uddf2\ud83c\uddec",
#     "description": "flag: Madagascar",
#     "category": "Flags",
#     "aliases": [
#         "madagascar"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:madagascar: `:madagascar:`
') }}
{{ markdown(title="🇲🇭 flag: Marshall Islands" type="markdown", code='

<!--
# 🇲🇭 flag: Marshall Islands
#
# {
#     "emoji": "\ud83c\uddf2\ud83c\udded",
#     "description": "flag: Marshall Islands",
#     "category": "Flags",
#     "aliases": [
#         "marshall_islands"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.0"
# }
-->

:marshall_islands: `:marshall_islands:`
') }}
{{ markdown(title="🇲🇰 flag: North Macedonia" type="markdown", code='

<!--
# 🇲🇰 flag: North Macedonia
#
# {
#     "emoji": "\ud83c\uddf2\ud83c\uddf0",
#     "description": "flag: North Macedonia",
#     "category": "Flags",
#     "aliases": [
#         "macedonia"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:macedonia: `:macedonia:`
') }}
{{ markdown(title="🇲🇱 flag: Mali" type="markdown", code='

<!--
# 🇲🇱 flag: Mali
#
# {
#     "emoji": "\ud83c\uddf2\ud83c\uddf1",
#     "description": "flag: Mali",
#     "category": "Flags",
#     "aliases": [
#         "mali"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:mali: `:mali:`
') }}
{{ markdown(title="🇲🇲 flag: Myanmar (Burma)" type="markdown", code='

<!--
# 🇲🇲 flag: Myanmar (Burma)
#
# {
#     "emoji": "\ud83c\uddf2\ud83c\uddf2",
#     "description": "flag: Myanmar (Burma)",
#     "category": "Flags",
#     "aliases": [
#         "myanmar"
#     ],
#     "tags": [
#         "burma"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:myanmar: `:myanmar:`
') }}
{{ markdown(title="🇲🇳 flag: Mongolia" type="markdown", code='

<!--
# 🇲🇳 flag: Mongolia
#
# {
#     "emoji": "\ud83c\uddf2\ud83c\uddf3",
#     "description": "flag: Mongolia",
#     "category": "Flags",
#     "aliases": [
#         "mongolia"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:mongolia: `:mongolia:`
') }}
{{ markdown(title="🇲🇴 flag: Macao SAR China" type="markdown", code='

<!--
# 🇲🇴 flag: Macao SAR China
#
# {
#     "emoji": "\ud83c\uddf2\ud83c\uddf4",
#     "description": "flag: Macao SAR China",
#     "category": "Flags",
#     "aliases": [
#         "macau"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:macau: `:macau:`
') }}
{{ markdown(title="🇲🇵 flag: Northern Mariana Islands" type="markdown", code='

<!--
# 🇲🇵 flag: Northern Mariana Islands
#
# {
#     "emoji": "\ud83c\uddf2\ud83c\uddf5",
#     "description": "flag: Northern Mariana Islands",
#     "category": "Flags",
#     "aliases": [
#         "northern_mariana_islands"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:northern_mariana_islands: `:northern_mariana_islands:`
') }}
{{ markdown(title="🇲🇶 flag: Martinique" type="markdown", code='

<!--
# 🇲🇶 flag: Martinique
#
# {
#     "emoji": "\ud83c\uddf2\ud83c\uddf6",
#     "description": "flag: Martinique",
#     "category": "Flags",
#     "aliases": [
#         "martinique"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.0"
# }
-->

:martinique: `:martinique:`
') }}
{{ markdown(title="🇲🇷 flag: Mauritania" type="markdown", code='

<!--
# 🇲🇷 flag: Mauritania
#
# {
#     "emoji": "\ud83c\uddf2\ud83c\uddf7",
#     "description": "flag: Mauritania",
#     "category": "Flags",
#     "aliases": [
#         "mauritania"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:mauritania: `:mauritania:`
') }}
{{ markdown(title="🇲🇸 flag: Montserrat" type="markdown", code='

<!--
# 🇲🇸 flag: Montserrat
#
# {
#     "emoji": "\ud83c\uddf2\ud83c\uddf8",
#     "description": "flag: Montserrat",
#     "category": "Flags",
#     "aliases": [
#         "montserrat"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:montserrat: `:montserrat:`
') }}
{{ markdown(title="🇲🇹 flag: Malta" type="markdown", code='

<!--
# 🇲🇹 flag: Malta
#
# {
#     "emoji": "\ud83c\uddf2\ud83c\uddf9",
#     "description": "flag: Malta",
#     "category": "Flags",
#     "aliases": [
#         "malta"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:malta: `:malta:`
') }}
{{ markdown(title="🇲🇺 flag: Mauritius" type="markdown", code='

<!--
# 🇲🇺 flag: Mauritius
#
# {
#     "emoji": "\ud83c\uddf2\ud83c\uddfa",
#     "description": "flag: Mauritius",
#     "category": "Flags",
#     "aliases": [
#         "mauritius"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.0"
# }
-->

:mauritius: `:mauritius:`
') }}
{{ markdown(title="🇲🇻 flag: Maldives" type="markdown", code='

<!--
# 🇲🇻 flag: Maldives
#
# {
#     "emoji": "\ud83c\uddf2\ud83c\uddfb",
#     "description": "flag: Maldives",
#     "category": "Flags",
#     "aliases": [
#         "maldives"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:maldives: `:maldives:`
') }}
{{ markdown(title="🇲🇼 flag: Malawi" type="markdown", code='

<!--
# 🇲🇼 flag: Malawi
#
# {
#     "emoji": "\ud83c\uddf2\ud83c\uddfc",
#     "description": "flag: Malawi",
#     "category": "Flags",
#     "aliases": [
#         "malawi"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:malawi: `:malawi:`
') }}
{{ markdown(title="🇲🇽 flag: Mexico" type="markdown", code='

<!--
# 🇲🇽 flag: Mexico
#
# {
#     "emoji": "\ud83c\uddf2\ud83c\uddfd",
#     "description": "flag: Mexico",
#     "category": "Flags",
#     "aliases": [
#         "mexico"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:mexico: `:mexico:`
') }}
{{ markdown(title="🇲🇾 flag: Malaysia" type="markdown", code='

<!--
# 🇲🇾 flag: Malaysia
#
# {
#     "emoji": "\ud83c\uddf2\ud83c\uddfe",
#     "description": "flag: Malaysia",
#     "category": "Flags",
#     "aliases": [
#         "malaysia"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:malaysia: `:malaysia:`
') }}
{{ markdown(title="🇲🇿 flag: Mozambique" type="markdown", code='

<!--
# 🇲🇿 flag: Mozambique
#
# {
#     "emoji": "\ud83c\uddf2\ud83c\uddff",
#     "description": "flag: Mozambique",
#     "category": "Flags",
#     "aliases": [
#         "mozambique"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:mozambique: `:mozambique:`
') }}
{{ markdown(title="🇳🇦 flag: Namibia" type="markdown", code='

<!--
# 🇳🇦 flag: Namibia
#
# {
#     "emoji": "\ud83c\uddf3\ud83c\udde6",
#     "description": "flag: Namibia",
#     "category": "Flags",
#     "aliases": [
#         "namibia"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:namibia: `:namibia:`
') }}
{{ markdown(title="🇳🇨 flag: New Caledonia" type="markdown", code='

<!--
# 🇳🇨 flag: New Caledonia
#
# {
#     "emoji": "\ud83c\uddf3\ud83c\udde8",
#     "description": "flag: New Caledonia",
#     "category": "Flags",
#     "aliases": [
#         "new_caledonia"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:new_caledonia: `:new_caledonia:`
') }}
{{ markdown(title="🇳🇪 flag: Niger" type="markdown", code='

<!--
# 🇳🇪 flag: Niger
#
# {
#     "emoji": "\ud83c\uddf3\ud83c\uddea",
#     "description": "flag: Niger",
#     "category": "Flags",
#     "aliases": [
#         "niger"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:niger: `:niger:`
') }}
{{ markdown(title="🇳🇫 flag: Norfolk Island" type="markdown", code='

<!--
# 🇳🇫 flag: Norfolk Island
#
# {
#     "emoji": "\ud83c\uddf3\ud83c\uddeb",
#     "description": "flag: Norfolk Island",
#     "category": "Flags",
#     "aliases": [
#         "norfolk_island"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.0"
# }
-->

:norfolk_island: `:norfolk_island:`
') }}
{{ markdown(title="🇳🇬 flag: Nigeria" type="markdown", code='

<!--
# 🇳🇬 flag: Nigeria
#
# {
#     "emoji": "\ud83c\uddf3\ud83c\uddec",
#     "description": "flag: Nigeria",
#     "category": "Flags",
#     "aliases": [
#         "nigeria"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:nigeria: `:nigeria:`
') }}
{{ markdown(title="🇳🇮 flag: Nicaragua" type="markdown", code='

<!--
# 🇳🇮 flag: Nicaragua
#
# {
#     "emoji": "\ud83c\uddf3\ud83c\uddee",
#     "description": "flag: Nicaragua",
#     "category": "Flags",
#     "aliases": [
#         "nicaragua"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:nicaragua: `:nicaragua:`
') }}
{{ markdown(title="🇳🇱 flag: Netherlands" type="markdown", code='

<!--
# 🇳🇱 flag: Netherlands
#
# {
#     "emoji": "\ud83c\uddf3\ud83c\uddf1",
#     "description": "flag: Netherlands",
#     "category": "Flags",
#     "aliases": [
#         "netherlands"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:netherlands: `:netherlands:`
') }}
{{ markdown(title="🇳🇴 flag: Norway" type="markdown", code='

<!--
# 🇳🇴 flag: Norway
#
# {
#     "emoji": "\ud83c\uddf3\ud83c\uddf4",
#     "description": "flag: Norway",
#     "category": "Flags",
#     "aliases": [
#         "norway"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:norway: `:norway:`
') }}
{{ markdown(title="🇳🇵 flag: Nepal" type="markdown", code='

<!--
# 🇳🇵 flag: Nepal
#
# {
#     "emoji": "\ud83c\uddf3\ud83c\uddf5",
#     "description": "flag: Nepal",
#     "category": "Flags",
#     "aliases": [
#         "nepal"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:nepal: `:nepal:`
') }}
{{ markdown(title="🇳🇷 flag: Nauru" type="markdown", code='

<!--
# 🇳🇷 flag: Nauru
#
# {
#     "emoji": "\ud83c\uddf3\ud83c\uddf7",
#     "description": "flag: Nauru",
#     "category": "Flags",
#     "aliases": [
#         "nauru"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.0"
# }
-->

:nauru: `:nauru:`
') }}
{{ markdown(title="🇳🇺 flag: Niue" type="markdown", code='

<!--
# 🇳🇺 flag: Niue
#
# {
#     "emoji": "\ud83c\uddf3\ud83c\uddfa",
#     "description": "flag: Niue",
#     "category": "Flags",
#     "aliases": [
#         "niue"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:niue: `:niue:`
') }}
{{ markdown(title="🇳🇿 flag: New Zealand" type="markdown", code='

<!--
# 🇳🇿 flag: New Zealand
#
# {
#     "emoji": "\ud83c\uddf3\ud83c\uddff",
#     "description": "flag: New Zealand",
#     "category": "Flags",
#     "aliases": [
#         "new_zealand"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:new_zealand: `:new_zealand:`
') }}
{{ markdown(title="🇴🇲 flag: Oman" type="markdown", code='

<!--
# 🇴🇲 flag: Oman
#
# {
#     "emoji": "\ud83c\uddf4\ud83c\uddf2",
#     "description": "flag: Oman",
#     "category": "Flags",
#     "aliases": [
#         "oman"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:oman: `:oman:`
') }}
{{ markdown(title="🇵🇦 flag: Panama" type="markdown", code='

<!--
# 🇵🇦 flag: Panama
#
# {
#     "emoji": "\ud83c\uddf5\ud83c\udde6",
#     "description": "flag: Panama",
#     "category": "Flags",
#     "aliases": [
#         "panama"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:panama: `:panama:`
') }}
{{ markdown(title="🇵🇪 flag: Peru" type="markdown", code='

<!--
# 🇵🇪 flag: Peru
#
# {
#     "emoji": "\ud83c\uddf5\ud83c\uddea",
#     "description": "flag: Peru",
#     "category": "Flags",
#     "aliases": [
#         "peru"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:peru: `:peru:`
') }}
{{ markdown(title="🇵🇫 flag: French Polynesia" type="markdown", code='

<!--
# 🇵🇫 flag: French Polynesia
#
# {
#     "emoji": "\ud83c\uddf5\ud83c\uddeb",
#     "description": "flag: French Polynesia",
#     "category": "Flags",
#     "aliases": [
#         "french_polynesia"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.0"
# }
-->

:french_polynesia: `:french_polynesia:`
') }}
{{ markdown(title="🇵🇬 flag: Papua New Guinea" type="markdown", code='

<!--
# 🇵🇬 flag: Papua New Guinea
#
# {
#     "emoji": "\ud83c\uddf5\ud83c\uddec",
#     "description": "flag: Papua New Guinea",
#     "category": "Flags",
#     "aliases": [
#         "papua_new_guinea"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:papua_new_guinea: `:papua_new_guinea:`
') }}
{{ markdown(title="🇵🇭 flag: Philippines" type="markdown", code='

<!--
# 🇵🇭 flag: Philippines
#
# {
#     "emoji": "\ud83c\uddf5\ud83c\udded",
#     "description": "flag: Philippines",
#     "category": "Flags",
#     "aliases": [
#         "philippines"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:philippines: `:philippines:`
') }}
{{ markdown(title="🇵🇰 flag: Pakistan" type="markdown", code='

<!--
# 🇵🇰 flag: Pakistan
#
# {
#     "emoji": "\ud83c\uddf5\ud83c\uddf0",
#     "description": "flag: Pakistan",
#     "category": "Flags",
#     "aliases": [
#         "pakistan"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:pakistan: `:pakistan:`
') }}
{{ markdown(title="🇵🇱 flag: Poland" type="markdown", code='

<!--
# 🇵🇱 flag: Poland
#
# {
#     "emoji": "\ud83c\uddf5\ud83c\uddf1",
#     "description": "flag: Poland",
#     "category": "Flags",
#     "aliases": [
#         "poland"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:poland: `:poland:`
') }}
{{ markdown(title="🇵🇲 flag: St. Pierre & Miquelon" type="markdown", code='

<!--
# 🇵🇲 flag: St. Pierre & Miquelon
#
# {
#     "emoji": "\ud83c\uddf5\ud83c\uddf2",
#     "description": "flag: St. Pierre & Miquelon",
#     "category": "Flags",
#     "aliases": [
#         "st_pierre_miquelon"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.0"
# }
-->

:st_pierre_miquelon: `:st_pierre_miquelon:`
') }}
{{ markdown(title="🇵🇳 flag: Pitcairn Islands" type="markdown", code='

<!--
# 🇵🇳 flag: Pitcairn Islands
#
# {
#     "emoji": "\ud83c\uddf5\ud83c\uddf3",
#     "description": "flag: Pitcairn Islands",
#     "category": "Flags",
#     "aliases": [
#         "pitcairn_islands"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.0"
# }
-->

:pitcairn_islands: `:pitcairn_islands:`
') }}
{{ markdown(title="🇵🇷 flag: Puerto Rico" type="markdown", code='

<!--
# 🇵🇷 flag: Puerto Rico
#
# {
#     "emoji": "\ud83c\uddf5\ud83c\uddf7",
#     "description": "flag: Puerto Rico",
#     "category": "Flags",
#     "aliases": [
#         "puerto_rico"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:puerto_rico: `:puerto_rico:`
') }}
{{ markdown(title="🇵🇸 flag: Palestinian Territories" type="markdown", code='

<!--
# 🇵🇸 flag: Palestinian Territories
#
# {
#     "emoji": "\ud83c\uddf5\ud83c\uddf8",
#     "description": "flag: Palestinian Territories",
#     "category": "Flags",
#     "aliases": [
#         "palestinian_territories"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:palestinian_territories: `:palestinian_territories:`
') }}
{{ markdown(title="🇵🇹 flag: Portugal" type="markdown", code='

<!--
# 🇵🇹 flag: Portugal
#
# {
#     "emoji": "\ud83c\uddf5\ud83c\uddf9",
#     "description": "flag: Portugal",
#     "category": "Flags",
#     "aliases": [
#         "portugal"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:portugal: `:portugal:`
') }}
{{ markdown(title="🇵🇼 flag: Palau" type="markdown", code='

<!--
# 🇵🇼 flag: Palau
#
# {
#     "emoji": "\ud83c\uddf5\ud83c\uddfc",
#     "description": "flag: Palau",
#     "category": "Flags",
#     "aliases": [
#         "palau"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:palau: `:palau:`
') }}
{{ markdown(title="🇵🇾 flag: Paraguay" type="markdown", code='

<!--
# 🇵🇾 flag: Paraguay
#
# {
#     "emoji": "\ud83c\uddf5\ud83c\uddfe",
#     "description": "flag: Paraguay",
#     "category": "Flags",
#     "aliases": [
#         "paraguay"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:paraguay: `:paraguay:`
') }}
{{ markdown(title="🇶🇦 flag: Qatar" type="markdown", code='

<!--
# 🇶🇦 flag: Qatar
#
# {
#     "emoji": "\ud83c\uddf6\ud83c\udde6",
#     "description": "flag: Qatar",
#     "category": "Flags",
#     "aliases": [
#         "qatar"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:qatar: `:qatar:`
') }}
{{ markdown(title="🇷🇪 flag: Réunion" type="markdown", code='

<!--
# 🇷🇪 flag: Réunion
#
# {
#     "emoji": "\ud83c\uddf7\ud83c\uddea",
#     "description": "flag: R\u00e9union",
#     "category": "Flags",
#     "aliases": [
#         "reunion"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.0"
# }
-->

:reunion: `:reunion:`
') }}
{{ markdown(title="🇷🇴 flag: Romania" type="markdown", code='

<!--
# 🇷🇴 flag: Romania
#
# {
#     "emoji": "\ud83c\uddf7\ud83c\uddf4",
#     "description": "flag: Romania",
#     "category": "Flags",
#     "aliases": [
#         "romania"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:romania: `:romania:`
') }}
{{ markdown(title="🇷🇸 flag: Serbia" type="markdown", code='

<!--
# 🇷🇸 flag: Serbia
#
# {
#     "emoji": "\ud83c\uddf7\ud83c\uddf8",
#     "description": "flag: Serbia",
#     "category": "Flags",
#     "aliases": [
#         "serbia"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:serbia: `:serbia:`
') }}
{{ markdown(title="🇷🇺 flag: Russia" type="markdown", code='

<!--
# 🇷🇺 flag: Russia
#
# {
#     "emoji": "\ud83c\uddf7\ud83c\uddfa",
#     "description": "flag: Russia",
#     "category": "Flags",
#     "aliases": [
#         "ru"
#     ],
#     "tags": [
#         "russia"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:ru: `:ru:`
') }}
{{ markdown(title="🇷🇼 flag: Rwanda" type="markdown", code='

<!--
# 🇷🇼 flag: Rwanda
#
# {
#     "emoji": "\ud83c\uddf7\ud83c\uddfc",
#     "description": "flag: Rwanda",
#     "category": "Flags",
#     "aliases": [
#         "rwanda"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:rwanda: `:rwanda:`
') }}
{{ markdown(title="🇸🇦 flag: Saudi Arabia" type="markdown", code='

<!--
# 🇸🇦 flag: Saudi Arabia
#
# {
#     "emoji": "\ud83c\uddf8\ud83c\udde6",
#     "description": "flag: Saudi Arabia",
#     "category": "Flags",
#     "aliases": [
#         "saudi_arabia"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:saudi_arabia: `:saudi_arabia:`
') }}
{{ markdown(title="🇸🇧 flag: Solomon Islands" type="markdown", code='

<!--
# 🇸🇧 flag: Solomon Islands
#
# {
#     "emoji": "\ud83c\uddf8\ud83c\udde7",
#     "description": "flag: Solomon Islands",
#     "category": "Flags",
#     "aliases": [
#         "solomon_islands"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:solomon_islands: `:solomon_islands:`
') }}
{{ markdown(title="🇸🇨 flag: Seychelles" type="markdown", code='

<!--
# 🇸🇨 flag: Seychelles
#
# {
#     "emoji": "\ud83c\uddf8\ud83c\udde8",
#     "description": "flag: Seychelles",
#     "category": "Flags",
#     "aliases": [
#         "seychelles"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:seychelles: `:seychelles:`
') }}
{{ markdown(title="🇸🇩 flag: Sudan" type="markdown", code='

<!--
# 🇸🇩 flag: Sudan
#
# {
#     "emoji": "\ud83c\uddf8\ud83c\udde9",
#     "description": "flag: Sudan",
#     "category": "Flags",
#     "aliases": [
#         "sudan"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:sudan: `:sudan:`
') }}
{{ markdown(title="🇸🇪 flag: Sweden" type="markdown", code='

<!--
# 🇸🇪 flag: Sweden
#
# {
#     "emoji": "\ud83c\uddf8\ud83c\uddea",
#     "description": "flag: Sweden",
#     "category": "Flags",
#     "aliases": [
#         "sweden"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:sweden: `:sweden:`
') }}
{{ markdown(title="🇸🇬 flag: Singapore" type="markdown", code='

<!--
# 🇸🇬 flag: Singapore
#
# {
#     "emoji": "\ud83c\uddf8\ud83c\uddec",
#     "description": "flag: Singapore",
#     "category": "Flags",
#     "aliases": [
#         "singapore"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:singapore: `:singapore:`
') }}
{{ markdown(title="🇸🇭 flag: St. Helena" type="markdown", code='

<!--
# 🇸🇭 flag: St. Helena
#
# {
#     "emoji": "\ud83c\uddf8\ud83c\udded",
#     "description": "flag: St. Helena",
#     "category": "Flags",
#     "aliases": [
#         "st_helena"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.0"
# }
-->

:st_helena: `:st_helena:`
') }}
{{ markdown(title="🇸🇮 flag: Slovenia" type="markdown", code='

<!--
# 🇸🇮 flag: Slovenia
#
# {
#     "emoji": "\ud83c\uddf8\ud83c\uddee",
#     "description": "flag: Slovenia",
#     "category": "Flags",
#     "aliases": [
#         "slovenia"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:slovenia: `:slovenia:`
') }}
{{ markdown(title="🇸🇯 flag: Svalbard & Jan Mayen" type="markdown", code='

<!--
# 🇸🇯 flag: Svalbard & Jan Mayen
#
# {
#     "emoji": "\ud83c\uddf8\ud83c\uddef",
#     "description": "flag: Svalbard & Jan Mayen",
#     "category": "Flags",
#     "aliases": [
#         "svalbard_jan_mayen"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:svalbard_jan_mayen: `:svalbard_jan_mayen:`
') }}
{{ markdown(title="🇸🇰 flag: Slovakia" type="markdown", code='

<!--
# 🇸🇰 flag: Slovakia
#
# {
#     "emoji": "\ud83c\uddf8\ud83c\uddf0",
#     "description": "flag: Slovakia",
#     "category": "Flags",
#     "aliases": [
#         "slovakia"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:slovakia: `:slovakia:`
') }}
{{ markdown(title="🇸🇱 flag: Sierra Leone" type="markdown", code='

<!--
# 🇸🇱 flag: Sierra Leone
#
# {
#     "emoji": "\ud83c\uddf8\ud83c\uddf1",
#     "description": "flag: Sierra Leone",
#     "category": "Flags",
#     "aliases": [
#         "sierra_leone"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:sierra_leone: `:sierra_leone:`
') }}
{{ markdown(title="🇸🇲 flag: San Marino" type="markdown", code='

<!--
# 🇸🇲 flag: San Marino
#
# {
#     "emoji": "\ud83c\uddf8\ud83c\uddf2",
#     "description": "flag: San Marino",
#     "category": "Flags",
#     "aliases": [
#         "san_marino"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:san_marino: `:san_marino:`
') }}
{{ markdown(title="🇸🇳 flag: Senegal" type="markdown", code='

<!--
# 🇸🇳 flag: Senegal
#
# {
#     "emoji": "\ud83c\uddf8\ud83c\uddf3",
#     "description": "flag: Senegal",
#     "category": "Flags",
#     "aliases": [
#         "senegal"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:senegal: `:senegal:`
') }}
{{ markdown(title="🇸🇴 flag: Somalia" type="markdown", code='

<!--
# 🇸🇴 flag: Somalia
#
# {
#     "emoji": "\ud83c\uddf8\ud83c\uddf4",
#     "description": "flag: Somalia",
#     "category": "Flags",
#     "aliases": [
#         "somalia"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:somalia: `:somalia:`
') }}
{{ markdown(title="🇸🇷 flag: Suriname" type="markdown", code='

<!--
# 🇸🇷 flag: Suriname
#
# {
#     "emoji": "\ud83c\uddf8\ud83c\uddf7",
#     "description": "flag: Suriname",
#     "category": "Flags",
#     "aliases": [
#         "suriname"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:suriname: `:suriname:`
') }}
{{ markdown(title="🇸🇸 flag: South Sudan" type="markdown", code='

<!--
# 🇸🇸 flag: South Sudan
#
# {
#     "emoji": "\ud83c\uddf8\ud83c\uddf8",
#     "description": "flag: South Sudan",
#     "category": "Flags",
#     "aliases": [
#         "south_sudan"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:south_sudan: `:south_sudan:`
') }}
{{ markdown(title="🇸🇹 flag: São Tomé & Príncipe" type="markdown", code='

<!--
# 🇸🇹 flag: São Tomé & Príncipe
#
# {
#     "emoji": "\ud83c\uddf8\ud83c\uddf9",
#     "description": "flag: S\u00e3o Tom\u00e9 & Pr\u00edncipe",
#     "category": "Flags",
#     "aliases": [
#         "sao_tome_principe"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:sao_tome_principe: `:sao_tome_principe:`
') }}
{{ markdown(title="🇸🇻 flag: El Salvador" type="markdown", code='

<!--
# 🇸🇻 flag: El Salvador
#
# {
#     "emoji": "\ud83c\uddf8\ud83c\uddfb",
#     "description": "flag: El Salvador",
#     "category": "Flags",
#     "aliases": [
#         "el_salvador"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:el_salvador: `:el_salvador:`
') }}
{{ markdown(title="🇸🇽 flag: Sint Maarten" type="markdown", code='

<!--
# 🇸🇽 flag: Sint Maarten
#
# {
#     "emoji": "\ud83c\uddf8\ud83c\uddfd",
#     "description": "flag: Sint Maarten",
#     "category": "Flags",
#     "aliases": [
#         "sint_maarten"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:sint_maarten: `:sint_maarten:`
') }}
{{ markdown(title="🇸🇾 flag: Syria" type="markdown", code='

<!--
# 🇸🇾 flag: Syria
#
# {
#     "emoji": "\ud83c\uddf8\ud83c\uddfe",
#     "description": "flag: Syria",
#     "category": "Flags",
#     "aliases": [
#         "syria"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:syria: `:syria:`
') }}
{{ markdown(title="🇸🇿 flag: Eswatini" type="markdown", code='

<!--
# 🇸🇿 flag: Eswatini
#
# {
#     "emoji": "\ud83c\uddf8\ud83c\uddff",
#     "description": "flag: Eswatini",
#     "category": "Flags",
#     "aliases": [
#         "swaziland"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:swaziland: `:swaziland:`
') }}
{{ markdown(title="🇹🇦 flag: Tristan da Cunha" type="markdown", code='

<!--
# 🇹🇦 flag: Tristan da Cunha
#
# {
#     "emoji": "\ud83c\uddf9\ud83c\udde6",
#     "description": "flag: Tristan da Cunha",
#     "category": "Flags",
#     "aliases": [
#         "tristan_da_cunha"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:tristan_da_cunha: `:tristan_da_cunha:`
') }}
{{ markdown(title="🇹🇨 flag: Turks & Caicos Islands" type="markdown", code='

<!--
# 🇹🇨 flag: Turks & Caicos Islands
#
# {
#     "emoji": "\ud83c\uddf9\ud83c\udde8",
#     "description": "flag: Turks & Caicos Islands",
#     "category": "Flags",
#     "aliases": [
#         "turks_caicos_islands"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:turks_caicos_islands: `:turks_caicos_islands:`
') }}
{{ markdown(title="🇹🇩 flag: Chad" type="markdown", code='

<!--
# 🇹🇩 flag: Chad
#
# {
#     "emoji": "\ud83c\uddf9\ud83c\udde9",
#     "description": "flag: Chad",
#     "category": "Flags",
#     "aliases": [
#         "chad"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.0"
# }
-->

:chad: `:chad:`
') }}
{{ markdown(title="🇹🇫 flag: French Southern Territories" type="markdown", code='

<!--
# 🇹🇫 flag: French Southern Territories
#
# {
#     "emoji": "\ud83c\uddf9\ud83c\uddeb",
#     "description": "flag: French Southern Territories",
#     "category": "Flags",
#     "aliases": [
#         "french_southern_territories"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:french_southern_territories: `:french_southern_territories:`
') }}
{{ markdown(title="🇹🇬 flag: Togo" type="markdown", code='

<!--
# 🇹🇬 flag: Togo
#
# {
#     "emoji": "\ud83c\uddf9\ud83c\uddec",
#     "description": "flag: Togo",
#     "category": "Flags",
#     "aliases": [
#         "togo"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:togo: `:togo:`
') }}
{{ markdown(title="🇹🇭 flag: Thailand" type="markdown", code='

<!--
# 🇹🇭 flag: Thailand
#
# {
#     "emoji": "\ud83c\uddf9\ud83c\udded",
#     "description": "flag: Thailand",
#     "category": "Flags",
#     "aliases": [
#         "thailand"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:thailand: `:thailand:`
') }}
{{ markdown(title="🇹🇯 flag: Tajikistan" type="markdown", code='

<!--
# 🇹🇯 flag: Tajikistan
#
# {
#     "emoji": "\ud83c\uddf9\ud83c\uddef",
#     "description": "flag: Tajikistan",
#     "category": "Flags",
#     "aliases": [
#         "tajikistan"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:tajikistan: `:tajikistan:`
') }}
{{ markdown(title="🇹🇰 flag: Tokelau" type="markdown", code='

<!--
# 🇹🇰 flag: Tokelau
#
# {
#     "emoji": "\ud83c\uddf9\ud83c\uddf0",
#     "description": "flag: Tokelau",
#     "category": "Flags",
#     "aliases": [
#         "tokelau"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.0"
# }
-->

:tokelau: `:tokelau:`
') }}
{{ markdown(title="🇹🇱 flag: Timor-Leste" type="markdown", code='

<!--
# 🇹🇱 flag: Timor-Leste
#
# {
#     "emoji": "\ud83c\uddf9\ud83c\uddf1",
#     "description": "flag: Timor-Leste",
#     "category": "Flags",
#     "aliases": [
#         "timor_leste"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:timor_leste: `:timor_leste:`
') }}
{{ markdown(title="🇹🇲 flag: Turkmenistan" type="markdown", code='

<!--
# 🇹🇲 flag: Turkmenistan
#
# {
#     "emoji": "\ud83c\uddf9\ud83c\uddf2",
#     "description": "flag: Turkmenistan",
#     "category": "Flags",
#     "aliases": [
#         "turkmenistan"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:turkmenistan: `:turkmenistan:`
') }}
{{ markdown(title="🇹🇳 flag: Tunisia" type="markdown", code='

<!--
# 🇹🇳 flag: Tunisia
#
# {
#     "emoji": "\ud83c\uddf9\ud83c\uddf3",
#     "description": "flag: Tunisia",
#     "category": "Flags",
#     "aliases": [
#         "tunisia"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:tunisia: `:tunisia:`
') }}
{{ markdown(title="🇹🇴 flag: Tonga" type="markdown", code='

<!--
# 🇹🇴 flag: Tonga
#
# {
#     "emoji": "\ud83c\uddf9\ud83c\uddf4",
#     "description": "flag: Tonga",
#     "category": "Flags",
#     "aliases": [
#         "tonga"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:tonga: `:tonga:`
') }}
{{ markdown(title="🇹🇷 flag: Turkey" type="markdown", code='

<!--
# 🇹🇷 flag: Turkey
#
# {
#     "emoji": "\ud83c\uddf9\ud83c\uddf7",
#     "description": "flag: Turkey",
#     "category": "Flags",
#     "aliases": [
#         "tr"
#     ],
#     "tags": [
#         "turkey"
#     ],
#     "unicode_version": "8.0",
#     "ios_version": "9.1"
# }
-->

:tr: `:tr:`
') }}
{{ markdown(title="🇹🇹 flag: Trinidad & Tobago" type="markdown", code='

<!--
# 🇹🇹 flag: Trinidad & Tobago
#
# {
#     "emoji": "\ud83c\uddf9\ud83c\uddf9",
#     "description": "flag: Trinidad & Tobago",
#     "category": "Flags",
#     "aliases": [
#         "trinidad_tobago"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:trinidad_tobago: `:trinidad_tobago:`
') }}
{{ markdown(title="🇹🇻 flag: Tuvalu" type="markdown", code='

<!--
# 🇹🇻 flag: Tuvalu
#
# {
#     "emoji": "\ud83c\uddf9\ud83c\uddfb",
#     "description": "flag: Tuvalu",
#     "category": "Flags",
#     "aliases": [
#         "tuvalu"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:tuvalu: `:tuvalu:`
') }}
{{ markdown(title="🇹🇼 flag: Taiwan" type="markdown", code='

<!--
# 🇹🇼 flag: Taiwan
#
# {
#     "emoji": "\ud83c\uddf9\ud83c\uddfc",
#     "description": "flag: Taiwan",
#     "category": "Flags",
#     "aliases": [
#         "taiwan"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.0"
# }
-->

:taiwan: `:taiwan:`
') }}
{{ markdown(title="🇹🇿 flag: Tanzania" type="markdown", code='

<!--
# 🇹🇿 flag: Tanzania
#
# {
#     "emoji": "\ud83c\uddf9\ud83c\uddff",
#     "description": "flag: Tanzania",
#     "category": "Flags",
#     "aliases": [
#         "tanzania"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:tanzania: `:tanzania:`
') }}
{{ markdown(title="🇺🇦 flag: Ukraine" type="markdown", code='

<!--
# 🇺🇦 flag: Ukraine
#
# {
#     "emoji": "\ud83c\uddfa\ud83c\udde6",
#     "description": "flag: Ukraine",
#     "category": "Flags",
#     "aliases": [
#         "ukraine"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:ukraine: `:ukraine:`
') }}
{{ markdown(title="🇺🇬 flag: Uganda" type="markdown", code='

<!--
# 🇺🇬 flag: Uganda
#
# {
#     "emoji": "\ud83c\uddfa\ud83c\uddec",
#     "description": "flag: Uganda",
#     "category": "Flags",
#     "aliases": [
#         "uganda"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:uganda: `:uganda:`
') }}
{{ markdown(title="🇺🇲 flag: U.S. Outlying Islands" type="markdown", code='

<!--
# 🇺🇲 flag: U.S. Outlying Islands
#
# {
#     "emoji": "\ud83c\uddfa\ud83c\uddf2",
#     "description": "flag: U.S. Outlying Islands",
#     "category": "Flags",
#     "aliases": [
#         "us_outlying_islands"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:us_outlying_islands: `:us_outlying_islands:`
') }}
{{ markdown(title="🇺🇳 flag: United Nations" type="markdown", code='

<!--
# 🇺🇳 flag: United Nations
#
# {
#     "emoji": "\ud83c\uddfa\ud83c\uddf3",
#     "description": "flag: United Nations",
#     "category": "Flags",
#     "aliases": [
#         "united_nations"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:united_nations: `:united_nations:`
') }}
{{ markdown(title="🇺🇸 flag: United States" type="markdown", code='

<!--
# 🇺🇸 flag: United States
#
# {
#     "emoji": "\ud83c\uddfa\ud83c\uddf8",
#     "description": "flag: United States",
#     "category": "Flags",
#     "aliases": [
#         "us"
#     ],
#     "tags": [
#         "flag",
#         "united",
#         "america"
#     ],
#     "unicode_version": "6.0",
#     "ios_version": "6.0"
# }
-->

:us: `:us:`
') }}
{{ markdown(title="🇺🇾 flag: Uruguay" type="markdown", code='

<!--
# 🇺🇾 flag: Uruguay
#
# {
#     "emoji": "\ud83c\uddfa\ud83c\uddfe",
#     "description": "flag: Uruguay",
#     "category": "Flags",
#     "aliases": [
#         "uruguay"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:uruguay: `:uruguay:`
') }}
{{ markdown(title="🇺🇿 flag: Uzbekistan" type="markdown", code='

<!--
# 🇺🇿 flag: Uzbekistan
#
# {
#     "emoji": "\ud83c\uddfa\ud83c\uddff",
#     "description": "flag: Uzbekistan",
#     "category": "Flags",
#     "aliases": [
#         "uzbekistan"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:uzbekistan: `:uzbekistan:`
') }}
{{ markdown(title="🇻🇦 flag: Vatican City" type="markdown", code='

<!--
# 🇻🇦 flag: Vatican City
#
# {
#     "emoji": "\ud83c\uddfb\ud83c\udde6",
#     "description": "flag: Vatican City",
#     "category": "Flags",
#     "aliases": [
#         "vatican_city"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.0"
# }
-->

:vatican_city: `:vatican_city:`
') }}
{{ markdown(title="🇻🇨 flag: St. Vincent & Grenadines" type="markdown", code='

<!--
# 🇻🇨 flag: St. Vincent & Grenadines
#
# {
#     "emoji": "\ud83c\uddfb\ud83c\udde8",
#     "description": "flag: St. Vincent & Grenadines",
#     "category": "Flags",
#     "aliases": [
#         "st_vincent_grenadines"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:st_vincent_grenadines: `:st_vincent_grenadines:`
') }}
{{ markdown(title="🇻🇪 flag: Venezuela" type="markdown", code='

<!--
# 🇻🇪 flag: Venezuela
#
# {
#     "emoji": "\ud83c\uddfb\ud83c\uddea",
#     "description": "flag: Venezuela",
#     "category": "Flags",
#     "aliases": [
#         "venezuela"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:venezuela: `:venezuela:`
') }}
{{ markdown(title="🇻🇬 flag: British Virgin Islands" type="markdown", code='

<!--
# 🇻🇬 flag: British Virgin Islands
#
# {
#     "emoji": "\ud83c\uddfb\ud83c\uddec",
#     "description": "flag: British Virgin Islands",
#     "category": "Flags",
#     "aliases": [
#         "british_virgin_islands"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:british_virgin_islands: `:british_virgin_islands:`
') }}
{{ markdown(title="🇻🇮 flag: U.S. Virgin Islands" type="markdown", code='

<!--
# 🇻🇮 flag: U.S. Virgin Islands
#
# {
#     "emoji": "\ud83c\uddfb\ud83c\uddee",
#     "description": "flag: U.S. Virgin Islands",
#     "category": "Flags",
#     "aliases": [
#         "us_virgin_islands"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:us_virgin_islands: `:us_virgin_islands:`
') }}
{{ markdown(title="🇻🇳 flag: Vietnam" type="markdown", code='

<!--
# 🇻🇳 flag: Vietnam
#
# {
#     "emoji": "\ud83c\uddfb\ud83c\uddf3",
#     "description": "flag: Vietnam",
#     "category": "Flags",
#     "aliases": [
#         "vietnam"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:vietnam: `:vietnam:`
') }}
{{ markdown(title="🇻🇺 flag: Vanuatu" type="markdown", code='

<!--
# 🇻🇺 flag: Vanuatu
#
# {
#     "emoji": "\ud83c\uddfb\ud83c\uddfa",
#     "description": "flag: Vanuatu",
#     "category": "Flags",
#     "aliases": [
#         "vanuatu"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:vanuatu: `:vanuatu:`
') }}
{{ markdown(title="🇼🇫 flag: Wallis & Futuna" type="markdown", code='

<!--
# 🇼🇫 flag: Wallis & Futuna
#
# {
#     "emoji": "\ud83c\uddfc\ud83c\uddeb",
#     "description": "flag: Wallis & Futuna",
#     "category": "Flags",
#     "aliases": [
#         "wallis_futuna"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.0"
# }
-->

:wallis_futuna: `:wallis_futuna:`
') }}
{{ markdown(title="🇼🇸 flag: Samoa" type="markdown", code='

<!--
# 🇼🇸 flag: Samoa
#
# {
#     "emoji": "\ud83c\uddfc\ud83c\uddf8",
#     "description": "flag: Samoa",
#     "category": "Flags",
#     "aliases": [
#         "samoa"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:samoa: `:samoa:`
') }}
{{ markdown(title="🇽🇰 flag: Kosovo" type="markdown", code='

<!--
# 🇽🇰 flag: Kosovo
#
# {
#     "emoji": "\ud83c\uddfd\ud83c\uddf0",
#     "description": "flag: Kosovo",
#     "category": "Flags",
#     "aliases": [
#         "kosovo"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:kosovo: `:kosovo:`
') }}
{{ markdown(title="🇾🇪 flag: Yemen" type="markdown", code='

<!--
# 🇾🇪 flag: Yemen
#
# {
#     "emoji": "\ud83c\uddfe\ud83c\uddea",
#     "description": "flag: Yemen",
#     "category": "Flags",
#     "aliases": [
#         "yemen"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:yemen: `:yemen:`
') }}
{{ markdown(title="🇾🇹 flag: Mayotte" type="markdown", code='

<!--
# 🇾🇹 flag: Mayotte
#
# {
#     "emoji": "\ud83c\uddfe\ud83c\uddf9",
#     "description": "flag: Mayotte",
#     "category": "Flags",
#     "aliases": [
#         "mayotte"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "9.0"
# }
-->

:mayotte: `:mayotte:`
') }}
{{ markdown(title="🇿🇦 flag: South Africa" type="markdown", code='

<!--
# 🇿🇦 flag: South Africa
#
# {
#     "emoji": "\ud83c\uddff\ud83c\udde6",
#     "description": "flag: South Africa",
#     "category": "Flags",
#     "aliases": [
#         "south_africa"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:south_africa: `:south_africa:`
') }}
{{ markdown(title="🇿🇲 flag: Zambia" type="markdown", code='

<!--
# 🇿🇲 flag: Zambia
#
# {
#     "emoji": "\ud83c\uddff\ud83c\uddf2",
#     "description": "flag: Zambia",
#     "category": "Flags",
#     "aliases": [
#         "zambia"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:zambia: `:zambia:`
') }}
{{ markdown(title="🇿🇼 flag: Zimbabwe" type="markdown", code='

<!--
# 🇿🇼 flag: Zimbabwe
#
# {
#     "emoji": "\ud83c\uddff\ud83c\uddfc",
#     "description": "flag: Zimbabwe",
#     "category": "Flags",
#     "aliases": [
#         "zimbabwe"
#     ],
#     "tags": [],
#     "unicode_version": "6.0",
#     "ios_version": "8.3"
# }
-->

:zimbabwe: `:zimbabwe:`
') }}
{{ markdown(title="🏴󠁧󠁢󠁥󠁮󠁧󠁿 flag: England" type="markdown", code='

<!--
# 🏴󠁧󠁢󠁥󠁮󠁧󠁿 flag: England
#
# {
#     "emoji": "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f",
#     "description": "flag: England",
#     "category": "Flags",
#     "aliases": [
#         "england"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:england: `:england:`
') }}
{{ markdown(title="🏴󠁧󠁢󠁳󠁣󠁴󠁿 flag: Scotland" type="markdown", code='

<!--
# 🏴󠁧󠁢󠁳󠁣󠁴󠁿 flag: Scotland
#
# {
#     "emoji": "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f",
#     "description": "flag: Scotland",
#     "category": "Flags",
#     "aliases": [
#         "scotland"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:scotland: `:scotland:`
') }}
{{ markdown(title="🏴󠁧󠁢󠁷󠁬󠁳󠁿 flag: Wales" type="markdown", code='

<!--
# 🏴󠁧󠁢󠁷󠁬󠁳󠁿 flag: Wales
#
# {
#     "emoji": "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f",
#     "description": "flag: Wales",
#     "category": "Flags",
#     "aliases": [
#         "wales"
#     ],
#     "tags": [],
#     "unicode_version": "11.0",
#     "ios_version": "12.1"
# }
-->

:wales: `:wales:`
') }}

## Generated

This Markdown file was generated by [`emoji.py`](../emojis.py). It use [`emojis.json`](../emojis.json) to extract the list of available smilies.
