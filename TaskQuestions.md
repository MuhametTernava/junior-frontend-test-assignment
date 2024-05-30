1. Fix the functionality of the "Sort By" feature in the product pagination. Enable sorting by name and price, with the default sorting based on rendering rather than name or price.

2. Fix the price range filter to only show products that fit within the chosen price range.

3. Create a page that only shows BestSeller products. Keep the same design layout on the front end.

4. Find ways to make the project code better. What code changes would you suggest for improvement? Create a file on the root with improvments.txt and write it down all things you
   think should change on the project.

General rules:

1. Create a brench from master and work only on your branch, after you finish, push the code to the brench. DO NOT PUSH ON MASTER.
2. You can do whatever you want with the code, if you think your way is better then just implement it in the way you think to finish the questions.
3. The frontend layouts should be the same. If you want to change the way of using the layouts it's fine but the design should be the same.
4. Please try to not use ChatGPT to finish this task, but using ChatGPT only to help is the best way to improve yourself.
5. Try to focus more on 4th question, and please write as many suggestions as you have.

---

CODE IMPROVEMENTS SUGGESTIONS FROM MUHAMET TERNAVA

Below, I have explained my main suggestions for code improvement.

First Code Improvement Suggestion: Re-structure Project Architecture
The current file and folder organization are inconsistent. Specifically in the components directory, some files are placed directly under components, while others are organized within subfolders. This can lead to confusion and difficulty in managing and locating files. My suggestion is to organize all component files into their respective folders. This will not only enhance readability but also make the project easier to navigate and maintain.

Second Code Improvement Suggestion: Component Reusability and DRY Principle

- Several times in code some JSX structures are repeated, such as the checkbox inputs in the Categories component. To apply the DRY (Don't Repeat Yourself) principle, we can extract these repeated structures into reusable components. For instance, creating a Checkbox component for the category filters will not only make the code cleaner and more maintainable but also will simplify the code. This will allow us to easily manage and update UI elements without duplicating code, leading to a more efficient development process.

Third Code Improvement Suggestion: Removing Unnecessary React.Fragment and Avoiding Empty Files

- For example, in the "Image.js" Component the React.Fragment is used even though there only one child element. React.Fragment is useful when we need to group multiple elements without adding an extra node to the DOM. My suggestion is to remove the React.Fragment wrapper to simplify the code.
- Also, having empty files and unused imports can create confusion in the project. For example, the App.css is empty. So, we should identify and remove any empty files that are not being used.Removing these will lead to a cleaner, more maintainable codebase.

Fourth Code Improvement Suggestion: Separate Card Component and Simplify Products Component

- For example, in the "Image.js" Component the React.Fragment is used even though there only one child element. React.Fragment is useful when we need to group multiple elements without adding an extra node to the DOM. My suggestion is to remove the React.Fragment wrapper to simplify the code.
- Also, having empty files and unused imports can create confusion in the project. For example, the App.css is empty. So, we should identify and remove any empty files that are not being used.Removing these will lead to a cleaner, more maintainable codebase.

Fifth Code Improvement Suggestion: Commenting the Code and Set Meaningful Variable Names

- I suggest to use meaningful variable names and time to time adding comments to explain the code logic, because this way it will make the code easy to understand and maintain.
