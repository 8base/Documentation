---
id: 'custom-functions-logs'
sidebar_label: 'Logs'
redirect_from: '/backend/custom-functions/custom-functions-logs'
slug: '/backend/custom-functions/custom-functions-logs'
---
# Logs

You can see logs related to your custom functions on the **Logs** tab in the **Functions Dashboard**.

![Logs for custom functions](_images/ui_customfunctions_logs.png)

Logs can be watched and searched in real time, similar to the tailing function. Turn on the **Real-Time Logs** toggle on the top right. A dialog will appear telling you that a connection has been established.

:::note
When watching the logs, a short latency period can be expected. Every request made is assigned a unique ID that can be used to search and identify a single request.
:::

If a `console.log('...something')` statement is used inside of a custom function, the printed result will appear here inside the logs.

## Remote Function Execution

In order to view logs from remote function execution use:

`8base logs [FUNCTION NAME]`.

Optional parameters `-n` and `-t` allow you to specify number of lines returned as well as continuously stream logs in your terminal (tail).
