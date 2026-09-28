'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';
import { CheckCircle2, Upload } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(8),
  email: z.string().email().optional().or(z.literal('')),
  service: z.string().min(1),
  description: z.string().min(5),
  deadline: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const t = useTranslations('Contact');
  const tServ = useTranslations('Services.items');
  const [success, setSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    console.log('Form data:', data);
    await new Promise((r) => setTimeout(r, 800));
    setSuccess(true);
    reset();
  };

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <p className="text-lg font-medium text-green-800">{t('success')}</p>
        <button onClick={() => setSuccess(false)} className="mt-4 text-sm text-green-700 underline">OK</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('name')} *</label>
        <input {...register('name')} className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none" />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('phone')} *</label>
        <input {...register('phone')} type="tel" className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none" placeholder="+373 XX XXX XXX" />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('email')}</label>
        <input {...register('email')} type="email" className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none" />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('service')} *</label>
        <select {...register('service')} className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-blue-500 outline-none bg-white">
          <option value="">{t('servicePlaceholder')}</option>
          <option value="businessCards">{tServ('businessCards.title')}</option>
          <option value="banners">{tServ('banners.title')}</option>
          <option value="booklets">{tServ('booklets.title')}</option>
          <option value="design">{tServ('design.title')}</option>
          <option value="canvas">{tServ('canvas.title')}</option>
          <option value="lamination">{tServ('lamination.title')}</option>
        </select>
        {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('description')} *</label>
        <textarea {...register('description')} rows={4} className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-blue-500 outline-none resize-none" />
        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('deadline')}</label>
        <input {...register('deadline')} type="text" className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-blue-500 outline-none" />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('file')}</label>
        <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center">
          <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
          <p className="text-sm text-slate-500">PDF, JPG, PNG (demo)</p>
        </div>
      </div>
      <button type="submit" disabled={isSubmitting} className="w-full py-3.5 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-semibold rounded-xl">
        {isSubmitting ? '...' : t('submit')}
      </button>
    </form>
  );
}
