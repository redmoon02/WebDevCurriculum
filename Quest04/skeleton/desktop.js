class Desktop {
    constructor() {
        this.icons = [];
        this.windows = [];
    }

    addIcon(icon) {
        this.icons.push(icon);
    }

    openWindow(window) {
        this.windows.push(window);
    }
}

class Icon {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
}

class Folder {
    constructor(name, position) {
        this.name = name;
        this.position = position;
        this.files = [];
    }

    addFile(file) {
        this.files.push(file);
    }
}

class Window {
    constructor(title, position, size) {
        this.title = title;
        this.position = position;
        this.size = size;
        this.content = '';
    }

    setContent(content) {
        this.content = content;
    }
}

