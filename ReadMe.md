# react-lighthouse-error-log
A function which calls a lighthouse log api
# Motivation
Instead of calling lighouse log api all the time. Why not to call one function which can manage all our work for logs. 

# Getting started
## What you need before use ?
You need to register with this Light house portal  http://lighthouse.itpathsolutions.com:9011/login. Then you need to add your project with in portal and get your **Project Key** and **Deliverable Key**. Now you have to put these keys into .env file into your peoject's root folder.

# Installation
```js live=true
$ npm i react-lighthouse-error-log
```

# ENV setup
.env
```js live=true
PROJECT_KEY=your project key
DELIVERABLE_KEY=your deliverable key
```

# Usage
```js live=true
import Log from "react-lighthouse-error-log";
```
# Example 

```js live=true
import Log from "react-lighthouse-error-log";

const App = () => {

 try {
      throw Error("Error.")
    } catch (error) {
      Log({
        error
      }).then(res => {
      
      }).catch(err => {

      })
    }
	
};
```
# Props
| Props | Description | Example |
| --- | --- | --- |
| error | Error trace object |
| logType | The value can be 1 for debug, 2 for warning, 3 for notice, 4 for info, 5 for error , default = 5 | 5 |

# Thanks
Our implementation was inspired by http://lighthouse.itpathsolutions.com:9011/guide/api