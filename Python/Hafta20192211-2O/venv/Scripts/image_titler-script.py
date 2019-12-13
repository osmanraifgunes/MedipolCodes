#!C:\code\MedipolCodes\Python\Hafta20192211-2O\venv\Scripts\python.exe
# EASY-INSTALL-ENTRY-SCRIPT: 'image-titler==1.4.1','console_scripts','image_titler'
__requires__ = 'image-titler==1.4.1'
import re
import sys
from pkg_resources import load_entry_point

if __name__ == '__main__':
    sys.argv[0] = re.sub(r'(-script\.pyw?|\.exe)?$', '', sys.argv[0])
    sys.exit(
        load_entry_point('image-titler==1.4.1', 'console_scripts', 'image_titler')()
    )
