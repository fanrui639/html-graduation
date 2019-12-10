layui.use(['layer', 'jquery', 'form', 'element', 'util'], function () {
    var layer = layui.layer
        , form = layui.form()
        , element = layui.element()
        , util = layui.util
        , $ = layui.jquery;


    $(function () {
        //遍历渲染
        $("select.downlist").each(function (index, item) {
            var $this = $(this);
            var $select = $this.next(".layui-form-select");
            $select.addClass("downpanel");
            var $dl = $select.find("dl");
            $(".layui-select-title input", $select).val($this.attr("placeholder"));
            $dl.empty();
            var str = "";
            $("option", $this).each(function () {
                str = ["<dd>", "<input type='checkbox' name='", $(this).val(), "' lay-skin='primary' title='", $(this).text(), "' value='true'>", "</dd>"].join("");
                $dl.append(str);
            });
            form.render("checkbox");

        })

        $(".downpanel").on("click", ".layui-select-title", function (e) {
            var $select = $(this).parents(".layui-form-select");
            $(".layui-form-select").not($select).removeClass("layui-form-selected");
            $select.addClass("layui-form-selected");
            e.stopPropagation();
        }).on("click", ".layui-form-checkbox", function (e) {
            e.stopPropagation();
        });
    });
});