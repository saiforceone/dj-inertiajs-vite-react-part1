# Read This

This is the working code of part 1 for the __Django, InertiaJS, React/Vite__ tutorial series.

Refer to written guide: [here](https://dev.to/saiforceone/django-inertiajs-and-react-a-guide-to-get-you-started-pt-1-1po)

You may install the dependencies via pip using the following command

```shell
# pipenv should be able to use a requirements.txt file for installs

pip install -r requirements.txt
```

Before running the project, you will need to set a secret key in `contact_manage/settings.py`

You may generate a secret key on MacOS or Linux (assuming openssl is installed) distros using:
```shell
# here 64 is the length of the base64 encoded string. 
# You can change it any number that makes sense for you.

openssl rand -base64 64

# alternatively, you could just type a random string of anything
```