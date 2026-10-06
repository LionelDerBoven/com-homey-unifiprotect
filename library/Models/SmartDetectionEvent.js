'use strict';

class SmartDetectionEvent {

  constructor(detectionTime, detectionTypes, detectionScore, detectionEventId, kind = 'smart') {
    this.detectionTime = detectionTime;
    this.detectionTypes = detectionTypes;
    this.detectionScore = detectionScore;
    this.detectionEventId = detectionEventId;
    // 'smart' (visual) or 'audio'; both share the per-device event store.
    this.kind = kind;
    this.zones = '';
    this.zoneIds = [];
    // Zones the object is in right now (null until a frame says), as opposed to the last zones it was in
    this.currentZoneIds = null;
    this.endTime = null;
    this.endedFired = false;
    // Types already triggered for this event, so each fires once (no flood).
    this.triggered = new Set();
  }

}

module.exports = SmartDetectionEvent;
