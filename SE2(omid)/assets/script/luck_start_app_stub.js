Blockly.JavaScript['luck_start_app'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'INPUT_BB');
  // var remainingCode = Blockly.JavaScript.valueToCode(block, 'INPUT_BB', Blockly.JavaScript.ORDER_ADDITION) || '0';

  console.log(statements_name);
  // console.log(remainingCode);

  var code = statements_name;
  console.log(code);
  return code;;
};