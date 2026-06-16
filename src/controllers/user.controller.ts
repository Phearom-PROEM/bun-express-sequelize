import type { Request, Response } from 'express';
import User from '../models/User';

export const UserController = {
  create: async (req: Request, res: Response) => {
    try {
      const { username, email } = req.body;
      const newUser = await User.create({ username, email });
      res.status(201).json(newUser);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  getAll: async (req: Request, res: Response) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  getById: async (req: Request, res: Response) => {
    try {
      const userId = Number(req.params.id);
      const user = await User.findByPk(userId as any); // ប្រើ 'as any' ដើម្បីជៀសវាងបញ្ហា Type ជាមួយ findByPk
      if (!user) return res.status(404).json({ message: 'រកមិនឃើញអ្នកប្រើប្រាស់ឡើយ' });
      res.json(user);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const userId = Number(req.params.id);
      const { username, email } = req.body;
      const user = await User.findByPk(userId as any);

      if (!user) return res.status(404).json({ message: 'រកមិនឃើញអ្នកប្រើប្រាស់ឡើយ' });

      await user.update({ username, email });
      res.json({ message: 'បានកែប្រែជោគជ័យ', user });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      const userId = Number(req.params.id);
      const user = await User.findByPk(userId as any);

      if (!user) return res.status(404).json({ message: 'រកមិនឃើញអ្នកប្រើប្រាស់ឡើយ' });

      await user.destroy();
      res.json({ message: 'បានលុបអ្នកប្រើប្រាស់រួចរាល់' });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
};
