/**
 * @swagger
 * /To/Do/API/task/create:
 *   post:
 *     summary: Create a new task.
 *     tags:
 *       - Task
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               taskName:
 *                 type: string
 *               taskDuration:
 *                 type: string
 *             required:
 *               - taskName
 *               - taskDuration
 *     responses:
 *       201:
 *         description: Your task added.
 *         content:
 *           application/json:
 *             schema:
 *       400:
 *         description: Bad request, missing fields or taskName already exists.
 *       500:
 *         description: Failed to add task.
 */

/**
 * @swagger
 * /To/Do/API/view/all/tasks:
 *   get:
 *     summary: View all tasks
 *     tags: [Task]
 *     responses:
 *       '200':
 *         description: Task retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *       '500':
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: '500'
 *                 message:
 *                   type: string
 *                   example: 'Failed to retrieve tasks'
 */

/**
 * @swagger
 * /To/Do/API/update/task/{id}:
 *   put:
 *     summary: Update an existing task by ID with new taskName and/or taskDuration.
 *     tags:
 *       - Task
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the task to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               taskName:
 *                 type: string
 *               taskDuration:
 *                 type: string
 *     responses:
 *       201:
 *         description: Task updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *       400:
 *         description: Bad request, missing fields or taskName already exists in the database.
 *       404:
 *         description: Task not found.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /To/Do/API/delete/task/{id}:
 *   delete:
 *     summary: Delete a task by ID.
 *     tags:
 *       - Task
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the task to delete.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Task deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *       404:
 *         description: Task not found.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /To/Do/API/view/tasks/{taskDuration}:
 *   get:
 *     summary: View tasks with a specific task duration.
 *     tags:
 *       - Task
 *     parameters:
 *       - name: taskDuration
 *         in: path
 *         required: true
 *         description: The task duration to filter tasks by.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tasks retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *       404:
 *         description: No tasks found with the specified taskDuration.
 *       500:
 *         description: Failed to retrieve tasks.
 */
"use strict";
//# sourceMappingURL=taskDocs.js.map