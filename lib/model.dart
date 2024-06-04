class Message {
  final String text;
  final bool isSentByMe;
  final DateTime timestamp;

  Message(
      {required this.text, required this.isSentByMe, required this.timestamp});

  String timestampFormatted() {
    final hours = timestamp.hour.toString().padLeft(2, '0');
    final minutes = timestamp.minute.toString().padLeft(2, '0');
    return '$hours:$minutes';
  }
}
