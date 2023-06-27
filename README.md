<!-- # Teman Ngorte. -->
<h1 align="center" width="100%">
   <a id="frontend"></a>
   <b>Teman Ngorte. </b><br>
    ※※※
</h1>

### **Detail bisa dibaca di :** **[What's Inside Teman Ngorte?](https://github.com/DL-Kel2-TemanNgorte)** 
  
---
## **Teman Ngorte.**

<p align="center" width="100%">
    <img width="10%" src="https://i.ibb.co/FstxsVK/teman-ngorte-logo-01.png"> 
</p>

[Teman Ngorte](https://chatbot-app-three.vercel.app/) adalah aplikasi berbasis website sebagai media untuk mengekspresikan perasaan penggunanya agar dapat menghilangkan stres melalui fitur chatbot.

---

### **Website Teman Ngorte** ➡️ **[Teman Ngorte](https://chatbot-app-three.vercel.app/)**

### **Login**
> #### Username : `pencurhat`  
> #### Password : `curhatdong`

---

# **Front-End Features** ✨

1. Responsive Design: The user interface is responsive and adapts to both smartphones and desktop devices (📱💻).
2. Dynamic Page Title and Logo: The title and logo dynamically update based on the current page, such as "Login | Teman Ngorte".
3. Redirect to Login: If a user visits any route without being logged in, they are automatically redirected to the '/login' page.
4. Redirect from Login: If a user visits the '/login' page while already logged in, they are redirected back to the '/' page.
5. Login Page:
   - Teman Ngorte logo is displayed on the left side of the login form.
   - "See Password" Button with Tooltip functionality.
   - The login button is disabled until the user provides input. It also shows a loading state during the login process to prevent multiple clicks.
   - "Login as Guest" button disappears when logging in with a username.
   - "Login with Username" button disappears when logging in as a guest.
   - An alert is displayed when the username or password is incorrect based on the API response.
6. Dashboard Page:
   - The app bar component displays the page name and a logout button.
   - Tooltip is available on the logout button.
   - Usernames are displayed and can be hovered over to enlarge. The parent container adjusts its size accordingly.
   - If logged in as a guest, the dashboard displays "Guest" as the username. This is an alias used to override the original guest username obtained from the API.
   - The button to navigate to the chatroom has an animated hover effect.
7. Loading Process: The loading time depends on how long React takes to render the fetched chat content from the API.
8. Chatroom Page:
   - The chat automatically scrolls to the latest message.
   - The date is displayed for messages that are more than one day old.
   - A back button with a tooltip is available to return to the dashboard.
   - User and bot profile pictures are displayed.
   - Different bubble colors are used for user and bot chats.
   - The chat input field supports multiple lines and displays a scroll bar if the content exceeds five lines.
   - The input field width automatically adjusts to the content with a maximum limit of five lines.
   - The "Send" button has a tooltip when hovered over.
   - The chat auto-scrolls to the bottom after sending a message and receiving a response from the bot.
9. Logout:
   - Clicking the back button returns to the dashboard with a tooltip when hovered over.
   - Tooltip is available on the logout button in the top-right corner of the dashboard.
   - An alert is displayed on the frontend when the logout button is clicked.
   - Nothing happens if the user cancels the alert.
   - Clicking the logout button again and confirming with "OK" returns to the login page.
   
---

<h2 align="center" width="100%">
    ※※※ <br>
    <a href="#frontend">☝🏻 <b>Kembali ke Atas</a> </b></br>
    ※※※
</h2>

---


Please note that contributions to this project are not currently available. This project is Vidya's personal project, and contributions from external contributors are not being accepted at this time. Additionally, there is no formal license associated with the project.

For any inquiries or further information, please contact Vidya at vidyaachan14@gmail.com. We appreciate your understanding and interest!

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
