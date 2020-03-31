---
templateKey: blog-post
public: true
url: orchid-now-available-for-macos-command-line
title: "Orchid Now Available for MacOS Command Line"
date: 2020-3-31T16:46:36.651Z
description: "As many people around the world adjust to working remotely, Internet privacy tools can be crucial for workers in sensitive industries and/or geographies. As a result of these macro changes, we have made a decision to prioritize Orchid's desktop clients."
featuredpost: false
featuredimage: /img/uploads/Orchid_BlogImage_CommandLine.png
tags:
  - Company Updates
---
As many people around the world adjust to working remotely, Internet privacy tools can be crucial for workers in sensitive industries and/or geographies. As a result of these macro changes, we have made a decision to prioritize Orchid's desktop clients. This is designed to support the increased numbers of people who will be accessing the Internet from their desktops at home.

In that light, today we're excited to announce that Orchid's command line client for macOS is now available, a major step toward a full desktop client with a complete GUI and interface.

Dr. Steven Waterhouse, Orchid's Co-Founder and CEO said: "Crises are crucial times to preserve privacy. We want to make sure everyone everywhere has access to the tools they need to maintain their privacy, safety, and freedom. We're thrilled to bring our peer-to-peer privacy network to MacOS users."

Our command line client is available via [Homebrew](https://brew.sh/) and requires a config file that you export from a working iOS or Android client. Here are the installation directions:

1.  Run the Terminal app in macOS

2.  Before we start let's find our current public IP address:

3.  In the terminal type:

```bash
curl ipecho.net/plain ; echo
```

This will give you your current public IP address. Remember this - it should be different after we start the orchid client.

1.  Install Xcode with the command xcode-select --install

2.  Install Homebrew with the command

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

1.  Install Orchid through Brew with the command brew install orchidtechnologies/tap/orchid

2.  Open your iOS or Android Orchid app and export your configuration by going to hamburger menu->Settings->Manage configuration->Export

3.  The configuration is shown in a box of text. You will need to transfer that to your macOS. Mac's universal clipboard works or you could email the text to yourself. You will then want to create a file with that text and call it something you remember. I chose 'orchid.cfg'.

4.  Copy orchid.cfg to wherever you want and then specify the absolute path when you run Orchid. Start Orchid by running

```bash
sudo orchid --config orchid.cfg
```

1.  Orchid will run and output a lot of information to the terminal. Wait until the output stabilizes and then check your Internet connection to make sure things are working. Hit CTRL+C to stop the process if it is not working or you need to restart it, or to turn off the VPN. 

2.  In a new terminal type:

```bash
curl ipecho.net/plain ; echo
```

This will give you your new public IP address.

Orchid is also available for Linux, or for Android in the  [Play Store](https://play.google.com/store/apps/details?id=net.orchid.Orchid&hl=en_US)  or for iOS on  [Testflight](https://testflight.apple.com/join/BlkfHkHY). Download the Orchid app to control your privacy in a new way today.