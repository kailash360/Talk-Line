If you want to contribute to this project, go through the following instructions.

# Local Setup
1. Fork and clone the project into local device
2. Make sure NodeJS is already installed. If not, download from [here](https://nodejs.org/en/download/)
3. Run the following command in the terminal in the backend as well as the frontend folder
> ``` npm i ```

Or run the following command in the terminal in the root folder
> ``` npm run install-all ```
4. Create a `.env` file into your root folder and copy the environment variables from the `.env.example` of both frontend as well as backend into `.env`. Fill in the suitable values for each of the variables.
#### The project has been successfully installed in the device.
#### The next step is to run the project locally.
## Frontend
1. Start the application's frontend by running the following command
> ``` cd .\frontend\ ```

> ``` npm start ```

2. Now go to the address below to your default browser
> ```localhost:3000```

## Backend
1. Start the application's backend by running the following command

> ``` cd .\backend\ ```

> ``` npm start ```

2. The backend is up and running at
> ```localhost:5000```

*Steps 1-4 are needed for first-time installation only. Only steps 5 and 6 will be needed while devolping the project.*



## Creating an issue

If you find any bug or want to add/improve any feature in the application, create a new issue. Follow the instructions below while creating the issue.

- Create a branch with a one or two word description of the issue and issue number. For example, if the issue is about adding a button for login and issue number is 34, then name the branch as `login-btn-34`. Commit your changes in the branch and make a PR from your repository to this main reporsitory.
- Mention the issue type in the issue title.Choose only from the following 3 types - `Bug`,`Feature`,`Improve` For example, if the issue is about fixing any bug then the title will be `[Bug]<one-line description of the issue>`.
- Make sure you mention the following sections in the issue description
  - What is the issue?
  - How to reproduce the issue?
  - What is the expected behaviour?
  - Describe a solution you would like
  - Additional Context (Optional)

  Try to add screenshots or error messages for a better understanding of the issue.


## Making a pull request

While making a Pull Request, make sure to follow the points below:
- In the title for the pull request, mention the issue number that the PR is for. Any PR without a dedicated issue will not be considered. If you are making a PR for issue 12, then the title for the PR will be `Fix #12:<one line description of the PR>`
- Mention the following points in the PR description
  - Describe the changes you have made
  - Screenshots
  - Additional Context (Optional)
