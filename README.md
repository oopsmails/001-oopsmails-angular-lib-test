# 001-oopsmails-angular-lib-test

From 001AngularOopsLib

- Trying sharing lib through Git

- Ref:

https://medium.com/@mad.subasinghe/sharing-libraries-between-multiple-angular-6-projects-e4ea21d6ed7d

- This feature can be utilized to develop angular components which can be reused in different project. This section will provide a step by step guide for sharing a library between different project. For the guide, these angular projects and will be used.

main-app-project (https://github.com/Madz96/main-app-project) — The main angular application which the library will be used in.
library-project (https://github.com/Madz96/library-project) — The angular application which contains the angular library.
library-distribution (https://github.com/Madz96/library-distribution) — The repository which contains the built angular library.

> 20230129: TODOs, make following repos ...

- My lib dist: https://github.com/oopsmails/001-oopsmails-angular-lib-test-dist --> distribution git repo, similar to local .tgz file.
- My lib: https://github.com/oopsmails/001-oopsmails-angular-lib-test --> this is the project contains lib project, used for lib project development. More, can update distribution repo by using "git subtree ...."
- Main project: https://github.com/oopsmails/angular-shared-lib-test --> might no needed because can use other project to test.

- create 001-oopsmails-lib-test, for testing and updating the distribution project, 001-oopsmails-lib-dist-test

## Install Angular 6 as example here

### Install Angular

```
npm install -g @angular/cli@6.0.0 (to install a specific version of Angular CLI version 6)
npm install -g @angular/cli@6.x.x (to install the latest version available for Angular CLI version 6)


npm install -g @angular/cli
```

### Create Project

- Create a new Angular project using the following command. ( — skip-install allows you to skip the installing process on the node modules. Only the project will be created.)

```
ng new app --skip-install

```

- Run the following commands to install Angular 6 CLI and the related rxjs version. (Note: using incompatible rxjs versions causes your app to not compile on 'ng serve' command.)

- Basically, install all needed libs, check package.json

```
npm i --save @angular/cli@6.0.0
npm i --save rxjs@6.0.0
```

## Sharing a library between different Angular projects

### First, create the project which uses the library (in this case, main-app-project). Projects can be created using the following commands

```
ng new <app name> --skip-install --directory <directory you need the app to generate>

```

### Next, create the project which contains the library (in this case, library-project). Libraries can be generated using the following command

```
ng generate library <library name> --prefix <selector prefix>

ng generate library my-lib --prefix ml

ng g library oops-lib001 --prefix oopslib001
```

Note: — prefix allows you to change the selector prefix of the library components.

### Now let's create the components 'navbar' and 'button' inside the library. Use the following command. You add bootstrap components inside the relative html files.

```
ng generate component <component name> --project=<project name>

ng generate component <component name> --project=my-lib
```

- The components should be under /projects/my-lib/src/lib/button (or navbar)

- Check public-api.ts. In your library, you have to update the 'public-api.ts' file in order to export your components with your build. It can be done as follows.

```
export * from './lib/button/button.component'
export * from './lib/button/navbar.component'
```

- Also, check `<library name>.module.ts`, make sure components are exported and services are as providers.

### Now let's build the library.

Our main goal is to store the build files in a separate repository, so that it can be used as a package in other projects. It is important that you commit and push the changes made in the library before building.

You can build a library using the following command. (Note: Make sure that you remove '/dist' from .gitignore file so that git won't ignore the changes in the 'dist' folder)

```
ng build <project name>

ng build my-lib

ng build oops-lib001

ERROR: Unknown import type?
An unhandled exception occurred: Unknown import type?

- This error, might due to already ran "npm i" under the library .... should NOT, need to "rm -rf node_modules/ package-lock.json" under the lib folder ... and then try "ng build oops-lib001" again.


Also, may want to put .tgz file in dist/oops-lib001 .... then go to "/c/oopsmails/001-oopsmails-angular-lib-test/dist/oops-lib001" and run "npm pack", this will generate "oops-lib001-0.0.1.tgz" there.

```

- push to git

To push the built library into a separate repository, you can utilize the 'git subtree' feature. This allows you to manage dependencies easily by storing in separate repositories. Lets use the 'subtree' feature to store the 'dist' folder in the allocated repository (in this case the library-distribution).

Once the library is build, commit the changes and push using the following command,

```
git subtree push --prefix=dist/<project name> <repository link> master

git subtree push --prefix=dist/oops-lib001 https://github.com/oopsmails/001-oopsmails-angular-lib-test-dist master


- Error:

$ git subtree push --prefix=dist/oops-lib001 https://github.com/oopsmails/001-oopsmails-angular-lib-test-dist master
git push using:  https://github.com/oopsmails/001-oopsmails-angular-lib-test-dist master
No new revisions were found

So, need to push into "001-oopsmails-angular-lib-test" first, note, in .gitignore file, dist should NOT be ignored.

After pushing in "001-oopsmails-angular-lib-test", "git subtree push" is fine ... the command is pushing into "master" branch instead of "main" branch ... change it if needed.


- My lib dist: https://github.com/oopsmails/001-oopsmails-angular-lib-test-dist --> distribution git repo, similar to local .tgz file.
- My lib: https://github.com/oopsmails/001-oopsmails-angular-lib-test --> this is the project contains lib project, used for lib project development. More, can update distribution repo by using "git subtree ...."
- Main project: https://github.com/oopsmails/angular-shared-lib-test --> might no needed because can use other project to test.

```

## Main project to use lib project

- Now let's move back to the main project, where the package will be used. First you must add the library as a package in the 'package.json' file.

```
"my-lib": "git+https://github.com/oopsmails/dist----",

"001-oopsmails-angular-lib-test": "https://github.com/oopsmails/001-oopsmails-angular-lib-test-dist",

Note: You can also add "git+ssh://git@github.com:Madz96/library-distribution.git" instead.

if using as a local .tgz file, then "001-oopsmails-angular-lib-test": "file:dist/oops-lib001/oops-lib001-0.0.1.tgz",
```

- Install the packages using 'npm install'. Then import the library module through the 'app.module.ts' file.

```
Error: compatiablity ...

angular 10 app using lib created using angular 14?

npm install <library-name> --force

npm install 001-oopsmails-angular-lib-test --force

```

- Now you can use the components from the shared library by importing them to the component they need to be used in, and use their selectors in the required html page. (In this case, 'app.component.ts' & 'app.component.html').
