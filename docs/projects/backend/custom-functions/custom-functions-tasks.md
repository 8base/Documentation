---
id: 'custom-functions-tasks'
sidebar_label: 'Tasks'
redirect_from: '/projects/backend/custom-functions/tasks'
slug: '/backend/custom-functions/tasks'
---
# Tasks

A task is a function type that can be invoked directly from other functions or executed on a specified interval. This allows for cron jobs, which are great for re-occurring tasks. A cron job is a task automated using cron, a scheduler tool on a Unix-like operating system. Common cron jobs are  clearing caches and monitoring servers.

To see example expressions and read a detailed description of cron syntax, see the [Cron documentation](https://docs.aws.amazon.com/lambda/latest/dg/tutorial-scheduled-events-schedule-expressions.html?shortFooter=true).

## 8base.yml Declaration

A task can be specified to run on a schedule or when called by another custom function. The schedule parameter accepts minute, hourly, or daily intervals. Here is a task that will execute every 7 days:

```yaml
functions:
  #
  # Declare tasks like so.
  sendEmail:
    handler:
      code: src/sendEmail.ts
    type: task
  #
  # Declare tasks (scheduled tasks) like so.
  sendWeeklyReport:
    handler:
      code: src/sendWeeklyReport.ts
    type: task
    schedule: 'rate(7 days)'
```

### Non-scheduled function calls

Functions like resolvers, triggers, and webhooks usually run in response to user actions. Normally, you want to return a response to the user as soon as possible, while offloading any longer-running processes to background tasks. To do this, use the `invokeFunction(taskName, args, options)` method found on the context argument to invoke a background task.

```javascript
// Context (ctx) argument maintains the invokeFunction method for
// invoking tasks from other functions.
module.exports = async (event, ctx) => {
  const args = { data: { param: 'value' } };

  await ctx.invokeFunction('myTask', args, {
    waitForResponse: false,
  });
};

// The "myTask" handler may looks like that
module.exports = async (event, ctx) => {
  const { param } = event.data;
  // ...
};
```

The `options.waitForResponse (default: false)` property tells the platform to resolve the promise immediately, without waiting for the task to complete. If you want to delay task result, you can set `waitForResponse` to `true`.

:::note 
The value of `args` is passed as an `event` argument to the invoked task.
:::

## Scheduled Tasks

You can configure tasks to run on schedule using the `schedule` option in the 8base.yml declaration. The `schedule` parameter accepts two types of expressions: Rate and Cron. Both specify a scheduled invocation on a re-occuring schedule.

### Rate Expressions

`rate(Value Unit)`

| Expression      | Instruction                  |
| :-------------- | :--------------------------- |
| rate(5 minutes) | Invoke task every 5 minutes  |
| rate(1 hour)    | Invoke task every hour       |
| rate(7 days)    | Invoke task every seven days |

### Singular vs Plural

For a singular value (1) the unit must be written as singular, otherwise it needs to be plural. For example: 
- rate(**1 day**) 
- rate(**5 days**)

### Cron Expressions

`cron(Minutes Hours Day-of-month Month Day-of-week Year)`

| Expression                     | Instruction                                                         |
| :----------------------------- | :------------------------------------------------------------------ |
| `cron(0 10 * * ? *)`           | Invoke task at 10:00am (UTC) everyday                               |
| `cron(15 12 * * ? *)`          | Invoke task at 12:15pm (UTC) everyday                               |
| `cron(0 18 ? * MON-FRI *)`     | Invoke task at 06:00pm (UTC) every Mon-Fri                          |
| `cron(0/10 * ? * MON-FRI *)`   | Invoke task every 10 min Mon-Fri                                    |
| `cron(0/5 8-17 ? * MON-FRI *)` | Invoke task every 5 minutes Mon-Fri between 8:00am and 5:55pm (UTC) |
| `cron(0 9 ? * 2#1 *)`          | Invoke task at 9 a.m. (UTC) the first Monday of each month          |

Cron expressions that lead to rates faster than one invocation per minute are not supported. Additionally, one of the day-of-month or day-of-week values must be a question mark `?`.

## Task Arguments

To learn about the arguments that are passed to tasks, see [custom function arguments](/backend/custom-functions-types#custom-function-arguments).
