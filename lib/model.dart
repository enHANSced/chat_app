class Message {
  final String text;
  final bool isSentByMe;
  final DateTime time;

  Message(
      {required this.text, required this.isSentByMe, required this.time});

  String timeFormatted() {
    final hours = time.hour.toString().padLeft(2, '0');
    final minutes = time.minute.toString().padLeft(2, '0');
    return '$hours:$minutes';
  }
}
