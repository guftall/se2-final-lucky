Blockly.JavaScript['lucky_addtownumber'] = function(block) {
  var variable_firstvariable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('firstVariable'), Blockly.Variables.NAME_TYPE);
  var variable_secendvariable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('secendVariable'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.

  document.omid1 = {};
  document.omid2 = {};
  document.omid1[variable_firstvariable] = NaN;
  document.omid2[variable_firstvariable] = NaN;
  console.log('SUCCESS');
  var code = `${variable_firstvariable} + ${variable_secendvariable}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};