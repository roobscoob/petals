import { Reporter } from "../blocks";

export type PetalsValue = number
  | string
  | boolean
  | Reporter;

export enum Opcode {
  /** @type Control @type Stack / CBlock @see Scratch-VM Blocks/control: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_control.js}*/
  Repeat = "control_repeat",
  /** @type Control @type Stack / CBlock @see Scratch-VM Blocks/control: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_control.js}*/
  RepeatUntil = "control_repeat_until",
  /** @type Control @type Stack / CBlock @see Scratch-VM Blocks/control: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_control.js}*/
  While = "control_while",
  /** @type Control @type Stack / CBlock @see Scratch-VM Blocks/control: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_control.js}*/
  ForEach = "control_for_each",
  /** @type Control @type Stack / CBlock @see Scratch-VM Blocks/control: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_control.js}*/
  Forever = "control_forever",
  /** @type Control @type Stack @see Scratch-VM Blocks/control: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_control.js}*/
  Wait = "control_wait",
  /** @type Control @type Stack @see Scratch-VM Blocks/control: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_control.js}*/
  WaitUntil = "control_wait_until",
  /** @type Control @type Stack / CBlock @see Scratch-VM Blocks/control: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_control.js}*/
  If = "control_if",
  /** @type Control @type Stack / CBlock @see Scratch-VM Blocks/control: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_control.js}*/
  IfElse = "control_if_else",
  /** @type Control @type Stack / Cap @see Scratch-VM Blocks/control: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_control.js}*/
  Stop = "control_stop",
  /** @type Control @type Stack @see Scratch-VM Blocks/control: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_control.js}*/
  CreateCloneOf = "control_create_clone_of",
  /** @internal @type Control @type Reporter @see Scratch-VM Blocks/control: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_control.js}*/
  CreateCloneOfMenu = "control_create_clone_of_menu",
  /** @type Control @type Stack @see Scratch-VM Blocks/control: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_control.js}*/
  DeleteThisClone = "control_delete_this_clone",
  /** @type Control @type Stack @see Scratch-VM Blocks/control: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_control.js}*/
  IncrementCounter = "control_incr_counter",
  /** @type Control @type Stack @see Scratch-VM Blocks/control: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_control.js}*/
  ClearCounter = "control_clear_counter",
  /** @type Control @type Stack @see Scratch-VM Blocks/control: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_control.js}*/
  AllAtOnce = "control_all_at_once",
  /** @type Control @type Hat @see Scratch-VM Blocks/control: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_control.js}*/
  StartAsClone = "control_start_as_clone",
  /** @type Control @type Reporter @see Scratch-VM Blocks/control: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_control.js}*/
  GetCounter = "control_get_counter",

  /** @type Data @type Stack @see Scratch-VM Blocks/data: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_data.js}*/
  SetVariableTo = "data_setvariableto",
  /** @type Data @type Stack @see Scratch-VM Blocks/data: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_data.js}*/
  ChangeVariableBy = "data_changevariableby",
  /** @type Data @type Stack @see Scratch-VM Blocks/data: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_data.js}*/
  HideVariable = "data_hidevariable",
  /** @type Data @type Stack @see Scratch-VM Blocks/data: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_data.js}*/
  ShowVariable = "data_showvariable",
  /** @type Data @type Stack @see Scratch-VM Blocks/data: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_data.js}*/
  AddToList = "data_addtolist",
  /** @type Data @type Stack @see Scratch-VM Blocks/data: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_data.js}*/
  DeleteOfList = "data_deleteoflist",
  /** @type Data @type Stack @see Scratch-VM Blocks/data: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_data.js}*/
  DeleteAllOfList = "data_deletealloflist",
  /** @type Data @type Stack @see Scratch-VM Blocks/data: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_data.js}*/
  InsertAtList = "data_insertatlist",
  /** @type Data @type Stack @see Scratch-VM Blocks/data: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_data.js}*/
  ReplaceItemOfList = "data_replaceitemoflist",
  /** @type Data @type Stack @see Scratch-VM Blocks/data: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_data.js}*/
  HideList = "data_hidelist",
  /** @type Data @type Stack @see Scratch-VM Blocks/data: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_data.js}*/
  ShowList = "data_showlist",
  /** @type Data @type Reporter @see Scratch-VM Blocks/data: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_data.js}*/
  Variable = "data_variable",
  /** @type Data @type Reporter @see Scratch-VM Blocks/data: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_data.js}*/
  ListContents = "data_listcontents",
  /** @type Data @type Reporter @see Scratch-VM Blocks/data: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_data.js}*/
  ItemOfList = "data_itemoflist",
  /** @type Data @type Reporter @see Scratch-VM Blocks/data: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_data.js}*/
  ItemNumberOfList = "data_itemnumoflist",
  /** @type Data @type Reporter @see Scratch-VM Blocks/data: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_data.js}*/
  LengthOfList = "data_lengthoflist",
  /** @type Data @type Reporter / Boolean @see Scratch-VM Blocks/data: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_data.js}*/
  ListContainsItem = "data_listcontainsitem",

  /** @type Event @type Stack @see Scratch-VM Blocks/event: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_event.js}*/
  Broadcast = "event_broadcast",
  /** @type Event @type Stack @see Scratch-VM Blocks/event: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_event.js}*/
  BroadcastAndWait = "event_broadcastandwait",
  /** @type Event @type Hat @see Scratch-VM Blocks/event: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_event.js}*/
  WhenFlagClicked = "event_whenflagclicked",
  /** @type Event @type Hat @see Scratch-VM Blocks/event: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_event.js}*/
  WhenThisSpriteClicked = "event_whenthisspriteclicked",
  /** @type Event @type Hat @see Scratch-VM Blocks/event: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_event.js}*/
  WhenTouchingObject = "event_whenthisspriteclicked",
  /** @type Event @type Hat @see Scratch-VM Blocks/event: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_event.js}*/
  WhenStageClicked = "event_whenstageclicked",
  /** @type Event @type Hat @see Scratch-VM Blocks/event: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_event.js}*/
  WhenBackdropSwitchesTo = "event_whenbackdropswitchesto",
  /** @type Event @type Hat @see Scratch-VM Blocks/event: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_event.js}*/
  WhenGreaterThan = "event_whengreaterthan",
  /** @type Event @type Hat @see Scratch-VM Blocks/event: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_event.js}*/
  WhenBroadcastRecieved = "event_whenbroadcastrecieved",

  /** @type Looks @type Stack @see Scratch-VM Blocks/looks: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_looks.js}*/
  Say = "looks_say",
  /** @type Looks @type Stack @see Scratch-VM Blocks/looks: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_looks.js}*/
  SayForSeconds = "looks_sayforsecs",
  /** @type Looks @type Stack @see Scratch-VM Blocks/looks: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_looks.js}*/
  Think = "looks_think",
  /** @type Looks @type Stack @see Scratch-VM Blocks/looks: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_looks.js}*/
  ThinkForSeconds = "looks_thinkforsecs",
  /** @type Looks @type Stack @see Scratch-VM Blocks/looks: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_looks.js}*/
  Show = "looks_show",
  /** @type Looks @type Stack @see Scratch-VM Blocks/looks: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_looks.js}*/
  Hide = "looks_hide",
  /** @type Looks @type Stack @see Scratch-VM Blocks/looks: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_looks.js}*/
  HideAllSprites = "looks_hideallsprites",
  /** @internal @type Looks @type Stack @see Scratch-VM Blocks/looks: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_looks.js}*/
  SwitchCostumeToMenu = "looks_switchcostumetomenu",
  /** @type Looks @type Stack @see Scratch-VM Blocks/looks: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_looks.js}*/
  SwitchCostumeTo = "looks_switchcostumeto",
  /** @internal @type Looks @type Stack @see Scratch-VM Blocks/looks: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_looks.js}*/
  SwitchBackdropToMenu = "looks_switchbackdroptomenu",
  /** @type Looks @type Stack @see Scratch-VM Blocks/looks: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_looks.js}*/
  SwitchBackdropTo = "looks_switchbackdropto",
  /** @type Looks @type Stack @see Scratch-VM Blocks/looks: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_looks.js}*/
  SwitchBackdropToAndWait = "looks_switchbackdroptoandwait",
  /** @type Looks @type Stack @see Scratch-VM Blocks/looks: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_looks.js}*/
  NextCostume = "looks_nextcostume",
  /** @type Looks @type Stack @see Scratch-VM Blocks/looks: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_looks.js}*/
  NextBackdrop = "looks_nextbackdrop",
  /** @type Looks @type Stack @see Scratch-VM Blocks/looks: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_looks.js}*/
  ChangeGraphicEffectBy = "looks_changeeffectby",
  /** @type Looks @type Stack @see Scratch-VM Blocks/looks: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_looks.js}*/
  SetGraphicEffectTo = "looks_seteffectto",
  /** @type Looks @type Stack @see Scratch-VM Blocks/looks: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_looks.js}*/
  ClearGraphicEffects = "looks_cleargraphiceffects",
  /** @type Looks @type Stack @see Scratch-VM Blocks/looks: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_looks.js}*/
  ChangeSizeBy = "looks_changesizeby",
  /** @type Looks @type Stack @see Scratch-VM Blocks/looks: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_looks.js}*/
  SetSizeTo = "looks_setsizeto",
  /** @type Looks @type Stack @see Scratch-VM Blocks/looks: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_looks.js}*/
  ChangeStretchBy = "looks_changestretchby",
  /** @type Looks @type Stack @see Scratch-VM Blocks/looks: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_looks.js}*/
  SetStretchTo = "looks_setstretchto",
  /** @type Looks @type Stack @see Scratch-VM Blocks/looks: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_looks.js}*/
  GoToFrontBack = "looks_gotofrontback",
  /** @type Looks @type Stack @see Scratch-VM Blocks/looks: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_looks.js}*/
  GoForwardBackwardLayers = "looks_goforwardbackwardlayers",
  /** @type Looks @type Reporter @see Scratch-VM Blocks/looks: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_looks.js}*/
  Size = "looks_size",
  /** @type Looks @type Reporter @see Scratch-VM Blocks/looks: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_looks.js}*/
  CostumeNumberName = "looks_costumenumbername",
  /** @type Looks @type Reporter @see Scratch-VM Blocks/looks: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_looks.js}*/
  BackdropNumberName = "looks_backdropnumbername",

  /** @type Motion @type Stack @see Scratch-VM Blocks/motion: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_motion.js}*/
  MoveSteps = "motion_movesteps",
  /** @type Motion @type Stack @see Scratch-VM Blocks/motion: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_motion.js}*/
  GotoXY = "motion_gotoxy",
  /** @internal @type Motion @type Stack @see Scratch-VM Blocks/motion: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_motion.js}*/
  GotoMenu = "motion_gotomenu",
  /** @type Motion @type Stack @see Scratch-VM Blocks/motion: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_motion.js}*/
  Goto = "motion_goto",
  /** @type Motion @type Stack @see Scratch-VM Blocks/motion: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_motion.js}*/
  TurnRight = "motion_turnright",
  /** @type Motion @type Stack @see Scratch-VM Blocks/motion: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_motion.js}*/
  TurnLeft = "motion_turnleft",
  /** @type Motion @type Stack @see Scratch-VM Blocks/motion: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_motion.js}*/
  PointInDirection = "motion_pointindirection",
  /** @internal @type Motion @type Stack @see Scratch-VM Blocks/motion: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_motion.js}*/
  PointTowardsMenu = "motion_pointtowardsmenu",
  /** @type Motion @type Stack @see Scratch-VM Blocks/motion: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_motion.js}*/
  PointTowards = "motion_pointtowards",
  /** @type Motion @type Stack @see Scratch-VM Blocks/motion: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_motion.js}*/
  GlideSecsToXY = "motion_glidesecstoxy",
  /** @type Motion @type Stack @see Scratch-VM Blocks/motion: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_motion.js}*/
  GlideTo = "motion_glideto",
  /** @type Motion @type Stack @see Scratch-VM Blocks/motion: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_motion.js}*/
  IfOnEdgeBounce = "motion_ifonedgebounce",
  /** @type Motion @type Stack @see Scratch-VM Blocks/motion: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_motion.js}*/
  SetRotationStyle = "motion_setrotationstyle",
  /** @type Motion @type Stack @see Scratch-VM Blocks/motion: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_motion.js}*/
  ChangeXBy = "motion_changexby",
  /** @type Motion @type Stack @see Scratch-VM Blocks/motion: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_motion.js}*/
  SetX = "motion_setx",
  /** @type Motion @type Stack @see Scratch-VM Blocks/motion: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_motion.js}*/
  ChangeYBy = "motion_changeyby",
  /** @type Motion @type Stack @see Scratch-VM Blocks/motion: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_motion.js}*/
  SetY = "motion_sety",
  /** @type Motion @type Reporter @see Scratch-VM Blocks/motion: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_motion.js}*/
  XPosition = "motion_xposition",
  /** @type Motion @type Reporter @see Scratch-VM Blocks/motion: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_motion.js}*/
  YPosition = "motion_yposition",
  /** @type Motion @type Reporter @see Scratch-VM Blocks/motion: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_motion.js}*/
  Direction = "motion_direction",
  /** @type Motion @type Reporter @see Scratch-VM Blocks/motion: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_motion.js}*/
  XScroll = "motion_xscroll",
  /** @type Motion @type Reporter @see Scratch-VM Blocks/motion: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_motion.js}*/
  YScroll = "motion_yscroll",

  /** @type Operator @type Reporter @see Scratch-VM Blocks/operator: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_operators.js}*/
  Add = "operator_add",
  /** @type Operator @type Reporter @see Scratch-VM Blocks/operator: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_operators.js}*/
  Subtract = "operator_subtract",
  /** @type Operator @type Reporter @see Scratch-VM Blocks/operator: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_operators.js}*/
  Multiply = "operator_multiply",
  /** @type Operator @type Reporter @see Scratch-VM Blocks/operator: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_operators.js}*/
  Divide = "operator_divide",
  /** @type Operator @type Reporter / Boolean @see Scratch-VM Blocks/operator: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_operators.js}*/
  LessThan = "operator_lt",
  /** @type Operator @type Reporter / Boolean @see Scratch-VM Blocks/operator: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_operators.js}*/
  Equals = "operator_equals",
  /** @type Operator @type Reporter / Boolean @see Scratch-VM Blocks/operator: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_operators.js}*/
  GreaterThan = "operator_gt",
  /** @type Operator @type Reporter / Boolean @see Scratch-VM Blocks/operator: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_operators.js}*/
  And = "operator_and",
  /** @type Operator @type Reporter / Boolean @see Scratch-VM Blocks/operator: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_operators.js}*/
  Or = "operator_or",
  /** @type Operator @type Reporter / Boolean @see Scratch-VM Blocks/operator: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_operators.js}*/
  Not = "operator_not",
  /** @type Operator @type Reporter @see Scratch-VM Blocks/operator: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_operators.js}*/
  Random = "operator_random",
  /** @type Operator @type Reporter @see Scratch-VM Blocks/operator: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_operators.js}*/
  Join = "operator_join",
  /** @type Operator @type Reporter @see Scratch-VM Blocks/operator: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_operators.js}*/
  LetterOf = "operator_letter_of",
  /** @type Operator @type Reporter @see Scratch-VM Blocks/operator: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_operators.js}*/
  Length = "operator_length",
  /** @type Operator @type Reporter / Boolean @see Scratch-VM Blocks/operator: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_operators.js}*/
  Contains = "operator_contains",
  /** @type Operator @type Reporter @see Scratch-VM Blocks/operator: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_operators.js}*/
  Modulo = "operator_mod",
  /** @type Operator @type Reporter @see Scratch-VM Blocks/operator: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_operators.js}*/
  Round = "operator_round",
  /** @type Operator @type Reporter @see Scratch-VM Blocks/operator: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_operators.js}*/
  MathOperation = "operator_mathop",

  /** @type Procedures @type Hat @see Scratch-VM Blocks/procedures: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_procedures.js}*/
  ProcedureDefinition = "procedures_definition",
  /** @type Procedures @type Stack @see Scratch-VM Blocks/procedures: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_procedures.js}*/
  ProcedureCall = "procedures_call",
  /** @type Procedures @type Reporter @see Scratch-VM Blocks/procedures: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_procedures.js}*/
  ProcedureStringNumberArgument = "argument_reporter_string_number",
  /** @type Procedures @type Reporter / Boolean @see Scratch-VM Blocks/procedures: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_procedures.js}*/
  ProcedureBooleanArgument = "argument_reporter_boolean",

  /** @type Sensing @type Stack @see Scratch-VM Blocks/sensing: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_sensing.js}*/
  ResetTimer = "sensing_resettimer",
  /** @type Sensing @type Stack @see Scratch-VM Blocks/sensing: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_sensing.js}*/
  SetDragMode = "sensing_setdragmode",
  /** @type Sensing @type Stack @see Scratch-VM Blocks/sensing: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_sensing.js}*/
  AskAndWait = "sensing_askandwait",
  /** @type Sensing @type Reporter / Boolean @see Scratch-VM Blocks/sensing: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_sensing.js}*/
  TouchingObject = "sensing_touchingobject",
  /** @type Sensing @type Reporter / Boolean @see Scratch-VM Blocks/sensing: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_sensing.js}*/
  TouchingColor = "sensing_touchingcolor",
  /** @type Sensing @type Reporter / Boolean @see Scratch-VM Blocks/sensing: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_sensing.js}*/
  ColorIsTouchingColor = "sensing_coloristouchingcolor",
  /** @type Sensing @type Reporter @see Scratch-VM Blocks/sensing: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_sensing.js}*/
  DistanceTo = "sensing_distanceto",
  /** @type Sensing @type Reporter @see Scratch-VM Blocks/sensing: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_sensing.js}*/
  Timer = "sensing_timer",
  /** @type Sensing @type Reporter @see Scratch-VM Blocks/sensing: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_sensing.js}*/
  BackdropNumberOfSprite = "sensing_of",
  /** @type Sensing @type Reporter @see Scratch-VM Blocks/sensing: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_sensing.js}*/
  MouseX = "sensing_mousex",
  /** @type Sensing @type Reporter @see Scratch-VM Blocks/sensing: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_sensing.js}*/
  MouseY = "sensing_mousey",
  /** @type Sensing @type Reporter / Boolean @see Scratch-VM Blocks/sensing: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_sensing.js}*/
  MouseDown = "sensing_mousedown",
  /** @type Sensing @type Reporter / Boolean @see Scratch-VM Blocks/sensing: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_sensing.js}*/
  KeyPressed = "sensing_keypressed",
  /** @type Sensing @type Reporter @see Scratch-VM Blocks/sensing: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_sensing.js}*/
  Current = "sensing_current",
  /** @type Sensing @type Reporter @see Scratch-VM Blocks/sensing: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_sensing.js}*/
  DaysSince2000 = "sensing_dayssince2000",
  /** @type Sensing @type Reporter @see Scratch-VM Blocks/sensing: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_sensing.js}*/
  Loudness = "sensing_loudness",
  /** @type Sensing @type Reporter / Boolean @see Scratch-VM Blocks/sensing: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_sensing.js}*/
  Loud = "sensing_loud",
  /** @type Sensing @type Reporter @see Scratch-VM Blocks/sensing: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_sensing.js}*/
  Answer = "sensing_answer",
  /** @type Sensing @type Reporter @see Scratch-VM Blocks/sensing: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_sensing.js}*/
  Username = "sensing_username",
  /** @type Sensing @type Reporter @see Scratch-VM Blocks/sensing: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_sensing.js}*/
  UserId = "sensing_userid",

  /** @type Sound @type Reporter @see Scratch-VM Blocks/sound: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_sound.js}*/
  Volume = "sound_volume",
  /** @type Sound @type Stack @see Scratch-VM Blocks/sound: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_sound.js}*/
  Play = "sound_play",
  /** @type Sound @type Stack @see Scratch-VM Blocks/sound: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_sound.js}*/
  PlayUntilDone = "sound_playuntildone",
  /** @type Sound @type Stack @see Scratch-VM Blocks/sound: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_sound.js}*/
  StopAllSounds = "sound_stopallsounds",
  /** @type Sound @type Stack @see Scratch-VM Blocks/sound: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_sound.js}*/
  SetAuditoryEffectTo = "sound_seteffectto",
  /** @type Sound @type Stack @see Scratch-VM Blocks/sound: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_sound.js}*/
  ChangeAuditoryEffectBy = "sound_changeeffectby",
  /** @type Sound @type Stack @see Scratch-VM Blocks/sound: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_sound.js}*/
  ClearAuditoryEffects = "sound_cleareffects",
  /** @type Sound @type Stack @see Scratch-VM Blocks/sound: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_sound.js}*/
  SetVolumeTo = "sound_setvolumeto",
  /** @type Sound @type Stack @see Scratch-VM Blocks/sound: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_sound.js}*/
  ChangeVolumeBy = "sound_changevolumeby",
}
