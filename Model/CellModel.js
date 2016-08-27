/**
 * Created by wangzhiyong on 16/8/25.
 * 列表的数据模型
 */
class CellModel {
    constructor(title, content, divider = false) {
        this.title = title;
        this.asideText = null;
        this.asideCount = null;
        this.content = content;
        this.iconCls = null;
        this.divider = divider;
    }
}
module .exports=CellModel;