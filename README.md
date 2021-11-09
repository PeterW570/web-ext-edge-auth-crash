Steps:

1. Open Edge browser
2. Go to edge://extensions
3. "Load Unpacked" and choose a folder containing the files in this repo
4. Open the extension popup
5. Click "Launch Web Auth Flow (go to google.com)"
6. Edge will crash

- If you click "Launch Web Auth Flow (go to example.com)" it'll be fine
- If you click "Launch Web Auth Flow (go to ddg)" it'll be fine, but then if you click on the link to google on there it'll crash

This is causing issues where your auth flow page has a "Log in with google" button, which then redirects to Google, and edge crashes.
