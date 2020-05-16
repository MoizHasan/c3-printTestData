function printTestData(fetchData) {
    var fetchData = fetchData.objs;
    var type = fetchData[0].meta.fetchType;
    var out = "TestApi.createBatchEntity(this.ctx, '" + type + "', [\n";
    var part;
    for (var i = 0; i < fetchData.length; i++) {
        out += '{\n'; 
        _.each(Object.keys(fetchData[i]), (o) => {
            if (o !== 'meta' && o !== 'version' && o !== 'versionEdits') {
                part = fetchData[i][o];
                if (part.id) {
                    part = '{ id: ' + "'" + part.id + "'" + ' }';
                    out += o + ': ' + part + ',\n';
                } else {
                    if (part instanceof Date) {
                        part = part.toUTCString();
                    }
                    out += o + ': "' + part + '",\n';
                }
               }
            }); 
        out += '},\n';
    }
    out += ']);';
    return out;
}
