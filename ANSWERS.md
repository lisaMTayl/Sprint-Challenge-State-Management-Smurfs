## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] What problem does the context API help solve?

The context API allows you to send state to components without passing props down from parent to child. 

- [ ] In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions:  payloads of info that send data from your application to your store using dispatch. They are objects and must have a type.  Actions describe what happened with the state change.

Reducers:  Reducers are pure functions that take the current state and an action and return a newState.  

Store:  An object that brings together the actions and reducers.  It holds the app state, allows access to the app state (getState()), allows state to be updated (dispatch(action)), and registers/unregisters listeners.

- [ ] What is the difference between Application state and Component state? When would be a good time to use one over the other? 

Scope.  Application state is global, component state is local.  In react the store is application state and available to all, whereas component state is only valid and available in that particular component.


- [ ] Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is delaying evaluation.  Officially, it is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store’s dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.
  
- [ ] What is your favorite state management system you've learned and this sprint? Please explain why!

Context.  It's the only class I was able to attend live this week.  
