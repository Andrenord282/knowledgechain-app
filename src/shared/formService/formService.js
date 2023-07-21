class FormService {
    constructor() {
        this.fileList = {};
    }

    pushFile = (nameId, file) => {
        this.fileList[nameId] = file;
    };

    resetFileList = () => {
        this.fileList = {};
    };

    collectData = (data) => {
        const formData = new FormData();
        const dataJSON = JSON.stringify(data);
        formData.append('data', dataJSON);

        if (Object.entries(this.fileList).length > 0) {
            data.schema.forEach((schemaItem) => {
                if (schemaItem.type === 'image') {
                    formData.append(`${schemaItem.id}`, this.fileList[schemaItem.id]);
                }
            });
        }
        return formData;
    };
}

const formService = new FormService();

export { formService };
