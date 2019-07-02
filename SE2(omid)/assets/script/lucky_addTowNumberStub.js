Blockly.JavaScript['lucky_addtownumber'] = function(block) {
  var variable_firstvariable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('firstVariable'), Blockly.Variables.NAME_TYPE);
  var variable_secendvariable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('secendVariable'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};