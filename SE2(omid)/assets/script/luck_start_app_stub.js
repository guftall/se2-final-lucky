Blockly.JavaScript['luck_start_app'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'INPUT_BB');
  // var remainingCode = Blockly.JavaScript.valueToCode(block, 'INPUT_BB', Blockly.JavaScript.ORDER_ADDITION) || '0';

  console.log(statements_name);

  document.s = statements_name;

  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};