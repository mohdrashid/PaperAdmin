$(function () {
  $('#hover, #striped, #condensed').click(function () {
    var classes = 'table';

    if ($('#hover').prop('checked')) {
      classes += ' table-hover';
    }
    if ($('#condensed').prop('checked')) {
      classes += ' table-condensed';
    }
    $('#table-style').bootstrapTable('destroy')
      .bootstrapTable({
        classes: classes,
        striped: $('#striped').prop('checked')
      });
  });
});

function rowStyle(row, index) {
  var classes = ['active', 'success', 'info', 'warning', 'danger'];

  if (index % 2 === 0 && index / 2 < classes.length) {
    return {
      classes: classes[index / 2]
    };
  }
  return {};
}
