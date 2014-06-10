// ** I18N

// Calendar EN language
// Author: Mihai Bazon, <mihai_bazon@yahoo.com>
// Encoding: any
// Distributed under the same terms as the calendar itself.

// For translators: please use UTF-8 if possible.  We strongly believe that
// Unicode is the answer to a real internationalized world.  Also please
// include your contact information in the header, as can be seen above.

// full day names
Calendar._DN = new Array
("Неделя",
 "Понеделник",
 "Вторник",
 "Сряда",
 "Четвъртък",
 "Петък",
 "Събота",
 "Неделя");

// Please note that the following array of short day names (and the same goes
// for short month names, _SMN) isn't absolutely necessary.  We give it here
// for exemplification on how one can customize the short day names, but if
// they are simply the first N letters of the full name you can simply say:
//
//   Calendar._SDN_len = N; // short day name length
//   Calendar._SMN_len = N; // short month name length
//
// If N = 3 then this is not needed either since we assume a value of 3 if not
// present, to be compatible with translation files that were written before
// this feature.

// short day names
Calendar._SDN = new Array
("Нед",
 "Пон",
 "Вт",
 "Ср",
 "Чет",
 "Пет",
 "Съб",
 "Нед");

// First day of the week. "0" means display Sunday first, "1" means display
// Monday first, etc.
Calendar._FD = 0;

// full month names
Calendar._MN = new Array
("Януари",
 "Феврурари",
 "Март",
 "Април",
 "Май",
 "Юни",
 "Юли",
 "Август",
 "Септември",
 "Октомври",
 "Ноември",
 "Декември");

// short month names
Calendar._SMN = new Array
("Ян",
 "Фев",
 "Мар",
 "Апр",
 "Май",
 "Юни",
 "Юли",
 "Авг",
 "Септ",
 "Окт",
 "Ноем",
 "Дек");

// tooltips
Calendar._TT = {};
Calendar._TT["INFO"] = "Информация за календара";

Calendar._TT["ABOUT"] =
"DHTML Date/Time Selector\n" +
"(c) dynarch.com 2002-2005 / Author: Mihai Bazon\n" + // don't translate this this ;-)
"For latest version visit: http://www.dynarch.com/projects/calendar/\n" +
"Distributed under GNU LGPL.  See http://gnu.org/licenses/lgpl.html for details." +
"\n\n" +
"Date selection:\n" +
"- Use the \xab, \xbb buttons to select year\n" +
"- Use the " + String.fromCharCode(0x2039) + ", " + String.fromCharCode(0x203a) + " buttons to select month\n" +
"- Hold mouse button on any of the above buttons for faster selection.";
Calendar._TT["ABOUT_TIME"] = "\n\n" +
"Time selection:\n" +
"- Click on any of the time parts to increase it\n" +
"- or Shift-click to decrease it\n" +
"- or click and drag for faster selection.";

Calendar._TT["PREV_YEAR"] = "Пред. година (задръж за меню)";
Calendar._TT["PREV_MONTH"] = "Пред. месец (задръж за меню)";
Calendar._TT["GO_TODAY"] = "Отиди на &quot;Днес&quot;";
Calendar._TT["NEXT_MONTH"] = "Следващ месец (задръж за меню)";
Calendar._TT["NEXT_YEAR"] = "Следваща година (задръж за меню)";
Calendar._TT["SEL_DATE"] = "Избор на дата";
Calendar._TT["DRAG_TO_MOVE"] = "Drag за преместване";
Calendar._TT["PART_TODAY"] = " (днес)";

// the following is to inform that "%s" is to be the first day of week
// %s will be replaced with the day name.
Calendar._TT["DAY_FIRST"] = "Покажи първо %s";

// This may be locale-dependent.  It specifies the week-end days, as an array
// of comma-separated numbers.  The numbers are from 0 to 6: 0 means Sunday, 1
// means Monday, etc.
Calendar._TT["WEEKEND"] = "1,6";

Calendar._TT["CLOSE"] = "Затвори";
Calendar._TT["TODAY"] = "Днес";
Calendar._TT["TIME_PART"] = "(Shift-)Клик или drag за смяна на стойността";

// date formats
Calendar._TT["DEF_DATE_FORMAT"] = "%d.%m.%Y";
Calendar._TT["TT_DATE_FORMAT"] = "%a, %b %e";

Calendar._TT["WK"] = "wk";
Calendar._TT["TIME"] = "Време:";
