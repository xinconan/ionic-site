---
layout: v2_fluid/docs_cli_base
category: cli
id: cli-emulate
command_name: emulate
title: Emulate
header_sub_title: Ionic CLI
---

## Description

The `emulate` command will deploy the app to the specified platform devices. You can also run **live reload** on the specified emulator by adding the `--livereload` option. The live reload functionality is similar to `ionic serve`, but instead of developing and debugging an app using a standard browser, the compiled hybrid app itself is watching for any changes to its files and reloading the app when needed. This reduces the requirement to constantly rebuild the app for small changes. However, any changes to plugins will still require a full rebuild. For live reload to work, the dev machine and emulator must be on the same local network, and the device must support [web sockets](http://caniuse.com/websockets).
