import { ArrowUpRight, Cpu, Gauge, Thermometer, Activity, RotateCw, Wifi, Droplets, Hand } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ImageGallery } from "./ImageGallery";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

const projects = [
  {
    year: "2026",
    icon: Gauge,
    category: "Instrumentation",
    title: "Orifice Flowmeter for Slop Oil Line",
    description:
      "The plant needed accurate slop oil mass balance measurement at Unit 23/24. I designed and integrated an orifice flowmeter system end to end, covering P&ID review, sizing per ISO 5167 and API MPMS, hookup drawings, and DCS signal loop integration.",
    tools: ["P&ID", "ISO 5167", "API MPMS", "DCS"],
    images: ["/pertamina1.jpeg", "/pertamina2.jpeg", "/pertamina4.jpeg"],
  },
  {
    year: "2026",
    icon: Wifi,
    category: "IoT System",
    title: "IoT Based Temperature and Humidity Monitoring System",
    description:
      "Developed an IoT monitoring system utilizing an ESP microcontroller and a DHT11 sensor to transmit realtime environmental data via the MQTT protocol. Integrated Node-RED as a middleware pipeline to process MQTT topics and execute HTTP requests for secure Firebase database storage, and designed an interactive web-based dashboard using HTML, CSS, and JavaScript for realtime data visualization.",
    tools: ["ESP32", "DHT11", "MQTT", "Node-RED", "Firebase", "JavaScript"],
    images: ["/dashboard dht11.jpeg", "/dht11.jpeg"],
  },
  {
    year: "2026",
    icon: Droplets,
    category: "IoT Control",
    title: "Automated IoT Hydroponic System",
    description:
      "Developed a realtime control system using an ESP32 microcontroller programmed in C/C++ to regulate water level, temperature, and pH. Implemented a Finite State Machine and PID control algorithms for automated pH dosing using PWM peristaltic pumps. Integrated a Firebase database with a custom HTML, CSS, and JavaScript web dashboard for live data visualization and remote manual control, while utilizing the Telegram API specifically for critical system notifications.",
    tools: ["ESP32", "C/C++", "PID", "Firebase", "Telegram API", "FSM"],
    images: ["/dashboard1.png", "/dashboard2.png", "/hidroponik.jpeg", "/telegram.jpeg"],
  },
  {
    year: "2026",
    icon: Hand,
    category: "Computer Vision",
    title: "Computer Vision Based PLC Control via Modbus TCP",
    description:
      "Developed a gesture controlled system using MediaPipe computer vision to detect hand movements from a webcam. Used the Modbus TCP protocol to send write coil commands based on finger positions, controlling a Schneider PLC over a local network. Built a custom Python GUI to display live video feeds, system logs, and manual controls, ensuring smooth communication between the software and hardware.",
    tools: ["Python", "MediaPipe", "Modbus TCP", "Schneider PLC", "OpenCV"],
    images: ["/gui.png", "/modbus.jpeg"],
  },
  {
    year: "2025",
    icon: Activity,
    category: "Control System",
    title: "Automatic Water Level Control",
    description:
      "Two tanks needed to be balanced and monitored without manual intervention. I built a dual tank automatic control system using Arduino, ultrasonic sensors, and solenoid valves, all visualized through a custom LabVIEW HMI for live monitoring and operator interaction.",
    tools: ["Arduino", "LabVIEW", "Ultrasonic", "HMI"],
    images: ["/labs1.jpeg", "/level1.jpeg"],
    objectPositions: ["center 18%", "center 56%"],
  },
  {
    year: "2025",
    icon: Thermometer,
    category: "Process Control",
    title: "Automatic Heater with LabVIEW HMI",
    description:
      "This project required precise temperature regulation with two interchangeable interfaces. I developed a closed loop temperature controller using Arduino, thermocouple, and SSR, with bidirectional setpoint control across LabVIEW and Arduino IDE.",
    tools: ["Arduino", "Thermocouple", "SSR", "LabVIEW"],
    images: ["/heater1.jpg", "/heater2.jpeg"],
  },
  {
    year: "2025",
    icon: RotateCw,
    category: "Motion Control",
    title: "Servo Position Control System",
    description:
      "A demo rig needed accurate, interactive angular positioning. I built a servo position controller using Arduino paired with a Delphi based desktop interface for real time angle command and feedback.",
    tools: ["Arduino", "Delphi 7", "Servo"],
    images: ["/servo.jpeg"],
  },
  {
    year: "2024",
    icon: Cpu,
    category: "PID & PWM",
    title: "DC Motor Speed Control",
    description:
      "A motor speed needed to stay stable under varying loads. I implemented PID and PWM speed control in MATLAB Simulink integrated with Arduino, tuned for stable response across load disturbances.",
    tools: ["Simulink", "Arduino", "PID", "PWM"],
    images: ["/pid.jpeg", p3],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" aria-hidden />
      <div className="container-custom relative">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Things I've built and solved."
            description="A selection of plant, academic, and personal automation projects, focused on what was actually engineered."
          />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => {
            const isFeatured = p.featured;
            return (
              <Reveal key={p.title} delay={(i % 2) * 100}>
                <article
                  className={`group relative h-full bg-surface-elevated border border-border rounded-2xl overflow-hidden card-hover flex flex-col ${
                    isFeatured ? "md:col-span-2" : ""
                  }`}
                >
                  <div className={`relative overflow-hidden bg-secondary ${isFeatured ? "aspect-[2.4/1]" : "aspect-video"}`}>
                    <ImageGallery
                      images={p.images}
                      title={p.title}
                      className="w-full h-full"
                      objectPositions={p.objectPositions}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent pointer-events-none" />
                    {/* Top tags */}
                    <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <span className="glass rounded-md px-2.5 py-1 text-[10px] text-mono uppercase tracking-wider text-accent">
                          {p.category}
                        </span>
                        {isFeatured && (
                          <span className="rounded-md px-2.5 py-1 text-[10px] text-mono uppercase tracking-wider bg-gradient-warm text-white">
                            ★ Featured
                          </span>
                        )}
                      </div>
                      <span className="glass rounded-md px-2.5 py-1 text-[10px] text-mono">
                        {p.year}
                      </span>
                    </div>
                    {/* Icon overlay */}
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl glass grid place-items-center group-hover:scale-110 transition-spring">
                      <p.icon className="w-5 h-5 text-accent" />
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="font-display text-xl font-semibold leading-snug group-hover:text-accent transition-colors">
                        {p.title}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:rotate-12 transition-all shrink-0 mt-1" />
                    </div>

                    <div className="mb-5 flex-1">
                      <p className="text-sm text-foreground/90 leading-relaxed">{p.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                      {p.tools.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-[11px] text-mono bg-secondary/80 text-secondary-foreground rounded-md border border-border hover:border-accent/40 hover:text-accent transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
