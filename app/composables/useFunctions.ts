

export function useFunctions() {
const toast = useToast();
  async function mailToBuffer(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      toast.add({
        title: 'Успешно!',
        description:
          'Почта mail@frezer-tokarev.ru скопирована в буфер обмена. Перейдите в свой почтовый клиент для подготовки письма.',
      });
    } catch (err) {
      console.error('Не удалось скопировать:', err);
      toast.add({
        title: 'Не удалось скопировать',
        description: 'mail@frezer-tokarev.ru. Скопируйте почту самостоятельно',
      });
    }
  }

  return { mailToBuffer }
}
