# Student Classwork Repository

Using this repository, we're going to distribute `starter-code` for lessons. It's also a place for you to keep a record of all of the work you do in lessons.

## Setup

### Step 1. Fork the repository

First, [fork](https://help.github.com/articles/fork-a-repo) this repository by clicking the fork button.

<img width="476" alt="screen shot 2017-03-21 at 15 34 30" src="https://cloud.githubusercontent.com/assets/40461/24155532/06443092-0e4c-11e7-8999-9196e91f1216.png">

Choose to fork this repository to your account (only relevant if you are a member of an organisation).

### Step 2. Clone your fork

Next, clone your fork to your local machine by copying the SSH from your repository. 

![clone](https://cloud.githubusercontent.com/assets/40461/10177745/b394027e-66f3-11e5-8cc5-20c01c9a7785.png)

Navigate to your development directory:

```bash
cd ~/development
```

And run the command:

```bash
git clone <copy and paste>
```

### Step 3. Setup the upstream

In order for you to connect your locally cloned fork to the original repository on github, we need to add a new `remote` for this `upstream` (this is the convention for the name of the original repository).

Let's go and grab the SSH for that original repository.

<img width="1000" alt="screen shot 2017-03-21 at 13 38 37" src="https://cloud.githubusercontent.com/assets/40461/24154496/3ffcdfc6-0e49-11e7-9978-3bf852bd7bd8.png">

Now make sure that you're in your locally cloned fork of your classwork and type:

```bash
git remote add upstream git@git.generalassemb.ly:SEI-43-LONDON/CLASSWORK.git
```

## Fetching starter-code

At the start of each lesson, the instructor may upload some starter-code to this repository. 

The structure of this code will look like this:

```
.
├── README.md
└── w01d01
   └── example-lesson
    └── starter-code
        └── code.txt
```

In order to fetch this new code, you will need to run:

```bash
git pull upstream master
```

You can now work in this `starter-code` directory.
