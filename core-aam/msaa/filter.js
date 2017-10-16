/* jshint unused: false */

exports.excludeFile = function (file) {
    // The following tests are for features where MSAA is insufficient for
    // exposure and accessibility support is provided by IAccessible2.
    if (/aria-atomic_false-manual.html/.test(file)) return true;
    if (/aria-atomic_true-manual.html/.test(file)) return true;
    if (/aria-autocomplete_both-manual.html/.test(file)) return true;
    if (/aria-autocomplete_inline-manual.html/.test(file)) return true;
    if (/aria-autocomplete_list-manual.html/.test(file)) return true;
    if (/aria-colcount_new-manual.html/.test(file)) return true;
    if (/aria-colindex_new-manual.html/.test(file)) return true;
    if (/aria-colspan_new-manual.html/.test(file)) return true;
    if (/aria-controls-manual.html/.test(file)) return true;
    if (/aria-current_with_non-false_allowed_value_new-manual.html/.test(file)) return true;
    if (/aria-current_with_unrecognized_value_new-manual.html/.test(file)) return true;
    if (/aria-current_value_changes-manual.html/.test(file)) return true;
    if (/aria-describedby-manual.html/.test(file)) return true;
    if (/aria-details_new-manual.html/.test(file)) return true;
    if (/aria-dropeffect_copy-manual.html/.test(file)) return true;
    if (/aria-dropeffect_execute-manual.html/.test(file)) return true;
    if (/aria-dropeffect_link-manual.html/.test(file)) return true;
    if (/aria-dropeffect_move-manual.html/.test(file)) return true;
    if (/aria-dropeffect_none-manual.html/.test(file)) return true;
    if (/aria-dropeffect_popup-manual.html/.test(file)) return true;
    if (/aria-dropeffect_value_changes-manual.html/.test(file)) return true;
    if (/aria-errormessage-manual.html/.test(file)) return true;
    if (/aria-flowto-manual.html/.test(file)) return true;
    if (/aria-grabbed_false-manual.html/.test(file)) return true;
    if (/aria-grabbed_true-manual.html/.test(file)) return true;
    if (/aria-hidden_value_changes-manual.html/.test(file)) return true;
    if (/aria-invalid_false-manual.html/.test(file)) return true;
    if (/aria-invalid_grammar-manual.html/.test(file)) return true;
    if (/aria-invalid_spelling-manual.html/.test(file)) return true;
    if (/aria-invalid_true-manual.html/.test(file)) return true;
    if (/aria-invalid_value_changes-manual.html/.test(file)) return true;
    if (/aria-invalid_with_unrecognized_value_new-manual.html/.test(file)) return true;
    if (/aria-keyshortcuts_new-manual.html/.test(file)) return true;
    if (/aria-label-manual.html/.test(file)) return true;
    if (/aria-labelledby-manual.html/.test(file)) return true;
    if (/aria-live_assertive-manual.html/.test(file)) return true;
    if (/aria-live_off-manual.html/.test(file)) return true;
    if (/aria-live_polite-manual.html/.test(file)) return true;
    if (/aria-modal_false_new-manual.html/.test(file)) return true;
    if (/aria-modal_true_new-manual.html/.test(file)) return true;
    if (/aria-multiline_false-manual.html/.test(file)) return true;
    if (/aria-multiline_true-manual.html/.test(file)) return true;
    if (/aria-multiselectable_false-manual.html/.test(file)) return true;
    if (/aria-multiselectable_true-manual.html/.test(file)) return true;
    if (/aria-orientation_horizontal-manual.html/.test(file)) return true;
    if (/aria-orientation_vertical-manual.html/.test(file)) return true;
    if (/aria-orientation_undefined_new-manual.html/.test(file)) return true;
    if (/aria-owns_may_need_manual_verification-manual.html/.test(file)) return true;
    if (/aria-placeholder_new-manual.html/.test(file)) return true;
    if (/aria-posinset-manual.html/.test(file)) return true;
    if (/aria-relevant-manual.html/.test(file)) return true;
    if (/aria-required_true-manual.html/.test(file)) return true;
    if (/aria-roledescription_is_empty_or_whitespace_characters_new-manual.html/.test(file)) return true;
    if (/aria-roledescription_new-manual.html/.test(file)) return true;
    if (/aria-rowcount_new-manual.html/.test(file)) return true;
    if (/aria-rowindex_new-manual.html/.test(file)) return true;
    if (/aria-rowspan_new-manual.html/.test(file)) return true;
    if (/aria-setsize_-1_new-manual.html/.test(file)) return true;
    if (/aria-setsize_3-manual.html/.test(file)) return true;
    if (/aria-sort_ascending-manual.html/.test(file)) return true;
    if (/aria-sort_descending-manual.html/.test(file)) return true;
    if (/aria-sort_none-manual.html/.test(file)) return true;
    if (/aria-sort_other-manual.html/.test(file)) return true;
    if (/aria-valuemax-manual.html/.test(file)) return true;
    if (/aria-valuemin-manual.html/.test(file)) return true;
    if (/aria-valuenow-manual.html/.test(file)) return true;
    if (/aria-valuenow_value_changes-manual.html/.test(file)) return true;
    if (/aria-valuetext-manual.html/.test(file)) return true;
    if (/aria-valuetext_value_changes-manual.html/.test(file)) return true;
    if (/banner-manual.html/.test(file)) return true;
    if (/complementary-manual.html/.test(file)) return true;
    if (/contentinfo-manual.html/.test(file)) return true;
    if (/definition-manual.html/.test(file)) return true;
    if (/form-manual.html/.test(file)) return true;
    if (/heading-manual.html/.test(file)) return true;
    if (/log-manual.html/.test(file)) return true;
    if (/main-manual.html/.test(file)) return true;
    if (/navigation-manual.html/.test(file)) return true;
    if (/none_used_on_table_element_with_td_children_new-manual.html/.test(file)) return true;
    if (/none_used_on_ul_element_with_li_children_new-manual.html/.test(file)) return true;
    if (/note-manual.html/.test(file)) return true;
    if (/presentation_used_on_table_element_with_td_children_new-manual.html/.test(file)) return true;
    if (/presentation_used_on_ul_element_with_li_children_new-manual.html/.test(file)) return true;
    if (/region_with_an_accessible_name_new-manual.html/.test(file)) return true;
    if (/region_without_an_accessible_name_new-manual.html/.test(file)) return true;
    if (/search-manual.html/.test(file)) return true;
    if (/term_new-manual.html/.test(file)) return true;
    if (/timer-manual.html/.test(file)) return true;

    return false;
};

exports.excludeCase = function (file, name) {
    return false;
};