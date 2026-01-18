document.querySelectorAll('.download-notebook').forEach(link => {
    link.addEventListener('click', async (e) => {
        e.preventDefault();
        const url = link.href;
        const filename = link.dataset.filename;
        await downloadNotebook(url, filename);
    });
});
