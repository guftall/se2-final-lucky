Blockly.JavaScript['lucky_varible_inc'] = function(block) {
  var variable_inc_varible = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('inc_varible'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};