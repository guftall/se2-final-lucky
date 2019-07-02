Blockly.Blocks['lucky_addtownumber'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldVariable("item"), "firstVariable")
        .appendField("+")
        .appendField(new Blockly.FieldVariable("item"), "secendVariable");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(38);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};