"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.createTask = exports.getTasks = void 0;
const taskService_1 = require("../services/taskService");
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield (0, taskService_1.getAllTasks)();
    res.json(tasks);
});
exports.getTasks = getTasks;
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title } = req.body;
    if (!title)
        return res.status(400).json({ message: 'Title is required' });
    const newTask = yield (0, taskService_1.createNewTask)(title);
    res.status(201).json(newTask);
});
exports.createTask = createTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, completed } = req.body;
    const updatedTask = yield (0, taskService_1.updateTaskById)(Number(id), title, completed);
    if (!updatedTask)
        return res.status(404).json({ message: 'Task not found' });
    res.json(updatedTask);
});
exports.updateTask = updateTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedTask = yield (0, taskService_1.deleteTaskById)(Number(id));
    if (!deletedTask)
        return res.status(404).json({ message: 'Task not found' });
    res.status(204).end();
});
exports.deleteTask = deleteTask;
