const dbOpenRequest = window.indexedDB.open('XSPC');

dbOpenRequest.onerror = (e) => {
    window.parent.postMessage({key: 'XSPC', success: false}, '*');
};

dbOpenRequest.onsuccess = (e) => {
    window.parent.postMessage({key: 'XSPC', success: true}, '*');
};