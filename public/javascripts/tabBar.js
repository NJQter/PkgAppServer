function onTabItemClicked() {
    let template =
        ' <% tabs.forEach(function (tab) { %>\n' +
        '    <div class="tabBarItem" onclick="onTabItemClicked()">\n' +
        '        <div>\n' +
        '            <%= tab.name %>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '  <% }) %>';

    _tabs = _tabs.concat([{name:'NJQter'}]);
    let html = ejs.render(template,{tabs:_tabs});
    document.getElementById('tabBar').innerHTML = html;
}