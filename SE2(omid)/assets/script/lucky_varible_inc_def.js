Blockly.Blocks['lucky_varible_inc'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldVariable("item"), "inc_varible")
        .appendField("+")
        .appendField("1");
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};