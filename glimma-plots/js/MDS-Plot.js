glimma.layout.setupGrid(d3.select(".container"), "md", [1,2]);
glimma.storage.chartData.push(glimma.transform.toRowMajor({"dim1":[0.3415,-0.3406,0.5271,-0.7901,0.5942,0.1604,0.7125,-1.298,0.6149,-0.4054,0.8183,-0.9346],"dim2":[0.3515,0.3582,-1.458,-0.915,0.9711,0.2209,-0.1136,-0.05336,0.4368,0.1059,-0.393,0.4891],"dim3":[0.8122,0.1462,0.2349,0.5707,0.8535,-1.039,-0.06376,0.315,-0.08654,-1.214,-0.4108,-0.1181],"dim4":[0.01009,1.194,0.2144,0.3767,0.1422,0.4197,-0.6845,-0.8507,-0.2655,0.08705,-0.3329,-0.3109],"dim5":[-0.2263,-0.7937,-0.4113,1.031,0.4456,0.2982,-0.04193,-0.5372,0.1534,0.09876,-0.1206,0.1039],"dim6":[-0.1925,-0.3435,0.7573,-0.4025,0.4786,0.3313,0.1669,0.03562,-0.203,0.1709,-0.9877,0.1886],"dim7":[0.7839,-0.4478,0.04307,-0.05742,-0.06667,0.3566,-0.7552,0.3866,0.1735,0.3164,-0.07384,-0.6591],"dim8":[-0.486,0.2121,-0.275,0.1357,0.2028,0.5656,0.3811,0.5836,-0.0905,-0.395,-0.06791,-0.7665],"label":["1_CON7","2_KO7","3_CON19","4_KO19","5_CON7","6_KO7","7_CON19","8_KO19","9_CON7","10_KO7","11_CON19","12_KO19"],"group":["CON7","KO7","CON19","KO19","CON7","KO7","CON19","KO19","CON7","KO7","CON19","KO19"],"condition":["CON","KO","CON","KO","CON","KO","CON","KO","CON","KO","CON","KO"],"time":["7","7","19","19","7","7","19","19","7","7","19","19"]}));
glimma.storage.chartInfo.push({"x":"dim1","y":"dim2","id":[],"ndigits":[],"signif":6,"pntsize":4,"xlab":"Dimension 1","ylab":"Dimension 2","xjitter":0,"yjitter":0,"xord":false,"yord":false,"xlog":false,"ylog":false,"xgrid":false,"ygrid":false,"xstep":false,"ystep":false,"col":"group","cfixed":false,"anno":["label","group","condition","time","dim1","dim2"],"annoLabels":[],"height":400,"width":500,"type":"scatter","title":"MDS Plot","flag":[],"info":{"groupsNames":["group","condition","time"]},"hide":false,"disableClick":false,"disableHover":false,"disableZoom":false});
glimma.storage.charts.push(glimma.chart.scatterChart().height(400).width(500).size(function (d) { return 4; }).x(function (d) { return d["dim1"]; }).xlab("Dimension 1").xJitter(0).y(function (d) { return d["dim2"]; }).ylab("Dimension 2").yJitter(0).tooltip(glimma.storage.chartInfo[0].anno).title(glimma.storage.chartInfo[0].title).signif(6).col(function(d) { return d["group"]; }));
glimma.storage.chartData.push(glimma.transform.toRowMajor({"name":[1,2,3,4,5,6,7,8],"eigen":[0.18,0.15,0.15,0.1,0.08,0.07,0.07,0.06]}));
glimma.storage.chartInfo.push({"names":"name","y":"eigen","ndigits":[],"signif":6,"xlab":"Dimension","ylab":"Proportion","col":[],"anno":"eigen","height":300,"width":300,"type":"bar","title":"Variance Explained","flag":[],"info":{"dims":11}});
glimma.storage.charts.push(glimma.chart.barChart().height(300).width(300).id(function (d) { return d["name"]; }).xlab("Dimension").y(function (d) { return d["eigen"]; }).ylab("Proportion").title(glimma.storage.chartInfo[1].title).signif(6));
glimma.storage.tables.push(glimma.chart.table().data(glimma.storage.chartData[0]).columns(["label","group","condition","time"]));
glimma.layout.addTable(glimma.layout.bsAddRow(d3.select(".container")));
glimma.storage.linkage = [{"from":2,"to":1,"src":"none","dest":"none","flag":"mds","info":"none"},{"from":1,"to":1,"src":"click","dest":"highlightById","flag":"tablink","info":"none"}];
glimma.storage.input = [];