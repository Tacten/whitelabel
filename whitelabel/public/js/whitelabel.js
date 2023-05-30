$(window).on('load', function() {
    frappe.after_ajax(function () {
        if (frappe.boot.whitelabel_setting.show_help_menu) {
            // $('.dropdown-help').css('display','block');
            $('.dropdown-help').attr('style', 'display: block !important');
        }
        if (frappe.boot.whitelabel_setting.logo_width) {
            $('.app-logo').css('width',frappe.boot.whitelabel_setting.logo_width+'px');
        }
        if (frappe.boot.whitelabel_setting.logo_height) {
            $('.app-logo').css('height',frappe.boot.whitelabel_setting.logo_height+'px');
        }
        if (frappe.boot.whitelabel_setting.label_weight) {
            $('.label-area, .control-label').css('font-weight',frappe.boot.whitelabel_setting.label_weight+'!important');
        }
        if (frappe.boot.whitelabel_setting.main_bg) {
            $('.content').css('background-color', frappe.boot.whitelabel_setting.main_bg);
        }
        if (frappe.boot.whitelabel_setting.main_bg) {
            $(":root, [data-theme=light]").css({"--bg-color": frappe.boot.whitelabel_setting.main_bg})
        }
        if (frappe.boot.whitelabel_setting.field_bg) {
            $(":root, [data-theme=light]").css({"--control-bg": frappe.boot.whitelabel_setting.field_bg})
        }
        if (frappe.boot.whitelabel_setting.label_colour) {
            $(":root, [data-theme=light]").css({"--text-muted": frappe.boot.whitelabel_setting.label_colour})
        }
        if (frappe.boot.whitelabel_setting.left_pane_bg) {
            $('.form-sidebar').css('background-color',frappe.boot.whitelabel_setting.left_pane_bg);
        }
        if (frappe.boot.whitelabel_setting.navbar_background_color) {
            $('.navbar').css('background-color',frappe.boot.whitelabel_setting.navbar_background_color);
        }
        if (frappe.boot.whitelabel_setting.custom_navbar_title_style && frappe.boot.whitelabel_setting.custom_navbar_title) {
            $(`<span style=${frappe.boot.whitelabel_setting.custom_navbar_title_style.replace('\n','')} class="hidden-xs hidden-sm">${frappe.boot.whitelabel_setting.custom_navbar_title}</span>`).insertAfter("#navbar-breadcrumbs");
        }
    });
});
