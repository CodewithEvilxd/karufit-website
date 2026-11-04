import os
import zipfile

out_dir = r"d:\minimo_video-main\minimo\website\public\downloads"
os.makedirs(out_dir, exist_ok=True)

def build_package(filename, arch_label):
    target = os.path.join(out_dir, filename)
    with zipfile.ZipFile(target, "w", zipfile.ZIP_DEFLATED) as z:
        manifest = f"""Manifest-Version: 1.0
Created-By: Nishant Gaurav (codewithevilxd)
Package-Name: app.karufit.android
Application-Label: KaruFit On-Device Studio
Version-Code: 13
Version-Name: 1.0.13
Architecture: {arch_label}
Hardware-Acceleration: MediaCodec Direct
Zero-Cloud: True
"""
        z.writestr("META-INF/MANIFEST.MF", manifest)
        z.writestr("AndroidManifest.xml", '<?xml version="1.0" encoding="utf-8"?><manifest xmlns:android="http://schemas.android.com/apk/res/android" package="app.karufit.android" android:versionCode="13" android:versionName="1.0.13"><application android:label="KaruFit" android:hardwareAccelerated="true"></application></manifest>')
        z.writestr("assets/karufit_config.json", f'{{"app": "KaruFit", "version": "1.0.13", "author": "Nishant Gaurav (codewithevilxd)", "arch": "{arch_label}", "offline": true}}')
        z.writestr("LICENSE.txt", """MIT License

Copyright (c) 2026 Nishant Gaurav (codewithevilxd)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
""")
    print(f"Created: {target} ({os.path.getsize(target)} bytes)")

build_package("KaruFit-universal.apk", "universal")
build_package("KaruFit-arm64-v8a.apk", "arm64-v8a")
print("Done!")
