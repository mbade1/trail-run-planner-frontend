# Trail Run Planner App

This repo is the frontend for the Trail Run Planner App. To see the backend, [click here](https://github.com/mbade1/trail-run-planner-backend). 

This app helps trail runners remember what to pack for their trail runs. Users are able to view trails in their city, and (after logging in) created a running journal that keeps track of the trail and date for their runs. In this journal, users can then select what items they need to pack for their travels, after finalizing their packing list, an alert is sent to the user with the items needed for their run. 

The app utilizies a React frontend, Rails API backend, and stores data from 3rd-party APIs in the Rails API backend. This is the final project for the Flatiron School.

## Installation

To see a LIVE version of this app, [click here](https://mbade1.github.io/trail-run-planner-frontend/)

After cloning down this repo, be sure to clone down the [backend](https://github.com/mbade1/trail-run-planner-backend) as well.

To install the backend:
```$ cd train-run-planner-backend```
```$ bundle install```
```$ rake db:migrate```
```$ rails s```

To install the frontend:

```$ cd trail-run-planner-frontend```
```$ npm install```
```$ npm start```
In response to 'Would you like to run the app on another port instead?'
```$ Y```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/mbade1/trail-run-planner-frontend. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

## License

The app is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Blog and Video Walk-Through

For more information on the design of this project, feel free to check out my [Blog](https://mbade1.github.io/trail_run_planner).

For a walk-through of this project, go [here](https://www.youtube.com/watch?v=SI4kpvIUcO4&list=PLUv_cs_etiP6OZLl71AmWDIPSjAATDnfX&index=1&t=1s).

To view more apps, go to my [portfolio](http://mbadedeveloper.com).

# This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
