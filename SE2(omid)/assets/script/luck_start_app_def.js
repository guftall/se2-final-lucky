var _______b = {
  "type": "luck_start_app",
  "message0": "%1 %2 شروع برنامه %3",
  "args0": [
    {
      "type": "field_image",
      "src": "flag.png",
      "width": 25,
      "height": 25,
      "alt": "*",
      "flipRtl": true
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "input_statement",
      "name": "INPUT_BB",
      "align": "CENTRE"
    }
  ],
  "inputsInline": false,
  "colour": 300,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['luck_start_app'] = {
  init: function() {
    this.jsonInit(_______b);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      return 'Add a number to variable "%1".'.replace('%1',
          thisBlock.getFieldValue('VAR'));
    });
  }
};
