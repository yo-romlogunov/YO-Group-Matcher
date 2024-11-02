var panelGlobal = this;

/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":null,"windowType":"Palette","creationProps":{"su1PanelCoordinates":false,"maximizeButton":true,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":true},"text":"YO Group Matcher 2.3.0","preferredSize":[384,490],"margins":0,"orientation":"row","spacing":11,"alignChildren":["center","top"]}},"item-1":{"id":1,"type":"TabbedPanel","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":10,"alignment":null,"selection":4}},"item-3":{"id":3,"type":"Tab","parentId":1,"style":{"enabled":true,"varName":"tab_layers","text":"Layers Group","orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-4":{"id":4,"type":"Tab","parentId":1,"style":{"enabled":true,"varName":"tab_effects","text":"Effects Group","orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-5":{"id":5,"type":"Tab","parentId":1,"style":{"enabled":true,"varName":"tab_settings","text":"Settings","orientation":"column","spacing":8,"alignChildren":["center","top"]}},"item-6":{"id":6,"type":"IconButton","parentId":7,"style":{"enabled":true,"varName":"save_my_presets_button","text":"Save  My Preset","preferredSize":[173,40],"creationProps":{"style":"toolbutton","toggle":false},"iconButtonStroke":false,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgB7ZLRDcIwDEQdxACMkBFghG4CGzBCN4ER2KArdAPYgG4QfMIWEUodV+pPqz7Jiu2412sTolWQUroiaC5Y7InwzO5oZjbBH3wIEeHtK/sRsQMvneRNLib9geNEFjzcpi9R6rPUuDJvCc2PmVvQmg5BCOHOg0hvf1sN7/Vjz5mHAlFeLlIONTHTYcFpXxNzCaooOSkJRnHkIVqC+jkdTeelSci7uCqlt1bAv33QYvgAT85zTj/6nZ8AAAAASUVORK5CYII="],"alignment":null,"helpTip":"Save current Layer and Effect Groups to a .pgm file"}},"item-7":{"id":7,"type":"Panel","parentId":5,"style":{"enabled":true,"varName":"panel_import_export","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Import/Export","preferredSize":[131,73],"margins":18,"orientation":"row","spacing":20,"alignChildren":["left","center"],"alignment":"fill"}},"item-8":{"id":8,"type":"IconButton","parentId":7,"style":{"enabled":true,"varName":"load_my_presets_button","text":"Load  My Preset","preferredSize":[168,40],"creationProps":{"style":"toolbutton","toggle":false},"iconButtonStroke":false,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADrSURBVHgBtZQNEcIwDIWzHQKQMAdYGBJQwHCAA4YCJNA5mAOQgIRKmIPycgSu9Nou5efd5dql6bckW0v0Y1WhwznXYmgS8VNVVSNpBVjn5nXIMRbBcyvjLhK7hJ1gPaCETI+kyNBwCom1RpNpTZ+rj0G/AT6he9+xIL0mWNg3znCV3JHrYSKedfZ9qpKxacumiZ0tWUBG5vy7DLn4WgsTmblM6wysEZilxweZZG5kLapkySjNYuMG0xvsIu41rOW1YqBAR8n29RJ6b0EZ0JNVxsWBfOsEriHhz4uPkStX5zNKL9hQFn290j91BzcC1hWKioZ7AAAAAElFTkSuQmCC"],"alignment":null,"helpTip":"Load Layer and Effect Groups from a .pgm file"}},"item-9":{"id":9,"type":"Panel","parentId":5,"style":{"enabled":true,"varName":"panel_settings","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Settings","preferredSize":[0,0],"margins":18,"orientation":"row","spacing":20,"alignChildren":["left","center"],"alignment":"fill"}},"item-11":{"id":11,"type":"EditText","parentId":5,"style":{"enabled":true,"varName":"about_text_group","creationProps":{"noecho":false,"readonly":true,"multiline":true,"scrollable":true,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":true,"text":"\nYO Group Matcher\n\nDownload Updates:\nhttps://github.com/yo-romlogunov/YO-Group-Matcher/releases\n\nManual:\nhttps://goo.su/5jGwMYu\n\nThis script allows you to manage Layer Groups \nand Effect Groups within your compositions. \nYou can add, edit, and delete groups, toggle visibility, \nsolo groups, and hide layers using the Shy feature.\n\nFeatures:\n- Create and manage Layer Groups and Effect Groups\n- Toggle visibility of entire groups\n- Solo specific Layer Groups\n- Hide layers in the timeline without disabling them\n\nFor more information, visit @romlogunov - t.me/vtb_blogGroups\n- Hide layers in the timeline without disabling them\n\nFor more information, visit @romlogunov - t.me/vtb_blog\n","justify":"left","preferredSize":[476,381],"alignment":"fill","helpTip":null}},"item-12":{"id":12,"type":"IconButton","parentId":5,"style":{"enabled":true,"varName":"updates_check_button","text":"Check For Updates - You Version 2.3.0","preferredSize":[275,40],"creationProps":{"style":"toolbutton","toggle":false},"iconButtonStroke":false,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAETSURBVHgB1VNREcIwDE05BCAhEiYBCaCA4QAHFAXgYHMADpAADjoUgIOSsjcuV7qWT3h377JrX97SNCX6dZiSwHtfSWDhI9AYc01oWNa7nMlMuBXe/SecsFbaoLM5M0aSh+EhGICt2rsI9/i2ucpcVtTrbFT1WzuJtHvq+7WTnlhlsAiVK52jElDdq0eJvXffwiX5T9hBO1V5c8Qd5cHCdbR2TRlWiB1lIK045fYn9B3CDK6iPg7HD+3YpAw7RE4YLoU3ocOosNIypU6lLuVMI8CMngdDiQ1yeCyhhWBFBWCUAhoqVODwQuqC2R1apsKf9dM74slVWK9xZP+VWWTa+nE0Y2amZEz9fOoZPcksPuhv8QRky34p3fzEMwAAAABJRU5ErkJggg=="],"alignment":null,"helpTip":"Check for Updates"}},"item-13":{"id":13,"type":"StaticText","parentId":5,"style":{"enabled":true,"varName":"status_updates_text","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Status","justify":"center","preferredSize":[0,24],"alignment":"fill","helpTip":null}},"item-14":{"id":14,"type":"Divider","parentId":5,"style":{"enabled":true,"varName":null}},"item-15":{"id":15,"type":"Panel","parentId":3,"style":{"enabled":true,"varName":"layer_group_default","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Layer Group  Default [X]","preferredSize":[0,0],"margins":[10,5,10,15],"orientation":"row","spacing":20,"alignChildren":["center","center"],"alignment":"fill"}},"item-16":{"id":16,"type":"Checkbox","parentId":15,"style":{"enabled":true,"varName":"view_layers_checkbox","text":"View","preferredSize":[0,0],"alignment":null,"helpTip":"Toggle visibility of layers in this group across all compositions","checked":true}},"item-17":{"id":17,"type":"IconButton","parentId":15,"style":{"enabled":true,"varName":"add_layer_button","text":"Add Layer","preferredSize":[115,40],"creationProps":{"style":"toolbutton","toggle":false},"iconButtonStroke":false,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD0SURBVHgBrZSBEcIgDEVDzwF0A7qBI+AGbmRXcIK6iY7QDWCDdoOYCHhcS1qK/rsUGriXlCYA/FlqawMinmlgm8icUmqAvSLIkexGNuJSlqwn06UwI4ByYLMFu+J+GQmmQ1QpG2mNv+aYA/YoSweT1EWOSoCWBi2cRhtGK6xP9PdPPGkCzKzASsRVwaUFh+iYbXBkl/hC0V0I3CZ7nrMkeD40ArBaMcN59WtIzivJzK6wHD8+GYZ2mqBe35ZsEucd6vVaeND371hR2OzX2TDo+3ivDKwJfT/bAtC4CUug3GYPAcygDnP9C+UXrAZfq0PVBfuL3rs+9VbgXdmxAAAAAElFTkSuQmCC"],"alignment":null,"helpTip":"Add selected layers to this group across all compositions"}},"item-18":{"id":18,"type":"IconButton","parentId":15,"style":{"enabled":true,"varName":"edit_group_layers_button","text":"","preferredSize":[40,40],"creationProps":{"style":"toolbutton","toggle":false},"iconButtonStroke":false,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACLSURBVHgB7ZPRCYAwDESv4gCO4AiOoBs5Qp3AEXQUN9ENdIMYacVaihDrV/HBwf300UACJAsRtZwSX8CigQxztPQQcFa6uEkzCOCHva0NZ7O95NSQ4o/JqexPNaQ4MvKkBaQEZCctpDzINKT8Mg0pZG4zWuZeSminOqWUxkthtOwgd/rk9IVlI5JkB/RNJEiR+ykNAAAAAElFTkSuQmCC"],"alignment":null,"helpTip":"Rename and settings this Group"}},"item-19":{"id":19,"type":"Checkbox","parentId":15,"style":{"enabled":true,"varName":"solo_layers_checkbox","text":"Solo","preferredSize":[0,0],"alignment":null,"helpTip":"Solo this group: show only layers in this group and hide all others"}},"item-20":{"id":20,"type":"Checkbox","parentId":15,"style":{"enabled":true,"varName":"hide_layers_checkbox","text":"Hide","preferredSize":[0,0],"alignment":null,"helpTip":"Mark layers in this group as Shy: hide them in the timeline without disabling"}},"item-22":{"id":22,"type":"IconButton","parentId":15,"style":{"enabled":true,"varName":"delete_group_layers_button","text":"","preferredSize":[40,40],"creationProps":{"style":"toolbutton","toggle":false},"iconButtonStroke":false,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB+SURBVHgB7ZQ9EcAgDEa/1EAtIKVSsFAnlVAJlVAJdQAScJBmYKL8ZOiQgXeXCwR4FwYArEO9RWZ2knxRPokoqoUiOSStebpJuGJLlLjzOIl8x6CrwHrCsMMsdVBQu3pLyNAJP+cX/MwUTqFl4YMxsVbsvWWPNkni6n1jdnkBjcFLWju67I0AAAAASUVORK5CYII="],"alignment":null,"helpTip":"Delete this Layer Group"}},"item-23":{"id":23,"type":"Panel","parentId":4,"style":{"enabled":true,"varName":"effect_group_default","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Effect Group Default [X]","preferredSize":[0,0],"margins":[10,5,10,15],"orientation":"row","spacing":20,"alignChildren":["center","center"],"alignment":"fill"}},"item-24":{"id":24,"type":"Checkbox","parentId":23,"style":{"enabled":true,"varName":"view_effects_checkbox","text":"View","preferredSize":[0,0],"alignment":null,"helpTip":"Toggle visibility of effects in this group across all compositions","checked":true}},"item-25":{"id":25,"type":"IconButton","parentId":23,"style":{"enabled":true,"varName":"edit_group_effects_button","text":"Edit Group","preferredSize":[125,40],"creationProps":{"style":"toolbutton","toggle":false},"iconButtonStroke":false,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACLSURBVHgB7ZPRCYAwDESv4gCO4AiOoBs5Qp3AEXQUN9ENdIMYacVaihDrV/HBwf300UACJAsRtZwSX8CigQxztPQQcFa6uEkzCOCHva0NZ7O95NSQ4o/JqexPNaQ4MvKkBaQEZCctpDzINKT8Mg0pZG4zWuZeSminOqWUxkthtOwgd/rk9IVlI5JkB/RNJEiR+ykNAAAAAElFTkSuQmCC"],"alignment":null,"helpTip":"Rename and settings this Group"}},"item-26":{"id":26,"type":"IconButton","parentId":23,"style":{"enabled":true,"varName":"add_effect_button","text":"Add Effect","preferredSize":[115,40],"creationProps":{"style":"toolbutton","toggle":false},"iconButtonStroke":false,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD0SURBVHgBrZSBEcIgDEVDzwF0A7qBI+AGbmRXcIK6iY7QDWCDdoOYCHhcS1qK/rsUGriXlCYA/FlqawMinmlgm8icUmqAvSLIkexGNuJSlqwn06UwI4ByYLMFu+J+GQmmQ1QpG2mNv+aYA/YoSweT1EWOSoCWBi2cRhtGK6xP9PdPPGkCzKzASsRVwaUFh+iYbXBkl/hC0V0I3CZ7nrMkeD40ArBaMcN59WtIzivJzK6wHD8+GYZ2mqBe35ZsEucd6vVaeND371hR2OzX2TDo+3ivDKwJfT/bAtC4CUug3GYPAcygDnP9C+UXrAZfq0PVBfuL3rs+9VbgXdmxAAAAAElFTkSuQmCC"],"alignment":null,"helpTip":"Add selected effects to this group across all compositions"}},"item-27":{"id":27,"type":"IconButton","parentId":3,"style":{"enabled":true,"varName":"create_group_layers_button","text":"Create a New Layer Group","preferredSize":[200,40],"creationProps":{"style":"toolbutton","toggle":false},"iconButtonStroke":false,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADRSURBVHgB1VRREcIwDE05/pmEooBawAESkICESZgELKAACeCAOVgdlBeW3bXQG8voB3t3b9lytzR5aUL07zD8CCE4mAPp4MGzMcYnXgSrwEeYh+v7KSuwAi3Ng80FLIp19H4XTkVec+hgRY+aFBDdbzSSoRZ76vUvExDXpc35f2qKlH0qFpD6a7OLHeqSuYkwx8jlpKEeMjTqLnOJI5NTqUt+ZUG0FTIuwzfPdVzyRsqZErSVbNl0ScdlOXRBByf/1mAyMcP6spQK/Q3Nx9paDJ7kC+DeMHTqtgAAAABJRU5ErkJggg=="],"alignment":"fill","helpTip":"Create a new Layer Group"}},"item-28":{"id":28,"type":"IconButton","parentId":23,"style":{"enabled":true,"varName":"delete_group_effects_button","text":"Delete Group","preferredSize":[120,40],"creationProps":{"style":"toolbutton","toggle":false},"iconButtonStroke":false,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB+SURBVHgB7ZQ9EcAgDEa/1EAtIKVSsFAnlVAJlVAJdQAScJBmYKL8ZOiQgXeXCwR4FwYArEO9RWZ2knxRPokoqoUiOSStebpJuGJLlLjzOIl8x6CrwHrCsMMsdVBQu3pLyNAJP+cX/MwUTqFl4YMxsVbsvWWPNkni6n1jdnkBjcFLWju67I0AAAAASUVORK5CYII="],"alignment":null,"helpTip":"Delete this Effects Group"}},"item-30":{"id":30,"type":"IconButton","parentId":4,"style":{"enabled":true,"varName":"create_group_effects_button","text":"Create a New Effects Group","preferredSize":[200,40],"creationProps":{"style":"toolbutton","toggle":false},"iconButtonStroke":false,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADRSURBVHgB1VRREcIwDE05/pmEooBawAESkICESZgELKAACeCAOVgdlBeW3bXQG8voB3t3b9lytzR5aUL07zD8CCE4mAPp4MGzMcYnXgSrwEeYh+v7KSuwAi3Ng80FLIp19H4XTkVec+hgRY+aFBDdbzSSoRZ76vUvExDXpc35f2qKlH0qFpD6a7OLHeqSuYkwx8jlpKEeMjTqLnOJI5NTqUt+ZUG0FTIuwzfPdVzyRsqZErSVbNl0ScdlOXRBByf/1mAyMcP6spQK/Q3Nx9paDJ7kC+DeMHTqtgAAAABJRU5ErkJggg=="],"alignment":"fill","helpTip":"Create a new Effect Group"}},"item-32":{"id":32,"type":"Divider","parentId":15,"style":{"enabled":true,"varName":null}},"item-34":{"id":34,"type":"Divider","parentId":23,"style":{"enabled":true,"varName":null}},"item-36":{"id":36,"type":"Divider","parentId":15,"style":{"enabled":true,"varName":null}},"item-37":{"id":37,"type":"IconButton","parentId":9,"style":{"enabled":true,"varName":"restore_presets_button","text":"Restore Default Preset","preferredSize":[217,40],"creationProps":{"style":"toolbutton","toggle":false},"iconButtonStroke":false,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEPSURBVHgBnVQLEYMwDC13E4CESkACEpCAg+EAJOBgSJgD5gAJxQE4yBJIj9DPKHt3uR3Ley9NmqtSPwAAOUaLMWIssGPh7xpDq1Qg+SlMrJGBM+i7TjFrhajHKJ18iTEITptiRtWLi8KV6KIKEbSoqlUC2NSOJHeTL0526gZE+42bMLHT8Y1XkVzJutEVEKaAQItZGa+1nbO1/eAb1BiWlItV+GRZNuNvLfLEJc3b8Zy3HFc34GMItGSHr2MnlC2ZkJkQFDT0iFkRmqE19cyuILbDu2WtbgKO3V3+0btmhRhVd0WmyiMEXhU4XqElyYxFHZwxcQHj/N+oVPApBwg/W31oZtkNc1psihWXfY3xvqAwDphc/wUqAAAAAElFTkSuQmCC"],"alignment":null,"helpTip":null}},"item-38":{"id":38,"type":"IconButton","parentId":9,"style":{"enabled":true,"varName":"sort_button","text":"Sort Footage in Projects","preferredSize":[201,40],"creationProps":{"style":"toolbutton","toggle":false},"iconButtonStroke":false,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABhSURBVHgB7dGxDYAwDETRO0TPCqzCJrABIzASbMAIbEA2CXZBFxe20iVPSnVSXHxmgYoGVDbKW9AUSpMDfifJp7jkmNW6pFFu+CV0P638GtslJXc4aZTZ2CYE6IebsSUEfJdFSIxfXw8FAAAAAElFTkSuQmCC"],"alignment":null,"helpTip":null}},"item-39":{"id":39,"type":"DropDownList","parentId":42,"style":{"enabled":true,"varName":"default_presets_dropdown","text":"DropDownList","listItems":"Select Preset, 3D, Shapes, VFX","preferredSize":[133,0],"alignment":null,"selection":0,"helpTip":null}},"item-40":{"id":40,"type":"Button","parentId":42,"style":{"enabled":true,"varName":"apply_preset_button","text":"Apply Preset","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-42":{"id":42,"type":"Panel","parentId":5,"style":{"enabled":true,"varName":"panel_default_presets","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Default Presets","preferredSize":[0,0],"margins":17,"orientation":"row","spacing":10,"alignChildren":["left","top"],"alignment":"fill"}}},"order":[0,1,3,15,16,17,32,19,20,36,18,22,27,4,23,24,26,34,25,28,30,5,42,39,40,7,6,8,9,37,38,11,12,14,13],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":true,"itemReferenceList":"None"},"activeId":4}
*/ 

// PALETTE
// =======
var palette = (panelGlobal instanceof Panel) ? panelGlobal : new Window("palette", undefined, undefined, {maximizeButton: true, resizeable: true}); 
    if ( !(panelGlobal instanceof Panel) ) palette.text = "YO Group Matcher"; 
    palette.preferredSize.width = 350; 
    palette.preferredSize.height = 490; 
    palette.orientation = "row"; 
    palette.alignChildren = ["center","top"]; 
    palette.spacing = 11; 
    palette.margins = 0; 

// TPANEL1
// =======
var tpanel1 = palette.add("tabbedpanel", undefined, undefined, {name: "tpanel1"}); 
    tpanel1.alignChildren = "fill"; 
    tpanel1.preferredSize.width = 100; 
    tpanel1.margins = 0; 

// TAB_LAYERS
// ==========
var tab_layers = tpanel1.add("tab", undefined, undefined, {name: "tab_layers"}); 
    tab_layers.text = "Layers Group"; 
    tab_layers.orientation = "column"; 
    tab_layers.alignChildren = ["center","top"]; 
    tab_layers.spacing = 10; 
    tab_layers.margins = 10; 

// TAB_LAYERS
// ==========
var create_group_layers_button_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%14%00%00%00%14%08%06%00%00%00%C2%8D%C2%89%1D%0D%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%00%C3%91IDATx%01%C3%95TQ%11%C3%820%0CM9%C3%BE%C2%99%C2%84%C2%A2%C2%80Z%C3%80%01%12%C2%90%C2%80%C2%84I%C2%98%04%2C%C2%A0%00%09%C3%A0%C2%809X%1D%C2%94%17%C2%96%C3%9D%C2%B5%C3%90%1B%C3%8B%C3%A8%07%7Bwo%C3%99r%C2%B74yiB%C3%B4%C3%AF0%C3%BC%08!8%C2%98%03%C3%A9%C3%A0%C3%81%C2%B31%C3%86'%5E%04%C2%AB%C3%80G%C2%98%C2%87%C3%AB%C3%BB)%2B%C2%B0%02-%C3%8D%C2%83%C3%8D%05%2C%C2%8Au%C3%B4~%17NE%5Es%C3%A8%60E%C2%8F%C2%9A%14%10%C3%9Do4%C2%92%C2%A1%16%7B%C3%AA%C3%B5%2F%13%10%C3%97%C2%A5%C3%8D%C3%B9%7Fj%C2%8A%C2%94%7D*%16%C2%90%C3%BAk%C2%B3%C2%8B%1D%C3%AA%C2%92%C2%B9%C2%890%C3%87%C3%88%C3%A5%C2%A4%C2%A1%1E24%C3%AA.s%C2%89%23%C2%93S%C2%A9K~eA%C2%B4%152.%C3%837%C3%8Fu%5C%C3%B2F%C3%8A%C2%99%12%C2%B4%C2%95l%C3%99tI%C3%87e9tA%07'%C3%BF%C3%96%6021%C3%83%C3%BA%C2%B2%C2%94%0A%C3%BD%0D%C3%8D%C3%87%C3%9AZ%0C%C2%9E%C3%A4%0B%C3%A0%C3%9E0t%C3%AA%C2%B6%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var create_group_layers_button = tab_layers.add("iconbutton", undefined, File.decode(create_group_layers_button_imgString), {name: "create_group_layers_button", style: "toolbutton"}); 
    create_group_layers_button.helpTip = "Create a new Layer Group"; 
    create_group_layers_button.text = "Create a New Layer Group"; 
    create_group_layers_button.preferredSize.width = 40; 
    create_group_layers_button.preferredSize.height = 35; 
    create_group_layers_button.alignment = ["fill","top"]; 

// LAYER_GROUP_DEFAULT Color Label
// ===================
    var layer_group_default = tab_layers.add("panel", undefined, undefined, {name: "layer_group_default"}); 

    var none_color_label_button_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%10%00%00%00%10%08%06%00%00%00%1F%C3%B3%C3%BFa%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%00%C3%ADIDATx%01%C2%A5S%C2%B1%11%C3%820%0C%C2%94EE%07%5D.U6%20E%0AJ%C2%98%20Y%C2%81%0D%C3%98%C2%80%C2%B0%01l%01%1DL%00%23h%03%5C%C2%A6%C2%A4%C2%A4Jxq%0E%C2%84%14%C2%80%C3%8D%17%C2%B1%C3%AC%C3%A8_%3A%C3%B9m%C2%A8%C2%87%2C%C3%8Bfu%5D%C3%A7M%C3%93%14%C3%98%26%C3%AEX%C2%8C1%C2%82%C3%B3%C2%B5%C2%88%C3%98n%C2%BEi%C2%834MG%C3%8C%C2%BC%02qI%1F%00%C2%A1%C2%8D%13%C2%BA%3E%05%C2%94%C2%8C%1F'%0D%C3%A97%08%0A%C3%8DU%C2%84u%C2%A7%C2%95%3D%C3%88%C2%8F%C2%9A%C2%8EC%06%C3%95%13T%C2%BFP%00%C2%B4%0Bn%C2%95B%00n%C3%81P%C3%B1i%C2%BD%C3%9FA%C2%AE3%08%16%00%12%C2%A6%3F%C2%A1%02%C2%96%C3%82!%C2%8C%1B8R%20%C3%94%C2%9D%0CW%1D(%10%C3%AA%C3%88AUU6%C2%8E%C3%A31%C3%B6S%1F2n%60%0B'%C3%AE%C3%98)%C2%95X%C3%84%C2%83%C2%AF%C2%B9%C2%A5%06%03%C3%BD%C2%A0%C2%8B%5B%14E%7B%18c%C3%B8%C2%AD%13%C2%AD%C2%8Ce%C3%B1%C3%B6%C2%98%C2%BAp%C3%96.%11N%C3%A8%C3%A5%11%C2%AB%C3%83%C3%96y%C2%81x%C3%AE%C3%A6%C3%9F%01%C2%8Ecc%C3%BE%C3%9CD%C3%80%C2%BE%00%00%00%00IEND%C2%AEB%60%C2%82"; 
     
    var red_color_label_button_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%10%00%00%00%10%08%06%00%00%00%1F%C3%B3%C3%BFa%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%01%10IDATx%01%C2%A5%C2%93AN%C3%830%10E%C3%BFL%40%C2%A8R%17%1C!7%C2%80%23%24%12%0Bv%0D%C3%8B%2C%C2%B9%017hs%03r%C2%8A%2C)%3B%16Hx%C3%81%01r%03r%C2%84%0AUB%C2%A5%C3%98%C3%83%C3%98RQD%C2%A5%C3%8Au%C3%9F%C3%8A%C2%B6%C3%A6%7F%C2%8F%C3%873%C2%84%7Ft7EAp3%11T%02%C3%89%C3%83!QO%22%3D%C3%8E%C2%B3%C2%A6~1%C3%838%C2%9Ev%C2%8B%C2%A7%C2%AA%C2%B8%C3%BC%C3%BAts%C2%90%3C%C3%A0%00L%C3%B4x1%C3%A5%C3%A6niV%7F%06A%C2%BCvo%10%C2%B9F%0C%C2%9A%C3%91d%C3%8A%C2%A57a%C2%BF%0F7%C3%87%C2%8A%3D%1A%C2%BBY%C2%AB%C3%86%7Bu%C2%B7E.%5B%C3%BB%C2%81%04%C2%88%C2%A4dl%C3%AD%1C%C2%89%C2%88p%C3%85%C2%8E(%3E%C3%B5%7D%C2%8B%19%C3%931o%C3%9F'g%C2%9C%C2%88%1A%C3%90%C2%80T%C3%B4%3BY%C2%80g%24%C3%A2%C2%BB%C2%93%C2%99%C3%9C%12%C2%A9%C3%98%C2%AC%C3%A1%C3%BA%C3%B5%C3%9Dh%C3%8F%C2%B78%1Aikc%C2%86P%C3%84o%7B%C2%B6%C3%90%C2%84%C3%BAh%C2%ADo%C3%A5%C2%A0%09E%04%C3%AE%C2%8DYm%2C%C2%97q%C2%99H%3B%C3%B9%C3%9190%C2%A3a%1A%C3%93%15%C3%9A%C3%9A%C2%99%5D%C3%A8-W%C2%BB%C3%B9%20%C3%BD)_l%C3%92z%C3%B9'%C2%8F%C3%A3%7F%01%C3%A8%C2%B2p%C3%B2%C2%B6%C2%85%3F%3C%00%00%00%00IEND%C2%AEB%60%C2%82"; 
   
    var yellow_color_label_button_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%10%00%00%00%10%08%06%00%00%00%1F%C3%B3%C3%BFa%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%00%C3%BCIDATx%01%C2%A5S%C2%BB%0D%C3%82%40%0C%7Dv%14hi)%C2%90BI%05%23%C2%90%09%60%C2%84%C2%8C%C3%80%06%C3%80%06%C2%B0AF%C2%80%09%60%04%3A%0A%C2%8A%20%C2%B1%005%C2%88%0B~%C3%A1%23%14%24%C2%94%1COJ%C3%A4%3B%C3%99%C3%AF%C3%9E%C3%99%C3%AF%04%25%C2%9C%0E%C3%890%C3%8F1%C2%B2o%2C%40%C3%84%C2%BD%1C%C3%98%C2%89%60%17%C3%9E0o%C3%B7%C3%92%C3%A3g%C2%BE%C2%BC%C2%82%2CKZ%C3%81%15S%C3%8B%C2%9E%C3%A0%17%04%C2%8B%5B%C2%88y%C2%B7%C2%9B%C2%9E%C3%9F%04%2C%C3%96%0B6%C2%B6%18%C2%A0%02%C2%A8%C3%885%10%C2%93D%C2%B9%C3%81%C2%93%C2%AB%16%3FO%1D%14j%19g%C3%BB%24%0A%14%19%3C%20%0E%C2%B1%06%C3%81%C2%83%C3%89%07N0%C3%96%3A%C3%92%C2%BF%14%08Fj%C3%A3%C3%B2%260D%C2%8A%3F%C2%A16%C2%92%23%3C%C3%81q%C2%AA%C3%BD%C3%97%C3%B0%04%C3%9D%C2%A9%26a%05O%C3%90%C3%9A%C3%9A%C3%A9%C2%A5%5Bk%C3%A4%125%C3%81%1A%C2%BE%C2%8B%C2%A2%C2%89%C2%AE%C2%89Ynr*%17%C3%93%C3%8AV%C3%83%C2%B8%20%C2%A0%C2%A7%5D%C2%88%C2%B8%C2%8A%12%C3%A6%C2%BC%C3%9E%01%C3%97RN%C2%A0%C2%B5U%C2%8D%5D%C3%90%C2%97%C2%A7G%C2%8AIY%C2%B3%C3%99%2F%5E%C3%B93%C3%BF%0E%C3%88%C2%80ZToZ%C2%B8%C2%B9%00%00%00%00IEND%C2%AEB%60%C2%82"; 
     
    var aqua_color_label_button_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%10%00%00%00%10%08%06%00%00%00%1F%C3%B3%C3%BFa%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%00%C3%BDIDATx%01%C2%A5%C2%93%C2%B1q%C3%82%40%10E%C3%BF%C2%AE%C3%A7%C3%86C%C3%A6%12%C3%94%C2%81Q%C3%A0%C2%80%C3%8C%C2%AA%C3%80V'%C3%AE%40%C2%A2%03%C2%BB%12%C2%A0%02%C2%93)%20%40%1D%C2%A0%12%C3%88%18%0D%0C%C3%8B_10%40%C3%80%C2%88%C3%A3E%3A%C3%9D%C3%BE%7F%7B%7B%C2%BB%C2%82%1B%26%C2%8B%C3%AAS!_f%C3%B6%C3%8Der%C3%BC%2B5%60%C2%B5%05%C2%8C%C3%B3t%C3%94%5C%C3%86%C3%8BY%C2%B8%5C%C2%BE%C3%A9%C2%AE-(%C3%BC%C3%81%1D%04%C3%B6%C2%BB%0F%03%1A%C2%A5%C3%AB%C2%B3%C2%81%C2%8Be%C3%9B%C3%BE%C3%B3%C2%94!z!%C3%8C%C3%A65s%13%C3%B5%C2%A5%C2%9F%C3%9C_%C3%AC%C3%98P%C2%B7%C2%9B%C2%A2%C2%B3%C2%9ATU%22%2FX!%02%13dJq%C2%81XXh%16%C3%BC%C2%91%C3%94%C2%AF%11%C2%BE%C2%962%C2%8Fh%03%C2%92(%C2%9E%C3%84%0D%1ADc%C2%B5%1Al%C2%86h%C2%B4f%11e%C2%8AH%2C%C3%98X%C3%B3%C2%8F%C3%91%C2%9CY%C3%BC%C3%A1A%5C%C3%A3sq%2CbhK%C2%BFO%7F9%C2%87%2B%0CJ%C3%BF%C3%AA%0C%C3%B24%5B%5Bh%C2%B3%3E%C2%99x%C3%8Ci%0E%3A%C2%AB%C3%9B%00om%C3%9A%C2%96%22%C3%B6%C3%8E%C3%ADS%C2%8F4%06%C2%99%C2%B1%C3%A9%C2%A6~%C3%A5%C3%8B%C3%B8%03f%C2%AC%60%C3%8E%C3%97%C3%AD%C3%8F%C3%A3%00%00%00%00IEND%C2%AEB%60%C2%82"; 
    
    var pink_color_label_button_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%10%00%00%00%10%08%06%00%00%00%1F%C3%B3%C3%BFa%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%00%C3%A9IDATx%01%C2%A5%C2%93%C2%B1%11%C2%82%60%0C%C2%85_%C3%82%C3%91%3B%02%16%C3%96ja%2F%13%C3%A8(n%C2%80n%C2%A0%C2%9B%C3%A8%04%C3%98YX%C3%88%060%C2%82%C2%BD%C3%BA%C3%87DP%C2%90%C3%82%C2%83%C3%9F%C2%AF%22%5C%C3%9E%C2%BB%C3%BC%C2%B9%17B%C2%8B%3C%3D%C3%8F%1D%C2%B0%C2%80%C3%88R%C3%8B%C2%A8%C3%BA%C2%9D%C2%81%C2%901%C3%82%C3%8D0%C2%9E%16%C3%8D~%C2%AA%C2%85%C2%97%01pO%C2%9C%C3%88%0A%C2%BF%20l%2B%C2%A3%C3%AB%C3%87%C3%80%C3%84Nn%C2%A9~N%C3%90%C2%8D%C2%8C)%C2%8C%C3%8D%C2%84%C3%8B%C3%BA%C2%9E%C3%B4%10%1B%13%C2%87%5B%C3%B2%C2%9A%20OO%C2%91%C2%93%20%C2%87%07L%14%C2%B3C%C2%90%C3%80%C2%93%C2%87%C2%93%25C%C2%A8%C3%8F%C3%A8_%10a%C2%A1%3B%10o%03%25b%C3%BC%C2%89%19%14%C3%B0G%C3%83%258%C3%80%17K%C2%A7c%C3%9A%C3%83%13K%24%C2%8F%C3%A2%C3%99Q%04%3B%C3%B4%C3%844v%17%C2%AF%25%06%1C%C2%AE%C3%89%0E%C2%A6%3B%C2%99i%C3%8A)%14%C3%8B4i%C2%B6%C2%BBLb%3D%C3%AF%3B%C2%B0%C2%9A%C3%9A%0D%16%C3%AD%C2%87%C3%B0%C2%9AAc%C2%A9%C3%AF%C2%A3P%C3%A1At_%C3%B6%C3%A4f%C3%BF%13%C2%8BqUrl%C2%8F%C2%B1%C3%87%00%00%00%00IEND%C2%AEB%60%C2%82"; 
     
    var lavender_color_label_button_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%10%00%00%00%10%08%06%00%00%00%1F%C3%B3%C3%BFa%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%00%C3%B3IDATx%01%C2%A5%C2%93%C2%B1%0D%C3%820%14D%C3%AF%3B%C2%92%C3%932B6%00J%3A%C2%98%00(%C3%99%C2%82%0D%02%1B%C3%80%14%14%14%C2%81%09%C2%A0K%C2%897%20%23%C3%90b%14%1B%C3%BFXAQ%C2%90Pb%5E%15G%C3%BF%C3%8E%C3%B6%C3%A9Lhq%3C%C3%A6Sc%C2%A29%60%16n%C2%99%C3%B8%C2%BF%C2%A4%C2%88%C2%AC*K%C2%BB%5D%C2%AD%26Es%C2%9E%C3%AA%C2%8F%2C%C2%BB%0D%C2%B4~%C2%A5N%C2%B8%C3%86ovR%C3%86%C3%9B%C3%A5r%C3%BC%C3%B8%18x%C2%B1%C2%BE%00v%C2%84N%C2%90%C2%92R%C3%8E%C3%98D%C3%B0%C3%92%C3%AF%C3%9CU%C3%8C%C3%98%C2%91%C3%96%C3%8F%C2%B4%C2%B2%3A%1C%C3%B2D%08%C2%BA%23%00c%C3%ACLD%11%C2%A5%08%C2%84%C2%88%16%C3%82Z%C3%AAq%C3%B4%C2%B6%01%C3%A6%C2%A2%C3%9F%C3%9D%C2%BFH%04%C3%BE%C2%84%0D%0A%C2%84%C2%A3%5C%068%23%10%C2%97%01%1B%C3%98%13%02%C3%A1j%0B%C3%97%C3%AD%C2%AB%3B%C3%85%1E%3Da%0D%C2%BF%C2%8B*%C3%848%C2%8E7%5C%C3%8F%C3%AErR%5E%C3%A3C%04w%C2%9A%C2%BB%C3%9D%C3%A5%24%3CS%C2%BF%C2%83%C3%8A%C2%AA%3D%C3%A0%C2%AB%C2%8D%C2%8D%C3%B3%1E6%3ARp%C3%98%C2%9C%17_%C2%B99%C3%BF%06h%07dS%C2%86qO%C3%AA%00%00%00%00IEND%C2%AEB%60%C2%82"; 
    
    var peach_color_label_button_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%10%00%00%00%10%08%06%00%00%00%1F%C3%B3%C3%BFa%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%01%0DIDATx%01%C2%A5%C2%931R%C3%830%10E%C3%BF_%0F%15%14%1C%C3%81%3E%01i)%C2%98A'H()(%C2%B8%017%C2%B0%7D%03r%02%0A%0AJ%C3%82%09%C3%82%0C%05%25%C2%BE%C2%81%7D%C2%84%C3%8C%C2%84T%C2%96%C2%B5H%C3%B6%C2%8C'%C2%A4%60%1C%C3%B1*I%C2%B3%C3%BFkw%C2%B5%22%0E%C2%A8%3F%C2%9E%C2%AF%C2%85%C2%9C%C2%ABs%0B%10%C3%A9p%C3%8A%C2%8Ad%C3%A5%C2%92%C2%A4%C3%8C.o%C2%9B%C3%BDx%C2%8E%C3%82%C2%AF%C3%97s%C3%99ns%25%1E%C3%B0%07%C2%A4%3C%C2%BA%C3%B6%C2%B4%C3%8C%C3%8C%C3%8Df4%08b%C3%AE%C2%BE%C3%97P%C2%9Da%12%C2%AC%C3%94%C2%9E%C2%99%60%22a%1Bn%C2%9E.%0E%C3%A8LNvyoU%7F%C2%BE%C2%A4%C2%B4m%C2%8D%08%144%22%5D%C2%97%23%C2%9E%C2%85%C3%A8Q%C2%A9%C3%BF%C2%86%C3%94%C2%B9%C2%84z%10%C2%8B%22%15%C3%BC%13%C3%B1.%0Db%C3%B1%C3%83%25J%7DC%24%C2%84V%C2%BE%04Y!%12%C3%97v%C2%A5dWw%C3%AF%0A%5D%C3%A2H%C3%BC%0C%2C3s%C3%9F%0CM%C2%B4%C2%AE%08%C3%A39Y%C3%ADk%C2%87%C2%B5EX%C3%B6%06%C3%9Ei%C2%A3%C3%96%C2%9A)%C2%99%C2%84%C2%9B%C2%B5%C2%B5%26hz%C2%AF%C3%83%C2%80z%C3%BD%C2%94%22%C2%91%C3%82%C3%BF%C2%BA%C2%8BqF%C3%BCK%0D%C3%8D%C2%96U(y%3F%C3%BE%07a3k%C2%98%0D%C3%8D1%13%00%00%00%00IEND%C2%AEB%60%C2%82"; 
   
    var sea_color_label_button_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%10%00%00%00%10%08%06%00%00%00%1F%C3%B3%C3%BFa%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%01%03IDATx%01%C2%A5%C2%93%3Dr%C3%820%10%C2%85%C3%9Fn%11%C3%86%5D%C2%8E%C3%A0%1B%C2%84%C2%94tq%C3%A9%22%03%C2%BEIn%00%C2%BEA8%09PQ%26%5D%C3%8A%C3%B8%06%C3%B1%11%C3%A8%3C%C3%B6%10%C2%BDh%1D%C3%BE%06f%18!%C2%BEB%23i%C3%B6%C3%A7%C2%AD%C2%B4%2B8c%C3%BD%C2%B5~%11%C3%A1%C2%98%0E%13%C2%80%C2%A9%C3%9D%11%C2%A8DP%01Z%C3%A6%C2%A3%C2%BC%3E%C2%B5%C2%97%C3%BDf%C3%B1%C2%BDxL%C2%9A%C3%81%C2%94%C3%A0%1B%C2%AE%20%C2%90%C3%B7%26i%C3%8B%C3%A2%C2%B9%C3%98%1C%02%C2%98%C3%B3%C2%A0y%C3%B8%C3%B0%C2%87!%020Em%C3%92e%16D%C3%AD%C3%822%C2%87%3A%C3%AF%C2%B2%0E%C3%8D%C2%A7%C3%9F%C3%BB%C2%9AS%C3%90%C3%BD%20%06q%C2%99%0A%C3%9C%14%C2%91%C2%90%3AQ_P%C2%B0%C3%B4%0B%01%C3%80X%C2%89%C3%B8%00%C2%9ETq'%3E%C2%80%C3%94%C2%88D%C2%88JI%C2%AE%10%09%C3%95%07%10uKD%C2%A3%C2%A5%C3%A6%C2%A3%C3%97O%C3%92%C3%8Dq%23%C2%84%C2%9B%C3%9B%5C%C3%B4%C2%8F%C3%98v%C3%9B%C2%99%C3%BF%C2%92*%C3%9C%C3%99Zy%3B%C3%AB5%C3%98Rd%C3%85%C2%A6i%C2%BB%2CD%C2%89e%C3%9E%C3%8F%C2%81%C2%9D%C3%A5%C3%9C%C3%A0%C2%BF%C2%B5%7F%C2%BD%22y%3A%C3%B6%C2%88%C3%94~JW%22ni%25%C2%9F%C3%9A%C3%BF%01%0E%3Ci%C3%B6%C3%A1U%C3%8Bw%00%00%00%00IEND%C2%AEB%60%C2%82"; 
   
    var blue_color_label_button_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%10%00%00%00%10%08%06%00%00%00%1F%C3%B3%C3%BFa%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%00%C3%BBIDATx%01%C2%A5%C2%93%C2%BDq%C3%82%40%10%C2%85%C3%B7%C3%AD%C2%9Ds%C2%97%20%07%0E%1C%C2%99%12L%05P%C2%88%03%15%C3%A0%19%C2%8E%19%17%20%C3%8D%C2%B8%10%5C%C2%81%5D%C3%82e%04%04%C2%A8%04rt%2C%C2%BB%20~%03%06%1D_%C2%A2%3BI%C3%AF%C3%AD%C3%9E%C3%AA%09t%C3%85%C3%A7%C3%97%C3%A2%03%C2%A0%11md%2C%40%C3%91%C3%9D%C2%8E%00%C2%A2snZ%C2%85%C2%97%C3%A6%C3%BC%7D%1C%16eX%3E%C2%A7%C3%94ND%C2%A8%C2%A4%1B%C2%A8y%C3%A5%C2%9C7%C2%A3%C3%95%C3%91%C3%80%C3%84m%C3%9B%C3%BE%C3%A9r%40%C3%B7%11%C2%BD%C3%B7C3a%C3%9BY%C3%A5%1Ebc%C3%90i%08Z%C2%BD%C3%90%C3%AAK%C3%8Ac%C3%88)%C2%A5%09e%23c%16%C2%91%3E%C2%AD_%00%C3%B0%C3%88f%C2%90m%C2%A0%C3%85%0B%C2%A6%07a%C2%884%C2%94%C2%8DD%16%C3%B0%2Fe%C2%A23%C2%88z%04%C2%99Q%26%C3%8E%C2%AD%C2%A7%C3%BC%C3%B3%C3%BD%C3%BA%C2%AF%5E5%C3%B5F%C3%AA*%C2%BC5%C2%BB!z%C3%AF%C2%82%5Eb%0F%C2%B5F%C3%B9%C3%894%C2%B43%C2%B0L%5B%C2%B6%C3%AF%C3%ABD%C3%AA%C3%83%7F%60%3B%5C%3F.%C3%83%5C%C2%A3m%1D%C3%A1%C2%9D%C2%BA%C2%8C%C3%98%C2%97%12%C2%90%0E%1B%C2%B3%C3%BD%C2%91Ol%01%5C%C3%BF%5DO%C3%B7%C3%A9%C3%88%C2%BE%00%00%00%00IEND%C2%AEB%60%C2%82"; 
    
    var green_color_label_button_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%10%00%00%00%10%08%06%00%00%00%1F%C3%B3%C3%BFa%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%01%19IDATx%01%C2%A5%C2%93%3BN%C3%83%40%10%C2%86gf%23%C2%9A%C2%80%C3%84%11%7C%038%02%3EA%C2%8CD%01%05%C2%85%25%C2%8A%C2%94%C3%9C%20%C3%B1%0D%C2%92.%05%12%C2%91(H%C2%81%C2%849%01%1C%C3%817%C3%80G%C2%88D%C3%92%C3%80%C2%AC%C2%87%19KAV%C2%90%C2%A2%C3%8D%C3%A6%C2%ABvW%C3%B3%C3%B8%C3%A7%C2%B1%08%5B%C3%9C%3D%5D%5D%10%C3%82%C3%807%C2%98!H%C3%92%3E%22T%C2%88X9%C3%A7%C2%8A%C3%99%C3%8D%C2%A2%C3%AE%C3%9A%C3%A3%C3%A6p%C3%BF%C2%9A%C2%9D%C2%AE%C2%BEz%23%3B%C3%82%0E%C2%88%60%C3%B2%C3%9D%C3%A7b~Y.%C3%BF%02%C2%98%C3%B3z%C3%95%7B%17%C2%81s%08A%15%C3%B11%C2%A7%16%C2%84%C3%ACn%C2%99%C2%83%C2%9D%0D%C2%B5%3DZ%C2%B7j%01%C2%87%C3%8F%C3%97%09%C3%BF%C3%B0'%C3%84%C2%80%C2%90%C2%92%C3%B7~%04%C2%91%08HF%22%12.%7D%0B%12%1A%10%C3%ACS%C3%BB%7F%05%09%C3%81%C2%81%C2%90%00%C3%96%10%09%C3%AA8%C2%B5%C2%84%C3%A6%0Db%11%C2%AC%08%09K%C2%88%C3%84yW%C3%90%C3%83%C3%AD%C3%8B%C2%87Nb%0A%7B%22(%C3%93Y%C2%BE%C2%A8%C3%9B%26%C3%BA%C3%86%C2%8Fm%3DC%C2%9D%C2%AD%C3%B6%13V%1F%C2%A5%0D0%C3%8F%C3%8B%253%C2%A7!J%2Cs_m'y%C3%A73u%19%3E%C3%AAj%13%C2%8F5%C3%B4%C3%99fGlR%C2%A4%C3%8D%16%C3%AD%C2%97%C2%95%C3%9C%C2%B5%C3%BF%05G%C3%93ub%07%C3%AC%C2%8B%06%00%00%00%00IEND%C2%AEB%60%C2%82"; 
    
    var purple_color_label_button_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%10%00%00%00%10%08%06%00%00%00%1F%C3%B3%C3%BFa%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%01%11IDATx%01%C2%A5%C2%931N%C3%83%40%10E%C3%BF%C2%8C%C2%85%00!%24%C2%8E%C3%A0%1B%C2%90%C2%82%C2%822%3EAr%05%C3%8AtPR%20%C2%AF%C3%85%05%C2%A0J%C3%89%15%C2%92%13%C2%90%C2%92%C2%82bo%40%C2%8E%C2%90%02%14%22%C2%BC%C3%BEx%2C%11Y%20%C2%A1%C3%8D%C3%A6U%C2%AB%C3%91%C3%8C%C3%9F%3F%C2%BB3%C2%82_%C3%9C_L%C2%87%14%19%C2%A1%C3%A1%18%C2%82%C3%9Cb%02%C3%B1%22%C3%B4Y%C2%86%C3%AA%C3%B6e%C2%B2%C3%AC%C3%A7%C3%8B%C3%8F%C3%81%0D%C2%9F%C3%8E%C3%B4%7DS%02%C2%BC%C3%86%7F%08%1F%C2%9A%C2%AF%C3%A3%C3%8A%C3%B9%C2%AB%C3%95V%C3%80%C2%8A%C2%B3%C2%8F%C3%8D3%C3%89%01%220G%C2%A1%3E%2CLD-%607%C3%87%16%1B%04%07z%C2%B0.%3B1w9%C3%8D%C2%B5%C3%86%1B%12h%C3%AD%17%C2%AA%01%25%12i%C2%88%C2%B1%0A%25%C3%9A%C3%BA%1F%07%C2%8A%C2%91Z%3FH%C2%85%C3%88%15%7B%C2%A2%C2%AD%C3%8A%12%C2%89%C3%98p%C2%B5-%60%C2%8ED%04%C3%AAU%053%24%C2%92e%C2%AC%C3%B4%C3%AEu%C2%B2%20%C3%B1%C2%88%1D%C2%B1%1A%C3%9B%C2%8B%C3%AE%11%19%3E%C2%9D%C2%8Dgl%C2%B1%C2%88x%C2%9E%1E9%3Bw%02%C3%8E%C3%9F%C2%ACB%C2%BD.b%C2%9CXN8i%C3%B7%60%C3%91%5B%C2%A6%3E6%C3%9A%12%C3%A0%C2%94r%C2%BE%C2%9D%C2%91%C3%B6%C2%A7%C2%A82Wrf-%C3%B7%C3%B3%C2%BF%01S%0Fp%C2%9Ft%3Ay%C2%A6%00%00%00%00IEND%C2%AEB%60%C2%82"; 
    
    var orange_color_label_button_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%10%00%00%00%10%08%06%00%00%00%1F%C3%B3%C3%BFa%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%01%03IDATx%01%C2%A5%C2%93%C2%BDQ%C3%83%40%10%C2%85%C3%9F%5B%C2%89%19%C2%9CQ%C2%82%1D%10%10%C2%A1%C2%80%02P%05v%0B%C2%84%C3%8E%C2%A0%02L%078rH%0Bv%05P%C3%82f%04%04r%09%C3%8E%18%C3%80%C3%9C%C2%B2'%C3%89%C2%8Cq%C3%80H%C3%A7%2F%C2%B9%C2%BF%7D%C3%AF%C3%BEv%C2%89%03%C3%9E%16W%C3%97%60%18%5B%C2%B0%09%C2%81a%3B%C2%AD%245Cx%18Mu%C2%BD%1F%C3%8F%5D%C2%A7z*%C3%8E%C2%B6%C3%AFr%0F%C3%98-%C3%BE%C2%85%C2%8F%C3%B9%C3%80%C2%8Dnt%C3%B3k%C3%90%C2%88%C3%B9%C3%AC%C3%9D%02%C3%9D%C3%90%7C%60e4%C2%918jv%C3%AE%2C%C2%8E%14%C2%AD%06%C2%AC%16%C3%85pk%C2%AC%C2%90%02%C2%AD%C2%94o4N)%18d%22f%C3%96%C3%A7%C3%A8%7Fp%C3%B18%C2%BEA%C2%B2%C2%81%C3%B97%0B%C2%8ED%C3%9Ce%C2%8DD%5C%C2%AB%22%C3%86%15%12%11%C3%8FN1%09K%24%C3%B2%C3%A5%C2%A9-%C3%A7S%7D%C2%A1q%C2%8E%C2%9E%18m~%C3%A1uQ%3Fb%C3%B6%19f%C3%9Eh%0F%C2%BD%C2%9E%C2%9C%22jP%1B%C2%8C%C3%AEt%C2%93%7FX%C3%99%C3%A5%24q%C3%A7%5D%1D%C3%841%0F%03%5E%3D%C2%B53%C3%A3%C3%8C%17.%C3%91%C3%A6H%C3%BDS%C3%A4%C2%8A%08%C3%8Bx%C3%A5%C3%BD%C3%B8%1F%C3%9F%C2%A2b%C2%A8D%C2%9C2%C2%8F%00%00%00%00IEND%C2%AEB%60%C2%82"; 
    
    var brown_color_label_button_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%10%00%00%00%10%08%06%00%00%00%1F%C3%B3%C3%BFa%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%01%11IDATx%01%C2%A5%C2%93-O%03A%10%C2%86%C3%9F%C2%99%13%C2%97C%C2%81%C2%AC%3B%C2%83B%C2%B0%C2%86%C2%84%C2%A0%C2%A8C%C2%90%C3%B4%C3%BE%02%C3%BF%00Y%C3%97%3B%07%0E%C3%BE%05%C2%B8%C3%96%C3%95%C2%81%40%20G%22H8Y%C2%89%C3%A2%23%C2%A4%3B%C3%8C%C3%B6%0A%C2%B9%22%C2%A0%C2%B7%3C%C3%89~M%C3%B6%7Dw2%C3%99!%C3%BC%60x%C3%AC%0Eu%C3%AE%07%00%15%0A%C3%A4%C3%8B%C2%B0%10%C3%99%C3%B0T%C2%9DM%C2%A5n%C3%9F%C2%A7%C2%AFMY%C2%B8%C3%8D%C2%97w%3F%C2%B2%C3%90)~%C2%81%C2%A0%17Y%C3%8AU9%C2%96%C3%A7o%C2%83F%C2%AC7%C2%B6uX%0F%C3%99H%C2%A9%1FL8%C2%9C%C2%9A%C2%97%C3%97%16%07%C3%9Ck%C2%A3%01%0D%C2%8F%5C%C3%AEI%C2%9F%10%01%2B%C3%B5YYG%C2%88D%09%05k%C2%B7%C3%94W%0D%C2%A0%03%C2%B69%C3%9A%C3%80%C3%88%19%C3%BF%24%18%C3%94%C2%88%C3%84%C3%BE%C2%80X%0Dh%C2%82X%C2%88%C2%84%13%C3%85%18%C2%91%C2%90G%C2%95%C3%9C%3D%C3%8E%C3%AA%C2%83%C3%AD%C3%9E%C2%96%C2%A5%C2%B3%C3%9FI%0C%C2%BA%3C%C2%9F%C3%8A%C3%95%C2%A2%C2%88%1F)J%C2%8BH%07%C2%BDdAc%24a%C2%BA%7F%C2%98%C2%BD%C3%AD%C3%AD%C3%B4%C2%AEyN%C3%99_%C2%99%C2%84%C2%97%C2%AD%0FNV%C2%9A%C2%A9M%C3%B3%C2%B5%17%19%C3%ADB%C3%95-E%C2%B5-%13%C2%B2zY%3B%C3%9F%C2%B6%C3%AF%7F%02%17%C2%8D%5B%C2%8A%C2%94B)%18%00%00%00%00IEND%C2%AEB%60%C2%82"; 
    
    var fuchsia_color_label_button_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%10%00%00%00%10%08%06%00%00%00%1F%C3%B3%C3%BFa%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%01%16IDATx%01%C2%A5%C2%93%3BN%C3%83%40%10%C2%86%C3%BF%C2%99U%1A%C3%9C%C3%90%C2%A6%40%C2%B2K%0AD%7C%03%7C%C2%82%C3%A4(%C2%94%C3%AElw)(%C2%92%C2%9B%C3%80%09%C3%A0%06X%C2%A2%C2%A0%C2%B4%25.%10%099%C2%8D%C3%AD%1Dv%C3%8C%C3%8B%02)r6_5%1A%C3%AD%3C%C3%B6%C2%9F%19%C3%82%1F%C3%9E%C3%92%C2%97%1B%C2%B1%C2%B4%14%60E%22%C2%A1%C3%BA%04T%12P%C3%8E%C2%8C)%C3%A6%C3%AB%C3%8Bz%C3%BC%C2%9E%C2%BE%C2%8D*%C2%AF%C3%8E%C3%8D%C3%BE%3D%C2%83%C3%90-%0EA%C2%B4%C3%A9%C3%8F%C2%82%22%C3%8A%C2%A3%C3%9DO%02%0D%C3%A6%C2%A6y%24%C3%88%02%13%C3%90%C2%8El%10%24%C2%9A%C2%84%C3%95%C2%A1%C2%95%C2%A7%06%7FV%C2%95%C2%85%C3%997%C3%99%60W%C3%A9kh%C3%BA%C2%AE%C2%82%07%24H%C3%98%C3%B4%7D%06O%2Ca%C3%85%C3%87%C2%B4%C3%BE%C2%AF%03%C3%90%C2%92%C3%9D%C2%B8%C2%BC%1389C%C3%86%C2%89%C2%B0%10%C3%95%C3%B0%C3%84%C3%85%C2%96%0C%C2%91%07x%C3%A2%C2%A6P%C2%B2%13%C3%A1%1E%C2%9E%C3%8CL%5B%C3%B0%C3%85%C3%9D%C3%95%C2%93Xlq%24N%C3%BC%C3%AD%7C%1D%C3%97%C2%83%C2%88%C2%B6%C3%AFr%C3%A7(%C2%A7%07%C3%AB*w%C2%B9%C3%9AC%C2%82h%13%C3%AFl%C3%9B%25S%3A%C3%91%C3%8A6h%C3%9D%1D%C3%84%C2%BF%C3%874%C2%A6J%C2%9FC%C3%AEL%C3%AE%C2%AE%C3%AE%C2%9A%C2%BEvd%C2%98%C2%94%13%5B%C3%B5%C3%92%2F%C2%8F%C3%9F%7F%00%C2%B7ml%C3%AC%C3%80%C2%93om%00%00%00%00IEND%C2%AEB%60%C2%82"; 
    
    var cyan_color_label_button_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%10%00%00%00%10%08%06%00%00%00%1F%C3%B3%C3%BFa%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%01%08IDATx%01%C2%A5%C2%93%C3%81m%C3%82%40%10E%C3%BF%0C%C3%B1!%C3%89%25%25%C2%B8%C2%83PB%5C%01%C3%A4%C2%96H%C2%89%C2%84%3BH%07%26%1D%C2%84%0A%C2%8C%C2%94H%C3%89-%C2%A6%C2%82%C2%A4%C2%84%C3%AD%00%C2%97%C3%80%058%2C%C3%B60k%190%1C%C2%90%C2%BD%3C%C3%89%C3%92x%C2%B5%C3%B3%C3%B7%C3%8F%C3%AE%0C%C3%A1%C2%84%C2%97%C3%B4%C3%B3A%C2%A87%00d%C2%A8_X%2F%1B%C2%80L%20%C3%BC%3E%C2%8D%C2%9F%C3%B3%C3%A6~%C3%9A%05%C2%A3%C3%B4%C3%B7%C3%8E%C3%922%C3%91%C3%B0%0Dg%C3%A1%C2%8F%40%C2%AEU%C3%A8q%C2%B1%17%C2%A8%C2%93%C3%BF4%C3%AC%C2%A3%1D%C3%AA%C3%A66r%22%C3%AC%C3%BE%C3%AA%C2%93%C3%9B%26%3B%C3%BA%C2%96%C3%96I%C3%A5%60%C2%94~%C2%87%C2%96%C2%8A9%3C%20%C2%91%C2%88-%C2%95%09%3C)%C3%81C%26H%17%C3%AB%C3%87%0EH%06%2C%C3%9Dj%3F%25d%5C%C2%88%0AP%0E%7F%0C%C2%93%C2%943xC%C3%86%C2%95%C2%90%C3%81%C2%93B%5B%C2%9B%C2%BF%C3%A2%C3%97%7F%7D%C3%8F%09%3A%22B%C2%93%1F%C2%9D%C2%8B%C3%AA%12%C2%AF%C2%B0%19%C2%A3%1A%C2%98%C3%96%C2%98%15n%5C%0E*%C2%81i%1C%2F%02%C2%B1Q%1B'%C3%AE%C3%A4%C2%A5%C3%8EA%C3%96%1C%C2%A6%26O%C3%9A%C3%9A%3D%14c%22%C3%9C%1Fz%C2%84r%11%C3%8C%18e%C3%A6Jn%C3%AE%C3%9F%02%C3%A9%C2%8Ba%C2%9C%C2%B6%C3%B6%C2%AA%C2%81%00%00%00%00IEND%C2%AEB%60%C2%82"; 
   
    var sandstone_color_label_button_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%10%00%00%00%10%08%06%00%00%00%1F%C3%B3%C3%BFa%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%01%0FIDATx%01%C2%A5%C2%931R%C3%830%10E%C3%BF.%C3%A3%0C%C2%86%C2%86%23%C3%B8%06%C3%A4%08%C3%B8%04%09e%0A%C2%8A%C2%94%C3%AE%C2%A0%C2%A3%60%06y%C2%86%C2%82%C2%92T.)(R%C2%92%C2%9C%00%C2%8E%C2%A0%1B%C3%A0%23%C2%A4a28%C2%A0eec%26%C2%A4%60l%C3%A5U%C2%92f%C3%BF%C3%9F%C3%95%C2%AED%C3%98%C3%A1%C2%A9%C2%B89%3B%20%19%C2%89%C2%93%C2%B1%00%C3%89%C3%8F%C2%B1%25%22%C3%8B%C2%88%C3%B2If%C3%8A%C3%ADxj%17%C3%8F%C2%8F%C3%A6%C3%A4%7D%C2%BD%C2%B9%05%C3%A4%12%C3%BF%C3%80%C2%A0%C2%878%C2%8E%C3%B2%C3%B3%C2%A9Y%C3%BD%1A4%C3%A2%C3%AAE%C2%97Ct%C3%83%1E%C3%87%C2%83%C3%94%C2%9B%C2%B0%C3%9F5%C2%99%3B%C2%8B%3D%C3%83u%C2%A3%01%C3%8D%0B%C2%93%7CI%C3%B5%C2%86%00%C2%848e%C2%87%C3%86)%04%C2%86%1B%C2%B3H%C2%AF%C3%92%C3%BFV%20%18i%0F%24%C3%98%40I%18%7B%C3%82%3A%C3%87%12%C3%A1Xv%C2%82%25%02!R%030%2F%10%C2%88N!%C3%A7%C2%8B%C3%AC%C3%AEU%C2%BB9CO4%C3%BBl%C2%92%C3%9D%C2%97u%13%3F%C2%AB%C2%81%C3%91%23%C3%9BCo%C2%8F%0E%C2%BD%C3%86W%C2%A1L%C2%AF%C3%8Cj%C3%B3%11%C2%A5%5D*%C3%B1%C2%99%C3%9B%7FP%C3%AFw%03%C3%A6%C3%85%C2%B5%3Em2%C3%AA%7D%C3%9A%C2%BE%C2%91zR%C2%84%C2%A5%03%2F%C3%BC%C2%95%C2%B7%C3%A3%C2%BF%01%C2%B4%7B_%5E%C2%8D%C3%88%C3%A8%C2%8D%00%00%00%00IEND%C2%AEB%60%C2%82"; 
   
    var dark_green_color_label_button_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%10%00%00%00%10%08%06%00%00%00%1F%C3%B3%C3%BFa%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%01%04IDATx%01%C2%A5S%C2%B1%C2%8D%021%10%1C%C2%9B%C3%97%C2%BF%3Ex%C3%A9%5E%C3%BA%02L%C3%B6%19%C2%84%C2%84G%05%C3%90%02%1D%C3%90%01%C3%90%01t%01%19T%C3%80%C2%95p!Dl%01%04%17%02%01f%16%0Et%20%04%C2%87%C2%99%C3%80%C3%B6%C2%AE%C2%BC%C2%BB%C3%A3%C3%B1%C2%AE%C3%81%0D%C3%BEc%17%7B%C2%A0%05%C2%8F6M%C2%A7%3E%C3%9A)%C2%B7%C3%94%1A%0C%16%C2%89H%C3%B1%C2%BE9%1F%5C%C3%AC%C2%A2%C2%AF%3Dz%C3%B4t%C3%B1%08%1E%C3%83%C2%AD%C3%85%40%12%C3%89.%094%C3%B8%C3%93cN%C2%A3%C2%8E%12PF%3B%C2%83%C2%A6%26%C2%B1%C3%AA%C3%90%C3%8Ae%C2%83%C3%B3%C2%AA%C3%B5%23%5B%3D%C3%B3%C3%8D%C3%8E%7B%C2%AC%10%00C%16%C3%8A%C2%A0%C2%87%40%C3%B0)m%C3%8B%C3%AA%C2%A5%C2%A9%C3%9F%C3%89%C3%90R%06%C3%A1%09%C2%A8%C2%BF%C3%85%C2%9B%C2%B0%14B%10%C2%8E%C3%94R%C2%88%19%02%C3%A1O%C3%9D%C2%89)%02%C2%A1%C2%AD%5DYK%26%7F%C3%95%C3%A8%C2%97v%C3%A3%C2%A5h%C2%83%C3%912%C2%91%C3%B1Q%C3%84-%C3%90%C3%87i%60JA%C2%A9%C3%A71%C2%A8%C3%A8%C2%92I%C2%B6%C3%B9%C2%A9F%C2%93%0F%C2%83%C3%AF%C2%A7LX%C2%99s%C3%90%C2%B9%1A%C2%A6%22%C2%B4%C2%B5%C2%B9%C3%B5Y%C2%A5%C2%86%C2%BC%C3%89%C3%B4%C2%A7Tl%C3%95%C2%8B%C3%A3%C2%9C%14%C3%AF%1F%00%11%C3%9EQ%01%C3%865%C2%A3%C2%A6%00%00%00%00IEND%C2%AEB%60%C2%82"; 
  
//NEW BUTTON ICONS

    var view_button_on_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%12%00%00%00%12%08%06%00%00%00V%C3%8E%C2%8EW%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%01oIDATx%01%C3%A5SK%C2%8E%C2%82%40%10m0%26%26%C2%BA%C3%80%C2%85%C2%BF%C3%84d%C3%A4%06%C3%A3%0D%C3%B0%06z%02%C2%99%13%C3%8C%C3%9C%409%C2%81%C3%83%09%C3%B4%06r%C2%83%C3%A1%06%C3%8C%0D%60V%04%C3%98%C3%B4%06%12%16%C3%80%C2%BC%22%C2%B6i%09%24%C2%B3%1E%2B1%C3%9D%C3%B5%C2%AA%C3%AA%C3%B9%C3%AA%01%C2%8C%C3%BD%C3%9BP%C2%BA%0AI%C2%92%18eY%1A%C2%B8%C2%BE%C3%9C%C2%A0%1FUU%C3%9D%C3%89d%C3%A2%C3%BE%C2%89(%C2%8E%C3%A3w%1C%C3%87%C2%AA%C2%AA4%C3%96%1E%C2%81%C2%A2(%C3%96t%3A%C2%BD%C2%B4%12%C3%B9%C2%BE%C2%AF%C2%8DF%C2%A33Tl%05%062%1BC.0%0E5%26%C2%A0%C2%BD4%C3%ABdY%C3%B6%C2%A6%C3%AB%3A%C2%A7D%15%C3%A8p8%C2%BC%C3%8A%24%20X%C3%8F%C3%A7%C3%B3%0F%C2%9CA%C2%AF%C3%97%C3%A3%C2%B3%C3%99%C3%8C%24L%22%C3%9A%C3%92%C2%8CHj%C2%A2(%C2%8A%0E%C3%B8wC%22%C2%B9%40%C3%BA7%C3%96%3C%01%C3%B7%C3%A8%07%C3%8FN%C2%84%C2%91JI%C2%B1%C2%81%C3%99c%3D%13%C2%86%C3%A1%0A%C2%B2%7Dy_%C3%A4%C2%9B%3C%C3%8Fy%C2%BF%C3%9F%C3%B7%1E%7C%C2%80%22%0C%C2%AFp%C2%BDJ0%C3%87%C2%8A%C2%BA%3A%18%0C8%1A%C2%B8%3C%C2%80%15%C2%BB%C2%8C%C2%A6%1Ao%40%1A84u%3C%1E%C3%B3%C2%A2(l%C2%B9B%C2%92%C2%97%C3%8Bes%0D%C2%9BV%C2%83_%C3%BB%06%C2%91%C2%B5X%2C%C2%82%C3%BBS%C2%83%1F_%0D%C2%9F%C3%967%C2%9F%5E)%17w%C3%B2K%C3%AAq%C2%81oj%3B%04%08%3Fv8%1CI%C2%81%C2%87%C3%813%C2%9A5%C3%B2E%18%2F%C3%AA%C3%B0%C3%91I%C3%93tw'm%C3%88d0%C3%9FD%C3%93%01%C3%97%15k%09%C3%B2%13%3EYx5%3E%1Fp%C3%96%11%204%40h0%C3%A9%13%01%C2%81%0B%3F%5C%C3%B6%5C%C3%B1%0BY.%C2%BA%C3%B0%C3%A0%24%C2%9B6%00%00%00%00IEND%C2%AEB%60%C2%82"; 

    var view_button_off_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%12%00%00%00%12%08%06%00%00%00V%C3%8E%C2%8EW%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%02%12IDATx%01%C3%8D%C2%93%3Dh%13a%18%C3%87%2F%C2%97%3B%3F%C2%88%C2%93%20%C2%88PpR%10Lb%0C(H%C2%9D%C3%84((%C3%89%25%10%C2%97*%0E%C2%82%60q(%22%C2%AD%19lP(%C2%B4u%10q%10D7Q%03%C3%B9%12%C2%82%20J%16%C3%85%C2%B6%C2%A4%19%12h%C2%A1c%C2%97%C3%92%C2%A1M%C2%A1%14%C2%92%C3%8B%25%C3%A9%C3%AFM%C3%AF-%C3%97%C2%AF%C2%A1t%C3%A9%03%0F%C3%8F%C3%A7%C3%BB%7F%C2%BE%C3%AE%14%C3%A5%C2%B0%C2%91K*%C2%99L%C3%A6V%C2%A7%C3%93%C3%A9%C2%ADV%C2%AB%C3%83%C3%89d%C3%92R%C3%B6I%C3%9A%26%C2%A2%C3%8Bu%05%C2%91%C3%B0%C3%BB%C3%BDn%C3%A4P.%C2%97%C2%BB%C3%98j%C2%B5r%C3%A8%3D%C3%84%C2%84o%01%C3%BE%05%7F%C2%8EF%C2%A3%7F%C3%B7%C3%ACH%10%C2%8F%C3%9F%C2%B7%C3%9B%C3%AD~%3A%7B%1B%C2%8B%C3%85%06%C2%B0%1Fa%7F%C3%9C%C2%A5%C2%81%2F%1E%C2%8F%C3%A7q(%14Z%C3%9B%01T(%14N%C3%97%C3%AB%C3%B5%02%C3%95%03%C3%82%06lD%C2%8C%19%08%04.Y%C2%96u%06%C3%BF%5D%40%1F%20u%3B%3E%C2%890(%C2%B8%C2%B0%09%C3%84N4%C2%AF%C3%97%3B%C2%81z%C3%99%1Es%C2%8DD%C2%8F%C2%AA%C2%AA%C2%A3%C2%91HdH%16K%C2%A7%C3%93%C3%97%C2%88%C3%BDA%3Dj%C2%BB~%C2%BA%C3%9D%C3%AE%7B%C3%A1pxU%15%C2%96%C3%8F%C3%A7%7B%25A%04Q%C3%B9%1Bb%149%C3%88%11%C3%86%C2%A5%C2%9F%C3%AA%C3%BF%10%C3%9F%1D%23%C3%9E6M%C3%B3I%C2%B78%7B%C3%A8%C3%A1%C3%81%0C%C3%BA%09%19%C2%A5J%C2%98q%C2%96%C2%A8.%C2%97%C3%BA%C2%AER%C2%A9%3C%13%C3%97%24%C3%9F%20%3F%C3%A3%00%5B%26%C3%BF%C2%ACJ%C2%B2%C2%89%C2%B1%C3%A5%C3%9C%C2%8CuD%C3%97%C3%B5%15%C2%87%C3%AB%C2%A9%C3%9D%C2%B5%C2%88%C3%8D%C3%83MG%C3%8Cj4%1A%C2%BA%C3%8A%7C%C2%8B%C2%80%C2%8Dm%03%C2%BA%5E.%C2%97gQ%3F8%7C%2F%18s%C3%8C0%C2%8Ci%C3%B2%07%1C%C3%A9%C3%A3%C3%B1x%7C%C2%B9%C2%BB%C3%ACb%C2%B1x%C2%ACV%C2%AB%C3%A5Qo%C3%9AA%C2%93%C3%A4%5E%1EM1%C3%8A%05%C3%86lj%C2%9A%C3%B6%C2%90%C2%91%12%C3%B2%C2%9At%C3%98%C2%87%C3%9E%C3%877u%C2%A3%C2%BB%23%09%C2%9BJ%C2%A5N%C2%92%C3%BC%1F%C3%B5%C2%9Cl%02%C3%BE%C3%84%C3%A3%1F%C3%AC%C3%A08%C3%B2%0E%C3%A0%C3%B7E%40%5E%C2%B3T*%C3%A9%C3%81%60%C2%B0%C2%B9%05%C3%88%06%3BE%C3%920%C3%9C%C2%AF%C3%ACMm%C2%81%05%C2%BF%C2%A1%C2%9B%C3%A7%C3%92%C3%A9%C3%9A-3%C2%9F%C3%8F%C2%9F%C3%A7%C3%B7%18T6%3E%09%C3%99%C3%A1%1C%1D%C3%BD%C3%86%C3%BF%C2%95%C3%8E%C3%85%C3%A5%12%C3%98%2F%19%C3%BF%C2%B5r%10%C3%8Af%C2%B3%23%7C%C2%A0W%C2%95CK%C3%AB%160%C3%B1%C2%AA%5E%C2%B1%C3%8Ex%00%00%00%00IEND%C2%AEB%60%C2%82"; 

    var hide_on_button_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%11%00%00%00%11%08%06%00%00%00%3BmG%C3%BA%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%01%C2%B3IDATx%01%C3%8DSKK%C2%95A%18~%C3%9E%C2%999%7C'%C2%A2%5D%C2%84%C3%8BV%16%C3%ADB%10*%C2%A2%C2%B4SQB%C3%902%C3%A8%07dx!%C3%A2%C2%B4h%C2%97%C3%9B6%C2%9Dc%17%C2%A2%40%10DW%C2%82%20%C2%A2%C2%A0~%5E%10%C2%BCl%C3%A4%C2%A0%C3%A0B%C2%BC%2CDW*%C3%A2%05%C2%BF%C3%B9f%5E_%15%C3%84%C2%83z%C2%BC%C2%80%C3%A0%C2%B3%C2%99%C2%99w%C3%A6y%C3%9E%C3%AB%00W%05t%C2%9C%C3%B1g7%17%C2%B3%C3%B1%15%C3%B0%C3%BCH%5E%C3%9C%02c%05%C3%84%C2%A3%3A6%C3%8D%1F%C2%9F%C3%93LA%C2%91_!%17y%C3%B0of%C3%BF%16'%C3%BBmv%C3%9B%C3%AA%C3%AB%C2%A7W4wD%24%C3%9B%C3%8F%C3%B7%C3%89%C2%B9N%C2%86x%3E%1D%C3%B3%0A%C2%AE%C2%A2%C2%AA%3C%C2%98%3C%10%C3%B9%13%C3%B2m%0B%3F%06%C3%A6%C2%9B8%3BV%C3%99%C2%BA%C3%87%C2%B5%2F%C2%83%09bf%C2%AA%0F%C3%BD%14%C3%80%C3%858%3F%C2%86n%C2%90NQv%20*E%C2%ACFpA(%C3%A3K%C3%94%C3%B2Rb%5C%C2%B2%C3%8A%C3%A1B%C3%A0%C2%9C_OL%C3%AE%C3%95%24%C3%9B%23%C3%91%C2%90%1A%C3%86%09-%3F%C2%9E%C2%8F%C2%88%C2%8C%C2%BE%5B%C3%BD%C2%84fU%C2%B6%C2%83%03%09*%C2%BDk%C2%96%C3%8E%2C%C2%9CM%C2%81V%C2%A0%C2%A0%C3%98%C2%B9tC%C3%88IE%C3%89%C3%B8%C2%8B%C3%B8%7Fa%3D%C2%A7%C2%8C%C2%8E%1E%10%C2%A1%C2%BD%20_%C2%A1u%5BG%25%22T%25%C2%A7%C3%8A%C2%B5%C3%98%C2%BE3%C2%8A%C3%8C%3F%C3%AB%C2%A2%C2%B6%C3%8F%C2%A9%20%C2%B7%C2%9FZ%C2%ACA4'b%C3%BFeb%C3%9F0%C2%A1T%C3%8C%C3%9DB%1A%C2%94%C3%B5%03%C2%BC%5BL%C2%97_%C2%9B%C2%95%C3%BD%C3%9F%1F%C2%BD%3CnHO%C3%A7%C3%95%20%C3%93c%1F%12%C3%91%10%3C%C3%9E%C3%97%C2%A4LS%7Dh%C2%9F%C3%8A%04%C2%84D%5CV%5D%C2%96%C3%A8%C3%8B%C3%B4%C3%9A%3Ab%C2%AAM%40%C3%9F%C2%AB%7CF%07%C2%A9%C2%9B%C2%BCHI~%08%C3%90X%C2%B4%C2%AC%5B%C2%B0_%24%3E%7C%C2%AF%C3%BDV%C3%86%C2%A9%C3%A4%C2%9D%0D%C2%B6y%C2%BC%C2%82%C3%9D%C3%B8%C3%9E%C3%85%C3%97%C2%83%C3%80%C3%97aS%7D%C2%AByMk%C2%B8L%C3%AC%00%C2%83%C2%BF%C2%A9%C2%8C%C2%AD%C3%BE%C3%9Dw%00%00%00%00IEND%C2%AEB%60%C2%82"; 
    
    var hide_off_button_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%13%00%00%00%11%08%06%00%00%00%3F%C2%98%C2%97%C3%87%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%01%C2%A0IDATx%01%C3%95%C2%93%3FH%02a%14%C3%80%C3%AFT%C2%A4%1C2*(%C2%9A%1A%C2%A2%02%C3%A1%08%C2%A2%C2%A0%C2%A5%10%C2%A2%C2%86%C3%88%3F'HCK%C3%90%1EA%05%C2%81Ca%11%244%14%C2%B9%C2%B4%C2%95%04%09%C2%9EN%C2%AD%11%05%C2%B5%C3%9E%12HCC%C2%83%0D%11%C3%98%C2%9F%23%C3%A2%C3%94~%17(G*jS%3Dx%C2%BCw%C3%AF%7B%C3%AFw%C3%9F%7B%C3%9F%C3%B7%09%C3%82_%15%C2%B1VB2%C2%99l%C2%B5%C3%9B%C3%ADM%C2%BA%C2%AE%C2%BF%7B%C2%BD%C3%9E%C3%97%C2%86a%C2%8A%C2%A2%C2%B4%17%0A%C2%85uQ%14e%3E%C2%BBMK%C3%8F%C3%84%C2%8E%C2%ACV%C3%AB%C2%9E%C3%87%C3%A3%C2%B9%C2%AF%09%034K%C3%81%3E%C2%B0%0E%C2%A1%C2%8A%C2%B0%C3%B6%C2%88%09%07%02%C2%81hUX*%C2%95Z%22q%07%C2%B5%09%C3%B5IH%C2%96%C3%A5%C2%AD2%18%C2%B3%19%01r%C2%8Dk%11%C3%AA%C2%97O%C2%9B%C3%8D6I%C3%8B%17B%C2%B1%10%C2%88%C2%98%C3%8F%C3%A7%0F%1B%04%19b%C3%A7%60%0Eb%C2%B1XK%09%C2%96H%24%06%C2%99%C2%93%24%C3%BCN%5C%0E%C2%87%C3%83e8%C3%9F%C2%B3aWw%16%C2%8B%C3%A5%06w%00%C3%A8%09%C2%B6%C2%8FX%0F~o%C2%85%C3%A2%0Cz%C3%8BZ%C2%9A%C2%8E%C3%A6%C3%B0%C2%9FhU-%C3%AD%2C%18%0C%C2%BE%01%5B%C3%85mF%C2%B3%C2%AA%C2%AAN%C2%910N%C3%81%C2%99%C2%99B%C3%B1%15q%C2%89%C2%A1O%C3%A0%3F%102%C3%9A%5BafZ%09f%C2%88%C3%8F%C3%A7%C2%BB%C3%84%C2%84IZ%C2%93%24)%C3%8A%C3%8E4%C2%BF%C3%9F%3F%C3%8D%C2%9D%1A%06%C2%BA%40%7C%14%C3%88%189%1A%C3%97'%C2%82%C3%9D%26%C2%B6AL)2%C3%8A%C3%AE%19%C2%A7%C2%BAHR%08%C3%95%00%1Dc%C3%8F%C3%99%C3%B5%07%C2%B6-%C2%97%C3%8B%0D%C2%912%0F%C2%BC%15%C2%8D%C3%B0%C2%B3Msm%C3%85%17%10%C2%8F%C3%87%C3%BBig%19w%06%C3%AD4%C2%B5%C2%99%C3%85%C2%9C%C2%B2%C2%B6%C3%8B%C3%93J%C3%BF%C2%AC%C2%AB%C3%B56EN%C2%BA%C3%8B%C3%98%15%C2%80%17%C2%A7%C3%93%C2%99q%C2%BB%C3%9D%C2%BA%C3%B0%C3%AF%C3%A4%0BCc%C2%A9%C2%84%C2%B8%05%C3%A9%C3%A2%00%00%00%00IEND%C2%AEB%60%C2%82"; 
   
    var solo_on_button_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%0E%00%00%00%0B%08%06%00%00%00O%C2%85%C2%BCb%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%00%3EIDATx%01%C2%BD%C3%8EA%0D%00%20%0C%04%C3%81%3B%C3%92%0AA%5B%C3%AB%03%C2%B0%C2%80%20%C2%94%C2%91%14%0F%C3%B7%60%C3%BE%C2%9B%2C%23%C2%A2%200%C2%92%0B%3Fq%C2%9F%2B%C2%AD6%C2%88%C3%BE%C2%872f%C3%A6%C2%84%C3%80%C2%AAj%40%60%C3%AE%C3%9E!x%C3%BE%C3%81%0Be4%0Ee%C3%8E%00%00%00%00IEND%C2%AEB%60%C2%82"; 
    
    var solo_off_button_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%0E%00%00%00%0B%08%06%00%00%00O%C2%85%C2%BCb%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%00AIDATx%01%C2%BD%C3%8EA%0D%C3%800%0CCQ%7B%0A%C2%90%0D%C3%A96%40%09%C2%A5BI%5B%0A%C3%BF%C3%90'%C3%B9%C3%B8%25%C2%BB%C2%AAZ%40t%C3%B7%C2%AF%C2%93%C2%BC%C2%AE%0E%01%C2%B1v%0B%C2%B8%04%C3%A1%10sf~%02%C3%82%C3%B6%2B%60%C2%87%C2%8F%C2%80%09%C2%875%0C%C3%95%10%C2%B0%C3%9Aj%00%00%00%00IEND%C2%AEB%60%C2%82"; 
    
    // Объект, связывающий индекс цвета метки с соответствующей строкой изображения
    var labelColorIcons = {
    0: none_color_label_button_imgString, // По умолчанию
    1: red_color_label_button_imgString,
    2: yellow_color_label_button_imgString,
    3: aqua_color_label_button_imgString,
    4: pink_color_label_button_imgString,
    5: lavender_color_label_button_imgString,
    6: peach_color_label_button_imgString,
    7: sea_color_label_button_imgString,
    8: blue_color_label_button_imgString,
    9: green_color_label_button_imgString,
    10: purple_color_label_button_imgString,
    11: orange_color_label_button_imgString,
    12: brown_color_label_button_imgString,
    13: fuchsia_color_label_button_imgString,
    14: cyan_color_label_button_imgString,
    15: sandstone_color_label_button_imgString,
    16: dark_green_color_label_button_imgString
};

function setColorLabelButtonIcon(button, labelColorIndex) {
    var imgString = labelColorIcons[labelColorIndex] || default_color_label_button_imgString;
    var decodedImgString = decodeURIComponent(imgString);

    // Генерируем уникальное имя файла с использованием метки времени
    var timestamp = new Date().getTime();
    var tempFile = new File(Folder.temp.fsName + "/temp_label_icon_" + labelColorIndex + "_" + timestamp + ".png");

    // Записываем декодированную строку в файл
    tempFile.open("w");
    tempFile.encoding = "BINARY";
    tempFile.write(decodedImgString);
    tempFile.close();

    // Назначаем изображение кнопке
    button.image = tempFile;

    // Принудительно перерисовываем кнопку
    button.notify("onDraw");
}

// Добавьте функцию setViewButtonIcon
function setViewButtonIcon(button, imgString) {
    var decodedImgString = decodeURIComponent(imgString);

    // Генерируем уникальное имя файла с использованием метки времени
    var timestamp = new Date().getTime();
    var tempFile = new File(Folder.temp.fsName + "/temp_view_icon_" + timestamp + ".png");

    // Записываем декодированную строку в файл
    tempFile.open("w");
    tempFile.encoding = "BINARY";
    tempFile.write(decodedImgString);
    tempFile.close();

    // Назначаем изображение кнопке
    button.image = tempFile;

    // Принудительно перерисовываем кнопку
    button.notify("onDraw");
}


// Добавляем функцию trim
function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

var view_layers_checkbox = layer_group_default.add("checkbox", undefined, undefined, {name: "view_layers_checkbox"}); 
   // view_layers_checkbox.helpTip = "Toggle visibility of layers in this group across all compositions"; 
   // view_layers_checkbox.text = "View"; 
   // view_layers_checkbox.value = true; 

var add_layer_button_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%0E%00%00%00%0E%08%06%00%00%00%1FH-%C3%91%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%01%25IDATx%01%C2%95RKn%C2%830%10%C2%B5%0D%2B%C3%84%C3%82%2B%04%C2%BBp%C2%82%C2%B6G%C3%A8IBO%C2%90%C3%A6%04mn%C3%80%0D%0A'%C3%A9%11%C3%8A%0D%C2%9C%1D%C2%82%0D%C2%AC%10%12%1F%C3%B7%0D%C2%AAi%C2%82%C2%88B%C2%9Ed%C2%8D%3D%C2%BF7%C2%9E%19%C3%8E.%C2%A0%C2%94%C2%92%C2%AE%C3%AB%1E%C3%86q%C2%8C%C3%B0%C3%9C%C3%BD%C2%A93%C3%8Ey6%0C%C3%83)%08%C2%82%C2%B3%C3%B1%C3%A5%C3%A6R%C2%96%C3%A5%1E%22%C3%96ZK%C2%B6%C2%8E%1A%C2%B6%C2%93%C3%AF%C3%BB%C3%B1%1C%C2%88%C2%A0%03%C2%941%C3%9B%00%C2%B0G%C2%9E%C3%A7%C2%A5%3C%C3%8F%C3%B3%C2%9DeY%3FK%268%24%24%C2%A1%C2%8F%C2%96%C3%8CM%C3%93%C2%84%02A%1Fk%C3%A5!0%C3%85%C2%BF%C3%92%15R%C3%A98%C3%8E%C2%BB%40%C3%903%7B%1C%7B%5E%14%C2%85%C2%BEP%C2%A4%C3%A8hB%C2%97%C2%B6m3)%25%C3%89)%C2%B1%10%22%C2%A2%00%C3%A3(%16%C3%A5i%C3%9B%C2%B6%19%C2%9D%C3%A93u%C3%8D%C3%8C%C2%9BlW%C2%BE%60T%C3%AC%7Ff3%C3%80%C3%B0%C3%9A%C3%B7%3D%C3%89%C3%AF%C2%A5%C2%8D%C3%A6*P%C3%9AZ%03%C3%AE!%C3%A3UU%C3%89%C2%AE%C3%AB%C3%94%C3%96q%40_%C2%A3%C3%9B%2F%C3%93%02%60%C2%96%11J%C3%BAb%1B%C2%80DG%C3%9A%C2%9E%C2%A99%C3%98%C3%81%04Y%C2%8E%C2%94%C3%ADV%00%C3%99%C3%B0%C2%AD%C2%B7%C2%AB%C2%953%C2%A0-%02%C3%B3'%C2%AEO8f%C2%BEg%C3%AA%03%C3%86%12%C2%87a8'%C3%BE%05%C2%A5m%C2%8E%C2%B3%C2%97s%C2%8C%5E%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var add_layer_button = layer_group_default.add("iconbutton", undefined, File.decode(add_layer_button_imgString), {name: "add_layer_button", style: "toolbutton"}); 
   // add_layer_button.helpTip = "Add selected layers to this group across all compositions"; 
   // add_layer_button.text = "Add Layer"; 
   // add_layer_button.preferredSize.width = 115; 
   // add_layer_button.preferredSize.height = 20; 

var divider1 = layer_group_default.add("panel", undefined, undefined, {name: "divider1"}); 
    divider1.alignment = "fill"; 

var solo_layers_checkbox = layer_group_default.add("checkbox", undefined, undefined, {name: "solo_layers_checkbox"}); 
   // solo_layers_checkbox.helpTip = "Solo this group: show only layers in this group and hide all others"; 
   // solo_layers_checkbox.text = "Solo"; 

var hide_layers_checkbox = layer_group_default.add("checkbox", undefined, undefined, {name: "hide_layers_checkbox"}); 
    //hide_layers_checkbox.helpTip = "Mark layers in this group as Shy: hide them in the timeline without disabling"; 
   // hide_layers_checkbox.text = "Hide"; 

var divider2 = layer_group_default.add("panel", undefined, undefined, {name: "divider2"}); 
    divider2.alignment = "fill"; 

var edit_group_layers_button_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%12%00%00%00%12%08%06%00%00%00V%C3%8E%C2%8EW%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%01UIDATx%01%C2%BDS%C3%9Bm%C2%83%40%10%3C%C2%B0%0B%C3%A0%C2%87%C3%A7%C2%97%C3%93%01%25%C3%84%15D%C2%A9%C3%80%C2%A1%C2%82%C2%A4%03%C2%8B%0Ab*%40%C2%A9%20q%05P%02%1D%C3%A4%3E%C2%81%2F%0A%C3%A0%C2%91Y%0BN%C3%87%01%17E%C2%8A%3C%C3%92%C2%89%C2%85%C3%9D%C2%9B%C2%9D9%C3%B6%18%C3%BB'%18%C2%BAd%5D%C3%97%C2%A1a%18%16%C3%85m%C3%9Br%C3%9F%C3%B7%C3%B9V%C3%AD%5EG4%0CC%C2%8A%15Rl%C2%9A%26%C3%87%C3%A3a%C2%AB%C3%96dz%C2%84R%7C%C3%90%15%C3%8E%C2%AC%C3%81JJ%1B%60%C3%A7%0A%25OX%C2%8FJ%3D%C2%87%C2%B2%C2%84r%C3%B4%C3%A28%C3%8EqA%04%C2%92%17%C2%B2%C3%82%C3%BE%00%C2%90%1Em%C3%9B%C3%8Eo%C3%B1%C3%B4%11%24g%C2%B5%10%C3%8Ar%C2%AC%08%C3%A13V%C2%A1%C3%A6%C3%BB%C2%BE%17%C2%8D%C3%85aw%5D%C2%97%C3%ACv%C2%BBw%C2%A9%C2%AE%C2%90%C2%A5%03_P%C2%9DMv%C3%91%C2%A0%01Q%22%C3%94MA%10%04%C2%97%C2%B1%C3%BB%C2%84%C2%98-%C3%B1!%C2%A9%C2%89%3D%C3%8F%C2%BB%2C%C2%88%C3%86%C2%A4%25%C3%99%C2%B2T%16%C2%A8i%C3%84F%C3%93l%C3%A4%C2%9C%20%C2%82%C3%ACW%24%C3%A5s%3A%C2%B1%25%C3%8E%12iZ%C2%96%C3%A5%C2%9Bh%3C%05UU%7D3eV%C2%A0%C2%AA%C3%80%C2%86xTwZ%1B%07%C3%97uoC%C2%BA%C2%97lEP%C2%94%C2%B1%C2%B9%15%1A%C3%88O%3C%C3%99%1A%C3%A8%C2%9C%16%C2%8AF%7B%C3%99Xp%C2%85%0A%C2%B2%16*%0As%C3%8A%C2%A1!%0D%24%C3%87_%C2%8DV%C2%89T%C3%80%C3%AEL%0All%C3%96%C3%BFv%C3%97%C2%B8%C2%A4%C2%A6%C3%90%15jo%3Fl%C3%90%40%1E(%C3%86%C2%B06%C3%AC%1E%C3%B8%01%C2%9DB%C2%90%C2%81%C3%86%C3%9C%C2%A7%0D%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var edit_group_layers_button = layer_group_default.add("iconbutton", undefined, File.decode(edit_group_layers_button_imgString), {name: "edit_group_layers_button", style: "toolbutton"}); 
   // edit_group_layers_button.helpTip = "Rename and settings this Group"; 
   // edit_group_layers_button.preferredSize.width = 40; 
   // edit_group_layers_button.preferredSize.height = 20; 

var delete_group_layers_button_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%0B%00%00%00%0F%08%06%00%00%002%3D50%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%00%C3%ADIDATx%01%C2%95R%C2%B1%0D%C2%830%10%C3%84%C3%A0%C2%8A%C3%8A%14%08!!%C2%85%11%C2%92%11%18!%13%C2%84%0D%C2%B2%02%C2%8C%C2%90%112%01%C3%99%20l%C2%90d%03w%08(%C2%A0%C2%A3%02r%C2%8F%20!%C3%88%12%C3%A4%24%C3%8B%C3%BF%C3%96%C3%B9%C3%AF%C3%BEm%C2%96e%C2%99%C2%AF%01%C2%86a%C2%88%C2%BE%C3%AF%13%C2%84C%3EB2%C3%86%C2%8Em%C3%9B%C3%96%C2%94%C2%B0%3C%C3%8F%7Bm%238V%C2%BC%C2%99%0C%C2%99%1B%C3%A4%C3%8Fk%C3%84%C2%AE%C3%ABb%0E%3FB%C3%97%C3%B5p%C2%B5*%C3%A7W%5D%C3%BB%03%3Fd%C3%98%C2%B9%60%C2%93c*%C3%87%5CI%C2%96M%C3%93D%C3%B0%16%C2%A0%C2%8F%C2%94v%C3%8A%11%C3%97%1F%2B3%C2%B2o%C2%9A%C3%A6%C3%9Dq%C2%9C%03%C3%A2%C2%80%0E0%C3%96%07%C2%AA%0B%C2%A5%0D%40L%C2%8FTU%15%C2%91%C2%84%C3%92%06%C3%89%C2%91%C2%B4%C3%AB%C2%BA%C2%B2(%C2%8A%C3%90%C2%B2%C2%AC%C2%9A%5EOi%C2%83%C3%A40%C3%82%3D%C2%A4O%C2%88%C2%A3%C2%B2%2Cw%C2%B8%C3%BC%C2%9AW%C3%A7%0B%1B%C3%89%14%C2%8084%C2%87%C2%8B_%1B%C3%93'Qa%C3%9E%C3%9C%40%C3%B6%3C%C3%AF%C2%B9%C2%9C%C3%A7%124J%C3%9B%C2%B6%C3%937%C3%B7%C3%9Cs%C2%B3g%5D%C3%BB_%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var delete_group_layers_button = layer_group_default.add("iconbutton", undefined, File.decode(delete_group_layers_button_imgString), {name: "delete_group_layers_button", style: "toolbutton"}); 
   // delete_group_layers_button.helpTip = "Delete this Layer Group"; 
   // delete_group_layers_button.preferredSize.width = 40; 
   // delete_group_layers_button.preferredSize.height = 20; 


// TAB_EFFECTS
// ===========
var tab_effects = tpanel1.add("tab", undefined, undefined, {name: "tab_effects"}); 
    tab_effects.text = "Effects Group"; 
    tab_effects.orientation = "column"; 
    tab_effects.alignChildren = ["left","top"]; 
    tab_effects.spacing = 10; 
    tab_effects.margins = 10; 

// TAB_EFFECTS
// ===========
var create_group_effects_button = tab_effects.add("iconbutton", undefined, File.decode(create_group_layers_button_imgString), {name: "create_group_effects_button", style: "toolbutton"}); 
    create_group_effects_button.helpTip = "Create a new Effect Group"; 
    create_group_effects_button.text = "Create a New Effects Group"; 
    create_group_effects_button.preferredSize.width = 60; 
    create_group_effects_button.preferredSize.height = 35; 
    create_group_effects_button.alignment = ["fill","top"]; 

// EFFECT_GROUP_DEFAULT
// ====================
var effect_group_default = tab_effects.add("panel", undefined, undefined, {name: "effect_group_default"}); 

var view_effects_checkbox = effect_group_default.add("checkbox", undefined, undefined, {name: "view_effects_checkbox"}); 
  
var add_effect_button = effect_group_default.add("iconbutton", undefined, File.decode(add_layer_button_imgString), {name: "add_effect_button", style: "toolbutton"}); 
   
var divider3 = effect_group_default.add("panel", undefined, undefined, {name: "divider3"}); 
    divider3.alignment = "fill"; 

var edit_group_effects_button = effect_group_default.add("iconbutton", undefined, File.decode(edit_group_layers_button_imgString), {name: "edit_group_effects_button", style: "toolbutton"}); 
  
var delete_group_effects_button = effect_group_default.add("iconbutton", undefined, File.decode(delete_group_layers_button_imgString), {name: "delete_group_effects_button", style: "toolbutton"}); 
  

// TAB_SETTINGS
// ============
var tab_settings = tpanel1.add("tab", undefined, undefined, {name: "tab_settings"}); 
    tab_settings.text = "Settings"; 
    tab_settings.orientation = "column"; 
    tab_settings.alignChildren = ["center","top"]; 
    tab_settings.spacing = 8; 
    tab_settings.margins = 10; 

// TPANEL1
// =======
tpanel1.selection = tab_settings; 

// PANEL_IMPORT_EXPORT
// ===================
var panel_import_export = tab_settings.add("panel", undefined, undefined, {name: "panel_import_export"}); 
    panel_import_export.text = "Import/Export"; 
    panel_import_export.preferredSize.width = 131; 
    panel_import_export.preferredSize.height = 73; 
    panel_import_export.orientation = "row"; 
    panel_import_export.alignChildren = ["left","center"]; 
    panel_import_export.spacing = 20; 
    panel_import_export.margins = 18; 
    panel_import_export.alignment = ["fill","top"]; 

var save_my_presets_button_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%14%00%00%00%14%08%06%00%00%00%C2%8D%C2%89%1D%0D%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%00%C2%B4IDATx%01%C3%AD%C2%92%C3%91%0D%C3%820%0CD%1D%C3%84%00%C2%8C%C2%90%11%60%C2%84n%02%1B0B7%C2%81%11%C3%98%C2%A0%2Bt%03%C3%98%C2%80n%10%7C%C3%82%16%11J%1DW%C3%AAO%C2%AB%3E%C3%89%C2%8A%C3%AD%C2%B8%C3%97k%13%C2%A2U%C2%90R%C2%BA%22h.X%C3%AC%C2%89%C3%B0%C3%8C%C3%AEhf6%C3%81%1F%7C%08%11%C3%A1%C3%AD%2B%C3%BB%11%C2%B1%03%2F%C2%9D%C3%A4M.%26%C3%BD%C2%81%C3%A3D%16%3C%C3%9C%C2%A6%2FQ%C3%AA%C2%B3%C3%94%C2%B82o%09%C3%8D%C2%8F%C2%99%5B%C3%90%C2%9A%0EA%08%C3%A1%C3%8E%C2%83Ho%7F%5B%0D%C3%AF%C3%B5c%C3%8F%C2%99%C2%87%02Q%5E.R%0E51%C3%93a%C3%81i_%13s%09%C2%AA(9)%09Fq%C3%A4!Z%C2%82%C3%BA9%1DM%C3%A7%C2%A5I%C3%88%C2%BB%C2%B8*%C2%A5%C2%B7V%C3%80%C2%BF%7D%C3%90b%C3%B8%00O%C3%8EsN%3F%C3%BA%C2%9D%C2%9F%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var save_my_presets_button = panel_import_export.add("iconbutton", undefined, File.decode(save_my_presets_button_imgString), {name: "save_my_presets_button", style: "toolbutton"}); 
    save_my_presets_button.helpTip = "Save current Layer and Effect Groups to a .pgm file"; 
    save_my_presets_button.text = "Save My Preset"; 
    save_my_presets_button.preferredSize.width = 173; 
    save_my_presets_button.preferredSize.height = 40; 

var load_my_presets_button_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%14%00%00%00%14%08%06%00%00%00%C2%8D%C2%89%1D%0D%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%00%C3%ABIDATx%01%C2%B5%C2%94%0D%11%C3%820%0C%C2%85%C2%B3%1D%02%C2%900%07X%18%12P%C3%80p%C2%80%03%C2%86%02%24%C3%909%C2%98%03%C2%90%C2%80%C2%84J%C2%98%C2%83%C3%B2r%04%C2%AE%C3%B4%C3%9A.%C3%A5%C3%A7%C3%9D%C3%A5%C3%9A%C2%A5%C3%A9%C2%B7%24%5BK%C3%B4cU%C2%A1%C3%839%C3%97bh%12%C3%B1SUU%23i%05X%C3%A7%C3%A6u%C3%881%16%C3%81s%2B%C3%A3.%12%C2%BB%C2%84%C2%9D%60%3D%C2%A0%C2%84L%C2%8F%C2%A4%C3%88%C3%90p%0A%C2%89%C2%B5F%C2%93iM%C2%9F%C2%AB%C2%8FA%C2%BF%01%3E%C2%A1%7B%C3%9F%C2%B1%20%C2%BD%26X%C3%987%C3%8Ep%C2%95%C3%9C%C2%91%C3%ABa%22%C2%9Eu%C3%B6%7D%C2%AA%C2%92%C2%B1i%C3%8B%C2%A6%C2%89%C2%9D-Y%40F%C3%A6%C3%BC%C2%BB%0C%C2%B9%C3%B8Z%0B%13%C2%99%C2%B9L%C3%AB%0C%C2%AC%11%C2%98%C2%A5%C3%87%07%C2%99dnd-%C2%AAd%C3%89(%C3%8Db%C3%A3%06%C3%93%1B%C3%AC%22%C3%AE5%C2%AC%C3%A5%C2%B5b%C2%A0%40G%C3%89%C3%B6%C3%B5%12zoA%19%C3%90%C2%93U%C3%86%C3%85%C2%81%7C%C3%AB%04%C2%AE!%C3%A1%C3%8F%C2%8B%C2%8F%C2%91%2BW%C3%A73J%2F%C3%98P%16%7D%C2%BD%C3%92%3Fu%077%02%C3%96%15%C2%8A%C2%8A%C2%86%7B%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var load_my_presets_button = panel_import_export.add("iconbutton", undefined, File.decode(load_my_presets_button_imgString), {name: "load_my_presets_button", style: "toolbutton"}); 
    load_my_presets_button.helpTip = "Load Layer and Effect Groups from a .pgm file"; 
    load_my_presets_button.text = "Load My Preset"; 
    load_my_presets_button.preferredSize.width = 168; 
    load_my_presets_button.preferredSize.height = 40; 
    

// PANEL_SETTINGS
// ==============
var panel_settings = tab_settings.add("panel", undefined, undefined, {name: "panel_settings"}); 
    panel_settings.text = "Settings"; 
    panel_settings.orientation = "row"; 
    panel_settings.alignChildren = ["left","center"]; 
    panel_settings.spacing = 20; 
    panel_settings.margins = 18; 
    panel_settings.alignment = ["fill","top"]; 

   var clear_all_panels_button_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%14%00%00%00%12%08%06%00%00%00%5B%C3%90%C3%BE%10%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%01%0FIDATx%01%C2%9DT%0B%11%C2%830%0C-w%13%C2%80%C2%84J%40%02%12%C2%90%C2%80%C2%83%C3%A1%00%24%C3%A0%60H%C2%98%03%C3%A6%00%09%C3%85%018%C3%88%12H%C2%8F%C3%90%C3%8F(%7Bw%C2%B9%1D%C3%8B%7B%2FM%C2%9A%C2%ABR%3F%00%009F%C2%8B1b%2C%C2%B0c%C3%A1%C3%AF%1AC%C2%ABT%20%C3%B9)L%C2%AC%C2%91%C2%813%C3%A8%C2%BBN1k%C2%85%C2%A8%C3%87(%C2%9D%7C%C2%891%08N%C2%9BbF%C3%95%C2%8B%C2%8B%C3%82%C2%95%C3%A8%C2%A2%0A%11%C2%B4%C2%A8%C2%AAU%02%C3%98%C3%94%C2%8E%24w%C2%93%2FNv%C3%AA%06D%C3%BB%C2%8D%C2%9B0%C2%B1%C3%93%C3%B1%C2%8DW%C2%91%5C%C3%89%C2%BA%C3%91%15%10%C2%A6%C2%80%40%C2%8BY%19%C2%AF%C2%B5%C2%9D%C2%B3%C2%B5%C3%BD%C3%A0%1B%C3%94%18%C2%96%C2%94%C2%8BU%C3%B8dY6%C3%A3o-%C3%B2%C3%84%25%C3%8D%C3%9B%C3%B1%C2%9C%C2%B7%1CW7%C3%A0c%08%C2%B4d%C2%87%C2%AFc'%C2%94-%C2%99%C2%90%C2%99%10%144%C3%B4%C2%88Y%11%C2%9A%C2%A15%C3%B5%C3%8C%C2%AE%20%C2%B6%C3%83%C2%BBe%C2%ADn%02%C2%8E%C3%9D%5D%C3%BE%C3%91%C2%BBf%C2%85%18UwE%C2%A6%C3%8A%23%04%5E%158%5E%C2%A1%25%C3%89%C2%8CE%1D%C2%9C1q%01%C3%A3%C3%BC%C3%9F%C2%A8T%C3%B0)%07%08%3F%5B%7Dhf%C3%99%0DsZl%C2%8A%15%C2%97%7D%C2%8D%C3%B1%C2%BE%C2%A00%0E%C2%98%5C%C3%BF%05*%00%00%00%00IEND%C2%AEB%60%C2%82"; 
   var clear_all_panels_button = panel_settings.add("iconbutton", undefined, File.decode(clear_all_panels_button_imgString), {name: "clear_all_panels_button", style: "toolbutton"}); 
       clear_all_panels_button.helpTip = "Clear All Panels"; 
       clear_all_panels_button.text = "Clear All Panels"; 
       clear_all_panels_button.preferredSize.width = 157; 
       clear_all_panels_button.preferredSize.height = 40; 
   

// TAB_SETTINGS
// ============
var about_text_group = tab_settings.add('edittext {size: [380,350], properties: {name: "about_text_group", readonly: true, multiline: true, scrollable: true}}'); 
    about_text_group.text = "\rYO Group Matcher\r\rDownload Updates:\rhttps://github.com/yo-romlogunov/YO-Group-Matcher/releases\r\rManual:\rhttps://goo.su/5jGwMYu\r\rThis script allows you to manage Layer Groups \rand Effect Groups within your compositions. \rYou can add, edit, and delete groups, toggle visibility, \rsolo groups, and hide layers using the Shy feature.\r\rFeatures:\r- Create and manage Layer Groups and Effect Groups\r- Toggle visibility of entire groups\r- Solo specific Layer Groups\r- Hide layers in the timeline without disabling them\r\rFor more information, visit @romlogunov - t.me/vtb_blog\r"; 

var updates_check_button_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%14%00%00%00%14%08%06%00%00%00%C2%8D%C2%89%1D%0D%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%01%13IDATx%01%C3%95SQ%11%C3%820%0CM9%04%20!%12%26%01%09%C2%A0%C2%80%C3%A1%00%07%14%05%C3%A0%60s%00%0E%C2%90%00%0E%3A%14%C2%80%C2%83%C2%92%C2%B27.W%C2%BA%C2%96Oxw%C3%AF%C2%B2k_%C3%9E%C3%924%25%C3%BAu%C2%98%C2%92%C3%80%7B_I%60%C3%A1%23%C3%90%18sMhX%C3%96%C2%BB%C2%9C%C3%89L%C2%B8%15%C3%9E%C3%BD'%C2%9C%C2%B0V%C3%9A%C2%A0%C2%B393F%C2%92%C2%87%C3%A1!%18%C2%80%C2%AD%C3%9A%C2%BB%08%C3%B7%C3%B8%C2%B6%C2%B9%C3%8A%5CV%C3%94%C3%ABlT%C3%B5%5B%3B%C2%89%C2%B4%7B%C3%AA%C3%BB%C2%B5%C2%93%C2%9EXe%C2%B0%08%C2%95%2B%C2%9D%C2%A3%12P%C3%9D%C2%ABG%C2%89%C2%BDw%C3%9F%C3%82%25%C3%B9O%C3%98A%3BUys%C3%84%1D%C3%A5%C3%81%C3%82u%C2%B4vM%19V%C2%88%1De%20%C2%AD8%C3%A5%C3%B6'%C3%B4%1D%C3%82%0C%C2%AE%C2%A2%3E%0E%C3%87%0F%C3%AD%C3%98%C2%A4%0C%3BDN%18.%C2%857%C2%A1%C3%83%C2%A8%C2%B0%C3%922%C2%A5N%C2%A5.%C3%A5L%23%C3%80%C2%8C%C2%9E%07C%C2%89%0Drx%2C%C2%A1%C2%85%60E%05%60%C2%94%02%1A*T%C3%A0%C3%B0B%C3%AA%C2%82%C3%99%1DZ%C2%A6%C3%82%C2%9F%C3%B5%C3%93%3B%C3%A2%C3%89UX%C2%AFqd%C3%BF%C2%95Yd%C3%9A%C3%BAq4cf%C2%A6dL%C3%BD%7C%C3%AA%19%3D%C3%89%2C%3E%C3%A8o%C3%B1%04d%C3%8B~)%C3%9D%C3%BC%C3%843%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var updates_check_button = tab_settings.add("iconbutton", undefined, File.decode(updates_check_button_imgString), {name: "updates_check_button", style: "toolbutton"}); 
    updates_check_button.helpTip = "Check for Updates"; 
    updates_check_button.text = "Check For Updates - You Version 2.3.0"; 
    updates_check_button.preferredSize.width = 275; 
    updates_check_button.preferredSize.height = 40; 

var divider4 = tab_settings.add("panel", undefined, undefined, {name: "divider4"}); 
    divider4.alignment = "fill"; 

var status_updates_text = tab_settings.add("statictext", undefined, undefined, {name: "status_updates_text"}); 
    status_updates_text.text = "Status"; 
    status_updates_text.preferredSize.height = 24; 
    status_updates_text.justify = "center"; 
    status_updates_text.alignment = ["fill","top"]; 

palette.layout.layout(true);
palette.layout.resize();
palette.onResizing = palette.onResize = function () { this.layout.resize(); }

if ( palette instanceof Window ) palette.show();

// FUNCTIONS

// Arrays to store Layer Groups and Effect Groups
var layerGroups = [];
var effectGroups = [];

// Define current version
var currentVersion = "2.3.0"; // Adjust as needed

// Function to compare versions and check for updates
function compareVersions(v1, v2) {
    var v1parts = v1.split(".");
    var v2parts = v2.split(".");
    var len = Math.max(v1parts.length, v2parts.length);

    for (var i = 0; i < len; i++) {
        var a = parseInt(v1parts[i] || "0", 10);
        var b = parseInt(v2parts[i] || "0", 10);
        if (a > b) return 1;
        if (a < b) return -1;
    }
    return 0;
}

function checkForUpdates() {
    var githubApiUrl = "https://api.github.com/repos/yo-romlogunov/YO-Group-Matcher/releases/latest";

    try {
        var curlCmd = 'curl -s -H "User-Agent: YO-Group-Matcher" ' + githubApiUrl;
        var response = system.callSystem(curlCmd);

        if (response) {
            var tagNameMatch = response.match(/"tag_name":\s*"v?([0-9.]+)"/);
            var htmlUrlMatch = response.match(/"html_url":\s*"([^"]+)"/);

            if (tagNameMatch && htmlUrlMatch) {
                var latestVersion = tagNameMatch[1];
                var downloadUrl = htmlUrlMatch[1];

                if (compareVersions(latestVersion, currentVersion) > 0) {
                    status_updates_text.text = "New Update: v" + latestVersion + ".\n  Download: " + downloadUrl;
                } else {
                    status_updates_text.text = "You are using the latest version of YO Group Matcher.";
                }
            } else {
                status_updates_text.text = "Unable to process update response.";
            }
        } else {
            status_updates_text.text = "Failed to get response from GitHub API.";
        }
    } catch (e) {
        status_updates_text.text = "Error checking updates: " + e.toString();
    }
}

// Set up the onClick handler for updates_check_button
updates_check_button.onClick = function() {
    checkForUpdates();
};

// Remove layer_group_default and effect_group_default at launch
tab_layers.remove(layer_group_default);
tab_effects.remove(effect_group_default);

// Function to get all compositions in the project
function getAllCompositions() {
    var comps = [];
    for (var i = 1; i <= app.project.numItems; i++) {
        if (app.project.item(i) instanceof CompItem) {
            comps.push(app.project.item(i));
        }
    }
    return comps;
}

// Function to get selected layers in the active composition
function getSelectedLayersInActiveComp() {
    var activeComp = app.project.activeItem;
    if (!(activeComp instanceof CompItem)) {
        alert("Please ensure that the active item is a composition.");
        return null;
    }

    var selectedLayers = [];
    for (var l = 1; l <= activeComp.numLayers; l++) {
        var layer = activeComp.layer(l);
        if (layer.selected) {
            selectedLayers.push(layer);
        }
    }

    if (selectedLayers.length === 0) {
        alert("Please select layers in the active composition.");
        return null;
    }

    return selectedLayers;
}

// Function to check if a character is an English letter
function isEnglishLetter(ch) {
    return /^[A-Za-z]$/.test(ch);
}

// Function to check if a string contains only English letters and digits
function containsOnlyEnglishLetters(str) {
    return /^[A-Za-z0-9\s]+$/.test(str);
}

// Function to generate a unique prefix based on the group name
function generateUniquePrefix(groupName) {
    // Define English vowels
    var vowels = "aeiouyAEIOUY";
    var prefix = "";

    // Extract trailing digits
    var trailingDigits = groupName.match(/\d+$/);
    trailingDigits = trailingDigits ? trailingDigits[0] : "";

    // Remove trailing digits from groupName
    var nameWithoutDigits = groupName.replace(/\d+$/, '');

    // Remove spaces and get all consonants
    for (var i = 0; i < nameWithoutDigits.length; i++) {
        var ch = nameWithoutDigits.charAt(i);
        if (vowels.indexOf(ch) === -1 && isEnglishLetter(ch)) {
            prefix += ch;
        }
    }

    if (trailingDigits !== "") {
        // If there are trailing digits, take first 3 consonants and append digits
        prefix = prefix.substring(0, 3).toUpperCase() + trailingDigits;
    } else {
        // If no trailing digits, take first 4 consonants
        prefix = prefix.substring(0, 4).toUpperCase();
    }

    // Ensure the prefix is unique
    var basePrefix = prefix;
    var suffix = 1;
    while (isPrefixUsed(prefix)) {
        prefix = basePrefix + suffix;
        suffix++;
    }
    return prefix;
}


// Function to check if a prefix is already used
function isPrefixUsed(prefix) {
    for (var i = 0; i < layerGroups.length; i++) {
        if (layerGroups[i].prefix === prefix) {
            return true;
        }
    }
    return false;
}

// Функция для установки иконки кнопки Hide
function setHideButtonIcon(button, imgString) {
    var decodedImgString = decodeURIComponent(imgString);

    // Генерируем уникальное имя файла с использованием метки времени
    var timestamp = new Date().getTime();
    var tempFile = new File(Folder.temp.fsName + "/temp_hide_icon_" + timestamp + ".png");

    // Записываем декодированную строку в файл
    tempFile.open("w");
    tempFile.encoding = "BINARY";
    tempFile.write(decodedImgString);
    tempFile.close();

    // Назначаем изображение кнопке
    button.image = tempFile;

    // Принудительно перерисовываем кнопку
    button.notify("onDraw");
}

// Функция для установки иконки кнопки Solo
function setSoloButtonIcon(button, imgString) {
    var decodedImgString = decodeURIComponent(imgString);

    // Генерируем уникальное имя файла с использованием метки времени
    var timestamp = new Date().getTime();
    var tempFile = new File(Folder.temp.fsName + "/temp_solo_icon_" + timestamp + ".png");

    // Записываем декодированную строку в файл
    tempFile.open("w");
    tempFile.encoding = "BINARY";
    tempFile.write(decodedImgString);
    tempFile.close();

    // Назначаем изображение кнопке
    button.image = tempFile;

    // Принудительно перерисовываем кнопку
    button.notify("onDraw");
}


// Обновленная функция createLayerGroupUI
function createLayerGroupUI(groupName, prefix, labelColorIndex, disableLabelColor, guideCheckboxValue, lockCheckboxValue) {
    var groupPanel = tab_layers.add("panel", undefined, undefined, {name: "layer_group_" + prefix});
    groupPanel.text = groupName + " [" + prefix + "]";
    groupPanel.orientation = "row";
    groupPanel.alignChildren = ["center", "center"];
    groupPanel.spacing = 12;
    groupPanel.margins = [5, 15, 5, 10];
    groupPanel.alignment = ["fill", "top"];

    // Создаём кнопку color_label_button
    var color_label_button = groupPanel.add("iconbutton", undefined, undefined, {name: "color_label_button_" + prefix, style: "toolbutton"});
    color_label_button.helpTip = "Color Label of this Group";
    color_label_button.preferredSize.width = 28;
    color_label_button.preferredSize.height = 28;

    // Устанавливаем иконку в соответствии с цветом метки
    setColorLabelButtonIcon(color_label_button, labelColorIndex);

    // Добавляем обработчик события onClick
    color_label_button.onClick = function() {
        showGroupCompositions(groupData);
    };

    // Создаём кнопку с иконкой для управления видимостью
    var view_button = groupPanel.add("iconbutton", undefined, undefined, {name: "view_button_" + prefix, style: "toolbutton"});
    view_button.helpTip = "Toggle visibility of layers in this group across all compositions";
    view_button.preferredSize.width = 28;
    view_button.preferredSize.height = 28;

    // Инициализируем состояние видимости
    var viewState = true;

    // Устанавливаем начальную иконку
    setViewButtonIcon(view_button, view_button_on_imgString);

    // Обработчик нажатия на кнопку
    view_button.onClick = function() {
        viewState = !viewState; // Переключаем состояние

        // Меняем иконку в зависимости от состояния
        if (viewState) {
            setViewButtonIcon(view_button, view_button_on_imgString);
        } else {
            setViewButtonIcon(view_button, view_button_off_imgString);
        }

        // Выполняем те же действия, что и при нажатии на старый чекбокс
        app.beginUndoGroup("Toggle View for " + groupName);
        var layersFound = false;

        var comps = getAllCompositions();
        for (var c = 0; c < comps.length; c++) {
            var comp = comps[c];
            for (var l = 1; l <= comp.numLayers; l++) {
                var layer = comp.layer(l);
                if (layer.name.indexOf("[" + prefix + "]") === 0) {
                    layer.shy = !viewState;
                    layer.enabled = viewState;
                    layersFound = true;
                }
            }
        }

        if (!layersFound) {
            alert("Layers for group '" + groupName + "' not found in any composition.");
        }
        app.endUndoGroup();
    };

    // Создаём кнопку для Solo
var solo_button = groupPanel.add("iconbutton", undefined, undefined, {name: "solo_button_" + prefix, style: "toolbutton"});
solo_button.helpTip = "Solo this group: show only layers in this group and hide all others";
solo_button.preferredSize.width = 30;
solo_button.preferredSize.height = 30;

// Инициализируем состояние Solo
var soloState = false;
setSoloButtonIcon(solo_button, soloState ? solo_on_button_imgString : solo_off_button_imgString);

// Обработчик нажатия на кнопку Solo
solo_button.onClick = function() {
    soloState = !soloState; // Переключаем состояние Solo

    // Меняем иконку в зависимости от состояния
    if (soloState) {
        setSoloButtonIcon(solo_button, solo_on_button_imgString);
    } else {
        setSoloButtonIcon(solo_button, solo_off_button_imgString);
    }

    // Начинаем группу отмены действий
    app.beginUndoGroup("Solo Group " + groupName);
    var layersFound = false;

    var comps = getAllCompositions();
    for (var c = 0; c < comps.length; c++) {
        var comp = comps[c];
        for (var l = 1; l <= comp.numLayers; l++) {
            var layer = comp.layer(l);
            if (layer.name.indexOf("[" + prefix + "]") === 0) {
                layer.shy = false; // Показываем слои в выбранной группе
                layersFound = true;
            } else {
                layer.shy = soloState; // Скрываем все остальные слои, если Solo активен
            }
        }
    }

    if (soloState) {
        // Если Solo активен, отключаем Solo для других групп
        for (var i = 0; i < layerGroups.length; i++) {
            if (layerGroups[i].soloButton !== solo_button && layerGroups[i].soloState) {
                layerGroups[i].soloState = false;
                setSoloButtonIcon(layerGroups[i].soloButton, solo_off_button_imgString);
            }
        }
    }

    if (!layersFound) {
        alert("Layers for group '" + groupName + "' not found in any composition.");
    }
    app.endUndoGroup();
};


   // Создаём кнопку для Hide
var hide_button = groupPanel.add("iconbutton", undefined, undefined, {name: "hide_button_" + prefix, style: "toolbutton"});
hide_button.helpTip = "Toggle hide for layers in this group without disabling them";
hide_button.preferredSize.width = 30;
hide_button.preferredSize.height = 30;

// Инициализируем состояние Hide
var hideState = false;
setHideButtonIcon(hide_button, hideState ? hide_on_button_imgString : hide_off_button_imgString);

// Обработчик нажатия на кнопку Hide
hide_button.onClick = function() {
    hideState = !hideState; // Переключаем состояние

    // Меняем иконку в зависимости от состояния
    if (hideState) {
        setHideButtonIcon(hide_button, hide_on_button_imgString);
    } else {
        setHideButtonIcon(hide_button, hide_off_button_imgString);
    }

    // Начинаем группу отмены действий
    app.beginUndoGroup("Toggle Hide for " + groupName);
    var layersFound = false;

    var comps = getAllCompositions();
    for (var c = 0; c < comps.length; c++) {
        var comp = comps[c];
        for (var l = 1; l <= comp.numLayers; l++) {
            var layer = comp.layer(l);
            if (layer.name.indexOf("[" + prefix + "]") === 0) {
                layer.shy = hideState; // Устанавливаем состояние shy
                layersFound = true;
            }
        }
    }

    if (!layersFound) {
        alert("Layers for group '" + groupName + "' not found in any composition.");
    }
    app.endUndoGroup();
};

    // Добавляем разделитель между Hide и Add Layer
    var divider1 = groupPanel.add("panel", undefined, undefined, {name: "divider1"});
    divider1.alignment = "fill";
    divider1.graphics.backgroundColor = divider1.graphics.newBrush(divider1.graphics.BrushType.SOLID_COLOR, [0.5, 0.5, 0.5, 1]); // Серый цвет
    divider1.preferredSize.height = 1;

    var add_layer_button = groupPanel.add("iconbutton", undefined, File.decode(add_layer_button_imgString), {name: "add_layer_button_" + prefix, style: "toolbutton"});
    add_layer_button.helpTip = "Add selected layers to this group across all compositions";
    add_layer_button.text = "Add Layer";
    add_layer_button.preferredSize.width = 105;
    add_layer_button.preferredSize.height = 35;

    var edit_group_layers_button = groupPanel.add("iconbutton", undefined, File.decode(edit_group_layers_button_imgString), {name: "edit_group_layers_button_" + prefix, style: "toolbutton"});
    edit_group_layers_button.helpTip = "Rename and settings this Group";
    edit_group_layers_button.preferredSize.width = 35;
    edit_group_layers_button.preferredSize.height = 35;

    var delete_group_layers_button = groupPanel.add("iconbutton", undefined, File.decode(delete_group_layers_button_imgString), {name: "delete_group_layers_button_" + prefix, style: "toolbutton"});
    delete_group_layers_button.helpTip = "Delete this Layer Group";
    delete_group_layers_button.preferredSize.width = 35;
    delete_group_layers_button.preferredSize.height = 35;

      // Сохраняем данные группы
      var groupData = {
        name: groupName,
        prefix: prefix,
        panel: groupPanel,
        viewButton: view_button,
        viewState: viewState,
        soloButton: solo_button, // Новая кнопка Solo
        soloState: soloState,   // Состояние Solo
        hideButton: hide_button, // Новая кнопка Hide
        hideState: hideState,    // Состояние Hide
        addButton: add_layer_button,
        deleteButton: delete_group_layers_button,
        editButton: edit_group_layers_button,
        labelColorIndex: labelColorIndex,
        disableLabelColor: disableLabelColor,
        colorLabelButton: color_label_button,
        guideCheckbox: { value: guideCheckboxValue },
        lockCheckbox: { value: lockCheckboxValue }
    };

    // Объект для хранения оригинальных состояний слоев для функции Solo
    var originalLayerStates = {};

    // Обработчик для кнопки Add Layer
    add_layer_button.onClick = function() {
        var layers = getSelectedLayersInActiveComp();
        if (!layers) return;

        app.beginUndoGroup("Add Layers to " + groupName);
        var layersFound = false;

        for (var i = 0; i < layers.length; i++) {
            var layer = layers[i];
            var newName = "[" + prefix + "] " + layer.name.replace(/^\[.*?\]\s*/, "");
            layer.name = newName;
            layersFound = true;

            // Применение цвета метки, если не отключено
            if (!groupData.disableLabelColor) {
                layer.label = groupData.labelColorIndex;
            }

            // Установка состояния Guide Layer
            if (groupData.guideCheckbox && typeof groupData.guideCheckbox.value !== 'undefined') {
                layer.guideLayer = groupData.guideCheckbox.value;
            }

            // Установка состояния Lock Layers
            if (groupData.lockCheckbox && typeof groupData.lockCheckbox.value !== 'undefined') {
                layer.locked = groupData.lockCheckbox.value;
            }

            // Устанавливаем видимость слоя в соответствии с состоянием viewState
            layer.enabled = groupData.viewState;
        }

        if (!layersFound) {
            alert("Please select layers to add to " + groupName + ".");
        }

        app.endUndoGroup();
    };   

    // Event handler for the Edit button
    edit_group_layers_button.onClick = function() {
    var dialog = new Window("dialog", "Settings Layer Group");
    dialog.orientation = "column";
    dialog.alignChildren = ["fill", "top"];

    // Первая группа - Name and Prefix
    var namePrefixPanel = dialog.add("panel", undefined, "Name and Prefix");
    namePrefixPanel.orientation = "column";
    namePrefixPanel.alignChildren = ["fill", "top"];
    namePrefixPanel.margins = [10, 15, 10, 10];

    var groupNameGroup = namePrefixPanel.add("group");
    groupNameGroup.add("statictext", undefined, "Group Name:");
    var groupNameInput = groupNameGroup.add("edittext", undefined, groupData.name);
    groupNameInput.characters = 15;

    var prefixGroup = namePrefixPanel.add("group");
    prefixGroup.add("statictext", undefined, "Prefix:");
    var prefixInput = prefixGroup.add("edittext", undefined, groupData.prefix);
    prefixInput.characters = 5;

    // Добавление чекбокса для автогенерации префикса
    var autoPrefixGroup = namePrefixPanel.add("group");
    autoPrefixGroup.orientation = "row";
    autoPrefixGroup.alignChildren = ["left", "center"];
    autoPrefixGroup.add("statictext", undefined, "Auto-generate Prefix:");
    var autoPrefixCheckbox = autoPrefixGroup.add("checkbox", undefined, "");
    autoPrefixCheckbox.value = false; // При редактировании группы по умолчанию выключено

    // Если автогенерация включена, отключаем ввод префикса
    prefixInput.enabled = !autoPrefixCheckbox.value;

    // Обработчик для изменения состояния чекбокса
    autoPrefixCheckbox.onClick = function() {
        prefixInput.enabled = !autoPrefixCheckbox.value;
        if (autoPrefixCheckbox.value) {
            if (containsOnlyEnglishLetters(groupNameInput.text)) {
                prefixInput.text = generateUniquePrefix(groupNameInput.text);
            } else {
                autoPrefixCheckbox.value = false;
                prefixInput.enabled = true;
                alert("Auto-prefix generation is disabled for group names containing non-English characters or special symbols.");
            }
        }
    };

    // Обработчик для изменения имени группы
    groupNameInput.onChanging = function() {
        if (autoPrefixCheckbox.value) {
            if (containsOnlyEnglishLetters(groupNameInput.text)) {
                prefixInput.text = generateUniquePrefix(groupNameInput.text);
            } else {
                autoPrefixCheckbox.value = false;
                prefixInput.enabled = true;
                prefixInput.text = "";
                alert("Auto-prefix generation is disabled for group names containing non-English characters or special symbols.");
            }
        }
    };
        // Вторая группа - Color Label
        var colorLabelPanel = dialog.add("panel", undefined, "Color Label");
        colorLabelPanel.orientation = "column";
        colorLabelPanel.alignChildren = ["fill", "top"];
        colorLabelPanel.margins = [10, 15, 10, 10];

        var labelColorGroup = colorLabelPanel.add("group");
        labelColorGroup.add("statictext", undefined, "Label Color:");
        var labelColorDropdown = labelColorGroup.add("dropdownlist", undefined, [
            "None", "Red", "Yellow", "Aqua", "Pink", "Lavender", "Peach", "Sea Foam",
            "Blue", "Green", "Purple", "Orange", "Brown", "Fuchsia", "Cyan", "Sandstone"
        ]);
        labelColorDropdown.selection = groupData.labelColorIndex;
        labelColorDropdown.helpTip = "Select a label color for layers in this group";

        var disableLabelColorCheckbox = colorLabelPanel.add("checkbox", undefined, "Disable label color assignment");
        disableLabelColorCheckbox.value = groupData.disableLabelColor;
        disableLabelColorCheckbox.helpTip = "Disable automatic label color assignment to layers in this group";

        // Установка начального состояния выпадающего списка
        labelColorDropdown.enabled = !disableLabelColorCheckbox.value;

        // Обработчик события для чекбокса
        disableLabelColorCheckbox.onClick = function() {
            labelColorDropdown.enabled = !disableLabelColorCheckbox.value;
        };

        // Третья группа - Parameters
        var parametersPanel = dialog.add("panel", undefined, "Parameters");
        parametersPanel.orientation = "column";
        parametersPanel.alignChildren = ["fill", "top"];
        parametersPanel.margins = [10, 15, 10, 10];

        // Добавление чекбокса для Guide Layer
        var guideLayerGroup = parametersPanel.add("group");
        guideLayerGroup.orientation = "row";
        guideLayerGroup.alignChildren = ["left", "center"];
        guideLayerGroup.spacing = 10;

        guideLayerGroup.add("statictext", undefined, "Guide Layer:");
        var guideLayerCheckbox = guideLayerGroup.add("checkbox", undefined, "Enable Guide Layer");
        guideLayerCheckbox.value = groupData.guideCheckbox ? groupData.guideCheckbox.value : false;
        guideLayerCheckbox.helpTip = "Enable or disable Guide Layer mode for layers in this group";

        // Добавление чекбокса для Lock Layers
        var lockLayerGroup = parametersPanel.add("group");
        lockLayerGroup.orientation = "row";
        lockLayerGroup.alignChildren = ["left", "center"];
        lockLayerGroup.spacing = 10;

        lockLayerGroup.add("statictext", undefined, "Lock Layers (Beta):");
        var lockLayerCheckbox = lockLayerGroup.add("checkbox", undefined, "Enable Lock Layers");
        lockLayerCheckbox.value = groupData.lockCheckbox ? groupData.lockCheckbox.value : false;
        lockLayerCheckbox.helpTip = "Enable or disable locking of layers in this group";

        // Обработчик события для Lock Layers
        lockLayerCheckbox.onClick = function() {
            app.beginUndoGroup("Toggle Lock Layers for " + groupNameInput.text);
            var comps = getAllCompositions();
            var layersFound = false;

            for (var c = 0; c < comps.length; c++) {
                var comp = comps[c];
                for (var l = 1; l <= comp.numLayers; l++) {
                    var layer = comp.layer(l);
                    if (layer.name.indexOf("[" + prefixInput.text + "]") === 0) {
                        layer.locked = lockLayerCheckbox.value;
                        layersFound = true;
                    }
                }
            }

            if (!layersFound) {
                alert("Layers for group '" + groupNameInput.text + "' not found in any composition.");
            }
            app.endUndoGroup();
        };

        var buttonsGroup = dialog.add("group");
    buttonsGroup.alignment = "center";
    var okButton = buttonsGroup.add("button", undefined, "OK");
    okButton.helpTip = "Confirm changes to the Layer Group";
    var cancelButton = buttonsGroup.add("button", undefined, "Cancel");
    cancelButton.helpTip = "Cancel editing the Layer Group";

    okButton.onClick = function() {
        var newGroupName = groupNameInput.text;
        var newPrefix = prefixInput.text;
        var newLabelColorIndex = labelColorDropdown.selection ? labelColorDropdown.selection.index : 0;
        var newDisableLabelColor = disableLabelColorCheckbox.value;
        var newGuideLayer = guideLayerCheckbox.value;
        var newLockLayers = lockLayerCheckbox.value;

        if (newGroupName === "") {
            alert("Please enter a group name.");
            return;
        }

        if (newPrefix === "") {
            if (autoPrefixCheckbox.value) {
                newPrefix = generateUniquePrefix(newGroupName);
                prefixInput.text = newPrefix;
            } else {
                alert("Please enter a prefix.");
                return;
            }
        }

        app.beginUndoGroup("Edit Layer Group " + groupData.name);

        var comps = getAllCompositions();
        for (var c = 0; c < comps.length; c++) {
            var comp = comps[c];
            for (var l = 1; l <= comp.numLayers; l++) {
                var layer = comp.layer(l);
                if (layer.name.indexOf("[" + groupData.prefix + "]") === 0) {
                    var baseName = layer.name.replace("[" + groupData.prefix + "] ", "");
                    layer.name = "[" + newPrefix + "] " + baseName;

                    // Обновление цвета метки, если не отключено
                    if (!newDisableLabelColor) {
                        layer.label = newLabelColorIndex;
                    }

                    // Обновление состояния Guide Layer
                    layer.guideLayer = newGuideLayer;

                    // Обновление состояния Lock Layers
                    layer.locked = newLockLayers;
                }
            }
        }
        // Обновление информации о группе
        groupData.name = newGroupName;
        groupData.prefix = newPrefix;
        groupData.labelColorIndex = newLabelColorIndex;
        groupData.disableLabelColor = newDisableLabelColor;
        groupData.guideCheckbox.value = newGuideLayer;
        groupData.lockCheckbox.value = newLockLayers;
        groupPanel.text = newGroupName + " [" + newPrefix + "]";

        // Обновление иконки кнопки color_label_button
        setColorLabelButtonIcon(groupData.colorLabelButton, newLabelColorIndex);

        palette.layout.layout(true);
        palette.layout.resize();

        app.endUndoGroup();
        dialog.close();
    };

    cancelButton.onClick = function() {
        dialog.close();
    };

    dialog.center();
    dialog.show();
};
    // Event handler for the Delete Group button
    delete_group_layers_button.onClick = function() {
        app.beginUndoGroup("Delete Layer Group " + groupName);
        var layersFound = false;

        var comps = getAllCompositions();
        for (var c = 0; c < comps.length; c++) {
            var comp = comps[c];
            for (var l = comp.numLayers; l >= 1; l--) {
                var layer = comp.layer(l);
                if (layer.name.indexOf("[" + prefix + "]") === 0) {
                    var originalName = layer.name.replace("[" + prefix + "] ", "");
                    layer.name = originalName;
                    layersFound = true;
                }
            }
        }

        if (!layersFound) {
            alert("Layers for group '" + groupName + "' not found in any composition.");
        }

        tab_layers.remove(groupPanel);

        palette.layout.layout(true);
        palette.layout.resize();

        for (var j = 0; j < layerGroups.length; j++) {
            if (layerGroups[j].panel === groupPanel) {
                layerGroups.splice(j, 1);
                break;
            }
        }
        app.endUndoGroup();
    };

    layerGroups.push(groupData);

    palette.layout.layout(true);
}

// Function to toggle Solo off for other groups
function toggleSolo(groupData, isSolo) {
    // Implement as needed
}

// Добавляем функцию trim
function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

// Обработчик события для кнопки "Create a New Layer Group"
create_group_layers_button.onClick = function() {
    var dialog = new Window("dialog", "Add New Layer Group");
    dialog.orientation = "column";
    dialog.alignChildren = ["fill", "top"];

    // Первая группа: Name and Prefix
    var nameAndPrefixPanel = dialog.add("panel", undefined, "Name and Prefix");
    nameAndPrefixPanel.orientation = "column";
    nameAndPrefixPanel.alignChildren = ["fill", "top"];

    var groupNameGroup = nameAndPrefixPanel.add("group");
    groupNameGroup.add("statictext", undefined, "Group Name:");
    var groupNameInput = groupNameGroup.add("edittext", undefined, "");
    groupNameInput.characters = 15;

    var prefixGroup = nameAndPrefixPanel.add("group");
    prefixGroup.add("statictext", undefined, "Prefix:");
    var prefixInput = prefixGroup.add("edittext", undefined, "");
    prefixInput.characters = 5;

    // Добавление чекбокса для автогенерации префикса
    var autoPrefixGroup = nameAndPrefixPanel.add("group");
    autoPrefixGroup.orientation = "row";
    autoPrefixGroup.alignChildren = ["left", "center"];
    autoPrefixGroup.add("statictext", undefined, "Auto-generate Prefix:");
    var autoPrefixCheckbox = autoPrefixGroup.add("checkbox", undefined, "");
    autoPrefixCheckbox.value = true;

    // Если автогенерация включена, отключаем ввод префикса
    prefixInput.enabled = !autoPrefixCheckbox.value;

    // Обработчик для изменения состояния чекбокса
    autoPrefixCheckbox.onClick = function() {
        prefixInput.enabled = !autoPrefixCheckbox.value;
        if (autoPrefixCheckbox.value) {
            if (containsOnlyEnglishLetters(groupNameInput.text)) {
                prefixInput.text = generateUniquePrefix(groupNameInput.text);
            } else {
                autoPrefixCheckbox.value = false;
                prefixInput.enabled = true;
                alert("Auto-prefix generation is disabled for group names containing non-English characters.");
            }
        }
    };

    // Обработчик для изменения имени группы
    groupNameInput.onChanging = function() {
        if (autoPrefixCheckbox.value) {
            if (containsOnlyEnglishLetters(groupNameInput.text)) {
                prefixInput.text = generateUniquePrefix(groupNameInput.text);
            } else {
                autoPrefixCheckbox.value = false;
                prefixInput.enabled = true;
                prefixInput.text = "";
                alert("Auto-prefix generation is disabled for group names containing non-English characters.");
            }
        }
    };

    // Вторая группа: Color Label
    var colorLabelPanel = dialog.add("panel", undefined, "Color Label");
    colorLabelPanel.orientation = "column";
    colorLabelPanel.alignChildren = ["fill", "top"];

    var labelColorGroup = colorLabelPanel.add("group");
    labelColorGroup.add("statictext", undefined, "Label Color:");
    var labelColorDropdown = labelColorGroup.add("dropdownlist", undefined, [
        "None", "Red", "Yellow", "Aqua", "Pink", "Lavender", "Peach", "Sea Foam",
        "Blue", "Green", "Purple", "Orange", "Brown", "Fuchsia", "Cyan", "Sandstone"
    ]);
    labelColorDropdown.selection = 0; // По умолчанию 'None'
    labelColorDropdown.helpTip = "Select a label color for layers in this group";

    // Добавление чекбокса для отключения назначения цвета метки
    var disableLabelColorCheckbox = colorLabelPanel.add("checkbox", undefined, "Disable label color assignment");
    disableLabelColorCheckbox.value = false;
    disableLabelColorCheckbox.helpTip = "Disable automatic label color assignment to layers in this group";

    // Установить начальное состояние выпадающего списка
    labelColorDropdown.enabled = !disableLabelColorCheckbox.value;

    // Добавить обработчик события для чекбокса
    disableLabelColorCheckbox.onClick = function() {
        labelColorDropdown.enabled = !disableLabelColorCheckbox.value;
    };

    var buttonsGroup = dialog.add("group");
    buttonsGroup.alignment = "center";
    var okButton = buttonsGroup.add("button", undefined, "OK");
    var cancelButton = buttonsGroup.add("button", undefined, "Cancel");

    okButton.onClick = function() {
        var groupName = groupNameInput.text;
        var prefix = prefixInput.text;
        var labelColorIndex = labelColorDropdown.selection ? labelColorDropdown.selection.index : 0; // Индекс выбранного цвета
        var disableLabelColor = disableLabelColorCheckbox.value;

        if (groupName === "") {
            alert("Please enter a group name.");
            return;
        }

        if (prefix === "") {
            if (autoPrefixCheckbox.value) {
                prefix = generateUniquePrefix(groupName);
                prefixInput.text = prefix;
            } else {
                alert("Please enter a prefix.");
                return;
            }
        }

        createLayerGroupUI(groupName, prefix, labelColorIndex, disableLabelColor, false, false);
        dialog.close();
    };

    cancelButton.onClick = function() {
        dialog.close();
    };

    dialog.center();
    dialog.show();
};

//FUNCTION VIEW COMPS LAYERS

function showGroupCompositions(groupData) {
    var groupName = groupData.name;
    var groupPrefix = groupData.prefix;

    // Получаем список композиций, содержащих эту группу
    var compsWithGroup = [];

    var comps = getAllCompositions();
    for (var c = 0; c < comps.length; c++) {
        var comp = comps[c];
        var layerCount = 0; // Счётчик слоёв группы в композиции
        var layerNamesArray = []; // Массив для хранения имён слоёв группы

        for (var l = 1; l <= comp.numLayers; l++) {
            var layer = comp.layer(l);
            if (layer.name.indexOf("[" + groupPrefix + "]") === 0) {
                layerCount++;
                layerNamesArray.push(layer.name); // Собираем имя слоя
            }
        }
        if (layerCount > 0) {
            compsWithGroup.push({
                comp: comp,
                layerCount: layerCount,
                layerNames: layerNamesArray // Добавляем массив имён слоёв
            });
        }
    }

    // Создаём диалоговое окно
    var dialog = new Window("dialog", "Compositions with group '" + groupName + "'");
    dialog.orientation = "column";
    dialog.alignChildren = ["fill", "top"];
    dialog.spacing = 10;
    dialog.margins = 15;

    if (compsWithGroup.length === 0) {
        dialog.add("statictext", undefined, "No compositions containing this group.");
    } else {

        // Добавляем выпадающий список для выбора порядка сортировки
        var sortGroup = dialog.add("group");
        sortGroup.orientation = "row";
        sortGroup.alignChildren = ["left", "center"];
        sortGroup.spacing = 10;

        sortGroup.add("statictext", undefined, "Sort by layer count:");
        var sortDropdown = sortGroup.add("dropdownlist", undefined, ["Descending", "Ascending"]);
        sortDropdown.selection = 0; // По умолчанию "Descending"

        // Функция сортировки
        function sortCompositions(compsArray, order) {
            compsArray.sort(function(a, b) {
                if (order === "Descending") {
                    return b.layerCount - a.layerCount;
                } else {
                    return a.layerCount - b.layerCount;
                }
            });
        }

        // Создаём listbox для отображения композиций
        var listbox = dialog.add("listbox", undefined, undefined, {multiselect: false});
        listbox.preferredSize = [400, 200];

        // Сортируем массив по убыванию перед первоначальным отображением
        sortCompositions(compsWithGroup, sortDropdown.selection.text);

        // Добавляем элементы в listbox
        for (var i = 0; i < compsWithGroup.length; i++) {
            var compName = compsWithGroup[i].comp.name;
            var layerCount = compsWithGroup[i].layerCount;
            var itemText = compName + " [" + layerCount + " layer" + (layerCount !== 1 ? "s" : "") + "]";
            listbox.add("item", itemText);
        }

        // Создаём кнопку для открытия выбранной композиции
        var openButton = dialog.add("button", undefined, "Open Selected Composition");
        openButton.enabled = false; // Изначально отключаем кнопку

        // Обработчик нажатия на кнопку для открытия композиции
        openButton.onClick = function() {
            // alert("Кнопка нажата"); // Для отладки
            var selectedItem = listbox.selection;
            if (selectedItem) {
                var selectedText = selectedItem.text;
                var compName = selectedText.split(" [")[0];
                for (var i = 0; i < compsWithGroup.length; i++) {
                    if (compsWithGroup[i].comp.name === compName) {
                        compsWithGroup[i].comp.openInViewer(); // Открываем композицию
                        dialog.close();
                        break;
                    }
                }
            }
        };

        // Создаём группу для отображения имён слоёв
        var layersGroup = dialog.add("group");
        layersGroup.orientation = "column";
        layersGroup.alignChildren = ["fill", "top"];
        layersGroup.spacing = 10;

        var layersLabel = layersGroup.add("statictext", undefined, "Layers in selected composition:");
        var layersListbox = layersGroup.add("listbox", undefined, undefined, {multiselect: false});
        layersListbox.preferredSize = [400, 100];

        // Обработчик изменения выбора в списке композиций
        listbox.onChange = function() {
            layersListbox.removeAll();
            var selectedItem = listbox.selection;
            if (selectedItem) {
                var selectedText = selectedItem.text;
                var compName = selectedText.split(" [")[0];
                for (var i = 0; i < compsWithGroup.length; i++) {
                    if (compsWithGroup[i].comp.name === compName) {
                        var layerNames = compsWithGroup[i].layerNames;
                        for (var j = 0; j < layerNames.length; j++) {
                            layersListbox.add("item", layerNames[j]);
                        }
                        break;
                    }
                }
            }
            openButton.enabled = listbox.selection !== null; // Активируем кнопку при выборе элемента
        };

        // Обработчик изменения выбора в выпадающем списке сортировки
        sortDropdown.onChange = function() {
            var selectedOrder = sortDropdown.selection.text;
            sortCompositions(compsWithGroup, selectedOrder);
            listbox.removeAll();

            // Заполняем listbox отсортированными композициями
            for (var i = 0; i < compsWithGroup.length; i++) {
                var compName = compsWithGroup[i].comp.name;
                var layerCount = compsWithGroup[i].layerCount;
                var itemText = compName + " [" + layerCount + " layer" + (layerCount !== 1 ? "s" : "") + "]";
                listbox.add("item", itemText);
            }
        };
    }

    // Добавляем кнопку Close
    var closeButton = dialog.add("button", undefined, "Close", {name: "close"});

    closeButton.onClick = function() {
        dialog.close();
    };

    dialog.center();
    dialog.show();
}


//EFFECTS GROUP

// Function to create a new Effect Group UI
function createEffectGroupUI(groupName, prefix) {
    var groupPanel = tab_effects.add("panel", undefined, undefined, {name: "effect_group_" + prefix});
    groupPanel.text = groupName + " [" + prefix + "]";
    groupPanel.orientation = "row";
    groupPanel.alignChildren = ["center", "center"];
    groupPanel.spacing = 12;
    groupPanel.margins = [5, 15, 5, 10];
    groupPanel.alignment = ["fill", "top"];

    var view_effects_checkbox = groupPanel.add("checkbox", undefined, undefined, {name: "view_effects_checkbox_" + prefix});
    view_effects_checkbox.helpTip = "Toggle visibility of effects in this group across all compositions";
    view_effects_checkbox.text = "View";
    view_effects_checkbox.value = true;

        // Add the Solo checkbox after the Add Effect button
    var solo_checkbox = groupPanel.add("checkbox", undefined, undefined, {name: "solo_checkbox_" + prefix});
    solo_checkbox.text = "Solo";
    solo_checkbox.helpTip = "Toggle solo mode for this effects group";
    solo_checkbox.value = false;

    
    var add_effect_button = groupPanel.add("iconbutton", undefined, File.decode(add_layer_button_imgString), {name: "add_effect_button_" + prefix, style: "toolbutton"});
    add_effect_button.helpTip = "Add selected effects to this group across all compositions";
    add_effect_button.text = "Add Effect";
    add_effect_button.preferredSize.width = 120;
    add_effect_button.preferredSize.height = 35;


// Event handler for the Solo checkbox
solo_checkbox.onClick = function() {
    app.beginUndoGroup("Toggle Solo for " + groupName);
    
    var comps = getAllCompositions();
    for (var c = 0; c < comps.length; c++) {
        var comp = comps[c];
        for (var l = 1; l <= comp.numLayers; l++) {
            var layer = comp.layer(l);
            if (layer.property("Effects")) {
                var hasGroupEffect = false;
                var effects = layer.property("Effects");
                // Check if this layer has effects from this group
                for (var i = 1; i <= effects.numProperties; i++) {
                    var effect = effects.property(i);
                    if (effect.name.indexOf("[" + prefix + "]") === 0) {
                        hasGroupEffect = true;
                        break;
                    }
                }
                
                if (hasGroupEffect) {
                    // Enable or disable effects based on solo state
                    for (var i = 1; i <= effects.numProperties; i++) {
                        var effect = effects.property(i);
                        if (effect.name.indexOf("[" + prefix + "]") === 0) {
                            // Effects from this group
                            effect.enabled = groupData.viewCheckbox.value;
                        } else {
                            // Other effects
                            effect.enabled = !solo_checkbox.value;
                        }
                    }
                }
            }
        }
    }
    app.endUndoGroup();
};

    var edit_group_effects_button = groupPanel.add("iconbutton", undefined, File.decode(edit_group_layers_button_imgString), {name: "edit_group_effects_button_" + prefix, style: "toolbutton"});
    edit_group_effects_button.helpTip = "Rename and settings this Group";
    edit_group_effects_button.text = "";
    edit_group_effects_button.preferredSize.width = 35;
    edit_group_effects_button.preferredSize.height = 35;

    var delete_group_effects_button = groupPanel.add("iconbutton", undefined, File.decode(delete_group_layers_button_imgString), {name: "delete_group_effects_button_" + prefix, style: "toolbutton"});
    delete_group_effects_button.helpTip = "Delete this Effects Group";
    delete_group_effects_button.text = "";
    delete_group_effects_button.preferredSize.width = 35;
    delete_group_effects_button.preferredSize.height = 35;

    // Save group data
var groupData = {
    name: groupName,
    prefix: prefix,
    panel: groupPanel,
    viewCheckbox: view_effects_checkbox,
    addButton: add_effect_button,
    deleteButton: delete_group_effects_button,
    editButton: edit_group_effects_button,
    soloCheckbox: solo_checkbox // Добавьте эту строку
};

    // Event handler for the View checkbox
    view_effects_checkbox.onClick = function() {
        app.beginUndoGroup("Toggle View for " + groupName);
        var effectsFound = false;

        var comps = getAllCompositions();
        for (var c = 0; c < comps.length; c++) {
            var comp = comps[c];
            for (var l = 1; l <= comp.numLayers; l++) {
                var layer = comp.layer(l);
                if (layer.property("Effects")) {
                    for (var i = 1; i <= layer.property("Effects").numProperties; i++) {
                        var effect = layer.property("Effects").property(i);
                        if (effect.name.indexOf("[" + prefix + "]") === 0) {
                            effect.enabled = view_effects_checkbox.value;
                            effectsFound = true;
                        }
                    }
                }
            }
        }

        if (!effectsFound) {
            alert("Effects for group '" + groupName + "' not found in any composition.");
        }
        app.endUndoGroup();
    };

    // Event handler for the Add Effect button
    add_effect_button.onClick = function() {
        var layers = getSelectedLayersInActiveComp();
        if (!layers) return;

        app.beginUndoGroup("Add Effects to " + groupName);
        var effectsFound = false;

        for (var j = 0; j < layers.length; j++) {
            var layer = layers[j];
            var selectedProps = layer.selectedProperties;

            if (selectedProps.length === 0) {
                continue;
            }

            for (var i = 0; i < selectedProps.length; i++) {
                var effect = selectedProps[i];
                if (effect.matchName !== "ADBE Effect Parade" && effect.parentProperty.matchName === "ADBE Effect Parade") {
                    var newName = "[" + prefix + "] " + effect.name.replace(/^\[.*?\]\s*/, "");
                    effect.name = newName;
                    effectsFound = true;
                }
            }
        }

        if (!effectsFound) {
            alert("Please select effects to add to " + groupName + ".");
        }

        app.endUndoGroup();
    };

    // Event handler for the Edit button
    edit_group_effects_button.onClick = function() {
        var dialog = new Window("dialog", "Edit Effect Group");
        dialog.orientation = "column";
        dialog.alignChildren = ["fill", "top"];

        // Первая группа - Name and Prefix
        var namePrefixPanel = dialog.add("panel", undefined, "Name and Prefix");
        namePrefixPanel.orientation = "column";
        namePrefixPanel.alignChildren = ["fill", "top"];
        namePrefixPanel.margins = [10, 15, 10, 10];

        var groupNameGroup = namePrefixPanel.add("group");
        groupNameGroup.add("statictext", undefined, "Group Name:");
        var groupNameInput = groupNameGroup.add("edittext", undefined, groupData.name);
        groupNameInput.characters = 15;

        var prefixGroup = namePrefixPanel.add("group");
        prefixGroup.add("statictext", undefined, "Prefix:");
        var prefixInput = prefixGroup.add("edittext", undefined, groupData.prefix);
        prefixInput.characters = 5;

        // Добавление чекбокса для автогенерации префикса
        var autoPrefixGroup = namePrefixPanel.add("group");
        autoPrefixGroup.orientation = "row";
        autoPrefixGroup.alignChildren = ["left", "center"];
        autoPrefixGroup.add("statictext", undefined, "Auto-generate Prefix:");
        var autoPrefixCheckbox = autoPrefixGroup.add("checkbox", undefined, "");
        autoPrefixCheckbox.value = false; // При редактировании группы по умолчанию выключено

        // Если автогенерация включена, отключаем ввод префикса
        prefixInput.enabled = !autoPrefixCheckbox.value;

        // Обработчик для изменения состояния чекбокса
        autoPrefixCheckbox.onClick = function() {
            prefixInput.enabled = !autoPrefixCheckbox.value;
            if (autoPrefixCheckbox.value) {
                if (containsOnlyEnglishLetters(groupNameInput.text)) {
                    prefixInput.text = generateUniquePrefix(groupNameInput.text);
                } else {
                    autoPrefixCheckbox.value = false;
                    prefixInput.enabled = true;
                    alert("Auto-prefix generation is disabled for group names containing non-English characters or special symbols.");
                }
            }
        };

        // Обработчик для изменения имени группы
        groupNameInput.onChanging = function() {
            if (autoPrefixCheckbox.value) {
                if (containsOnlyEnglishLetters(groupNameInput.text)) {
                    prefixInput.text = generateUniquePrefix(groupNameInput.text);
                } else {
                    autoPrefixCheckbox.value = false;
                    prefixInput.enabled = true;
                    prefixInput.text = "";
                    alert("Auto-prefix generation is disabled for group names containing non-English characters or special symbols.");
                }
            }
        };

        var buttonsGroup = dialog.add("group");
        buttonsGroup.alignment = "center";
        var okButton = buttonsGroup.add("button", undefined, "OK");
        var cancelButton = buttonsGroup.add("button", undefined, "Cancel");

        okButton.onClick = function() {
            var newGroupName = groupNameInput.text;
            var newPrefix = prefixInput.text;

            if (newGroupName === "" || newPrefix === "") {
                alert("Please enter both a group name and prefix.");
            } else {
                app.beginUndoGroup("Edit Effect Group " + groupData.name);

                var comps = getAllCompositions();
                for (var c = 0; c < comps.length; c++) {
                    var comp = comps[c];
                    for (var l = 1; l <= comp.numLayers; l++) {
                        var layer = comp.layer(l);
                        if (layer.property("Effects")) {
                            for (var i = 1; i <= layer.property("Effects").numProperties; i++) {
                                var effect = layer.property("Effects").property(i);
                                if (effect.name.indexOf("[" + groupData.prefix + "]") === 0) {
                                    var baseName = effect.name.replace("[" + groupData.prefix + "] ", "");
                                    effect.name = "[" + newPrefix + "] " + baseName;
                                }
                            }
                        }
                    }
                }

                // Обновление информации о группе
                groupData.name = newGroupName;
                groupData.prefix = newPrefix;
                groupPanel.text = newGroupName + " [" + newPrefix + "]";

                palette.layout.layout(true);
                palette.layout.resize();

                app.endUndoGroup();
                dialog.close();
            }
        };

        cancelButton.onClick = function() {
            dialog.close();
        };

        dialog.center();
        dialog.show();
    };

    // Event handler for the Delete Group button
    delete_group_effects_button.onClick = function() {
        app.beginUndoGroup("Delete Effect Group " + groupName);
        var effectsFound = false;

        var comps = getAllCompositions();
        for (var c = 0; c < comps.length; c++) {
            var comp = comps[c];
            for (var l = 1; l <= comp.numLayers; l++) {
                var layer = comp.layer(l);
                if (layer.property("Effects")) {
                    for (var i = layer.property("Effects").numProperties; i >= 1; i--) {
                        var effect = layer.property("Effects").property(i);
                        if (effect.name.indexOf("[" + prefix + "]") === 0) {
                            var originalName = effect.name.replace("[" + prefix + "] ", "");
                            effect.name = originalName;
                            effectsFound = true;
                        }
                    }
                }
            }
        }

        if (!effectsFound) {
            alert("Effects for group '" + groupName + "' not found in any composition.");
        }

        tab_effects.remove(groupPanel);

        palette.layout.layout(true);
        palette.layout.resize();

        for (var j = 0; j < effectGroups.length; j++) {
            if (effectGroups[j].panel === groupPanel) {
                effectGroups.splice(j, 1);
                break;
            }
        }
        app.endUndoGroup();
    };

    effectGroups.push(groupData);

    palette.layout.layout(true);
}

// Event handler for the Create a New Effects Group button
create_group_effects_button.onClick = function() {
    var dialog = new Window("dialog", "Add New Effects Group");
    dialog.orientation = "column";
    dialog.alignChildren = ["fill", "top"];

    // Первая группа: Name and Prefix
    var nameAndPrefixPanel = dialog.add("panel", undefined, "Name and Prefix");
    nameAndPrefixPanel.orientation = "column";
    nameAndPrefixPanel.alignChildren = ["fill", "top"];

    var groupNameGroup = nameAndPrefixPanel.add("group");
    groupNameGroup.add("statictext", undefined, "Group Name:");
    var groupNameInput = groupNameGroup.add("edittext", undefined, "");
    groupNameInput.characters = 15;

    var prefixGroup = nameAndPrefixPanel.add("group");
    prefixGroup.add("statictext", undefined, "Prefix:");
    var prefixInput = prefixGroup.add("edittext", undefined, "");
    prefixInput.characters = 5;

    // Добавление чекбокса для автогенерации префикса
    var autoPrefixGroup = nameAndPrefixPanel.add("group");
    autoPrefixGroup.orientation = "row";
    autoPrefixGroup.alignChildren = ["left", "center"];
    autoPrefixGroup.add("statictext", undefined, "Auto-generate Prefix:");
    var autoPrefixCheckbox = autoPrefixGroup.add("checkbox", undefined, "");
    autoPrefixCheckbox.value = true;

    // Если автогенерация включена, отключаем ввод префикса
    prefixInput.enabled = !autoPrefixCheckbox.value;

    // Обработчик для изменения состояния чекбокса
    autoPrefixCheckbox.onClick = function() {
        prefixInput.enabled = !autoPrefixCheckbox.value;
        if (autoPrefixCheckbox.value) {
            if (containsOnlyEnglishLetters(groupNameInput.text)) {
                prefixInput.text = generateUniquePrefix(groupNameInput.text);
            } else {
                autoPrefixCheckbox.value = false;
                prefixInput.enabled = true;
                alert("Auto-prefix generation is disabled for group names containing non-English characters or special symbols.");
            }
        }
    };

    // Обработчик для изменения имени группы
    groupNameInput.onChanging = function() {
        if (autoPrefixCheckbox.value) {
            if (containsOnlyEnglishLetters(groupNameInput.text)) {
                prefixInput.text = generateUniquePrefix(groupNameInput.text);
            } else {
                autoPrefixCheckbox.value = false;
                prefixInput.enabled = true;
                prefixInput.text = "";
                alert("Auto-prefix generation is disabled for group names containing non-English characters or special symbols.");
            }
        }
    };

    var buttonsGroup = dialog.add("group");
    buttonsGroup.alignment = "center";
    var okButton = buttonsGroup.add("button", undefined, "OK");
    var cancelButton = buttonsGroup.add("button", undefined, "Cancel");

    okButton.onClick = function() {
        var groupName = groupNameInput.text;
        var prefix = prefixInput.text;

        if (groupName === "") {
            alert("Please enter a group name.");
            return;
        }

        if (prefix === "") {
            if (autoPrefixCheckbox.value) {
                prefix = generateUniquePrefix(groupName);
                prefixInput.text = prefix;
            } else {
                alert("Please enter a prefix.");
                return;
            }
        }

        createEffectGroupUI(groupName, prefix);
        dialog.close();
    };

    cancelButton.onClick = function() {
        dialog.close();
    };

    dialog.center();
    dialog.show();
}


// Назначение обработчиков для кнопок Save и Load
save_my_presets_button.onClick = function() {
    saveData();
};

load_my_presets_button.onClick = function() {
    loadData();
};

// Назначение обработчика для кнопки Clear All Panels
clear_all_panels_button.onClick = function() {
    app.beginUndoGroup("Clear All Groups and Reset Names");

// Удаление всех существующих групп слоев и сброс префиксов слоев
    for (var i = layerGroups.length - 1; i >= 0; i--) {
        var lg = layerGroups[i];

// Сброс префиксов слоев
        var comps = getAllCompositions();
        for (var c = 0; c < comps.length; c++) {
            var comp = comps[c];
            for (var l = comp.numLayers; l >= 1; l--) {
                var layer = comp.layer(l);
                if (layer.name.indexOf("[" + lg.prefix + "]") === 0) {
                    var originalName = layer.name.replace("[" + lg.prefix + "] ", "");
                    layer.name = originalName;
                }
            }
        }
        tab_layers.remove(lg.panel);
        palette.layout.layout(true);
        palette.layout.resize();
    }
    layerGroups = [];

// Удаление всех существующих групп эффектов и сброс префиксов эффектов
    for (var i = effectGroups.length - 1; i >= 0; i--) {
        var eg = effectGroups[i];
        
// Сброс префиксов эффектов
        var comps = getAllCompositions();
        for (var c = 0; c < comps.length; c++) {
            var comp = comps[c];
            for (var l = 1; l <= comp.numLayers; l++) {
                var layer = comp.layer(l);
                if (layer.property("Effects")) {
                    for (var e = layer.property("Effects").numProperties; e >=1; e--) {
                        var effect = layer.property("Effects").property(e);
                        if (effect.name.indexOf("[" + eg.prefix + "]") === 0) {
                            var originalName = effect.name.replace("[" + eg.prefix + "] ", "");
                            effect.name = originalName;
                        }
                    }
                }
            }
        }
        tab_effects.remove(eg.panel);
        palette.layout.layout(true);
        palette.layout.resize();
    }
    effectGroups = [];

    // Обновление интерфейса после удаления групп
    palette.layout.layout(true);

    app.endUndoGroup();
};

// Function to save data to a .pgm file
function saveData() {
    var saveWindow = new Window("dialog", "Save Presets and Settings Project");
    saveWindow.orientation = "column";
    saveWindow.alignChildren = ["fill", "top"];
    saveWindow.spacing = 10;
    saveWindow.margins = 15;

// Group for selecting save path
    var pathGroup = saveWindow.add("group");
    pathGroup.orientation = "row";
    pathGroup.alignChildren = ["left", "center"];
    pathGroup.add("statictext", undefined, "Save path:");
    var pathEdit = pathGroup.add("edittext", undefined, "");
    pathEdit.size = [300, 25];
    var browseButton = pathGroup.add("button", undefined, "Browse");

    browseButton.onClick = function() {
        var folder = Folder.selectDialog("Please select a folder for saving");
        if (folder) {
            pathEdit.text = folder.fsName;
        }
    };

// Group for entering file name
    var fileGroup = saveWindow.add("group");
    fileGroup.orientation = "row";
    fileGroup.alignChildren = ["left", "center"];
    fileGroup.add("statictext", undefined, "Preset Name:");
    var fileEdit = fileGroup.add("edittext", undefined, "My_Preset_Project.pgm");
    fileEdit.size = [200, 25];

// Buttons group
    var buttonsGroup = saveWindow.add("group");
    buttonsGroup.orientation = "row";
    buttonsGroup.alignChildren = ["fill", "center"];

// Export button
    var exportButton = buttonsGroup.add("button", undefined, "Export", {name: "ok"});

    exportButton.onClick = function() {
        var savePath = pathEdit.text;
        var fileName = fileEdit.text;

        if (savePath === "" || fileName === "") {
            alert("Please specify the path and file name.");
            return;
        }

        var fullPath = savePath + "/" + fileName;

        var file = new File(fullPath);
        if (file.open("w")) {
            try {
                var dataLines = [];

// Сохранение групп слоев
dataLines.push("LayerGroups:");
for (var i = 0; i < layerGroups.length; i++) {
                    var lg = layerGroups[i];
                    dataLines.push("GroupType: LayerGroup");
                    dataLines.push("Name: " + lg.name);
                    dataLines.push("Prefix: " + lg.prefix);
                    dataLines.push("LabelColorIndex: " + lg.labelColorIndex);
                    dataLines.push("DisableLabelColor: " + lg.disableLabelColor);
                    dataLines.push(""); // Пустая строка для разделения групп
                }

// Сохранение групп эффектов
                dataLines.push("EffectGroups:");
                for (var j = 0; j < effectGroups.length; j++) {
                    var eg = effectGroups[j];
                    dataLines.push("GroupType: EffectGroup");
                    dataLines.push("Name: " + eg.name);
                    dataLines.push("Prefix: " + eg.prefix);
// Добавьте другие свойства эффектов, если они есть
                    dataLines.push(""); // Пустая строка для разделения групп
                }

                var data = dataLines.join("\n");
                file.write(data);
                file.close();
                alert("Preset successfully saved.");
                saveWindow.close();
            } catch (e) {
                alert("Error saving the preset: " + e.toString());
            }
        } else {
            alert("Failed to save the Preset.");
        }
    };

// Cancel button
    var cancelButton = buttonsGroup.add("button", undefined, "Cancel", {name: "cancel"});
    cancelButton.onClick = function() {
        saveWindow.close();
    };

    saveWindow.center();
    saveWindow.show();
}

function loadData() {
    var importWindow = new Window("dialog", "Load Preset and Settings Project");
    importWindow.orientation = "column";
    importWindow.alignChildren = ["fill", "top"];
    importWindow.spacing = 10;
    importWindow.margins = 15;

// Поле для выбора файла импорта
    var fileGroup = importWindow.add("group");
    fileGroup.orientation = "row";
    fileGroup.alignChildren = ["left", "center"];
    fileGroup.add("statictext", undefined, "Preset to import:");
    var fileEdit = fileGroup.add("edittext", undefined, "");
    fileEdit.size = [300, 25];
    var browseButton = fileGroup.add("button", undefined, "Browse");

    browseButton.onClick = function() {
        var file = File.openDialog("Please select a file to import", "*.pgm");
        if (file) {
            fileEdit.text = file.fsName;
        }
    };

// Группа кнопок
    var buttonsGroup = importWindow.add("group");
    buttonsGroup.orientation = "row";
    buttonsGroup.alignChildren = ["fill", "center"];

// Кнопка Import
    var importButton = buttonsGroup.add("button", undefined, "Import", {name: "ok"});

    importButton.onClick = function() {
        var filePath = fileEdit.text;

        if (filePath === "") {
            alert("Please select a file to import.");
            return;
        }

        var file = new File(filePath);
        if (file.exists && file.open("r")) {
            try {
                var content = file.read();
                file.close();

// Разделяем содержимое файла по строкам
                var lines = content.split(/\r\n|\n|\r/);
                var currentSection = "";
                var currentGroup = {};

// Очистка существующих групп слоёв
                for (var i = layerGroups.length - 1; i >= 0; i--) {
                    var lg = layerGroups[i];
                    tab_layers.remove(lg.panel);
                }
                layerGroups = [];

// Очистка существующих групп эффектов
                for (var i = effectGroups.length - 1; i >= 0; i--) {
                    var eg = effectGroups[i];
                    tab_effects.remove(eg.panel);
                }
                effectGroups = [];

// Обновление интерфейса после удаления групп
                palette.layout.layout(true);

// Разбор файла и создание групп
                for (var i = 0; i < lines.length; i++) {
                    var line = trim(lines[i]);
                    if (line === "LayerGroups:") {
                        currentSection = "LayerGroups";
                        continue;
                    } else if (line === "EffectGroups:") {
                        currentSection = "EffectGroups";
                        continue;
                    }

                    if (currentSection === "LayerGroups") {
                        if (line.indexOf("GroupType:") === 0) {
                            currentGroup = {};
                            currentGroup.type = trim(line.split(":")[1]);
                        } else if (line.indexOf("Name:") === 0) {
                            currentGroup.name = trim(line.split(":")[1]);
                        } else if (line.indexOf("Prefix:") === 0) {
                            currentGroup.prefix = trim(line.split(":")[1]);
                        } else if (line.indexOf("LabelColorIndex:") === 0) {
                            currentGroup.labelColorIndex = parseInt(trim(line.split(":")[1]), 10);
                        } else if (line.indexOf("DisableLabelColor:") === 0) {
                            currentGroup.disableLabelColor = (trim(line.split(":")[1]).toLowerCase() === "true");
                        }
                    
// Если все поля собраны, создаём группу
                        if (currentGroup.name && currentGroup.prefix && typeof currentGroup.labelColorIndex !== 'undefined' && typeof currentGroup.disableLabelColor !== 'undefined' && currentGroup.type === "LayerGroup") {
                            createLayerGroupUI(
                                currentGroup.name,
                                currentGroup.prefix,
                                currentGroup.labelColorIndex,
                                currentGroup.disableLabelColor
                            );
                            currentGroup = {};
                        }
                    } else if (currentSection === "EffectGroups") {
                        if (line.indexOf("GroupType:") === 0) {
                            currentGroup = {};
                            currentGroup.type = trim(line.split(":")[1]);
                        } else if (line.indexOf("Name:") === 0) {
                            currentGroup.name = trim(line.split(":")[1]);
                        } else if (line.indexOf("Prefix:") === 0) {
                            currentGroup.prefix = trim(line.split(":")[1]);
                        }

// Если все поля собраны, создаём группу
                        if (currentGroup.name && currentGroup.prefix && currentGroup.type === "EffectGroup") {
                            createEffectGroupUI(
                                currentGroup.name,
                                currentGroup.prefix
                            );
                            currentGroup = {};
                        }
                    }
                }
                alert("Preset successfully loaded.");
                importWindow.close();
            } catch (e) {
                alert("Error reading the preset: " + e.toString());
            }
        } else {
            alert("The file does not exist or cannot be opened.");
        }
    };

// Кнопка Cancel
    var cancelButton = buttonsGroup.add("button", undefined, "Cancel", {name: "cancel"});
    cancelButton.onClick = function() {
        importWindow.close();
    };

    importWindow.center();
    importWindow.show();
}