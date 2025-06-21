import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Box } from '@react-three/drei';
import * as THREE from 'three';

const Terminal: React.FC = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const textRef = useRef<THREE.Mesh>(null);

  const terminalCommands = [
    '$ aws ec2 describe-instances --region us-east-1',
    'INSTANCE-ID       STATE    TYPE        NAME',
    'i-0abc123def456    running  t3.medium   innspark-web-01',
    'i-0def456ghi789    running  t3.large    innspark-api-01',
    '$ kubectl get pods -n innspark-cloud',
    'NAME                    READY   STATUS    RESTARTS   AGE',
    'frontend-7d4b8c9f-xyz   1/1     Running   0          2d',
    'backend-5f6g7h8i-abc    1/1     Running   0          2d',
    '$ terraform plan -var-file="production.tfvars"',
    'Plan: 12 to add, 3 to change, 0 to destroy.',
    'Changes to Outputs: + vpc_id, + subnet_ids',
    '$ docker ps',
    'CONTAINER ID   IMAGE           STATUS      PORTS',
    'abc123def456   pragma-connect  Up 2 hours  8080:80/tcp',
    '$ aws s3 ls s3://innspark-production/',
    '2024-01-15 10:30:45    1024 config.json',
    '2024-01-15 11:45:22    2048 application.jar',
    '$ prometheus --config.file=prometheus.yml',
    '[INFO] Server ready to receive web requests.',
    '$ python scheduler.py --optimize-resources',
    '[INFO] Analyzing Proxmox cluster metrics...',
    '[INFO] Optimal node selected: proxmox-node-02',
    '$ grafana-server --config=/etc/grafana/grafana.ini',
    '[INFO] HTTP Server Listen: [::]:3000',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentChar((prev) => {
        if (prev >= terminalCommands[currentLine]?.length) {
          setCurrentLine((prevLine) => 
            prevLine >= terminalCommands.length - 1 ? 0 : prevLine + 1
          );
          return 0;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [currentLine, terminalCommands]);

  const displayText = terminalCommands
    .slice(0, currentLine + 1)
    .map((line, index) => {
      if (index === currentLine) {
        return line.slice(0, currentChar) + (currentChar < line.length ? '_' : '');
      }
      return line;
    })
    .join('\n');

  return (
    <group position={[0, 1, -1.45]}>
      {/* Terminal Screen Background */}
      <Box position={[0, 0, 0.01]} args={[2.7, 1.7, 0.01]}>
        <meshStandardMaterial 
          color="#000000" 
          transparent 
          opacity={0.9}
        />
      </Box>
      
      {/* Terminal Text */}
      <Text
        ref={textRef}
        position={[-1.2, 0.6, 0.02]}
        fontSize={0.06}
        color="#00ff00"
        anchorX="left"
        anchorY="top"
        maxWidth={2.4}
        textAlign="left"
        whiteSpace="pre"
      >
        {displayText}
      </Text>

      {/* Terminal Header */}
      <Box position={[0, 0.75, 0.02]} args={[2.7, 0.2, 0.01]}>
        <meshStandardMaterial color="#1f2937" />
      </Box>
      
      {/* Terminal Buttons */}
      {[-1.1, -0.9, -0.7].map((x, index) => (
        <Box key={index} position={[x, 0.75, 0.03]} args={[0.05, 0.05, 0.01]}>
          <meshStandardMaterial 
            color={index === 0 ? '#ef4444' : index === 1 ? '#eab308' : '#22c55e'} 
          />
        </Box>
      ))}

      {/* System Stats Display */}
      <group position={[0, -0.6, 0.02]}>
        <Text
          position={[-1.2, 0, 0]}
          fontSize={0.04}
          color="#0ea5e9"
          anchorX="left"
        >
          AWS: 15 instances | Proxmox: 8 VMs | Cost: $2,340/mo (-20%) | Uptime: 99.9%
        </Text>
      </group>
    </group>
  );
};

export default Terminal;